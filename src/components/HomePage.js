// src/components/HomePage.js
// import React from 'react';
import '../styles/HomePage.css'; // Import the CSS for styling the home page
import Stories from './Stories';

const HomePage = () => {
    const stories = [
        { image: './assets/scene00001.png' , name: 'John' },
        { image: 'https://via.placeholder.com/50', name: 'Jane' },
        { image: 'https://via.placeholder.com/50', name: 'Mark' },
      ];
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My instagram clone</h1>
        <p>click on profile to see pictures</p>
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
