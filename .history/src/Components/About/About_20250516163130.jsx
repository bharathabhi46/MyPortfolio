import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.svg";
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
          <div className="about-skills">
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
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>250+</h1>
          <p>Problems Solved in LeetCode</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20226</h1>
          <p>
            Completed Phase one in Smart Interviews with a Global Rank of 20226
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>TOP 30</h1>
          <p>QUALIFIED AS TOP 30 TEAMS IN SMART INDIAN HACKATHON</p>
        </div>
      </div>
    </div>
  );
};

export default About;
