// src/components/Stories.js
import React from 'react';

const Stories = ({ stories }) => {
  return (
    <div style={storiesContainerStyle}>
      {stories.map((story, index) => (
        <div key={index} style={storyWrapperStyle}>
          <img
            src={story.image}
            alt={story.name}
            style={storyImageStyle}
            title={story.name}
          />
        </div>
      ))}
    </div>
  );
};

// Styles for horizontal stories layout
const storiesContainerStyle = {
  display: 'flex',
  overflowX: 'auto', // Enables horizontal scrolling if necessary
  padding: '10px',
  backgroundColor: '#f9f9f9',
  borderBottom: '1px solid #ddd',
  marginLeft: '100px', // Ensure the stories are not hidden behind the navigation bar
};

const storyWrapperStyle = {
  marginRight: '15px',
};

const storyImageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid #007bff',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease',
};

export default Stories;
