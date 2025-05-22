import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
// import Certificates from "./Components/Certificates/Certificates"
import certificates from "./Components/Certificates/certificates";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Certificates />
    </div>
  );
};

export default App;
