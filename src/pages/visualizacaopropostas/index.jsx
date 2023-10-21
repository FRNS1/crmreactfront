import React, { useState, useEffect } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { format } from 'date-fns'
import Cookies from 'js-cookie'
import axios from 'axios'
import { 
  Paper, 
  TableContainer, 
  Table,
  TableHead, 
  TableRow,
  TableCell, 
  TableBody 
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
  GroupTable
} from './style'

const { Header, Sider, Content} = Layout

export default function VisualizacaoPropostas() {
  const navigate = useNavigate();
  const [listProposal, setListProposal] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatusResult, setSearchStatusResult] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedFilterBusiness, setselectedFilterBusiness] = useState('');
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(true)

  const handleListProposal = (list) => {
    setListProposal(list);
  }

  async function getDataProposal() {
    const token = Cookies.get('token');
    const grupo = Cookies.get('usergroup');
    const userid = Cookies.get('userid');
    const url = 'http://35.175.231.117:8080/api/v1/proposal/getcustomers';
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
      console.log(response.data);
      handleListProposal(response.data);
      setLoading(false); // Removemos a chamada para handleSearch aqui
    } catch (error) {
      console.log('error', error);
      alert('error', error);
    }
  }

  const visualizar = (id) => {
    Cookies.set("propostaSelecionada", id);
    navigate('/visualizacaoindividual');
  }

  function formataCnpj(cnpj) {
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
  }

  function formataCpf(cpf) {
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

  useEffect(() => {
    getDataProposal();
    if (!loading) {
        handleSearch();
    }
  }, [loading]);


  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    if (event.target.value === '') {
        setselectedFilterBusiness('GRUPOS'); // Quando a opção "Todos" for selecionada, redefina o filtro de Business para "GRUPOS"
    }
    handleSearchStatus(event.target.value);
  };

  const handleSearchStatus = (selectedOption) => {
    const results = [];
    if (selectedOption === 'EM ANALISE') {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].status === 'EM ANALISE') {
                results.push(listProposal[i]);
            }
        }
    } else if (selectedOption === 'APROVADO') {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].status === 'APROVADO') {
                results.push(listProposal[i]);
            }
        }
    } else if (selectedOption === 'REPROVADO') {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].status === 'REPROVADO') {
                results.push(listProposal[i]);
            }
        }
    } else if (selectedOption === 'PENDENCIA DE DOCUMENTACAO') {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].status === 'PENDENCIA DE DOCUMENTACAO') {
                results.push(listProposal[i]);
            }
        }
    } else if (selectedOption === 'EMPRESTIMO CONCEDIDO') {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].status === 'EMPRESTIMO CONCEDIDO') {
                results.push(listProposal[i]);
            }
        }
    } else if (selectedOption === 'PRE APROVADO') {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].status === 'PRE APROVADO') {
                results.push(listProposal[i]);
            }
        }
    }
    setSearchStatusResult(results);
  }

  const handleFilterBusinessChange = (event) => {
    setselectedFilterBusiness(event.target.value);
  };

  useEffect(() => {
    handleSearchBusiness(selectedFilterBusiness);
  }, [selectedFilterBusiness]);

  const handleSearchBusiness = (selectedOption) => {
    const results = [];
    if (selectedOption === 'GRUPOS' && selectedFilter === '' && searchTerm.trim() === '') {
        setSearchResults(listProposal); // Quando a opção "Todos" for selecionada ou se a opção principal for '' (vazio), mostre todos os dados
    } else {
        for (let i = 0; i < listProposal.length; i++) {
            if (listProposal[i].business === selectedOption) {
                results.push(listProposal[i]);
            }
        }
        setSearchResults(results);
    }
  }

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearch = () => {
    if (selectedFilter === '') {
      if (searchTerm.trim() === '' && startDate && endDate) {
          const results = listProposal.filter((proposal) => {
              const proposalDate = proposal.dataCriacao;
              return proposalDate >= startDate && proposalDate <= endDate;
          });
          setSearchResults(results);
      } else if (searchTerm.trim() === '') {
          setSearchResults(listProposal);
      } else {
          const results = [];
          for (let i = 0; i < listProposal.length; i++) {
              const proposal = listProposal[i];
              if (
                  (proposal.cpf === null && proposal.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (proposal.cpf !== null && proposal.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()))
              ) {
                  results.push(proposal);
              }
          }
          setSearchResults(results);
      }
    }
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
              <div className='textoPropostas'>
                <span className='stringTitulos'> Propostas </span>
              </div>
            <ContentHeader>
              <PesquisaContainer>
                <LabelSelect>
                  <label className='labelFiltros'> Status </label>
                  <select className='filtroSelect' value={selectedFilter} onChange={handleFilterChange}>
                    <option value='' className='optionsFiltroSelect'>Todos</option>
                    <option value='EM ANALISE' className='optionsFiltroSelect'>Em análise</option>
                    <option value='APROVADO' className='optionsFiltroSelect'>Aprovado</option>
                    <option value='PRE APROVADO' className='optionsFiltroSelect'>Pre Aprovado</option>
                    <option value='REPROVADO' className='optionsFiltroSelect'>Reprovado</option>
                    <option value='EMPRESTIMO CONCEDIDO' className='optionsFiltroSelect'>Empréstimo concedido</option>
                    <option value='PENDENCIA DE DOCUMENTACAO' className='optionsFiltroSelect'>Pendência de documentação</option>
                  </select>
                </LabelSelect>
                <LabelinputContainer>
                  <label> 
                    Nome Cliente 
                  </label>
                  <input
                    className="inputPesquisar"
                    placeholder="Pesquisar"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                    disabled={selectedFilter !== ''}
                  />
                </LabelinputContainer>
                <IconPesquisa>
                  <button  onClick={handleSearch}>
                    <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                  </button>
                </IconPesquisa>
              </PesquisaContainer>
              <LabelSelect>
                <label > Business </label>
                <select  onChange={handleFilterBusinessChange} value={selectedFilterBusiness}>
                  <option value='TODOS'>TODOS</option>
                  <option value='MASTER'>MASTER</option>
                  <option value='RISK'>RISK</option>
                  <option value='CHARGES'>CHARGES</option>
                  <option value='BDI DIGITAL'>BDI DIGITAL</option>
                  <option value='BDI DIGITAL MASTER'>BDI DIGITAL MASTER</option>
                  <option value='KEEPER MASTER'>KEEPER MASTER</option>
                  <option value='KEEPER'>KEEPER</option>
                  <option value='INDICADOR'>INDICADOR</option>
                </select>
              </LabelSelect>
            </ContentHeader>
          </ContainerHeader>

          <GroupTable>
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '80px'}}>
              <TableContainer>
                <Table className='tabelaPropostas'>
                  <TableHead>
                    <TableRow>
                      <TableCell> Indicador </TableCell>
                      <TableCell> Business </TableCell>
                      <TableCell> Data da criação </TableCell>
                      <TableCell> Nome Cliente </TableCell>
                      <TableCell> Documento </TableCell>
                      <TableCell> Status da propostas </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loading === false ? (
                      (selectedFilter === '' ? searchResults : searchStatusResult).map((proposal) => (
                        <TableRow key={proposal.proposalId}>
                          <TableCell>{proposal.indicador.username}</TableCell>
                          <TableCell>{proposal.business}</TableCell>
                          <TableCell>
                            <InputMask
                              mask="99/99/9999"
                              placeholder="DD/MM/AAAA"
                              type="text"
                              className="inputDadosTabela"
                              value={proposal.dataCriacao ? format(new Date(proposal.dataCriacao), 'dd/MM/yyyy') : ''}
                              disabled
                            />
                          </TableCell>
                          <TableCell>
                            {proposal.cpf == null
                              ? proposal.razaoSocial
                              : proposal.nomeCompleto}
                          </TableCell>
                          <TableCell>
                            {proposal.cpf == null
                              ? formataCnpj(proposal.cnpj)
                              : formataCpf(proposal.cpf)}
                          </TableCell>
                          <TableCell>{proposal.status}</TableCell>
                          <TableCell>
                            <Button 
                              onClick={() => visualizar(proposal.proposalId)}
                              style={{ backgroundColor: '#081535', color: '#fff' }}
                            >
                              Ver
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </GroupTable>
        </Content>
      </Layout>
    </Layout>
  )
}