import './FooterStyles.css';
import React from 'react';
import logo from '../../assets/logo.png';
import instagramIcon from '../../assets/instagram_icon.png'; // Ruta del ícono de Instagram
import facebookIcon from '../../assets/facebook_icon.png'; // Ruta del ícono de Facebook

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Informacion'>
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className='SocialIcons'>
          <a href="https://www.instagram.com/clinicalasvegasoficial/?hl=es" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/clinicalasvegasoficial/?locale=ru_RU&_rdr" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
