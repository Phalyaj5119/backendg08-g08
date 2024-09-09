import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="side-container left"></div>
      <div className="main-content">
        <h1>Welcome to Medium</h1>
        <p>Post your Blogs and more with Medium</p>
        
      </div>
      <div className="side-container right"></div>
    </div>
  );
};

export default HeroSection;