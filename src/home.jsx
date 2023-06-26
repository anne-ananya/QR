import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling
import leftImage from './images/left.png';
import rightImage from './images/right.png';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="heading">QR Code Generator</h1>

      <div className="image-container">
        <div className="left-image-container">
          <img src={leftImage} alt="Left Image" className="image left-image" />
        </div>
        <div className="button-container">
          <Link to="/scan" className="button">Scan</Link>
          <Link to="/saved" className="button">Saved</Link>
          <Link to="/about" className="button">About</Link>
        </div>
        <div className="right-image-container">
          <img src={rightImage} alt="Right Image" className="image right-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
