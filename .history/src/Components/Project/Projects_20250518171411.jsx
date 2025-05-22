import React from "react";
import "./Projects.css";
import MaptyApp from "./Projectsimages/Mapty Application.png";
import BankApp from "./Projectsimages/Basic Bank Application.png";
import ForkifyApp from "./Projectsimages/Forkify Application.png";

const listOfProjects = [
  {
    title: "Mapty Project",
    description: "A location-based app for tracking workouts using Leaflet.js.",
    image: MaptyApp,
    liveUrl: "https://your-live-demo-link.com",
    githubUrl: "https://github.com/bharathabhi46/Projects",
  },
  {
    title: "Bank App",
    description:
      "Basic banking app with transaction history and authentication.",
    image: BankApp,
    liveUrl: "https://your-live-demo-link.com",
    githubUrl: "https://github.com/bharathabhi46/Bank-App",
  },
  {
    title: "Forkify App",
    description:
      "Recipe app that fetches recipes from an API with search & bookmarks.",
    image: ForkifyApp,
    liveUrl: "https://your-live-demo-link.com",
    githubUrl: "https://github.com/yourusername/project-three",
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <hr className="simple-hr" />
      <p className="projects-subtitle">
        A curated selection of real-world projects showcasing my skills in
        modern web development, full-stack engineering, and responsive UI
        design. These applications reflect hands-on problem solving, clean code
        practices, and a commitment to building intuitive digital experiences.
      </p>
      <div className="projects-grid">
        {listOfProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-btn">Live Demo</button>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-btn">GitHub Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
