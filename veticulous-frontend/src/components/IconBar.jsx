import React, { useState } from "react";
import "./IconBar.css";

const IconBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`icon-bar ${isExpanded ? "expanded" : "collapsed"}`}>
      <button className="toggle-button" onClick={toggleBar}>
        {isExpanded ? "❮" : "❯"}
      </button>
      <div className="icons">
        <a href="#" className="icon-link" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="icon-link" title="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="#" className="icon-link" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="icon-link" title="Phone">
          <i className="fas fa-phone"></i>
        </a>
        <a href="#" className="icon-link" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default IconBar;
