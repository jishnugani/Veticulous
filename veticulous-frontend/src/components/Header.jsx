import React, { useState } from 'react';
import './Header.css';
import logo from "../assets/VeticulousCat.png";

const Header = () => {
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [blogDropdownVisible, setBlogDropdownVisible] = useState(false);

  const toggleAboutDropdown = () => setAboutDropdownVisible(!aboutDropdownVisible);
  const toggleBlogDropdown = () => setBlogDropdownVisible(!blogDropdownVisible);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <a href="#hero" className="logo-link">
          <img src={logo} alt="Veticulous Logo" className="logo-image" />
          <h1>Veticulous</h1>
        </a>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <a href="#hero">Home</a>

        {/* About Us Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={toggleAboutDropdown}
          onMouseLeave={toggleAboutDropdown}
        >
          <span className="dropdown-button">About Us</span>
          {aboutDropdownVisible && (
            <div className="dropdown-menu">
              <a href="#about">Our Story</a>
              <a href="#team">Team</a>
              <a href="#vision">Vision</a>
            </div>
          )}
        </div>

        {/* Blog Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={toggleBlogDropdown}
          onMouseLeave={toggleBlogDropdown}
        >
          <span className="dropdown-button">Blog</span>
          {blogDropdownVisible && (
            <div className="dropdown-menu">
              <a href="#blog">Our Blog</a>
              <a href="#articles">Latest Articles</a>
              <a href="#resources">Resources</a>
            </div>
          )}
        </div>

        <a href="#contact">Contact</a>
      </nav>

      {/* Action Buttons */}
      <div className="actions">
        <button className="donate-button">Donate</button>
        <button className="join-button">Join Us</button>
      </div>
    </header>
  );
};

export default Header;
