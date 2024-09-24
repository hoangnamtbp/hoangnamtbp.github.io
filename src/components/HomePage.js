// src/components/HomePage.js
// import React from 'react';
import { Link } from 'react-router-dom';
import Stories from './Stories';
import '../styles/HomePage.css';
// import Feed from './Feed';

const HomePage = () => {
    const stories = [
        { image: './assets/scene00001.png' , name: 'John' },
        { image: './assets/IMG_4373.JPEG', name: 'Jane' },
        { image: './assets/IMG_4248.JPEG', name: 'Mark' },
      ];

    const postsData = [
        {
          imageUrl: './posts/IMG_4518.JPEG', // Replace with actual post image URL
          caption: 'First post!', // Replace with actual caption
        },
        {
          imageUrl: './posts/IMG_6126.PNG',
          caption: 'Second post!',
        },
        {
          imageUrl: './posts/IMG_6197.JPEG',
          caption: 'Another great post!',
        },
        // Add more posts as needed
      ];
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My instagram clone</h1>
        <p>click on <Link to="/profile" className="profile-link"> profile
          </Link>{' '} to see pictures</p>
      </header>
      
      <Stories stories={stories} />
      {/* <Feed posts={postsData} /> */}

      <div className="home-content">
        {/* Add your home page content here */}
        <h2>Main Feed</h2>
        <p>This is a work in progress</p>
      </div>
    </div>
  );
};

export default HomePage;
