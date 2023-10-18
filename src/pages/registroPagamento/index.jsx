import React, { useState, useEffect } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { FcApproval } from 'react-icons/fc'
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NavSuperior from '../../components/Navsuperior'
import Logo from '../../components/Logo'
import Sidebar from '../../components/Sidebar'
import ToggleTheme from '../../components/ToggleTheme'

// import './style.css'
import { 
  ContainerHeader,
  PesquisaContainer,
  LabelinputContainer,
  ContentHeader,
  IconPesquisa,
  LabelSelect,
  TableContainer 
} from './style'

const { Header, Sider, Content } = Layout

export default function RegistroPagamentos() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate();
  const [listLoans, setListLoans] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState('TODOS'); // Estado para armazenar a opção de 'Business'
  const [loading, setLoading] = useState(true);
  
  async function fetchLoans() {
    const token = Cookies.get('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("http://35.175.231.117:8080/api/v1/payments/getloans", requestOptions);
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setListLoans(result);
        setLoading(false);
    } catch (error) {
        console.error('error', error);
    }
}

  async function viewLoaninfo(loan) {
      await Cookies.set("chosenLoan", loan);
      navigate('/registropagamentoindividual')
  }

  useEffect(() => {
      fetchLoans();
      if (!loading) {
          handleSearchButtonClick();
      }
  }, [loading]);

  useEffect(() => {
      // Filtrar a lista de empréstimos com base no valor de pesquisa e na opção de 'Business'.
      const newFilteredLoans = listLoans.filter((loan) => {
          const businessCondition = selectedBusiness === 'TODOS' || loan.business === selectedBusiness;
          const nameCondition = selectedBusiness === '' || (
              loan.isCnpj === false ? loan.nomeCliente.toLowerCase().includes(searchValue.toLowerCase()) : loan.razaoSocial.toLowerCase().includes(searchValue.toLowerCase())
          );
          return businessCondition && nameCondition;
      });
      setFilteredLoans(newFilteredLoans);
  }, [listLoans, selectedBusiness, searchValue]); // Atualiza os resultados do filtro sempre que listLoans, selectedBusiness ou searchValue mudar

  const handleSearchButtonClick = () => {
      // Quando o botão de pesquisa for clicado, você pode executar a mesma lógica de filtragem
      const newFilteredLoans = listLoans.filter((loan) => {
          const businessCondition = selectedBusiness === '' || loan.business === selectedBusiness;
          const nameCondition = selectedBusiness === 'TODOS' || (
              loan.isCnpj === false ? loan.nomeCliente.toLowerCase().includes(searchValue.toLowerCase()) : loan.razaoSocial.toLowerCase().includes(searchValue.toLowerCase())
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

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return(
    <Layout>
      <Sider 
        tigger={null}
        collapsible
        collapsed={collapsed}
        className='sidebarContainer' 
        theme={darkTheme ? 'light' : 'dark'}>
        <Logo/>
        <Sidebar darkTheme={darkTheme}/>
        <ToggleTheme 
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      </Sider>
      <Layout>
        <Header
           style={{
            padding: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'white',
            boxShadow: '2vh 0vh 2vh rgba(122, 58, 206, 0.2)'
          }}
        >
          <div>
            <Button 
              type='text'
              className="toogle"
              onClick={() => setCollapsed(!collapsed)} 
              icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            />
          </div>
          <NavSuperior/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ContainerHeader>
            <ContentHeader>
              <PesquisaContainer>
                <LabelinputContainer>
                  <label> 
                    Nome Cliente 
                  </label>
                  <input
                    placeholder="Pesquisar"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchButtonClick();
                        }
                    }}
                  />
                </LabelinputContainer>
                <IconPesquisa>
                  <button  onClick={handleSearchButtonClick}>
                    <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                  </button>
                </IconPesquisa>
              </PesquisaContainer>
              <LabelSelect>
                <label > Business </label>
                <select  onChange={handleBusinessSelectChange} value={selectedBusiness}>
                  <option value='TODOS' >TODOS</option>
                  <option value='MASTER' >MASTER</option>
                  <option value='RISK' >RISK</option>
                  <option value='CHARGES' >CHARGES</option>
                  <option value='BDI DIGITAL' >BDI DIGITAL</option>
                  <option value='BDI DIGITAL MASTER' >BDI DIGITAL MASTER</option>
                  <option value='KEEPER MASTER' >KEEPER MASTER</option>
                  <option value='KEEPER' >KEEPER</option>
                  <option value='INDICADOR' >INDICADOR</option>
                </select>
              </LabelSelect>
            </ContentHeader>
          </ContainerHeader>

          <TableContainer>
              <table>
                <thead>
                  <tr >
                    <th> Business </th>
                    <th> ID Cliente </th>
                    <th> Nome Cliente </th>
                    <th> Saldo Devedor </th>
                    <th> Receita Esperada </th>
                    <th> Parcelas </th>
                    <th> Amortização Paga </th>
                    <th> Juros Pagos </th>
                    <th> Parcelas Pagas </th>
                    <th> Parcelas Atrasadas </th>
                    <th> Atrasado? </th>
                    <th> Total Atrasado </th>
                    <th> Status Contrato </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLoans.map((loan) => (
                    <tr  key={loan.proposalId}>
                      <td>{loan.business}</td>
                      <td>{loan.idCliente}</td>
                      <td className='pointer' onClick={() => viewLoaninfo(loan.proposalId)}>{loan.isCnpj == false ? loan.nomeCliente : loan.razaoSocial}</td>
                      <td>{`R$ ${loan.saldoDevedor}`}</td>
                      <td>{`R$ ${parseFloat(loan.receitaEsperada).toFixed(2)}`}</td>
                      <td>{loan.parcelas}</td>
                      <td> {`R$ ${parseFloat(loan.amortizacaoPaga).toFixed(2)}`}</td>
                      <td>{`R$ ${loan.jurosPagos}`}</td>
                      <td>{loan.parcelasPagas}</td>
                      <td>{loan.parcelasAtrasadas}</td>
                      <td>{loan.atrasado == true ? 'SIM' : 'NÃO'}</td>
                      <td>{`R$ ${parseFloat(loan.totalAtrasado).toFixed(2)}`}</td>
                      <td>{loan.statusContrato}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </TableContainer>
        </Content>
      </Layout>
    </Layout>
  )
}