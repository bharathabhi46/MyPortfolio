import React, { useRef, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Certificates from "./Components/Certificate/Certificates";
import Projects from "./Components/Project/Projects";
import Contacts from "./Components/Contact/Contacts";
import Footers from "./Components/Footer/Footers";

const App = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    console.log(aboutRef.current); // logs the About section DOM element on mount
  }, []);

  return (
    <div>
      <NavBar />
      <div id="home">
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <Footers />
    </div>
  );
};

export default App;
