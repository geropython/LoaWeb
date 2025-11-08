import React from 'react';
import '../styles/Navbar.css';
import Logo from '../imgs/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo Loa Ibañez" />
        {/* <span className="navbar-brand">Loa Ibañez</span> */}
      </div>
      <ul className="navbar-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Nosotros">Acerca de mi</a></li>
        <li><a href="#Servicios">Servicios</a></li>
        <li><a href="#Contacto" className="contact-link">Contactame</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
