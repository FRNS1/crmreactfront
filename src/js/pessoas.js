import React, { useEffect, useState } from 'react';
import '../css/tela_pessoas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Telapessoas() {
  const navigate = useNavigate();
  const [customersList, setCustomersList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState('TODOS'); // Estado para armazenar a opção de 'Business'
  const [loading, setLoading] = useState(true);


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
      setLoading(false);
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
    if (!loading) {
      handleSearchButtonClick();
  }
}, [loading]);

  function formataTelefone(telefone) {
    try {
      const partesTelefone = telefone.split('')
      if (partesTelefone.length == 11) {
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

      } else if (partesTelefone.length == 10) {
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
    } catch (error) {
      console.log(error);
    }
  }

  function formataCnpj(cnpj) {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }

  function formataCpf(cpf) {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Filtrar a lista de empréstimos com base no valor de pesquisa e na opção de 'Business'.
    const newFilteredLoans = customersList.filter((customer) => {
        const businessCondition = selectedBusiness === 'TODOS' || (customer.cpf == null ? 'PJ' : 'PF') == selectedBusiness;
        const nameCondition = selectedBusiness === '' || (
          customer.cpf == null ? customer.razaoSocial.toLowerCase().includes(searchValue.toLowerCase()) : customer.nome.toLowerCase().includes(searchValue.toLowerCase())
        );
        return businessCondition && nameCondition;
    });
    setFilteredLoans(newFilteredLoans);
}, [customersList, selectedBusiness, searchValue]); // Atualiza os resultados do filtro sempre que listLoans, selectedBusiness ou searchValue mudar

const handleSearchButtonClick = () => {
    // Quando o botão de pesquisa for clicado, você pode executar a mesma lógica de filtragem
    const newFilteredLoans = customersList.filter((customer) => {
      const businessCondition = selectedBusiness == 'TODOS' || (customer.cpf == null ? 'PJ' : 'PF') == selectedBusiness;
      const nameCondition = selectedBusiness === '' || (
        customer.cpf == null ? customer.razaoSocial.toLowerCase().includes(searchValue.toLowerCase()) : customer.nome.toLowerCase().includes(searchValue.toLowerCase())
      );
      return businessCondition && nameCondition;
  });
  setFilteredLoans(newFilteredLoans);
};

const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
};

const handleBusinessSelectChange = (event) => {
    setSelectedBusiness(event.target.value);
    // Ao selecionar uma opção de 'Business', chame a função de pesquisa para atualizar imediatamente os resultados.
    handleSearchButtonClick();
};

  return (
    <div className='containerPrincipal'>
      <div>
        <div className='positionNavLateral'>
          <NavLateral />
        </div>
        <div className='positionNavSuperior'>
          <NavSuperior />
        </div>
      </div>
      <div className='containerGeral'>
        <div className='textoPropostas'>
          <text className='stringTitulos'> Clientes </text>
        </div>
        <div className='filtrosCliente'>
          <div className='divfiltroSelectRegistroPagamentos'>
            <label className='labelFiltros'> Tipo-Cliente </label>
            <select className='filtroSelect' onChange={handleBusinessSelectChange} value={selectedBusiness}>
              <option value='TODOS' className='optionsFiltroSelect'>TODOS</option>
              <option value='PF' className='optionsFiltroSelect'>PF</option>
              <option value='PJ' className='optionsFiltroSelect'>PJ</option>
            </select>
          </div>
          <div className='caixaPesquisaNomeClienteRegistroPagamentos'>
            <div className='filtroNomeClienteRegistroPagamentos'>
              <label className='labelFiltros'> Nome </label>
              <input
                className="inputPesquisa"
                placeholder="Pesquisar"
                value={searchValue}
                onChange={handleSearchInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchButtonClick();
                  }
                }}
              />
            </div>
            <div className='divbotaoPesquisaNomeClienteRegistroPagamentos'>
              <button className='botaoPesquisaNomeClienteRegistroPagamentos' onClick={handleSearchButtonClick}>
                <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
              </button>
            </div>
          </div>
          <div className='botaoCadastrar'>
            <button className="textoCadastrar">
              <span className='stringCadastrar' onClick={handleButtonClick}> Cadastrar Cliente </span>
            </button>
          </div>
        </div>
      </div>
      <div className='divTabelaCLientes'>
        <table className='tabelaClientes'>
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
            {filteredLoans.map((customer) => (
              <tr className='textodados' key={customer.customerId}>
                <td>{customer.cpf == null ? customer.razaoSocial : customer.nome}</td>
                <td>{customer.cpf == null ? 'PJ' : 'PF'}</td>
                <td>{customer.cpf == null ? formataCnpj(customer.cnpj) : formataCpf(customer.cpf)}</td>
                <td>{customer.email == 'nan' ? 'Sem email' : customer.email}</td>
                <td>{formataTelefone(customer.telefone)}</td>
                <td className='colunaVer'>
                  <button className="botaoTDVer" style={{ backgroundColor: '#081535' }}>
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