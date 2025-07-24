import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { createPost, deletePost, fetchPosts } from "@/store/postsThunks";
import { setCurrentPage, setPostsPerPage } from "@/store/postsSlice";
import { useEffect, useState } from "react";
import PaginationBlock from "./components/PaginationBlock";
import AddPostForm from "./components/AddPostForm";
import PostsPerPage from "./components/PostsPerPage";

function PostsPage() {
	const { postsList, currentPageNumber, postsNumberPerPage, totalPagesNumber, status, error } = useSelector((state) => state.posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			fetchPosts({
				pageNumber: currentPageNumber,
				itemsPerPage: postsNumberPerPage,
				shouldReplace: true,
			})
		);
	}, [dispatch, currentPageNumber, postsNumberPerPage]);

	const onPageChange = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
	};

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [authorId, setAuthorId] = useState("");

	const getRandomNumber = (from, to) => Math.floor(Math.random() * to) + from;

	const handleAddPost = () => {
		dispatch(
			createPost({
				title,
				body,
				authorId,
				likesNumber: getRandomNumber(1, 100),
				dislikesNumber: getRandomNumber(1, 50),
				createdAt: new Date().toString(),
			})
		).then(() => {
			dispatch(setCurrentPage(1));
			dispatch(
				fetchPosts({
					pageNumber: 1,
					itemsPerPage: postsNumberPerPage,
					shouldReplace: true,
				})
			);
		});

		setTitle("");
		setBody("");
		setAuthorId("");
	};

	const handleDeletePost = (id) => {
		const isLastPostOnPage = postsList.length === 1;
		const isNotFirstPage = currentPageNumber > 1;

		dispatch(deletePost(id)).then(() => {
			if (isLastPostOnPage && isNotFirstPage) {
				dispatch(setCurrentPage(1));
				dispatch(
					fetchPosts({
						pageNumber: 1,
						itemsPerPage: postsNumberPerPage,
						shouldReplace: true,
					})
				);
			} else {
				dispatch(
					fetchPosts({
						pageNumber: currentPageNumber,
						itemsPerPage: postsNumberPerPage,
						shouldReplace: true,
					})
				);
			}
		});
	};

	const handlePostsPerPageChange = (e) => {
		const newPerPage = Number(e.target.value);
		dispatch(setPostsPerPage(newPerPage));
		dispatch(setCurrentPage(1));
		dispatch(
			fetchPosts({
				pageNumber: 1,
				itemsPerPage: newPerPage,
			})
		);
	};

	return (
		<>
			<AddPostForm title={title} setTitle={setTitle} body={body} setBody={setBody} authorId={authorId} setAuthorId={setAuthorId} handleAddPost={handleAddPost} />
			<PostsPerPage postsPerPage={postsNumberPerPage} handlePostsPerPageChange={handlePostsPerPageChange} />
			<PostsList postsList={postsList} handleDeletePost={handleDeletePost} />

			{status === "loading" && (
				<div className="flex justify-center items-center mb-3">
					<div className="w-6 h-6 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
				</div>
			)}

			{status === "failed" ? <div>{error}</div> : null}

			<PaginationBlock currentPageNumber={currentPageNumber} totalPagesNumber={totalPagesNumber} onPageChange={onPageChange} />
		</>
	);
}

export default PostsPage;
