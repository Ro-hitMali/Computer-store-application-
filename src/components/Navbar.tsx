import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../public/assets/logo.png'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/computers">Computers</Link>
        </li>
        <li>
          <Link to="/laptops">Laptops</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
    </nav>
  );
};

export default Navbar;
