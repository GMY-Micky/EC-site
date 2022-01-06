import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <i className="fas fa-dollar-sign" /> ECOM
      </div>
      <div className="footer-top">
        <div className="footer-links">
          <ul>
            <li className="footer-links-head">Company</li>
            <Link to="/" className="footer-link">
              {" "}
              <li>About Us</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Work here</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Team</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Stories</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Affiliate</li>
            </Link>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="footer-links-head">Customer Support</li>
            <Link to="/" className="footer-link">
              {" "}
              <li>Customer Service</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Need a Repair</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Warrenty</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>FAQs</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="footer-links-head">Order & Returns</li>
            <Link to="/" className="footer-link">
              <li>Shipping</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Returns</li>
            </Link>
            <Link to="/" className="footer-link">
              <li>Promotions</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social-icons">
          <a href="#" className="social-icon">
            <i class="fab fa-facebook-f"></i>
            <span className="handle">/EcomPakistan</span>
          </a>
          <a href="#" className="social-icon">
            <i class="fab fa-twitter"></i>
            <span className="handle">/Ecom.Pakistan</span>
          </a>
          <a href="#" className="social-icon">
            <i class="fab fa-instagram"></i>
            <span className="handle">/Ecom_Pakistan</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
