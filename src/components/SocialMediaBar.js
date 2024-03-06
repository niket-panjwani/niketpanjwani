import React from 'react';
import './styles/SocialMediaBar.css'; // This will be your CSS file for styles

// Import icons from a library such as react-icons or use SVGs
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCube } from 'react-icons/fa';

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer"><FaCube /></a>
      <div className="line"></div>
    </div>
  );
};

export default SocialMediaBar;