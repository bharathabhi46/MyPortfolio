import React, { useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/portLogo3.png";
const NavBar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    onNavClink={{
        home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          certificates: () => scrollToSection(certRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
    }}
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
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
