import PostAttribute from "./PostAttribute";
import { Button, Container } from "react-bootstrap";

const Posts = (props) => {
  const post = {
    title: props.title,
    postText: props.postText,
    likes: props.likes,
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
      <div>
        <Button onClick={() => props.increaseLikes()} className="likeButton">
          Like
        </Button>
        <Button onClick={() => props.decreaseLikes()} className="likeButton">
          DisLike
        </Button>
      </div>
    </Container>
  );
};
export default Posts;
