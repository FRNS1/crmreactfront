import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';
import { NavSuperior } from '../js/navsuperior';
import { Helmet } from 'react-helmet';

function NavLateral() {
  return (
    <div>
      <NavSuperior />
      <Helmet>
        <link rel="icon" type="image/x-icon" href={require('../imgs/deltalogoazul.png')} />
        <title>Teste</title>
      </Helmet>
      <div className="sidebar">
        <img className="deltalogoazul" src={require('../imgs/deltalogoazul.png')} alt="Logo" />
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <FontAwesomeIcon className="icone" icon={faChartLine} />
            <text className='item-text'>Dashboard</text>
          </li>
          <hr className='line'></hr>
          <li className="sidebar-item">
            <FontAwesomeIcon className="icone" icon={faIdBadge} />
            <text className='item-text'>Clientes</text>
          </li>
          <hr className='line'></hr>
          <li className="sidebar-item">
            <FontAwesomeIcon className="icone" icon={faHandshake} />
            <text className='item-text'>Propostas</text>
          </li>
          <hr className='line'></hr>
        </ul>
      </div>
    </div>
  );
}

export { NavLateral };