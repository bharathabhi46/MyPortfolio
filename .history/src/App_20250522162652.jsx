import React, { useRef } from "react";
import NavBar from "./Components/NavBar";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificatesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        onNavigate={scrollToSection}
        refs={{ homeRef, aboutRef, certificatesRef, projectsRef, contactRef }}
      />

      <section ref={homeRef}>Home Section</section>
      <section ref={aboutRef}>About Section</section>
      <section ref={certificatesRef}>Certificates Section</section>
      <section ref={projectsRef}>Projects Section</section>
      <section ref={contactRef}>Contact Section</section>
    </div>
  );
};

export default App;
