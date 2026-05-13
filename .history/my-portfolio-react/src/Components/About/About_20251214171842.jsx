import React from "react";
import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/aboutprofile.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <hr className="about-hr" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Bharath Abhinav Balne, B.Tech CSE student at CMR Technical
              Campus and an aspiring MERN Stack Full-Stack Developer. I have
              strong experience building scalable web applications using
              JavaScript, React, Node.js, Express.js, MongoDB, along with
              HTML/CSS.
              <p>
                I’ve built decent full-stack and frontend projects, debugged
                complex code, and solved 350+ LeetCode problems in Java,
                demonstrating strong problem-solving skills and the ability to
                write clean, efficient, and scalable code.
              </p>
              <p>Completed my Intermediate with a remarkable 94%</p>
              <p>Achieved a CGPA of 10 in school</p>
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>EXPRESS JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>350+</h1>
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
