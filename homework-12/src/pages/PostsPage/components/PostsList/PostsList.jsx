import PostsItemCart from "./PostsItemCart";

function PostsList({ postsList, handleDeletePost }) {
	return (
		<>
			{postsList.length ? (
				<div className="container">
					{postsList.map((post) => (
						<PostsItemCart key={post.id} postsData={post} onDeletePost={handleDeletePost} />
					))}
				</div>
			) : (
				<div className="container text-center">Список порожній</div>
			)}
		</>
	);
}

export default PostsList;
