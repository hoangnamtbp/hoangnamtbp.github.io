// src/components/Feed.js
import React from 'react';
import Post from './Post'; // Import the Post component
import '../styles/Feed.css'; // Import CSS for Feed styling

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post key={index} post={post} /> // Render each post using the Post component
      ))}
    </div>
  );
};

export default Feed;
