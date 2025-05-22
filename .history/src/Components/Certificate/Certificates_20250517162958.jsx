import React from "react";
import "./Certificates.css";
import img1 from "./images/JAVASCRIPT.jpg";
import img2 from "./images/java.png";
import img3 from "./images/REACT CERTIFICATE.png";
import img4 from "./images/HTML,CSS CERTIFICATE.png";
import img5 from "./images/MYSQL.png";
import img6 from "./images/hashgraph.png";

const listOfCertificates = [
  { id: 1, image: img1, title: "JavaScript" },
  { id: 2, image: img2, title: "Java" },
  { id: 3, image: img3, title: "React" },
  { id: 4, image: img4, title: "HTML & CSS" },
  { id: 5, image: img5, title: "MySQL" },
  { id: 6, image: img6, title: "Hashgraph" },
];

const Certificates = () => {
  return (
    <div className="certificates">
      <h1>My Certifications</h1>
      <p className="cert-subtitle">
        A collection of technical certifications I've earned by completing
        hands-on, real-world courses.
      </p>
      <div className="certificates-grid">
        {listOfCertificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} />
            <div className="certificate-info">
              <h3>{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
