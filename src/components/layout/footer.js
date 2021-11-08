import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="sitemap">
        <div className="container">
          <h3>Useful Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about-gujarat">About Gujarat</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="container">
          <h3>To Begin Your Journey</h3>
          <Link to="/">Home</Link>
          <Link to="/about-gujarat">About Gujarat</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="container">
          <h3>Plan Your Stay</h3>
          <Link to="/">Home</Link>
          <Link to="/about-gujarat">About Gujarat</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="container">
          <h3>Online Booking</h3>
          <Link to="/">Home</Link>
          <Link to="/about-gujarat">About Gujarat</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
