import React, { useState, useEffect } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Cookies from 'js-cookie';
import axios from 'axios';
import { 
  Paper, 
  TableContainer, 
  Table,
  TableHead, 
  TableRow,
  TableCell, 
  TableBody 
} from '@mui/material'

import NavSuperior from '../../components/Navsuperior'
import Logo from '../../components/Logo'
import Sidebar from '../../components/Sidebar'
import ToggleTheme from '../../components/ToggleTheme'
import '../../css/visu_cli.css'
// import './style.css'
import { 
  ContainerHeader,
  ContentHeader,
  ResetContent,
  ResetContainer,
  FormContainer,
  FormContent,
  FormRight,
  Divider,
  DividerHeader,
  ActionsHeader,
  FlexGroup,
  FormTop,
  FormBottom,
  ContentForm,
  ContentTableGroup,
  GroupOne,
  InputFiles,
  UploadContent,
} from './style'

const { Header, Sider, Content} = Layout

export default function Dashboard() {
  const navigate = useNavigate();
  const [muda, handleButtonClick] = useState('infPessoal');
  const [tipoCliente, setTipoCliente] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [ocupacao, setOcupacao] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [segmento, setSegmento] = useState('');
  const [dataAbertura, setDataAbertura] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [pais, setPais] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  // Proposal Customer
  const [username, setUsername] = useState('');
  const [business, setBusiness] = useState('');
  const [date, setDate] = useState('');
  const [razaoSocialProposal, setRazaoSocialProposal] = useState('');
  const [nomeCompletoProposal, setNomeCompletoProposal] = useState('');
  const [cpfProposal, setCpfProposal] = useState('');
  const [cnpjProposal, setCnpjProposal] = useState('');
  const [status, setStatus] = useState('');
  const [list, setList] = useState([]);

  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(true)

  const handleList = (list) => {
    setList(list);
  }

  const handleStatus = (statusNew) => {
      setStatus(statusNew);
  }

  const handleCnpjProposal = (cnpjProposalNew) => {
      setCnpjProposal(cnpjProposalNew);
  }

  const handleCpfProposal = (cpfProposalNew) => {
      setCpfProposal(cpfProposalNew);
  }

  const handleNomeCompletoProposal = (nomeCompletoProposalNew) => {
      setNomeCompletoProposal(nomeCompletoProposalNew);
  }

  const handleRazaoSocialProposal = (razaoSocialProposalNew) => {
      setRazaoSocialProposal(razaoSocialProposalNew);
  }

  const handleDate = (dateNew) => {
      setDate(dateNew);
  }

  const handleBusiness = (businessNew) => {
      setBusiness(businessNew);
  }

  const handleUsername = (usernameNew) => {
      setUsername(usernameNew);
  }

  const handleTipoCliente = (tipoClienteNew) => {
      setTipoCliente(tipoClienteNew);
  }
  const handleNomeCompleto = (nomeCompletoNew) => {
      setNomeCompleto(nomeCompletoNew);
  }
  const handleCpf = (cpfNew) => {
      setCpf(cpfNew);
  }
  const handleDataNascimento = (dataNascimentoNew) => {
      setDataNascimento(dataNascimentoNew);
  }
  const handleGenero = (generoNew) => {
      setGenero(generoNew);
  }
  const handleEscolaridade = (escolaridadeNew) => {
      setEscolaridade(escolaridadeNew);
  }
  const handleOcupacao = (ocupacaoNew) => {
      setOcupacao(ocupacaoNew);
  }
  const handleCnpj = (cnpjNew) => {
      setCnpj(cnpjNew);
  }
  const handleNomeFantasia = (nomeFantasiaNew) => {
      setNomeFantasia(nomeFantasiaNew);
  }
  const handleRazaoSocial = (razaoSocialNew) => {
      setRazaoSocial(razaoSocialNew);
  }
  const handleSegmento = (segmentoNew) => {
      setSegmento(segmentoNew);
  }
  const handleDataAbertura = (dataAberturaNew) => {
      setDataAbertura(dataAberturaNew);
  }
  const handleCep = (cepNew) => {
      setCep(cepNew);
  }
  const handleLogradouro = (logradouroNew) => {
      setLogradouro(logradouroNew);
  }
  const handleBairro = (bairroNew) => {
      setBairro(bairroNew);
  }
  const handleCidade = (cidadeNew) => {
      setCidade(cidadeNew);
  }
  const handlePais = (paisNew) => {
      setPais(paisNew);
  }
  const handleTelefone = (telefoneNew) => {
      setTelefone(telefoneNew);
  }
  const handleEmail = (emailNew) => {
      setEmail(emailNew);
  }

  async function getCustomerProposal() {
      const token = Cookies.get('token');
      const urlProposal = `http://35.175.231.117:8080/api/v1/proposal/getbyuser/${Cookies.get('clienteSelecionado')}`
      try {
          const responseProposals = await axios.get(urlProposal,
              {
                  headers: {
                      Authorization: `Bearer ${Cookies.get('token')}`,
                      'Content-Type': 'application/json'
                  }
              });
          console.log(responseProposals.data);
          await handleList(responseProposals.data);
      } catch (error) {
          console.log(error)
      }

  }

  async function getCustomerData() {
      const token = Cookies.get('token');
      const url = `http://35.175.231.117:8080/api/v1/customers/getbyid/${Cookies.get('clienteSelecionado')}`
      try {
          const response = await axios.get(url,
              {
                  headers: {
                      Authorization: `Bearer ${Cookies.get('token')}`,
                      'Content-Type': 'application/json'
                  }
              });
          const result = await response.data;
          await handleTipoCliente(result.tipoCliente);
          await handleNomeCompleto(result.nomeCompleto);
          await handleCpf(result.cpf);
          await handleDataNascimento(result.dataNascimento);
          await handleGenero(result.genero);
          await handleEscolaridade(result.escolaridade);
          await handleOcupacao(result.ocupacao);
          await handleCnpj(result.cnpj);
          await handleNomeFantasia(result.nomeFantasia);
          await handleRazaoSocial(result.razaoSocial);
          await handleSegmento(result.segmento);
          await handleDataAbertura(result.dataAbertura);
          await handleCep(result.cep);
          await handleLogradouro(result.logradouro);
          await handleBairro(result.bairro);
          await handleCidade(result.cidade);
          await handlePais(result.pais);
          await handleTelefone(result.telefone);
          await handleEmail(result.email);
      } catch (error) {
          console.log(error);
      }
  }

  function Forminf() {
      return (
          <div>
              {tipoCliente === false && (
                <FormContainer>
                  <h2> PF </h2>
                  <form>
                    <FlexGroup>
                      <label htmlFor="name">
                        Nome Completo
                        <input value={nomeCompleto} type='text' disabled/>
                      </label>
                      <label htmlFor="cpf">
                        CPF
                        <InputMask mask="999.999.999-99" value={cpf} type="text" disabled />
                      </label>
                      <label htmlFor="dataNascimento">
                        Data de Nascimento
                        <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" value={dataNascimento ? format(new Date(dataNascimento), 'dd/MM/yyyy') : ''} disabled />
                      </label>
                    </FlexGroup>
                    <FlexGroup>
                      <label htmlFor="segmento">
                        Gênero
                        <input value={genero} type="text" disabled />
                      </label>
                      <label htmlFor="phoneNumber">
                        Escolaridade
                        <input value={escolaridade} type="text" disabled />
                      </label>
                      <label htmlFor="ocupacao">
                        Ocupação
                        <input value={ocupacao} type="text" disabled />
                      </label>
                    </FlexGroup>
                  </form>
                </FormContainer>     
              )}
              {tipoCliente === true && (
                <FormContainer>
                  <h2> PJ </h2>
                  <form>
                    <FlexGroup>
                      <label htmlFor="cnpj">
                        CNPJ
                        <InputMask mask="99.999.999/9999-99" value={cnpj} type="text" disabled />
                      </label>
                        <label htmlFor="cpf">
                          Nome Fantasia
                          <input value={nomeFantasia} type="text" disabled />
                        </label>
                        <label htmlFor="dataNascimento">
                          Razão Social
                          <input value={razaoSocial} type="text" disabled />
                        </label>
                    </FlexGroup>
                    <FlexGroup>
                      <label htmlFor="segmento">
                        Segmento
                        <input value={segmento} type="text" disabled />
                      </label>
                      <label htmlFor="phoneNumber">
                        Data de abertura
                        <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" value={dataAbertura ? format(new Date(dataAbertura), 'dd/MM/yyyy') : ''} disabled />
                      </label>
                      <label htmlFor="ocupacao">
                        Ocupação
                        <input type="text" disabled />
                      </label>
                    </FlexGroup>
                  </form>
                </FormContainer>
              )}
          </div>
      );
  }

  function Formend() {
      return (
          <>
            <FormContainer>
              <form>
                <FlexGroup>
                  <label htmlFor="cep">
                    CEP
                    <InputMask mask="99999-999" value={cep} type="text" disabled />
                  </label>
                  <label htmlFor="logradouro">
                    Logradouro
                    <InputMask mask="999.999.999-99" value={cpf} type="text" disabled />
                  </label>
                  <label htmlFor="bairro">
                    Bairro
                    <input value={bairro} type="text" disabled />
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label htmlFor="cidade">
                    Cidade
                    <input value={cidade} type="text" disabled />
                  </label>
                  <label htmlFor="país">
                    País
                    <input value={pais} type="text" disabled />
                  </label>
                  {/* <label htmlFor="ocupacao">
                    Ocupação
                    <input value={ocupacao} type="text" disabled />
                  </label> */}
                </FlexGroup>
              </form>
            </FormContainer> 
          </>
      );
  }

  function Formcontat() {
      return (
        <>
          <FormContainer>
            <form>
              <FlexGroup>
                <label htmlFor="telefone">
                  Telefone
                  <InputMask mask="(99) 99999-9999" value={telefone} type="text" disabled />
                </label>
                <label htmlFor="email">
                  Email
                  <input value={email} type="email" disabled />
                </label>
                {/* <label htmlFor="ocupacao">
                  Ocupação
                  <input value={ocupacao} type="text" disabled />
                </label> */}
              </FlexGroup>
            </form>
          </FormContainer> 
        </>
      );
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

  const visualizar = (id) => {
      Cookies.set("propostaSelecionada", id);
      navigate('/visualizacaoindividual');
  }

  function Tabprop() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/cadastropropostas');
    };

      return (
        <div>
          <div className='caixaTabelaPropostas'>
            <div className='divbotaoCadastrarProposta'>
              <button className='botaoCadastrarProposta' onClick={handleButtonClick}>
                <span> Cadastrar Proposta </span>
              </button>
            </div>
          </div>
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
                      <TableCell> Visualizar </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((item) => (
                      <tr className='linhasTabelaPropostas' key={item.proposalId}>
                        <td className='colunasTabelaPropostas'>{item.username}</td>
                        <td className='colunasTabelaPropostas'>{item.business}</td>
                        <td className='colunasTabelaPropostas'>
                            <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputDadosTabela" value={item.date ? format(new Date(item.date), 'dd/MM/yyyy') : ''} />
                        </td>
                        <td className='colunasTabelaPropostas'>{item.tipo == true ? item.razaoSocial : item.nomeCompleto}</td>
                        <td className='colunasTabelaPropostas'>{item.tipo == true ? formataCnpj(item.cnpj) : formataCpf(item.cpf)}</td>
                        <td className='colunasTabelaPropostas'>{item.status}</td>
                        <td colunasTabelaPropostas>
                          <button className='botaoVer' onClick={() => visualizar(item.proposalId)}>
                            <span className='stringVer'> Ver </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          {/* <div className='divTabelaPropostasVisuCli'>
              <table className='tabelaPropostas'>
                  <tr className='linhasTabelaPropostas'>
                      <th className='colunasTabelaPropostas'> Indicador </th>
                      <th className='colunasTabelaPropostas'> Business </th>
                      <th className='colunasTabelaPropostas'> Data da criação </th>
                      <th className='colunasTabelaPropostas'> Nome Cliente </th>
                      <th className='colunasTabelaPropostas'> Documento </th>
                      <th className='colunasTabelaPropostas'> Status da propostas </th>
                      <th className='colunasTabelaPropostas'> Visualizar </th>
                  </tr>
                  {list.map((item) => (
                      <tr className='linhasTabelaPropostas' key={item.proposalId}>
                          <td className='colunasTabelaPropostas'>{item.username}</td>
                          <td className='colunasTabelaPropostas'>{item.business}</td>
                          <td className='colunasTabelaPropostas'>
                              <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputDadosTabela" value={item.date ? format(new Date(item.date), 'dd/MM/yyyy') : ''} />
                          </td>
                          <td className='colunasTabelaPropostas'>{item.tipo == true ? item.razaoSocial : item.nomeCompleto}</td>
                          <td className='colunasTabelaPropostas'>{item.tipo == true ? formataCnpj(item.cnpj) : formataCpf(item.cpf)}</td>
                          <td className='colunasTabelaPropostas'>{item.status}</td>
                          <td colunasTabelaPropostas>
                              <button className='botaoVer' onClick={() => visualizar(item.proposalId)}>
                                  <span className='stringVer'> Ver </span>
                              </button>
                          </td>
                      </tr>
                  ))}
              </table>
          </div> */}
        </div>
      );
  }

  const Mudapagina = (value) => {
      handleButtonClick(value);
  };

  useEffect(() => {
      getCustomerData();
      getCustomerProposal();
  }, []);

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
            <ActionsHeader>
              {tipoCliente === false && (
                <button className={`botoes ${muda === 'infPessoal' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPessoal")}>
                  Informações pessoais 
                </button>
              )}
              {tipoCliente === true && (
                <button className={`botoes ${muda === 'infPessoal' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPessoal")}>
                  Dados Empresa
                </button>
              )}
              <button className={`botoes ${muda === 'endereco' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("endereco")}>
                Endereço
              </button>
              <button className={`botoes ${muda === 'contatos' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("contatos")}>
                Contatos
              </button>
              <button className={`botoes ${muda === 'propostas' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("propostas")}>
                Propostas
              </button>
            </ActionsHeader>
            <DividerHeader></DividerHeader>
            <div>
              {muda === 'infPessoal' && (
                  <Forminf />
              )}
              {muda === 'endereco' && (
                  <Formend />
              )}
              {muda === 'contatos' && (
                  <Formcontat />
              )}
              {muda === 'propostas' && (
                  <Tabprop />
              )}
            </div>
          </ContainerHeader>
        </Content>
      </Layout>
    </Layout>
  )
}