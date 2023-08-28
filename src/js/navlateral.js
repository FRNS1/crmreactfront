import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importe FontAwesomeIcon
import { faChartLine } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de gráfico
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';

function NavLateral() {
  return (
    <div className="sidebar">
      <img className="deltalogoazul" src={require('../imgs/deltalogoazul.png')} alt="Logo" />
      <ul className="sidebar-menu">
          <li>
          <FontAwesomeIcon className="icone" icon={faChartLine} />
          Dashboard
          </li>
        <hr className='line'></hr>
          <li>
          <FontAwesomeIcon className="icone" icon={faIdBadge} />
          Clientes
          </li>
        <hr className='line'></hr>
          <li>
          <FontAwesomeIcon className="icone" icon={faHandshake} />
          Propostas
          </li>
        <hr className='line'></hr>
      </ul>
    </div>
  );
}

export { NavLateral };