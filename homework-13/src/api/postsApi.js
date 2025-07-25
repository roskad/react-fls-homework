import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://posts-backend-48o1.onrender.com' }),
  tagTypes: ['Post', 'Posts'],
  endpoints: (build) => ({
    // Список постів з пагінацією (build.query)
    getPostsP: build.query({
      query: ({ page = 1, limit = 10 }) =>
        `/posts?_page=${page}&_limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
            ...result.items.map(({ id }) => ({ type: 'Post', id })),
            { type: 'Posts', id: 'LIST' },
          ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),

    // Деталі поста
    getPostById: build.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),

    // Нескінченне завантаження (build.infiniteQuery)
    getPosts: build.infiniteQuery({
      query: ({ pageParam = 1 }) => `/posts?_page=${pageParam}&_limit=20`,
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) =>
          lastPage.remaining > 0 ? allPages.length + 1 : undefined,
      },
      providesTags: (result) =>
        result
          ? [
            ...result.pages.flatMap((page) =>
              page.items.map(({ id }) => ({ type: 'Post', id }))
            ),
            { type: 'Posts', id: 'LIST' },
          ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),

    // Видалити пост
    deletePost: build.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Posts', id: 'LIST' },
        { type: 'Post', id },
      ],
    }),

    // Лайк поста
    likePost: build.mutation({
      query: (id) => ({
        url: `/posts/${id}/like`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),

    // Дислайк поста
    dislikePost: build.mutation({
      query: (id) => ({
        url: `/posts/${id}/dislike`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
    }),

    // Додати новий пост
    addPost: build.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    // Оновити пост
    updatePost: build.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: updatedPost,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Post', id },
        { type: 'Posts', id: 'LIST' },
      ],
    }),
  })
})

export const {
  useGetPostsPQuery,
  useGetPostByIdQuery,
  useGetPostsInfiniteQuery,
  useDeletePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
  useAddPostMutation,
  useUpdatePostMutation
} = postsApi
