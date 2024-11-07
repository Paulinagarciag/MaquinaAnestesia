import '../styles/FuncionamientoStyles.css';
import React, { useEffect } from 'react';

const Funcionamiento = () => {
  useEffect(() => {
    document.title = 'Funcionamiento';
  }, []);

  return (
      <div className="educaplay-container">
        <h2>A continuación, explora el diagrama de flujo del funcionamiento del equipo</h2>
        <iframe
          allow="fullscreen; autoplay;"
          allowFullScreen
          width="795"
          height="690"
          frameBorder="0"
          src="https://es.educaplay.com/juego/21111368-funcionamiento_maquina_anestesia_ge_carestation_620.html"
        ></iframe>
      </div>
  );
};

export default Funcionamiento;
