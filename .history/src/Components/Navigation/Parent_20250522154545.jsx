import React, { useRef } from "react";
import NavBar from "./NavBar";
// your sections imports...

const Parent = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        onNavClick={{
          home: () => scrollTo(homeRef),
          about: () => scrollTo(aboutRef),
          certificates: () => scrollTo(certRef),
          projects: () => scrollTo(projectsRef),
          contact: () => scrollTo(contactRef),
        }}
      />
      <div ref={homeRef}> {/* Your Home section component */} </div>
      <div ref={aboutRef}> {/* Your About Me section */} </div>
      <div ref={certRef}> {/* Your Certificates section */} </div>
      <div ref={projectsRef}> {/* Your Projects section */} </div>
      <div ref={contactRef}> {/* Your Contact section */} </div>
    </>
  );
};

export default Parent;
