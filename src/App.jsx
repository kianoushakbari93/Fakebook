import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import PostGetter from "./PostGetter";
import AddPost from "./AddPost";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import View from "./View";

function App() {
  //defining our array of object that we want to put text inside
  //using useState to initialize our value and keeping it, and update it with function
  const [postbox, changePostBox] = useState([]);
  //making a function with mapping on our postbox to increase the likes by clicking the button
  const increaseLikes = (id) => {
    //creating a function to update the like posts
    const updated = postbox.map((counter) => {
      if (counter.id === id) {
        return { ...counter, likes: counter.likes + 1 };
      }
      return counter;
    });
    //put our update function inside the changepostbox that uses usestate
    localStorage.setItem("posts", JSON.stringify(updated));
    changePostBox(updated);
  };

  const decreaseLikes = (id) => {
    const updated = postbox.map((counter) => {
      if (counter.id === id) {
        return { ...counter, likes: counter.likes - 1 };
      }
      return counter;
    });
    localStorage.setItem("posts", JSON.stringify(updated));
    changePostBox(updated);
  };

  const updatePostBox = (title, postText) => {
    const item = { id: postbox.length, title, postText, likes: 0 };
    localStorage.setItem("posts", JSON.stringify([...postbox, item]));
    changePostBox((state) => [...state, item]);
  };

  useEffect(() => {
    const listContents = localStorage.getItem("posts");
    changePostBox(JSON.parse(listContents) || []);
  }, []);

  const clearLocal = () => {
    localStorage.clear();
    postbox = [];
    changePostBox();
  };

  const deletePost = (id) => {
    const updatedPosts = postbox.filter((post) => {
      if (post.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    changePostBox(updatedPosts);
  };
  return (
    <Container>
      <img src={require("./media/fake.png")} width="300px" alt="FakeBook" />
      <Navbar bg="light" expand="md">
        <Navbar.Brand>Fakebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/View">
              View Posts
            </Link>
            <Link className="nav-link" to="/AddPost">
              Add Post
            </Link>
            <Link className="nav-link" onClick={clearLocal}>
              Clear
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <View
              postbox={postbox}
              showButtons={false}
              increaseLikes={(id) => increaseLikes(id)}
              decreaseLikes={(id) => decreaseLikes(id)}
              deletePost={(id) => deletePost(id)}
            />
          }
        />
        <Route path="/view">
          <Route
            path="/view/:postId"
            element={
              <PostGetter
                postbox={postbox}
                increaseLikes={(id) => increaseLikes(id)}
                decreaseLikes={(id) => decreaseLikes(id)}
                deletePost={(id) => deletePost(id)}
              />
            }
          />
          <Route
            index
            element={
              <View
                postbox={postbox}
                showButtons={true}
                increaseLikes={(id) => increaseLikes(id)}
                decreaseLikes={(id) => decreaseLikes(id)}
                deletePost={(id) => deletePost(id)}
              />
            }
          />
        </Route>
        <Route
          path="/AddPost"
          element={
            <AddPost
              onSubmit={(title, postText) => updatePostBox(title, postText)}
            />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
