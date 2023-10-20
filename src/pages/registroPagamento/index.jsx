import React, { useState, useEffect } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { 
  Paper, 
  TableContainer, 
  Table,
  TableHead, 
  TableRow,
  TableCell, 
  TableBody 
} from '@mui/material'

import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NavSuperior from '../../components/Navsuperior'
import Logo from '../../components/Logo'
import Sidebar from '../../components/Sidebar'
import ToggleTheme from '../../components/ToggleTheme'

import { 
  ContainerHeader,
  PesquisaContainer,
  LabelinputContainer,
  ContentHeader,
  IconPesquisa,
  LabelSelect,
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
            marginTop: '24px',
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

          <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '80px'}}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> Business </TableCell>
                    <TableCell> ID Cliente </TableCell>
                    <TableCell> Nome Cliente </TableCell>
                    <TableCell> Saldo Devedor </TableCell>
                    <TableCell> Receita Esperada </TableCell>
                    <TableCell> Parcelas </TableCell>
                    <TableCell> Amortização Paga </TableCell>
                    <TableCell> Juros Pagos </TableCell>
                    <TableCell> Parcelas Pagas </TableCell>
                    <TableCell> Parcelas Atrasadas </TableCell>
                    <TableCell> Atrasado? </TableCell>
                    <TableCell> Total Atrasado </TableCell>
                    <TableCell> Status Contrato </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredLoans.map((loan) => (
                    <TableRow  key={loan.proposalId}>
                      <TableCell>{loan.business}</TableCell>
                      <TableCell>{loan.idCliente}</TableCell>
                      <TableCell sx={{ color: '#081535'}} onClick={() => viewLoaninfo(loan.proposalId)}>{loan.isCnpj === false ? loan.nomeCliente : loan.razaoSocial}</TableCell>
                      <TableCell>{`R$ ${loan.saldoDevedor}`}</TableCell>
                      <TableCell>{`R$ ${parseFloat(loan.receitaEsperada).toFixed(2)}`}</TableCell>
                      <TableCell>{loan.parcelas}</TableCell>
                      <TableCell> {`R$ ${parseFloat(loan.amortizacaoPaga).toFixed(2)}`}</TableCell>
                      <TableCell>{`R$ ${loan.jurosPagos}`}</TableCell>
                      <TableCell>{loan.parcelasPagas}</TableCell>
                      <TableCell>{loan.parcelasAtrasadas}</TableCell>
                      <TableCell>{loan.atrasado === true ? 'SIM' : 'NÃO'}</TableCell>
                      <TableCell>{`R$ ${parseFloat(loan.totalAtrasado).toFixed(2)}`}</TableCell>
                      <TableCell>{loan.statusContrato}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Content>
      </Layout>
    </Layout>
  )
}