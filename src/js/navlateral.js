import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';
import { NavSuperior } from '../js/navsuperior'; // Importe NavSuperior

function NavLateral() {
  return (
    <div>
      <NavSuperior /> {/* Use a função NavSuperior aqui */}
      <div className="sidebar">
        <img className="deltalogoazul" src={require('../imgs/deltalogoazul.png')} alt="Logo" />
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <FontAwesomeIcon className="icone" icon={faChartLine} />
            Dashboard
          </li>
          <hr className='line'></hr>
          <li className="sidebar-item">
            <FontAwesomeIcon className="icone" icon={faIdBadge} />
            Clientes
          </li>
          <hr className='line'></hr>
          <li className="sidebar-item">
            <FontAwesomeIcon className="icone" icon={faHandshake} />
            Propostas
          </li>
          <hr className='line'></hr>
        </ul>
      </div>
    </div>
  );
}

export { NavLateral };