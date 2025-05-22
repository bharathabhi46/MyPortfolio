import React from "react";
import "./Certificates.css";
import img1 from "./images/JAVASCRIPT.jpg";
import img2 from "./images/java.png";
import img3 from "./images/REACT CERTIFICATE.png";
import img4 from "./images/HTML,CSS CERTIFICATE.png";
import img5 from "./images/mysql";
import img6 from "./images/hashgraph";
let listOfCertificates = [
  {
    id: 1,
    image: img1,
    link: "https://example.com/cert1",
  },
  {
    id: 2,
    image: img2,
    link: "https://example.com/cert2",
  },
  {
    id: 3,
    image: img3,
    link: "", // No link provided
  },
  {
    id: 4,
    image: img4,
    link: "https://example.com/cert4",
  },
  {
    id: 5,
    image: img5,
    link: "https://example.com/cert5",
  },
  {
    id: 6,
    image: img6,
    link: "", // No link provided
  },
];
const Certificates = () => {
  return (
    <div className="certificates">
      <h1>My Certifications</h1>
      <div className="certificates-grid">
        {listOfCertificates.map((eachobj) => {})}
      </div>
    </div>
  );
};

export default Certificates;
