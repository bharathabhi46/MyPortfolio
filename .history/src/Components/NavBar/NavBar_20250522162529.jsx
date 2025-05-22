import React from "react";
import "./NavBar.css"; // Your custom styles

const NavBar = ({ onNavigate, refs }) => {
  return (
    <div className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-menu">
        <li onClick={() => onNavigate(refs.homeRef)}>Home</li>
        <li onClick={() => onNavigate(refs.aboutRef)}>About</li>
        <li onClick={() => onNavigate(refs.certificatesRef)}>Certificates</li>
        <li onClick={() => onNavigate(refs.projectsRef)}>Projects</li>
        <li onClick={() => onNavigate(refs.contactRef)}>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
