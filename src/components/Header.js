// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Instagram Clone</h1>
      <div>
        <a href="#profile">Profile</a>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  background: '#fff',
  borderBottom: '1px solid #ddd',
};

export default Header;
