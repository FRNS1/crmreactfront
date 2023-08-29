import React from 'react';
import '../css/tela_pessoas.css';
import { NavSuperior } from '../js/navsuperior'; // Importe NavSuperior
import { NavLateral } from '../js/navlateral'; // Importe NavSuperior

// nome / tipo-cliente / identidade / email / telefone / ver --> colunas a fazer

function Telapessoas() {
return (
    <div>
    <NavSuperior />
    <NavLateral />
      <div className='caixatabela'>
        <div className='titulo'>
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