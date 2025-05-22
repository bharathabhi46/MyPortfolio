import React, { useRef } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Certificates from "./Components/Certificate/Certificates";
import Projects from "./Components/Project/Projects";
import Contacts from "./Components/Contact/Contacts";
import Footers from "./Components/Footer/Footers";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificatesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <NavBar
        refs={{ homeRef, aboutRef, certificatesRef, projectsRef, contactRef }}
      />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={certificatesRef}>
        <Certificates />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contacts />
      </div>
      <Footers />
    </div>
  );
};

export default App;
