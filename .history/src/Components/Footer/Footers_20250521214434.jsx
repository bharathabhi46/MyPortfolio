import React from "react";
import "./Footers.css";

const Footers = () => {
  return (
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
  );
};

export default Footers;
