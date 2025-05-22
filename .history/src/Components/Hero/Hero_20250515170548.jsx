import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>I’m Bharath Abhinav, a passionate web and Java developer.</h1>
      <p></p>
    </div>
  );
};

export default Hero;
