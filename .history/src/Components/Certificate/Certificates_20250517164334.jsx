import React from "react";
import "./Certificates.css";
import img1 from "./images/JAVASCRIPT.jpg";
import img2 from "./images/java.png";
import img3 from "./images/REACT CERTIFICATE.png";
import img4 from "./images/HTML,CSS CERTIFICATE.png";
import img5 from "./images/MYSQL.png";
import img6 from "./images/hashgraph.png";
import theme_pattern from "../../assets/theme_pattern.svg";
const listOfCertificates = [
  {
    id: 1,
    image: img1,
    title: "JavaScript",
    link: "https://example.com/cert1",
  },
  { id: 2, image: img2, title: "Java", link: "https://example.com/cert2" },
  { id: 3, image: img3, title: "React", link: "" },
  {
    id: 4,
    image: img4,
    title: "HTML & CSS",
    link: "https://example.com/cert4",
  },
  { id: 5, image: img5, title: "MySQL", link: "https://example.com/cert5" },
  { id: 6, image: img6, title: "Hashgraph", link: "" },
];

function Certificates() {
  return (
    <div className="certificates">
      <h1>My Certifications</h1>
      <img className="theme_img" src={theme_pattern} alt="" />
      <p className="cert-subtitle">
        A collection of technical certifications I've earned by completing
        hands-on, real-world courses.
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
          )
        )}
      </div>
    </div>
  );
}

export default Certificates;
