import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Loa Todos los derechos reservados.</span>
      <p className="footer-tagline">💡 Proyectos Innovadores</p>
    </div>
  </footer>
);

export default Footer;
