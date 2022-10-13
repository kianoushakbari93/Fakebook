import PostAttribute from "./PostAttribute";
import { Button, Container } from "react-bootstrap";

const Posts = ({ title, postText, likes, showButtons, increaseLikes, decreaseLikes }) => {
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
      {attributes.map((att) => (
        <PostAttribute label={att.label} value={post[att.name]} />
      ))}
      <br />
      {showButtons && (
        <div>
          <Button onClick={() => increaseLikes()} className="likeButton">
            Like
          </Button>
          <Button onClick={() => decreaseLikes()} className="likeButton">
            DisLike
          </Button>
        </div>
      )}
    </Container>
  );
};
export default Posts;
