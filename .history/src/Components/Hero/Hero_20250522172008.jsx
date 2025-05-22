import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img1.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div class="profile-wrapper">
        <img src={profile_img} alt="Bharath Abhinav" />
      </div>

      <h1>
        <span>I’m Bharath Abhinav Balne,</span> a passionate web and Java
        developer.
      </h1>
      <p>
        Java Developer | Proficient in Java, JavaScript & React | Web
        Development Expert | DSA Enthusiast in Java & JavaScript | Hands-On
        Project Experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">
            <a href="" download="Bharath_Resume.pdf"></a>
          </a>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
