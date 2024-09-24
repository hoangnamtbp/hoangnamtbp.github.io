// src/components/Post.js
import React from 'react';
import '../styles/Post.css'; // Import CSS for Post styling

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-image-container">
        <img src={post.imageUrl} alt={post.caption} className="post-image" />
      </div>
      <div className="post-content">
        <p className="post-caption">{post.caption}</p>
        {/* You can add more elements like likes, comments, etc., here */}
      </div>
    </div>
  );
};

export default Post;
