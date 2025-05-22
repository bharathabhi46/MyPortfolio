import React from "react";
import "./Certificates.css";
import hashgraph from "../../assets/hashgraph.png";
import java from "../../assets/java.png";
import html from "../../assets/HTML,CSS CERTIFICATE.png";
import js from "../../assets/JAVASCRIPT.jpg";
import react from "../../assets/REACT CERTIFICATE.png";
import mysql from "../../assets/MYSQL.png";
let Certifications = [
  {
    id: 1,
    image: "/images/cert1.jpg",
    link: "https://example.com/cert1",
  },
  {
    id: 2,
    image: "/images/cert2.jpg",
    link: "https://example.com/cert2",
  },
  {
    id: 3,
    image: "/images/cert3.jpg",
    link: "", // No link provided
  },
  {
    id: 4,
    image: "/images/cert4.jpg",
    link: "https://example.com/cert4",
  },
  {
    id: 5,
    image: "/images/cert5.jpg",
    link: "https://example.com/cert5",
  },
  {
    id: 6,
    image: "/images/cert6.jpg",
    link: "", // No link provided
  },
];
const Certificates = () => {
  return (
    <div className="certificates">
      <div className="certificate-img">
        <img src={js} alt="" />
      </div>
      <div className="certificate-img">
        <img src={java} alt="" />
      </div>
      <div className="certificate-img">
        <img src={react} alt="" />
      </div>
      <div className="certificate-img">
        <img src={html} alt="" />
      </div>
      <div className="certificate-img">
        <img src={mysql} alt="" />
      </div>
      <div className="certificate-img">
        <img src={hashgraph} alt="" />
      </div>
    </div>
  );
};

export default Certificates;
