import React from "react";
import "./NavBar.css";
import logo from "../../assets/portLogo2.jpg";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Certificates</li>
        <li>Projects</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default NavBar;
