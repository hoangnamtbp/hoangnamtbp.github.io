// src/App.js
import React from 'react';
import Header from './components/Header';
// import Post from './components/Post';
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
    { image: 'https://via.placeholder.com/50', name: 'Jane' },
    { image: 'https://via.placeholder.com/50', name: 'Mark' },
  ];


  return (
    <div>
      <Header /> 
      <Navigation
        profileImage='./assets/profile.JPEG'
      />

      <div style={{ marginLeft: '100px', marginTop: '10px' }}>
        <Stories stories={stories} />
      </div>


      {/* <div style={feedStyle}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div> */}
      {/* <div className="post-grid">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div> */}
      <ImageLoader />
    </div>
  );
};

// const feedStyle = {
//   padding: '20px',
// };

export default App;
