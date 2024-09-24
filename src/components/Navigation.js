import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
// import React from 'react';



const Navigation = () => {
    return (
        // <nav className="nav">

        // <div className="nav-items"> {/* Use the "nav-items" CSS class */}
        //   <a href="#home" className="nav-link">Home</a> {/* Use the "nav-link" CSS class */}
        //   <a href="#search" className="nav-link">Search</a>
        //   <a href="#explore" className="nav-link">Explore</a>
        //   <a href="#reels" className="nav-link">Reels</a>
        //   <a href="#messages" className="nav-link">Messages</a>
        //   <a href="#notifications" className="nav-link">Notifications</a>
        //   <a href="#profile" className="nav-link">Profile</a>
        //   <a href="#create" className="nav-link">Create</a>
        // </div>
        
        //   <div className="profile-container">
        //     <img
        //       src="./assets/profile.JPEG"
        //       alt="Profile"
        //       className="profile-image"
        //       />
    
        //   </div>
        // </nav>
        <nav className="nav">
        <div className="nav-items"> {/* Use the "nav-items" CSS class */}
          <Link to="/" className="nav-link">Home</Link> {/* Use Link for routing */}
          <Link to="/search" className="nav-link">Search</Link> {/* Replace href with to */}
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/reels" className="nav-link">Reels</Link>
          <Link to="/messages" className="nav-link">Messages</Link>
          <Link to="/notifications" className="nav-link">Notifications</Link>
          <Link to="/create" className="nav-link">Create</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
        <div className="profile-container">
          <img
            src="./assets/profile.JPEG" // Ensure the path to the image is correct
            alt="Profile"
            className="profile-image"
          />
        </div>
      </nav>
    
    );
};



export default Navigation;