import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/chatbox">Chatbox</a></li>
            <li><a href="/toolkit">Toolkit</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@neurospace.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Neuro Street, Brain City</p>
        </div>

      
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank">📘</a>
            <a href="https://twitter.com" target="_blank">🐦</a>
            <a href="https://instagram.com" target="_blank">📸</a>
            <a href="https://linkedin.com" target="_blank">🔗</a>
          </div>
        </div>
      </div>

   
      <div className="footer-bottom">
        <p>© 2025 NeuroSpace. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
