import { useParams } from "react-router-dom";
import Posts from "./Posts";

const PostGetter = ({ postbox, increaseLikes, decreaseLikes, showButtons, deletePost }) => {
  const { postId } = useParams();
  const results = postbox.filter(
    (candidatePost) => candidatePost.id === Number(postId)
  );

  if (!results || results.length === 0) {
    return <p>No post found with that ID</p>;
  }

  const post = results[0];

  return (
    <Posts
      showButtons={showButtons}
      title={post.title}
      postText={post.postText}
      likes={post.likes}
      postId={post.id}
      increaseLikes={() => increaseLikes(post.id)}
      decreaseLikes={() => decreaseLikes(post.id)}
      deletePost={() => deletePost(post.id)}
    />
  );
};

export default PostGetter;
