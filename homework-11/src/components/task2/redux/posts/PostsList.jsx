import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";

export default function PostsList() {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPosts(10));
	}, [dispatch]);

	return (
		<div className="max-w-xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-4 text-center">Список постів</h2>

			{status === "loading" && (
				<div className="flex justify-center items-center py-10">
					<div className="w-10 h-10 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
				</div>
			)}

			{status === "failed" && <p className="text-red-400">Помилка: {error}</p>}

			{status === "succeeded" && (
				<ul className="divide-y border rounded">
					{items.map((post) => (
						<li key={post.id} className="px-4 py-2 hover:bg-gray-700 transition-colors">
							{post.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
