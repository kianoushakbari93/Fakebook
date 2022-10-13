import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AddPost = (props) => {
  const [formValues, changeFormValues] = useState({
    title: "",
    postText: "",
  });
  const handleChange = (event) => {
    const newState = {
      ...formValues,
      [event.target.name]: event.target.value,
    };
    changeFormValues(newState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(formValues.title, formValues.postText);
    toastr["success"]("Post added", "Success");
    changeFormValues({
      title:"",
      postText:"",
    })
  }

  return (
    <div>
      <Form className="FormBox" onSubmit={(event) => submitHandler(event)}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control className="person-att" onChange={handleChange} name="title" value={formValues.title} type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Post:</Form.Label>
          <Form.Control className="person-att" onChange={handleChange} name="postText" value={formValues.postText} type="text" />
        </Form.Group>

        <Button className="likeButton" variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};
export default AddPost;
