import React from 'react';
import './IconBar.css';

const IconBar = () => {
  return (
    <div className="icon-bar">
      <a href="#" className="icon-link">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="icon-link">
        <i className="fab fa-tiktok"></i>
      </a>
      <a href="#" className="icon-link">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="#" className="icon-link">
        <i className="fas fa-phone"></i>
      </a>
      <a href="#" className="icon-link">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default IconBar;