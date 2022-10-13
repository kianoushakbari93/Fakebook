import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Posts from "./Posts";
import AddPost from "./AddPost"



// useState([
//   { title: "dogs", postText: "are lovely", likes: 0, id: 0 },
//   { title: "cats", postText: "are lovely", likes: 0, id: 1 },
//   { title: "seahorse", postText: "are lovely", likes: 0, id: 2 },
//   { title: "mouse", postText: "are lovely", likes: 0, id: 3 },
// ]);


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
    changePostBox(updated);
  };

  const decreaseLikes = (id) => {
    const updated = postbox.map((counter) => {
      if (counter.id === id) {
        return { ...counter, likes: counter.likes - 1 };
      }
      return counter;
    });
    changePostBox(updated);
  };
  const updatePostBox = (title, postText) => {
    const item = {id:postbox.length, title, postText, likes: 0};
    changePostBox((state) => [...state, item]);
  };
  return (
    <Container>
      <h3><img src={require ("./media/fake.png")} width="30%" alt="FakeBook"/></h3>
      <AddPost
        onSubmit={(title,postText) => updatePostBox(title, postText)
        }
      />

      {postbox.map((posts) => (
        <Posts
          key={posts.id}
          title={posts.title}
          postText={posts.postText}
          likes={posts.likes}
          increaseLikes={() => increaseLikes(posts.id)}
          decreaseLikes={() => decreaseLikes(posts.id)}
        />
      ))}
    </Container>
  );
}

export default App;
