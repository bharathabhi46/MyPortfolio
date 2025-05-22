import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Certificates from "./Components/Certificate/Certificates";
import Projects from "./Components/Project/Projects";
import Contacts from "./Components/Contact/Contact";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
