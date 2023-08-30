import React from 'react';
import '../css/tela_pessoas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Telapessoas() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/cadastrocli');
  };

return (
    <div>
    <NavSuperior />
    <NavLateral />
      <div className='caixatabela'>
        <div className='botaoCadastrar'>
          <button className="textoCadastrar" onClick={handleButtonClick}> 
            <span className='stringCadastrar'> Cadastrar Cliente </span>
          </button>
        </div>
        <div className='tituloCli'>
          <h2> Clientes </h2>
        </div>
        <table className='tabela'>
          <thead>
            <tr className='textoclasses'>
              <td> Nome </td>
              <td> Tipo-Cliente </td>
              <td> Identidade </td>
              <td> Email </td>
              <td> Telefone </td>
              <td> Ver </td>
            </tr>
          </thead>
          <tbody>
            <tr className='textodados'>
              <td> TESTE </td>
              <td> TESTE </td>
              <td> TESTE </td>
              <td> TESTE </td>
              <td> TESTE </td>
              <td> TESTE </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export {Telapessoas};