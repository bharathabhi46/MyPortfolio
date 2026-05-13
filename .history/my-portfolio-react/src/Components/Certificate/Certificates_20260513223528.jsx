import React from "react";
import "./Certificates.css";
import img1 from "./images/JAVASCRIPT.jpg";
import img2 from "./images/java.png";
import img3 from "./images/csa.png";
import img4 from "./images/cad.png";
// import img5 from "./images/MYSQL.png";
// import img6 from "./images/SPRING BOOT.jpg";
import img7 from "./images/EXPRESS JS.png";
import img8 from "./images/NODE JS.png";
// import theme_pattern from "../../assets/theme_pattern.svg";
const listOfCertificates = [
  {
    id: 1,
    image: img1,
    title: "JAVASCRIPT",
    link: "",
  },
  {
    id: 2,
    image: img2,
    title: "JAVA",
    link: "",
  },
  {
    id: 3,
    image: img3,
    title: "REACT",
    link: "",
  },
  {
    id: 4,
    image: img4,
    title: "HTML & CSS",
    link: "",
  },
  { id: 5, image: img8, title: "NODE JS", link: "" },
  { id: 6, image: img7, title: "EXPRESS JS", link: "" },
];

function Certificates() {
  return (
    <div className="certificates">
      <h1>My Certifications</h1>
      <hr className="simple-hr" />
      <p className="cert-subtitle">
        Verified credentials that reflect my industry readiness, earned through
        hands-on projects, real-world problem solving, and practical experience
        in full-stack software development.
      </p>
      <div className="certificates-grid">
        {listOfCertificates.map((cert) =>
          cert.link ? (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              className="certificate-card"
            >
              <img src={cert.image} alt={cert.title} />
              <div className="certificate-info">
                <h3>{cert.title}</h3>
              </div>
            </a>
          ) : (
            <div key={cert.id} className="certificate-card">
              <img src={cert.image} alt={cert.title} />
              <div className="certificate-info">
                <h3>{cert.title}</h3>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Certificates;
