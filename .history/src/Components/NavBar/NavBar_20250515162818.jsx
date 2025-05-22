import React from "react";
import "./NavBar.css";
import logo from "./../../assets/location_icon.svg";
const NavBar = () => {
  return (
    <div className="navbar">
      NavBar
      <img src={logo} alt="" />
    </div>
    <ul className="nav-menu"></ul>
  );
};

export default NavBar;
