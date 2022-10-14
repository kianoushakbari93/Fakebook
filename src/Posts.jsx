import { Link } from "react-router-dom";
import PostAttribute from "./PostAttribute";
import { Button, Container } from "react-bootstrap";

const Posts = ({
  title,
  postText,
  likes,
  postId,
  showButtons,
  increaseLikes,
  decreaseLikes,
  deletePost,
}) => {
  const post = {
    title: title,
    postText: postText,
    likes: likes,
  };

  const attributes = [
    {
      name: "title",
      label: "Title: ",
    },
    {
      name: "postText",
      label: "Text: ",
    },
    {
      name: "likes",
      label: "Likes: ",
    },
  ];

  return (
    <Container className="person">
      <Link className="nav-link" to={`/view/${postId}`}>
        {attributes.map((att) => (
          <PostAttribute label={att.label} value={post[att.name]} />
        ))}
      </Link>
      <br />
      {showButtons && (
        <div className="buttonDiv">
          <Button onClick={() => increaseLikes()} className="likeButton">
            Like
          </Button>
          <Button onClick={() => decreaseLikes()} className="likeButton">
            DisLike
          </Button>
          <Button onClick={() => deletePost()} className="likeButton">
            Delete
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Posts;
