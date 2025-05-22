import React from "react";
import "./Certificates.css";
import img1 from "./images/JAVASCRIPT.jpg";
import img2 from "./images/java.png";
import img3 from "./images/REACT CERTIFICATE.png";
import img4 from "./images/HTML,CSS CERTIFICATE.png";
import img5 from "./images/MYSQL.png";
import img6 from "./images/hashgraph.png";
let listOfCertificates = [
  {
    id: 1,
    image: img1,
    title: "JavaScript",
    description: "Completed JavaScript basics & projects",
    link: "https://example.com/cert1",
  },
  {
    id: 2,
    image: img2,
    title: "Java",
    description: "Java programming course completion",
    link: "https://example.com/cert2",
  },
  {
    id: 3,
    image: img3,
    title: "React",
    description: "React JS beginner to advanced course",
    link: "",
  },
  {
    id: 4,
    image: img4,
    title: "HTML & CSS",
    description: "Frontend fundamentals certificate",
    link: "https://example.com/cert4",
  },
  {
    id: 5,
    image: img5,
    title: "MySQL",
    description: "Database design & queries course",
    link: "https://example.com/cert5",
  },
  {
    id: 6,
    image: img6,
    title: "Hashgraph",
    description: "Hashgraph Developer Certificate",
    link: "",
  },
];
const Certificates = () => {
  return (
    <div className="certificates">
      <h1>My Certifications</h1>
      <div className="certificates-grid">
        {listOfCertificates.map((cert) =>
          cert.link ? (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              className="certificate-card"
            >
              <img src={cert.image} alt={`Certificate ${cert.id}`} />
            </a>
          ) : (
            <div key={cert.id} className="certificate-card">
              <img src={cert.image} alt={`Certificate ${cert.id}`} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Certificates;
