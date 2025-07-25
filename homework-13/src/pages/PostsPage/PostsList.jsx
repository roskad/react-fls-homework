import React, { useState } from "react";
import { useGetPostsPQuery, useDeletePostMutation, useLikePostMutation, useDislikePostMutation } from "../../api/postsApi";
import { useNavigate } from "react-router";

const PostsList = ({ onSelect, selectedPostId }) => {
	const [page, setPage] = useState(1);
	const { data, isLoading, isError, isFetching } = useGetPostsPQuery({
		page,
		limit: 5,
	});

	const [deletePost] = useDeletePostMutation();
	const [likePost] = useLikePostMutation();
	const [dislikePost] = useDislikePostMutation();

	const navigate = useNavigate();

	if (isLoading) return <p className="my-5">Завантаження...</p>;
	if (isError) return <p className="my-5">Помилка завантаження постів</p>;

	const { items, totalPages, remaining } = data;

	return (
		<div>
			<ul className="flex flex-col gap-5">
				{items.map((post) => (
					<li key={post.id} className="pb-2 border-b border-gray-400">
						<p className="mb-2 text-lg ">
							<strong>{post.title}</strong>
						</p>
						<div className="flex flex-wrap gap-3 justify-between">
							<div className="flex gap-2">
								Лайки: {post.likesNumber} <button onClick={() => likePost(post.id)}>👍</button> Дислайки: {post.dislikesNumber} <button onClick={() => dislikePost(post.id)}>👎</button>
							</div>
							<div className="flex gap-2">
								<button onClick={() => onSelect(post.id)}>{selectedPostId === post.id ? "Приховати" : "Деталі"}</button>
								<button onClick={() => navigate(`/posts/edit/${post.id}`)}>Редагувати</button>
								<button
									onClick={() => {
										if (window.confirm("Видалити пост?")) deletePost(post.id);
									}}
								>
									Видалити
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			{isFetching && (
				<div className="absolute top-1/2 left-1/2 flex justify-center items-center mb-3">
					<div className="w-6 h-6 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
				</div>
			)}
			<hr />
			<div className="flex flex-wrap items-center gap-2 my-5">
				<button
					onClick={() => setPage((p) => Math.max(p - 1, 1))}
					disabled={page === 1}
					className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${page === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"}
          `}
				>
					Попередня
				</button>
				{[...Array(totalPages)].map((_, i) => (
					<button
						key={i}
						onClick={() => setPage(i + 1)}
						className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${page === i + 1 ? "bg-[var(--accent)] text-white" : "bg-white hover:bg-gray-200 text-gray-700 border-gray-300"}
          `}
					>
						{i + 1}
					</button>
				))}
				<button
					onClick={() => setPage((p) => (remaining > 0 ? p + 1 : p))}
					disabled={remaining === 0}
					className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${remaining === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"}
          `}
				>
					Наступна
				</button>
			</div>
		</div>
	);
};

export default PostsList;
