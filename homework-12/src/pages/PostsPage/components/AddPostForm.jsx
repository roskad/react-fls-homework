function AddPostForm({ title, body, authorId, setTitle, setBody, setAuthorId, handleAddPost }) {
	return (
		<div className="container">
			<div className="mb-6 p-6 bg-gray-200 rounded-lg shadow-lg border border-gray-200">
				<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Додати новий пост</h2>

				<div className="space-y-4">
					<div>
						<label className="block text-sm font-semibold text-gray-900 mb-2">Заголовок:</label>
						<input type="text" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition duration-200 text-gray-900" placeholder="Введіть заголовок поста" value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>

					<div>
						<label className="block text-sm font-semibold text-gray-900 mb-2">Текст:</label>
						<textarea rows="4" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition duration-200 resize-vertical text-gray-900" placeholder="Введіть текст поста" value={body} onChange={(e) => setBody(e.target.value)} />
					</div>

					<div>
						<label className="block text-sm font-semibold text-gray-900 mb-2">Автор:</label>
						<input type="text" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition duration-200 text-gray-900" placeholder="Введіть ім'я автора" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
					</div>

					<button onClick={handleAddPost} className="w-full font-medium py-2 px-4 rounded-md transition transform focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2">
						Створити пост
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddPostForm;
