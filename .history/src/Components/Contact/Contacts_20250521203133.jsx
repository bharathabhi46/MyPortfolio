import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        I'm always open to collaborating or chatting. Drop me a message or find
        me on these platforms.
      </p>

      <div className="contact-content">
        {/* Social Media Cards */}
        <div className="social-boxes">
          <div className="social-card">
            <img src="/linkedin.png" alt="LinkedIn" className="social-logo" />
            <h3>LinkedIn</h3>
            <p>Connect with me professionally.</p>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-btn">Visit</button>
            </a>
          </div>

          <div className="social-card">
            <img src="/leetcode.png" alt="LeetCode" className="social-logo" />
            <h3>LeetCode</h3>
            <p>Check out my DSA practice.</p>
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-btn">Visit</button>
            </a>
          </div>

          <div className="social-card">
            <img src="/github.png" alt="GitHub" className="social-logo" />
            <h3>GitHub</h3>
            <p>See my projects and contributions.</p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-btn">Visit</button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea placeholder="Write your message..." required></textarea>

          <button type="submit" className="glow-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
