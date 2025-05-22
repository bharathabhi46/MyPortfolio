import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Certificates from "./Components/Certificate/Certificates";
import Projects from "./Components/Project/Projects";
import Contacts from "./Components/Contact/Contacts";
import Footers from "./Components/Footer/Footers";
const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div></div>
      <Projects />
      <Contacts />
      <Footers />
    </div>
  );
};

export default App;
