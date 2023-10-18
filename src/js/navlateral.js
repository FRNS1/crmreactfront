import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../css/sidebar.css';
import Cookies from 'js-cookie';

function NavLateral() {
  const navigate = useNavigate();
  const navegaParaDashboard = () => {
    navigate('/dashboard');
  };
  const navegaParaClientes = () => {
    navigate('/pessoas');
  };
  const handleButtonClickPropostas = () => {
    navigate('/visualizacaopropostas');
  };
  const handleButtonClickPagamentos = () => {
    navigate('/registropagamentos');
  };

  const handleButtonClickDeltaHub = () => {
    navigate('/deltahubbackoffice');
  };

  return (
    <div className="sidebar">
      <img className="deltalogoazul" src={require('../imgs/deltalogoazul.png')} alt="Logo" />
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <FontAwesomeIcon className="icone" icon={faChartLine} />
          <span className='item-text'>Dashboard</span>
        </li>
        <hr className='line'></hr>
        <li className="sidebar-item" onClick={navegaParaClientes}>
          <FontAwesomeIcon className="icone" icon={faIdBadge} />
          <span className='item-text'>Clientes</span>
        </li>
        <hr className='line'></hr>
        <li className="sidebar-item" onClick={handleButtonClickPropostas}>
          <FontAwesomeIcon className="icone" icon={faHandshake} />
          <span className='item-text'>Propostas</span>
        </li>
        <hr className='line'></hr>
        {Cookies.get('usergroup') == 'MASTER' ? (
          <>
            <li className="sidebar-item" onClick={handleButtonClickPagamentos}>
              <FontAwesomeIcon className="icone" icon={faDollarSign} />
              <span className='item-text'>Pagamentos</span>
            </li>
            <hr className='line'></hr>
            <li className="sidebar-item" onClick={() => handleButtonClickDeltaHub}>
              <FontAwesomeIcon className="icone" icon={faMobile} />
              <span className='item-text'>DeltaHub Back Office</span>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}

export { NavLateral };