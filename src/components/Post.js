// src/components/Post.js
// const Post = ({ post }) => {
//   return (
//     <div style={postStyle}>
//       <img src={post.imageUrl} alt={post.caption} style={imageStyle} />
//       <p>{post.caption}</p>
//     </div>
//   );
// };

import '../styles/Post.css'; // Import external CSS file for styling

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt={post.caption} className="post-image" />
      <p className="post-caption">{post.caption}</p>
    </div>
  );
};

// export default Post;

// const postStyle = {
//   border: '1px solid #ddd',
//   padding: '10px',
//   marginBottom: '20px',
// };

// const imageStyle = {
//   width: '100%',
//   height: 'auto',
// };

export default Post;
