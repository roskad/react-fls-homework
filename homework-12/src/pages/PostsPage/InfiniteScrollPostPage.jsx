import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import { useEffect, useRef } from "react";
import { fetchPosts } from "@/store/postsThunks";
import { setCurrentPage } from "@/store/postsSlice";

function InfiniteScrollPostPage() {
	const { postsList, currentPageNumber, postsNumberPerPage, totalPagesNumber, status, error } = useSelector((state) => state.posts);

	const dispatch = useDispatch();
	const isFetching = useRef(false);

	useEffect(() => {
		if (status === "idle" || status === "success") {
			dispatch(
				fetchPosts({
					pageNumber: currentPageNumber,
					itemsPerPage: postsNumberPerPage,
					shouldReplace: false,
				})
			);
		}
	}, [dispatch, currentPageNumber, postsNumberPerPage]);

	useEffect(() => {
		const handleScroll = () => {
			const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

			if (isBottom && !isFetching.current && status === "success" && currentPageNumber < totalPagesNumber) {
				isFetching.current = true;
				dispatch(setCurrentPage(currentPageNumber + 1));
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [status, currentPageNumber, totalPagesNumber, dispatch]);

	useEffect(() => {
		if (status === "success" || status === "failed") {
			isFetching.current = false;
		}
	}, [status]);

	return (
		<>
			<PostsList postsList={postsList} />
			{status === "loading" && (
				<div className="flex justify-center items-center">
					<div className="w-6 h-6 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
				</div>
			)}
			{status === "failed" && <div>{error}</div>}
		</>
	);
}

export default InfiniteScrollPostPage;
