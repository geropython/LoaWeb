import React from 'react';
import '../styles/Servicios.css';

const Servicios = () => (
  <section id="Servicios" className="servicios-section">
    <h1 className="servicios-title">💼 Servicios</h1>

    <div className="servicios-container">

      <div className="servicio-card">
        <div className="card-content">
          <h2>Power-BI</h2>
          <h6>Click aquí</h6>
        </div>
      </div>
      
      <button className="servicio-card">
        <div className="card-content">
          <h2>Desarrollo UX/UI</h2>
          <h6>Click aquí</h6>
        </div>
      </button>

      <button className="servicio-card">
        <div className="card-content">
          <h2>Maquetas Figma</h2>
          <h6>Click aquí</h6>
        </div>
      </button>
      
      <button className="servicio-card">
        <div className="card-content">
          <h2>Power Apps</h2>
          <h6>Click aquí</h6>
        </div>
      </button>

      <button className="servicio-card">
        <div className="card-content">
          <h2>Power Automate</h2>
          <h6>Click aquí</h6>
        </div>
      </button>

      <button className="servicio-card">
        <div className="card-content">
          <h2></h2>
         <h6>Click aquí</h6>
        </div>
      </button>
    </div>
  </section>
);

export default Servicios;
