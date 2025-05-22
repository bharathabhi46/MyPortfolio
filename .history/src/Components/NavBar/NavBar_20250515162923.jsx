import React from "react";
import "./NavBar.css";
import logo from "./../../assets/location_icon.svg";
const NavBar = () => {
  return (
    <div className="navbar">
      NavBar
      <img src={logo} alt="" />
      <ul className="nav-menu"></ul>
      <li>Home</li>
      <li>About Me</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </div>
  );
};

export default NavBar;
