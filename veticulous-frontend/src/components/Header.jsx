import React from "react";
import "./Header.css";
import logo from "../assets/VeticulousCat.png"; // Make sure the logo is saved in the correct folder

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Organization Logo" className="logo-image" />
          <h1 className="header-title">Veticulous</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#vision">Our Vision</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </nav>
        <div className="header-cta">
          <a href="#contact" className="cta-button">Join Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;