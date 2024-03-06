import React from 'react';
import './styles/EmailBar.css'; // This will be your CSS file for styles

const EmailBar = () => {
  return (
    <div className="email-bar">
      <a href="mailto:contact@niketpanjwani.com" target="_blank" rel="noopener noreferrer">
        <span className="rotate">contact@niketpanjwani.com</span>
      </a>
      <div className="line"></div>
    </div>
  );
};

export default EmailBar;