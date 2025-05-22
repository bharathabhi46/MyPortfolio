import React from "react";
import "./Certificates.css";
import hashgraph from "../../assets/hashgraph.png";
import java from "../../assets/java.png";
import html from "../../assets/HTML,CSS CERTIFICATE.png";
import js from "../../assets/JAVASCRIPT.jpg";
import react from "../../assets/REACT CERTIFICATE.png";
import mysql from "../../assets/MYSQL.png";
const Certificates = () => {
  return (
    <div className="certificates">
      <div className="certificates-col-1">
        <div className="certificate-img">
          <img src={js} alt="" />
        </div>
        <div className="certificate-img">
          <img src={java} alt="" />
        </div>
        <div className="certificate-img">
          <img src={react} alt="" />
        </div>
      </div>
      <div className="certificates-col-2">
        <div className="certificate-img">
          <img src={js} alt="" />
        </div>
        <div className="certificate-img">
          <img src={java} alt="" />
        </div>
        <div className="certificate-img">
          <img src={react} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
