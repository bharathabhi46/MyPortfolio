import React from "react";
import "./Certificates.css";
import hashgraph from "../../assets/hashgraph.png";
import java from "../../assets/java.png";
import html from "../../assets/HTML,CSS CERTIFICATE.png";
import js from "../../assets/JAVASCRIPT.jpg";
import react from "../../assets/REACT CERTIFICATE.png";
import mysql from "../../assets/MYSQL.png";
let Certifications = [];
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
