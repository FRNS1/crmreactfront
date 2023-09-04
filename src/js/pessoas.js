import React, { useEffect, useState } from 'react';
import '../css/tela_pessoas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function Telapessoas() {
  const navigate = useNavigate();
  const [customersList, setCustomersList] = useState([]);

  const handleCustomerListChange = (data) => {
    setCustomersList(data);
  }

  async function getData() {
    const token = Cookies.get('token');
    const grupo = Cookies.get('usergroup');
    const userid = Cookies.get('userid');
    const url = 'http://127.0.0.1:8080/api/v1/customers/getall';
    try {
      const response = await axios.post(
        url,
        {
          grupo: `${grupo}`,
          user_id: `${userid}`
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      handleCustomerListChange(response.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  const handleButtonClick = () => {
    navigate('/cadastrocli');
  };

  const visualizacaoCliente = (cliente) => {
    Cookies.set('clienteSelecionado', cliente);
    navigate('/visucli');
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='containerPrincipal'>
      <div>
        <NavSuperior />
        <NavLateral />
      </div>
      <div className='containerGeral'>
        <div className='tituloCli'>
            <h2> Clientes </h2>
        </div>
        <div className='botaoCadastrar'>
          <button className="textoCadastrar" onClick={handleButtonClick}>
            <span className='stringCadastrar'> Cadastrar Cliente </span>
          </button>
        </div>
        <table className='tabela'>
          <thead>
            <tr className='textoClasses'>
              <td>Nome</td>
              <td>Tipo-Cliente</td>
              <td>Identidade</td>
              <td>Email</td>
              <td>Telefone</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
          {customersList.map((customer) => (
            <tr className='textodados' key={customer.customerId}>
              <td>{customer.cpf == null ? customer.razaoSocial : customer.nome}</td>
              <td>{customer.cpf == null ? 'PJ' : 'PF'}</td>
              <td>{customer.cpf == null ? customer.cnpj : customer.cpf}</td>
              <td>{customer.email}</td>
              <td>{customer.telefone}</td>
              <td className='colunaVer'>
                <button className="botaoVer" style={{backgroundColor: '#081535'}}>
                  <span className='stringVer' style={{color: 'white'}} onClick={() => visualizacaoCliente(customer.customerId)}>visualizar</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export { Telapessoas };