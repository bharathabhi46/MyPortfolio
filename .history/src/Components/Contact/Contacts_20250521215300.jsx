import React from "react";
import "./Contacts.css";
import linkedin from "./Contactsimages/Linkedin.png";
import github from "./Contactsimages/GitHub.png";
import leetcode from "./Contactsimages/LeetCode.png";
const Contacts = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      <hr className="simple-hr" />
      <p className="contact-subtitle">
        I'm always open to meaningful conversations, collaborations, or
        opportunities. Feel free to drop a message or connect with me through
        any of the platforms below — let’s build something great together.
      </p>

      <div className="contact-content">
        {/* Social Media Cards */}
        <div className="social-boxes">
          <div className="social-card">
            <img src={linkedin} alt="LinkedIn" className="social-logo" />
            <h3>LinkedIn</h3>
            <p>Connect with me professionally.</p>
            <a
              href="https://www.linkedin.com/in/bharath-balne-9989a5296/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-btn">Connect With Me</button>
            </a>
          </div>

          <div className="social-card">
            <img src={leetcode} alt="LeetCode" className="social-logo" />
            <h3>LeetCode</h3>
            <p>Check out my DSA practice.</p>
            <a
              href="https://leetcode.com/u/bharathabhibalne46/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-btn">Connect With Me</button>
            </a>
          </div>

          <div className="social-card">
            <img src={github} alt="GitHub" className="social-logo" />
            <h3>GitHub</h3>
            <p>See my projects and contributions.</p>
            <a
              href="https://github.com/bharathabhi46"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-btn">Connect With Me</button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
       <form
      className="contact-form"
      action="https://formspree.io/f/xbloerqv"
      method="POST"
    >
      <label>
        Your Email:
        <input type="email" name="email" required />
      </label>

      <label>
        Your Message:
        <textarea name="message" required></textarea>
      </label>

      {/* Add more fields here if needed */}
      <button type="submit">Send</button>
    </form>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
