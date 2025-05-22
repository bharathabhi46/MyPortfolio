import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>I’m Bharath Abhinav, a passionate web and Java developer.</h1>
      <p>
        Java Developer | Proficient in Java, JavaScript & React | Web
        Development Expert | DSA Enthusiast in Java & JavaScript | Hands-On
        Project Experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
      </div>
    </div>
  );
};

export default Hero;
