import React from 'react';
import './AboutUs.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h2>About Us</h2>
          <p>Welcome to our e-commerce store. We offer a wide range of computers, laptops, and accessories at competitive prices. Our goal is to provide quality products and excellent customer service.</p>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
