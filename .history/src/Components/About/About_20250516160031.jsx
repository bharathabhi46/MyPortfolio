import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile_img.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>Introduction To Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
