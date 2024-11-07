import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './NavigationStyles.css';

const Navigation = () => {
  return (
    <nav className="barraNavegacion">
      <div className="Navigation">
        <img src={logo} alt="Clinica Las Vegas" className="logo" />
        <ul className="navbar">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Introduccion">
              Introducción
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Funcionamiento">
              Funcionamiento
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/MaterialC">
              Material complementario
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Cuestionario">
              Cuestionario
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
