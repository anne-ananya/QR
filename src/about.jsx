import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <p className="about-description">
        A brief description of what this project does and who it's for. This project is created by Ananya De.
        The project highlights my React skills. This is a QR code generator.
      </p>
      <div className="about-links">
        <p>
          To know more about the project click the Hashnode link below:
          <br />
          <a href="https://ananyawritescodes.hashnode.dev/creating-a-react-qr-generator">Hashnode Article</a>
          <a href="HASHNODE_LINK">
            <img src="https://img.icons8.com/arcade/48/document.png" alt="Hashnode" className="about-icon" />
          </a>
        </p>
        <p>
          To view the code behind the project click below:
          <br />
          <a href="https://github.com/anne-ananya/QR">GitHub Repository</a>
          <img width="30" height="30" src="https://img.icons8.com/arcade/64/code.png" alt="code"/>
        </p>
      </div>
      <div className="about-footer">
        <div className="about-icons">
            <p>Know about me more:
            <img src="https://img.icons8.com/arcade/64/for-you.png" alt="For You" className="about-icon" />
          <br/>
                <br/>
                <a href="https://github.com/anne-ananya">
            <img src="https://img.icons8.com/clouds/100/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ananya-de-5552a4205">
            <img src="https://img.icons8.com/clouds/100/linkedin.png" alt="LinkedIn" />
          </a>
            </p>
         
        </div>
        <img
          src="https://img.icons8.com/hands/100/experimental-gift-hands.png"
          alt="Experimental Gift Hands"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
