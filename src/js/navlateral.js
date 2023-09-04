import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../css/sidebar.css';

function NavLateral() {
  const navigate = useNavigate();
  const navegaParaClientes = () => {
    navigate('/pessoas');
  };

  const navegaParaPropostas = () => {
    navigate('/visualizacaopropostas');
  };

  return (
        <div className="sidebar">
          <img className="deltalogoazul" src={require('../imgs/deltalogoazul.png')} alt="Logo" />
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <FontAwesomeIcon className="icone" icon={faChartLine} />
              <text className='item-text'>Dashboard</text>
            </li>
            <hr className='line'></hr>
            <li className="sidebar-item" onClick={navegaParaClientes}>
              <FontAwesomeIcon className="icone" icon={faIdBadge} />
              <text className='item-text'>Clientes</text>
            </li>
            <hr className='line'></hr>
            <li className="sidebar-item" onClick={navegaParaPropostas}>
              <FontAwesomeIcon className="icone" icon={faHandshake} />
              <text className='item-text'>Propostas</text>
            </li>
            <hr className='line'></hr>
          </ul>
        </div>
  );
}

export { NavLateral };