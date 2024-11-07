import '../styles/MaterialCStyles.css';
import React, { useEffect } from 'react';

const MaterialC = () => {
  useEffect(() => {
    document.title = 'Material Complementario';
  }, []);

  return (
    <div className='container'>
      <h1>Material Complementario</h1>

      <div className="pdf-container">
        <h2>Ficha Técnica</h2>
        <a
          href="../../public/Carestation 620_ficha técnica.pdf" // Reemplaza con la ruta correcta
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../public/icons8-documentation-67.png" // Ruta de la imagen de la ficha técnica
            alt="Ficha Técnica"
            style={{ width: '200px', margin: '20px' }} // Ajusta el tamaño según sea necesario
          />
        </a>
        <p>Ver Ficha Técnica </p>
      </div>

      <div className="pdf-container">
        <h2>Página Oficial</h2>
        <a
          href="https://latam.gehealthcare.com/products/anesthesia-delivery/carestation-600-series/carestation-620" // Reemplaza con la URL de la página oficial
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../public/icons8-diseños-de-grupo-24.png" // Ruta de la imagen de la página oficial
            alt="Página Oficial"
            style={{ width: '200px', margin: '20px' }} // Ajusta el tamaño según sea necesario
          />
        </a>
        <p>Visitar Página Oficial</p>
      </div>

      <div className="video-container">
        <h2>Videos</h2>
        <div className="video">
          <h3>Cómo realizar Autocomprobación completa de Máquina de anestesia GE Carestation 620</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AbsDYP0ODEo"
            title="Cómo realizar Autocomprobación completa de Máquina de anestesia GE Carestation 620"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <h3>GE Carestation 620 Anesthesia Machines - Soma Tech Intl</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8kPa7ldwewY"
            title="GE Carestation 620 Anesthesia Machines - Soma Tech Intl"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MaterialC;
