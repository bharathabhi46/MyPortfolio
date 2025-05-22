import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      <div className="contact-content">
        {/* Social Boxes */}
        <div className="social-boxes">
          <div className="social-card">
            <h3>LinkedIn</h3>
            <p>Connect with me professionally.</p>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit</button>
            </a>
          </div>
          <div className="social-card">
            <h3>LeetCode</h3>
            <p>Check out my DSA practice.</p>
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit</button>
            </a>
          </div>
          <div className="social-card">
            <h3>GitHub</h3>
            <p>See my projects and contributions.</p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit</button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
