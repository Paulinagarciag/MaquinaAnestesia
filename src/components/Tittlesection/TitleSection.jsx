// src/components/TitleSection/TitleSection.jsx
import React from 'react';
import './TitleSection.css';
import MaquinaIcon from '../../assets/Maquina.png';

const TitleSection = () => {
  return (
    <div className="title-section">
      <div class="title-content">
       <img src={MaquinaIcon} alt="Maquina Icon" className="title-icon" />
      <div>
      <h3 className="subtitle">Capacitación en el uso</h3>
      <h2 className="main-title">MAQUINA DE ANESTESIA</h2>
      <h2 className="secondary-title">GE Carestation 620</h2>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
