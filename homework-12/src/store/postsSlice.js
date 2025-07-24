import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postsThunks'

const initialState = {
  postsList: [],
  currentPageNumber: 1,
  postsNumberPerPage: 5,
  totalPagesNumber: 1,
  status: 'idle',
  error: null,
}

export const postsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPageNumber = action.payload
    },
    setPostsPerPage: (state, action) => {
      state.postsNumberPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";

        const newPosts = action.payload.items;
        const paginationData = action.payload.pagination;
        const shouldReplace = action.payload.shouldReplace;

        if (shouldReplace || paginationData.currentPage === 1) {
          state.postsList = newPosts;
        } else {
          state.postsList = [
            ...state.postsList,
            ...newPosts.filter(
              (post) => !state.postsList.some((existing) => existing.id === post.id)
            ),
          ];
        }

        state.currentPageNumber = paginationData.currentPage;
        state.postsNumberPerPage = paginationData.pageSize;
        state.totalPagesNumber = paginationData.totalPages;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage, setPostsPerPage } = postsSlice.actions

export default postsSlice.reducer
