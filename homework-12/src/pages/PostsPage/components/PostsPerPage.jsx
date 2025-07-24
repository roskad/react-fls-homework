function PostsPerPage({ postsPerPage, handlePostsPerPageChange }) {
	return (
		<div className="container">
			<div className="mb-4">
				<label>
					Постів на сторінці:
					<select id="postsPerPage" value={postsPerPage} onChange={handlePostsPerPageChange} className="ml-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-500 focus:bg-blue-50 focus:outline-none transition">
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={15}>15</option>
					</select>
				</label>
			</div>
		</div>
	);
}

export default PostsPerPage;
