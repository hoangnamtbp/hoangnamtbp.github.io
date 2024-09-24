// src/components/HomePage.js
// import React from 'react';
import { Link } from 'react-router-dom';
import Stories from './Stories';
import '../styles/HomePage.css';

const HomePage = () => {
    const stories = [
        { image: './assets/scene00001.png' , name: 'John' },
        { image: './assets/IMG_4373.JPEG', name: 'Jane' },
        { image: './assets/IMG_4248.JPEG', name: 'Mark' },
      ];
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My instagram clone</h1>
        <p>click on <Link to="/profile" className="profile-link"> profile
          </Link>{' '} to see pictures</p>
      </header>
      
      <Stories stories={stories} />

      <div className="home-content">
        {/* Add your home page content here */}
        <h2>Main Feed</h2>
        <p>This is a work in progress</p>
      </div>
    </div>
  );
};

export default HomePage;
