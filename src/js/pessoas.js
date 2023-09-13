import React, { useEffect, useState } from 'react';
import '../css/tela_pessoas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
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

  function formataCnpj(cnpj) {
    const partesCNPJ = cnpj.split('')
    const parte1 = partesCNPJ[0];
    const parte2 = partesCNPJ[1];
    const parte3 = partesCNPJ[2];
    const parte4 = partesCNPJ[3];
    const parte5 = partesCNPJ[4];
    const parte6 = partesCNPJ[5];
    const parte7 = partesCNPJ[6];
    const parte8 = partesCNPJ[7];
    const parte9 = partesCNPJ[8];
    const parte10 = partesCNPJ[9];
    const parte11 = partesCNPJ[10];
    const parte12 = partesCNPJ[11];
    const parte13 = partesCNPJ[12];
    const parte14 = partesCNPJ[13];
    return `${parte1}${parte2}.${parte3}${parte4}${parte5}.${parte6}${parte7}${parte8}/${parte9}${parte10}${parte11}${parte12}-${parte13}${parte14}`;
  }

  function formataCpf(cpf) {
    // let cpf2 = cpf + "babaca";
    // return cpf2;
    const partesCPF = cpf.split('')
    const parte1 = partesCPF[0];
    const parte2 = partesCPF[1];
    const parte3 = partesCPF[2];
    const parte4 = partesCPF[3];
    const parte5 = partesCPF[4];
    const parte6 = partesCPF[5];
    const parte7 = partesCPF[6];
    const parte8 = partesCPF[7];
    const parte9 = partesCPF[8];
    const parte10 = partesCPF[9];
    const parte11 = partesCPF[10];
    return `${parte1}${parte2}${parte3}.${parte4}${parte5}${parte6}.${parte7}${parte8}${parte9}-${parte10}${parte11}`;

  }

  return (
    <div className='containerPrincipal'>
      <div>
        <NavSuperior />
        <NavLateral />
      </div>
      <div className='containerGeral'>
        <div className='textoPropostas'>
          <text className='stringTitulos'> Clientes </text>
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
                  <button className="botaoVer" style={{ backgroundColor: '#081535' }}>
                    <span className='stringVer' style={{ color: 'white' }} onClick={() => visualizacaoCliente(customer.customerId)}>visualizar</span>
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