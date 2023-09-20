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
    const url = 'http://35.175.231.117:8080/api/v1/customers/getall';
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
      console.log(response.data);
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

  function formataTelefone(telefone) {
    const partesTelefone = telefone.split('')
    if (partesTelefone.length = 11) {
      const parte1 = partesTelefone[0];
      const parte2 = partesTelefone[1];
      const parte3 = partesTelefone[2];
      const parte4 = partesTelefone[3];
      const parte5 = partesTelefone[4];
      const parte6 = partesTelefone[5];
      const parte7 = partesTelefone[6];
      const parte8 = partesTelefone[7];
      const parte9 = partesTelefone[8];
      const parte10 = partesTelefone[9];
      const parte11 = partesTelefone[10];
      return `(${parte1}${parte2}) ${parte3}${parte4}${parte5}${parte6}${parte7}-${parte8}${parte9}${parte10}${parte11}`;

    } else if(partesTelefone.length = 10) {
      const parte1 = partesTelefone[0];
      const parte2 = partesTelefone[1];
      const parte3 = partesTelefone[2];
      const parte4 = partesTelefone[3];
      const parte5 = partesTelefone[4];
      const parte6 = partesTelefone[5];
      const parte7 = partesTelefone[6];
      const parte8 = partesTelefone[7];
      const parte9 = partesTelefone[8];
      const parte10 = partesTelefone[9];
      return `(${parte1}${parte2}) ${parte3}${parte4}${parte5}${parte6}-${parte7}${parte8}${parte9}${parte10}`;

    } else {
      return 'Telefone Inválido';
    }
  }

  function formataCnpj(cnpj) {
    const partesCNPJ = cnpj.split('')
    if (partesCNPJ.length != 14) {
      return `Documento inválido`
      
    } else {
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
  }

    function formataCpf(cpf) {
      // let cpf2 = cpf + "babaca";
      // return cpf2;
      const partesCPF = cpf.split('')
      if (partesCPF.length != 11) {
        return `Documento inválido`
      } else {
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
                  <td>{customer.cpf == null ? formataCnpj(customer.cnpj) : formataCpf(customer.cpf)}</td>
                  <td>{customer.email == 'nan' ? 'Sem email' : customer.email}</td>
                  <td>{formataTelefone(customer.telefone)}</td>
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