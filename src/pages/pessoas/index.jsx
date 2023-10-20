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
  TableBody,
} from '@mui/material'

import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
  ContentAction
} from './style'

const { Header, Sider, Content} = Layout

export default function Telapessaos() {
  const navigate = useNavigate();
  const [customersList, setCustomersList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState('TODOS'); // Estado para armazenar a opção de 'Business'
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(true)

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
      if (partesTelefone.length === 11) {
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

      } else if (partesTelefone.length === 10) {
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
      if (partesCNPJ.length !== 14) {
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
      if (partesCPF.length !== 11) {
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
        const businessCondition = selectedBusiness === 'TODOS' || (customer.cpf == null ? 'PJ' : 'PF') === selectedBusiness;
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
        const businessCondition = selectedBusiness === 'TODOS' || (customer.cpf == null ? 'PJ' : 'PF') === selectedBusiness;
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
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        > 
          <ContainerHeader>
            <ContentHeader>
              <PesquisaContainer>
                <LabelSelect>
                  <label > Tipo Cliente </label>
                  <select onChange={handleBusinessSelectChange} value={selectedBusiness}>
                    <option value='TODOS'>TODOS</option>
                    <option value='PF'>PF</option>
                    <option value='PJ'>PJ</option>
                  </select>
                </LabelSelect>
                <LabelinputContainer>
                  <label> 
                    Nome 
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
              <ContentAction>
                <button>
                  <span onClick={handleButtonClick}> Cadastrar Cliente </span>
                </button>
              </ContentAction>
            </ContentHeader>
          </ContainerHeader>
          <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '80px'}}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Tipo Cliente</TableCell>
                    <TableCell>Identidade</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Telefone</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {filteredLoans.map((customer) => (
                  <TableRow key={customer.customerId}>
                    <TableCell>{customer.cpf == null ? customer.razaoSocial : customer.nome}</TableCell>
                    <TableCell>{customer.cpf == null ? 'PJ' : 'PF'}</TableCell>
                    <TableCell>{customer.cpf == null ? formataCnpj(customer.cnpj) : formataCpf(customer.cpf)}</TableCell>
                    <TableCell>{customer.email == 'nan' ? 'Sem email' : customer.email}</TableCell>
                    <TableCell>{formataTelefone(customer.telefone)}</TableCell>
                    <TableCell >
                      <Button  onClick={() => visualizacaoCliente(customer.customerId)} style={{ backgroundColor: '#081535', color: '#fff'}}>
                        visualizar
                      </Button>
                    </TableCell>
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