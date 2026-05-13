import React from "react";
import "./Hero.css";
// import resume from "./Resume/Sample Resume.pdf";
import newResume from "./Resume/bharath resume.pdf";
import profile_img from "../../assets/profile_img1.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div class="profile-wrapper">
        <img src={profile_img} alt="Bharath Abhinav" />
      </div>

      <h1>
        <span>I’m Bharath Abhinav Balne,</span> a ServiceNow CAD and CSA
      </h1>
      <p>
        MERN Stack Developer | Proficient in JavaScript & React | Strong DSA in
        Java & JavaScript | Hands-On Project Experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">Connect With Me</a>
        </div>
        <div className="hero-resume">
          <a href={newResume} download="Bharath_Resume.pdf">
            {" "}
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
