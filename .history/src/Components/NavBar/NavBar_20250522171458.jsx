import React, { useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/PortLogo3.png";

const NavBar = () => {
  const connectRef = useRef(null);

  const handleClick = () => {
    console.log(connectRef.current); // logs the DOM element
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#certificates">Certificates</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-connect">
        <a href="#contact" ref={connectRef} onClick={handleClick}>
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default NavBar;
