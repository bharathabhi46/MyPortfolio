import React from "react";
import "./NavBar.css";
import logo from "../../assets/portLogo3.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>About Me</li>
        <li>Certificates</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default NavBar;
