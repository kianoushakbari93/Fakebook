import Posts from "./Posts";

const View = ({ postbox, increaseLikes, decreaseLikes, showButtons, deletePost }) => {

  return (
    <>
      {postbox.map((post, i) => (
        <Posts
          key={i}
          postId={post.id}
          showButtons={showButtons}
          title={post.title}
          postText={post.postText}
          likes={post.likes}
          increaseLikes={() => increaseLikes(post.id)}
          decreaseLikes={() => decreaseLikes(post.id)}
          deletePost={() => deletePost(post.id)}
        />
      ))}
    </>
  );
};

export default View;
