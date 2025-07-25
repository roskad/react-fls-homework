import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useGetPostByIdQuery, useUpdatePostMutation, useAddPostMutation } from "../api/postsApi";

const PostEditPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const isEdit = Boolean(id);

	const {
		data: post,
		isLoading,
		isError,
	} = useGetPostByIdQuery(id, {
		skip: !isEdit,
	});
	const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
	const [addPost, { isLoading: isAdding }] = useAddPostMutation();

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	useEffect(() => {
		if (isEdit && post) {
			setTitle(post.title || "");
			setBody(post.body || "");
		}
		if (!isEdit) {
			setTitle("");
			setBody("");
		}
	}, [isEdit, post]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isEdit) {
				await updatePost({
					id,
					title,
					body,
					likesNumber: post.likesNumber,
					dislikesNumber: post.dislikesNumber,
					publicationDate: post.publicationDate,
					userId: post.userId,
				}).unwrap();
			} else {
				await addPost({
					title,
					body,
					likesNumber: 0,
					dislikesNumber: 0,
					publicationDate: new Date().toISOString(),
					userId: 1,
				}).unwrap();
			}
			navigate("/posts");
		} catch (err) {
			alert("Помилка збереження поста");
		}
	};

	if (isEdit && isLoading) return <p>Завантаження...</p>;
	if (isEdit && isError) return <p>Помилка завантаження поста</p>;
	if (isEdit && !post) return <p>Пост не знайдено</p>;

	return (
		<div className="max-w-xl mx-auto mt-8">
			<h2 className="text-2xl mb-4">{isEdit ? "Редагувати пост" : "Додати новий пост"}</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<label>
					Заголовок:
					<input className="border rounded px-2 py-1 w-full" value={title} onChange={(e) => setTitle(e.target.value)} required />
				</label>
				<label>
					Текст:
					<textarea className="border rounded px-2 py-1 w-full" value={body} onChange={(e) => setBody(e.target.value)} rows={6} required />
				</label>
				<button type="submit" disabled={isUpdating || isAdding}>
					{isUpdating || isAdding ? "Збереження..." : isEdit ? "Зберегти" : "Додати"}
				</button>
			</form>
		</div>
	);
};

export default PostEditPage;
