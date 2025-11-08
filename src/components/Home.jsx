import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <section id="Home" className="home-section">
    <div className="home-content">
      <h1 className="home-title">🚀 Bienvenido a <span>Loa Ibañez</span></h1>
      <p className="home-subtitle">
        Soy experta en <strong>soluciones de Power BI</strong>.
      </p>
      <p className="home-description">
        Me especializo en brindar soporte tecnológico eficiente, confiable y a la medida de tu negocio.<br />
        Mi objetivo es simple: <strong>acelerar tu crecimiento</strong> con tecnología inteligente y resultados reales.
      </p>
      <a href="#Servicios" className="home-button">Conocé mi servicios</a>
    </div>
  </section>
);

export default Home;