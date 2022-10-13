import Posts from "./Posts";

const View = ({ postbox, increaseLikes, decreaseLikes }) => {
  return (
    <>
      {postbox.map((posts, i) => (
        <Posts
          key={i}
          title={posts.title}
          postText={posts.postText}
          likes={posts.likes}
          increaseLikes={() => increaseLikes(posts.id)}
          decreaseLikes={() => decreaseLikes(posts.id)}
        />
      ))}
    </>
  );
};

export default View;
