import React from "react";
import "./Hero.css";
import profile_img from "../../assets/circular_profile.png";
const Hero = () => {
  return (
    <div className="hero">
      <div class="profile-wrapper">
        <img src={profile_img} alt="Bharath Abhinav" />
      </div>

      <h1>
        <span>I’m Bharath Abhinav,</span> a passionate web and Java developer.
      </h1>
      <p>
        Java Developer | Proficient in Java, JavaScript & React | Web
        Development Expert | DSA Enthusiast in Java & JavaScript | Hands-On
        Project Experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
