import React from "react";
import "./Projects.css";
import MaptyApp from "./Projectsimages/Mapty Application.png";
import BankApp from "./Projectsimages/Basic Bank Application.png";
import ForkifyApp from "./Projectsimages/Forkify Application.png";
const listOfProjects = [
  {
    title: "Mapty Project",
    image: { MaptyApp }, // Replace with your local or hosted image path
    liveUrl: "https://your-live-demo-link.com", // Replace later
    githubUrl: "https://github.com/yourusername/project-one", // Replace later
  },
  {
    title: { BankApp },
    image: "path/to/project2-image.jpg",
    liveUrl: "https://your-live-demo-link.com",
    githubUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: { ForkifyApp },
    image: "path/to/project2-image.jpg",
    liveUrl: "https://your-live-demo-link.com",
    githubUrl: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];
const Projects = () => {
  return (
    <div className="Projects">
      <div>
        {listOfProjects.map((pro) => {
          return (
            <div>
              <img src={pro.image} alt="" />
              <div>
                <a href="">
                  <button>Live Demo</button>
                </a>
                <a href="">
                  <button>GitHub Code</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
