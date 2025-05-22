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
    link: "https://www.udemy.com/certificate/UC-205dd49d-e67e-4477-ba49-777f3c1e54a0/",
  },
  {
    id: 2,
    image: img2,
    title: "Java",
    link: "https://lms.eduskills.academy/certificates/download",
  },
  {
    id: 3,
    image: img3,
    title: "React",
    link: "https://moonshot.scaler.com/s/sl/dr-n8aZYdV?_gl=1*1gzdu8s*_gcl_aw*R0NMLjE3NDc4NDU1NTEuQ2owS0NRandsWUhCQmhEOUFSSXNBTFJ1MDlveVhzRXFkZGhxQzBxS19KcnlSWVNNYXFzd21NeWY2NFpoYlFsSmk2SGRTRGRwUF9SLTgyZ2FBdFpjRUFMd193Y0I.*_gcl_au*MjA1MTUwNTM0Ny4xNzQ2OTc5MjM2*FPAU*MjA1MTUwNTM0Ny4xNzQ2OTc5MjM2*_ga*MTUyNTkwMTE5Ni4xNzQ2OTc5MjM2*_ga_53S71ZZG1X*czE3NDc4NDU1NTAkbzYkZzAkdDE3NDc4NDU1NTQkajAkbDAkaDE4MTE1NjM3ODQkZE42bXJuYkQ2STV6R1BQb1U4OFhZRE5JMG1FOTlITFlJa2c.",
  },
  {
    id: 4,
    image: img4,
    title: "HTML & CSS",
    link: "https://moonshot.scaler.com/s/sl/EntvEXRgbB?_gl=1*xrkddp*_gcl_aw*R0NMLjE3NDc4NDU1OTEuQ2owS0NRandsWUhCQmhEOUFSSXNBTFJ1MDlveVhzRXFkZGhxQzBxS19KcnlSWVNNYXFzd21NeWY2NFpoYlFsSmk2SGRTRGRwUF9SLTgyZ2FBdFpjRUFMd193Y0I.*_gcl_au*MjA1MTUwNTM0Ny4xNzQ2OTc5MjM2*FPAU*MjA1MTUwNTM0Ny4xNzQ2OTc5MjM2*_ga*MTUyNTkwMTE5Ni4xNzQ2OTc5MjM2*_ga_53S71ZZG1X*czE3NDc4NDU1NTAkbzYkZzEkdDE3NDc4NDU1OTgkajAkbDAkaDE4MTE1NjM3ODQkZE42bXJuYkQ2STV6R1BQb1U4OFhZRE5JMG1FOTlITFlJa2c.",
  },
  { id: 5, image: img5, title: "MySQL", link: "https://example.com/cert5" },
  { id: 6, image: img6, title: "Hashgraph", link: "" },
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
          )
        )}
      </div>
    </div>
  );
}

export default Certificates;
