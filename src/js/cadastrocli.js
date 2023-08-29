import React from 'react';
import '../css/cadastro_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function Cadastrocli() {
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
                  <td> FORMS </td>
                  <td> FORMS </td>
                  <td> FORMS </td>
                  <td> FORMS </td>
                  <td> FORMS </td>
                  <td> FORMS </td>
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
    
export {Cadastrocli};