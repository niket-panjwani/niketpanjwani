import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li> <Link to="home" smooth={true} duration={500}>&lt;Home/&gt;</Link> </li>
        <li> <Link to="about" smooth={true} duration={500}>&lt;About/&gt;</Link> </li>
        <li> <Link to="contact" smooth={true} duration={500}>&lt;Contact/&gt;</Link> </li>
        <li> <Link to="contact" smooth={true} duration={500}>&lt;Resume/&gt;</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;