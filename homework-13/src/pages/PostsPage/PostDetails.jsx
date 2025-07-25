import React from "react";
import { useGetPostByIdQuery } from "../../api/postsApi";

const PostDetails = ({ postId }) => {
	const {
		data: post,
		isLoading,
		isError,
	} = useGetPostByIdQuery(postId, {
		skip: !postId,
	});

	if (!postId) return <p className="my-5">Оберіть пост, щоб побачити деталі.</p>;
	if (isLoading) return <p className="my-5">Завантаження деталей...</p>;
	if (isError) return <p className="my-5">Помилка завантаження деталей.</p>;

	return (
		<div className="border border-gray-400 my-5 p-4">
			<h3 className="text-xl text-center">{post.title}</h3>
			<div className="flex flex-wrap justify-between gap-3 mb-2">
				<p className="text-xs">Дата публікації: {new Date(post.publicationDate).toLocaleString()}</p>
				<p className="text-xs">ID: {post.id}</p>
			</div>
			<div className="flex flex-wrap gap-3">
				<p>Лайки: {post.likesNumber}</p>
				<p>Дислайки: {post.dislikesNumber}</p>
			</div>
			<p className="mt-2">{post.body || "Без опису"}</p>
		</div>
	);
};

export default PostDetails;
