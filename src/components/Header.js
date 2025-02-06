import React from "react";
import logo1 from "../../public/logo1.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo1} alt="Logo" />
        <h1 className="site-name">My Food App</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
