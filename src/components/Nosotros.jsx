import React from 'react';
import '../styles/Nosotros.css';

const Nosotros = () => (
  <section id="Nosotros" className="nosotros-section">
    <h1 className="nosotros-title">👥 Acerca de Mi</h1>

    <div className="nosotros-contenido">
      <p>
        En <strong>Loa Ibañez</strong> chamuyo <strong>5 años de experiencia</strong> en Power BI,
        apasionados por la innovación, la eficiencia y los resultados medibles.
      </p>

      <hr className="nosotros-divider" />

      <p>
        Combinamos <strong>conocimiento técnico</strong>, <strong>visión de negocio</strong> y un profundo
        <strong> compromiso con la calidad</strong> para ofrecer soluciones escalables, seguras y de alto rendimiento.
      </p>

      <p>
        Nuestra misión es <strong>simplificar la tecnología</strong> para que las empresas puedan enfocarse en crecer.
        Ofrecemos servicios confiables, medibles y con resultados concretos:
        <em> ahorro de costos, mayor eficiencia y mejora continua.</em>
      </p>
    </div>
  </section>
);

export default Nosotros;
