// src/components/ProfilePage.js
import React, { useState } from 'react'; 
import ImageLoader from './ImageLoader'; // Import the ImageLoader component to show images
import '../styles/ProfilePage.css'; // Import the CSS for styling the profile page

const ProfilePage = () => {
    const [postCount, setPostCount] = useState(0);
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="./assets/profile.JPEG" // Replace with actual profile image URL
          alt="Profile"
          className="profile-header-image"
        />
        <div className="profile-header-info">
          <h2 className="profile-header-username">benny@cat</h2> {/* Replace with actual username */}
          <div className="profile-header-stats">
            <span>
              <strong>{postCount}</strong> posts
            </span>
            <span>
              <strong>456k</strong> followers
            </span>
            <span>
              <strong>789</strong> following
            </span>
          </div>
          <div className="profile-header-bio">
            <strong>Benjamin Raphael Christopher Frederich Leornado Franklin Michelangelo</strong> {/* Replace with actual full name */}
            <p>🐱 Meet Benny, the 🐾 curious cat! <br />
  🛋️ Loves lounging around, 📦 exploring boxes, and 💤 napping in cozy corners. <br />
  🍣 Foodie at heart, always ready for a treat! <br />
  😺 Bringing joy and purrs every day! 🥰</p>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <ImageLoader setPostCount={setPostCount} /> {/* Display the image grid or other profile-related content */}
      </div>
    </div>
  );
};

export default ProfilePage;
