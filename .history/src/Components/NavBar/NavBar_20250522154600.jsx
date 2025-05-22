import React from "react";
import "./NavBar.css";
import logo from "../../assets/portLogo3.png";

const NavBar = ({ onNavClick }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={onNavClick.home}>Home</li>
        <li onClick={onNavClick.about}>About Me</li>
        <li onClick={onNavClick.certificates}>Certificates</li>
        <li onClick={onNavClick.projects}>Projects</li>
        <li onClick={onNavClick.contact}>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default NavBar;
