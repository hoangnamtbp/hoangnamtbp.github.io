// import Post from './Post';
import '../styles/PostGrid.css';
// import React from 'react';


const PostGrid = ({ posts, onImageClick }) => {
    return (
      <div className="post-grid"> {/* Ensure the class name is correct */}
        {posts.map((post, index) => (
          <div key={index} className="post-grid-item" onClick={() => onImageClick(post)}>
            <img src={post.imageUrl} alt={post.caption} className="post-image" />
          </div>
        ))}
      </div>
    );
  };
  
  export default PostGrid;