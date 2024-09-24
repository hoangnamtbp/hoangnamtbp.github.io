import '../styles/Navigation.css';


const Navigation = () => {
    return (
        
        // <nav style={navStyle}>

        //     <h1>Instagram Clone</h1> 

        //     <div style={navItemsStyle}>
        //         <a href="#home" style={navLinkStyle}>Home</a>
        //         <a href="#search" style={navLinkStyle}>Search</a>
        //         <a href="#explore" style={navLinkStyle}>Explore</a>
        //         <a href="#reels" style={navLinkStyle}>Reels</a>
        //         <a href="#messages" style={navLinkStyle}>Messages</a>
        //         <a href="#notifications" style={navLinkStyle}>Notifications</a>
        //         <a href="#create" style={navLinkStyle}>Create</a>
        //         <a href="#profile" style={navLinkStyle}>Profile</a>
        //     </div>
            
        //     <div style={profileContainerStyle}>
        //         <img src={profileImage} alt="Profile" style={profileImageStyle} />
        //     </div>
        // </nav>
        <nav className="nav">

        <div className="nav-items"> {/* Use the "nav-items" CSS class */}
          <a href="#home" className="nav-link">Home</a> {/* Use the "nav-link" CSS class */}
          <a href="#search" className="nav-link">Search</a>
          <a href="#explore" className="nav-link">Explore</a>
          <a href="#reels" className="nav-link">Reels</a>
          <a href="#messages" className="nav-link">Messages</a>
          <a href="#notifications" className="nav-link">Notifications</a>
          <a href="#profile" className="nav-link">Profile</a>
          <a href="#create" className="nav-link">Create</a>
        </div>
        
          <div className="profile-container">
            <img
              src="./assets/profile.JPEG"
              alt="Profile"
              className="profile-image"
              />
    
          </div>
        </nav>
    );
};

// const navStyle = {
//     display: 'flex',
//     flexDirection: 'column', // Default to vertical for desktop
//     alignItems: 'center',
//     padding: '20px',
//     position: 'fixed', // Keep it fixed on the left side of the screen
//     top: 0,
//     left: 0,
//     height: '100vh', // Full height on the left side for desktop
//     backgroundColor: '#fff',
//     borderRight: '1px solid #ddd',
//   };

//   const profileContainerStyle = {
//     marginBottom: '20px',
//   };

//   const profileImageStyle = {
//     width: '60px',
//     height: '60px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '2px solid #007bff',
//   };
  
  // Stories container and images styles
  // const storiesContainerStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '10px',
  // };
  
  // const storyImageStyle = {
  //   width: '50px',
  //   height: '50px',
  //   borderRadius: '50%',
  //   objectFit: 'cover',
  //   border: '2px solid #ddd',
  //   cursor: 'pointer',
  //   transition: 'border-color 0.3s ease',
  // };

  // const navLinkStyle = {
  //   textDecoration: 'none',
  //   color: '#007bff',
  //   marginBottom: '20px',
  //   fontSize: '16px',
  // };
  
  // const navItemsStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   width: '100%',
  // };


export default Navigation;