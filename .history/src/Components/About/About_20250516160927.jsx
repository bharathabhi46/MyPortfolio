import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile_img.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I’m Bharath Abhinav Balne, a B.Tech second-year student at
              CMR Technical Campus, Hyderabad. I’m a Java Developer and a Web
              Development Expert with proficiency in Java, JavaScript, HTML,
              CSS, and React. With a strong passion for web development and
              design, I actively work on hands-on projects. I'm also a DSA
              enthusiast, continuously improving my problem-solving skills in
              Java and JavaScript.
            </p>
          </div>
          <div className="about-skill">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
