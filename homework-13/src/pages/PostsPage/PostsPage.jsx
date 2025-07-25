import { useState } from "react";
import { Link } from "react-router";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";

const PostsPage = () => {
	const [selectedPostId, setSelectedPostId] = useState(null);

	const handlePostSelect = (postId) => {
		if (postId === selectedPostId) {
			setSelectedPostId(null);
		} else {
			setSelectedPostId(postId);
		}
	};

	return (
		<div className="container">
			<h2 className="text-2xl font-bold text-center mb-4">Сторінка постів</h2>
			<PostDetails postId={selectedPostId} />
			<PostsList onSelect={handlePostSelect} selectedPostId={selectedPostId} />
			<Link to="/posts/edit">
				<button>+ Додати новий пост</button>
			</Link>
		</div>
	);
};

export default PostsPage;
