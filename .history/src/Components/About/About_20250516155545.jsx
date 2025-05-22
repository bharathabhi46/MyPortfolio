import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {
  return (
    <div className="About">
      <div className="About-title">
        <h1>Introduction To Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
    </div>
  );
};

export default About;
