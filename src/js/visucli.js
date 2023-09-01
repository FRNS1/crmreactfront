import React, { useState, useEffect } from 'react';
import '../css/visu_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import Cookies from 'js-cookie';
import axios from 'axios';

function Visucli() {
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
        const urlProposal = `http://127.0.0.1:8080/api/v1/proposal/getbyuser/${Cookies.get('clienteSelecionado')}`
        try{
            const responseProposals = await axios.get(urlProposal,
                {
                    headers: {
                      Authorization: `Bearer ${Cookies.get('token')}`,
                      'Content-Type': 'application/json'
                    }
                });
            console.log(responseProposals.data);
            await handleList(responseProposals.data);
        }catch (error){
            console.log(error)
        }
        
    }

    async function getCustomerData() {
        const token = Cookies.get('token');
        const url = `http://127.0.0.1:8080/api/v1/customers/getbyid/${Cookies.get('clienteSelecionado')}`
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
        }catch (error){
            console.log(error);
        }
    }

    function Forminf() {
        return (
          <div>
            {tipoCliente === false && (
              <>
                <br />
                <div className='fields'>
                  <h2> PF </h2>
                  <div className='divrow'>
                    <div className='divfield'>
                      <label className="stringDados"> Nome Completo </label>
                      <input className="inputDados" value={nomeCompleto} type="text" disabled />
                    </div>
                    <div className='divfield'>
                      <label className="stringDados"> CPF </label>
                      <input className="inputDados" value={cpf} type="text" disabled />
                    </div>
                    <div className='divfield'>
                      <label className="stringDados"> Data de Nascimento </label>
                      <input className="inputDados" value={dataNascimento} type="text" disabled />
                    </div>
                  </div>
                  <div className='divrow'>
                    <div className='divfield'>
                      <label className="stringDados"> Gênero </label>
                      <input className="inputDados" value={genero} type="text" disabled />
                    </div>
                    <div className='divfield'>
                      <label className="stringDados"> Escolaridade </label>
                      <input className="inputDados" value={escolaridade} type="text" disabled />
                    </div>
                    <div className='divfield'>
                      <label className="stringDados"> Ocupação </label>
                      <input className="inputDados" value={ocupacao} type="text" disabled />
                    </div>
                  </div>
                </div>
              </>
            )}
            {tipoCliente === true && (
              <div className='DADOSPJ'>
                <br />
                <h2> PJ </h2>
                <div className='divrow'>
                  <div className='divfield'>
                    <label className="stringDados"> CNPJ </label>
                    <input className="inputDados" value={cnpj} type="text" disabled />
                  </div>
                  <div className='divfield'>
                    <label className="stringDados"> Nome Fantasia </label>
                    <input className="inputDados" value={nomeFantasia} type="text" disabled />
                  </div>
                  <div className='divfield'>
                    <label className="stringDados"> Razão Social </label>
                    <input className="inputDados" value={razaoSocial} type="text" disabled />
                  </div>
                </div>
                <div className='divrow'>
                  <div className='divfield'>
                    <label className="stringDados"> Segmento </label>
                    <input className="inputDados" value={segmento} type="text" disabled />
                  </div>
                  <div className='divfield'>
                    <label className="stringDados"> Data de abertura </label>
                    <input className="inputDados" value={dataAbertura} type="text" disabled />
                  </div>
                  <div className='divfield' style={{ opacity: 0 }} id="none">
                    <label className="stringDados"> Ocupação </label>
                    <input className="inputDados" type="text" disabled />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }
    
    function Formend() {
        return (
            <form className='formularios'>
                <br />
                <div className='fields'>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> CEP </label>
                            <input className="inputDados" value={cep} type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Logradouro </label>
                            <input className="inputDados" value={logradouro} type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Bairro </label>
                            <input className="inputDados" value={bairro} type="text" disabled />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Cidade </label>
                            <input className="inputDados" value={cidade} type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> País </label>
                            <input className="inputDados" value={pais} type="text" disabled />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> Ocupação </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    
    function Formcontat() {
        return (
            <form className='formularios'>
                <br />
                <div className='fields'>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Telefone </label>
                            <input className="inputDados" value={telefone} type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Email </label>
                            <input className="inputDados" value={email} type="text" disabled />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> Ocupação </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    
    function Tabprop() {
        return (
            <div className='caixaTabelaPropostas'>
                <br />
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
                    <tr className='linhasTabelaPropostas'>
                        <td className='colunasTabelaPropostas'>{item.username}</td>
                        <td className='colunasTabelaPropostas'>{item.business}</td>
                        <td className='colunasTabelaPropostas'>{item.date}</td>
                        <td className='colunasTabelaPropostas'>{item.tipo == true ? item.razaoSocial : item.nomeCompleto}</td>
                        <td className='colunasTabelaPropostas'>{item.tipo == true ? item.cnpj : item.cpf}</td>
                        <td className='colunasTabelaPropostas'>{item.status}</td>
                        <td colunasTabelaPropostas>
                            <button className='botaoVer'>
                                <span className='stringVer'> Ver </span>
                            </button>
                        </td>
                    </tr>
                    ))}
                </table>
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

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='rowbotoes'>
                    {tipoCliente == false && (
                        <button className={`botoes ${muda === 'infPessoal' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPessoal")}>
                            <span className='stringDados'> Informações pessoais </span>
                        </button>
                    )}
                    {tipoCliente == true && (
                        <button className={`botoes ${muda === 'infPessoal' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPessoal")}>
                            <span className='stringDados'> Dados Empresa </span>
                        </button>
                    )}
                    <button className={`botoes ${muda === 'endereco' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("endereco")}>
                        <span className='stringDados'> Endereço </span>
                    </button>
                    <button className={`botoes ${muda === 'contatos' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("contatos")}>
                        <span className='stringDados'> Contatos </span>
                    </button>
                    <button className={`botoes ${muda === 'propostas' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("propostas")}>
                        <span className='stringDados'> Propostas </span>
                    </button>
                </div>
                <br />
                <br />
                <hr className='linha' />
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
            </div>
        </div>
    );
}



export { Visucli };