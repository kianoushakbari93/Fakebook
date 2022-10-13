const PostAttribute = (props) => {
  return (
    <div className="person-att">
      <div className="person-row">{props.label}</div>
      <div className="person-row">{props.value}</div>
    </div>
  );
};

export default PostAttribute;
