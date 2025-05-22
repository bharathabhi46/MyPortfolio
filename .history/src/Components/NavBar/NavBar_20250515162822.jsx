import React from "react";
import "./NavBar.css";
import logo from "./../../assets/location_icon.svg";
const NavBar = () => {
  return (
    <div className="navbar">
      NavBar
      <img src={logo} alt="" />
      <ul className="nav-menu"></ul>
  );
    </div>
    
};

export default NavBar;
