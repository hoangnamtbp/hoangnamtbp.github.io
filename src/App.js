// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Post from './components/Post';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import Navigation from './components/Navigation';
import Stories from './components/Stories';
import "./App.css";
import ImageLoader from './components/ImageLoader';

const App = () => {
  // const posts = [
  //   { imageUrl: './assets/IMG_4882.jpeg', caption: 'First post!' },
  //   { imageUrl: './assets/IMG_4948.jpeg', caption: 'Second post!' },
  // ];

  const stories = [
    { image: './assets/scene00001.png' , name: 'John' },
    { image: './assets/IMG_4373.JPEG', name: 'Jane' },
    { image: './assets/IMG_4248.JPEG', name: 'Mark' },
  ];


  return (
    // <div>
    //   <Header /> 
    //   <Navigation
    //     profileImage='./assets/profile.JPEG'
    //   />

    //   <div style={{ marginLeft: '100px', marginTop: '10px' }}>
    //     <Stories stories={stories} />
    //   </div>


    //   {/* <div style={feedStyle}>
    //     {posts.map((post, index) => (
    //       <Post key={index} post={post} />
    //     ))}
    //   </div> */}
    //   {/* <div className="post-grid">
    //     {posts.map((post, index) => (
    //       <Post key={index} post={post} />
    //     ))}
    //   </div> */}
    //   <ImageLoader />
    // </div>
    <Router>
      <div>
        {/* Render the Navigation component */}
        <Navigation />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page route */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route */}
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

// const feedStyle = {
//   padding: '20px',
// };

export default App;
