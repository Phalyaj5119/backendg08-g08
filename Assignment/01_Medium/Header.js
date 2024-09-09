import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2 class="logo">Medium</h2>
        
    
        <div className="search-container">
          <input type="text" placeholder="Search Medium" className="search-bar" />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
      
      <div className="header-right">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
        
        <button className="profile-btn">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
