import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <ul>
        <li> <Link to="/home">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
      </ul>
    </nav>
  );
};

export default Navbar;