import React, { useState, useEffect } from 'react';
import '../css/visu_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Cookies from 'js-cookie';
import axios from 'axios';

function Visucli() {
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
                    <>
                        <br />
                        <div className='fields'>
                            <h2> PF </h2>
                            <div className='divrow'>
                                <div className='divfield'>
                                    <label className="stringDados"> Nome Completo </label>
                                    <input className='inputDados' value={nomeCompleto} type='text' disabled
                                    />
                                </div>
                                <div className='divfield'>
                                    <label className="stringDados"> CPF </label>
                                    <InputMask mask="999.999.999-99" className="inputDados" value={cpf} type="text" disabled />
                                </div>
                                <div className='divfield'>
                                    <label className="stringDados"> Data de Nascimento </label>
                                    <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputDados" value={dataNascimento ? format(new Date(dataNascimento), 'dd/MM/yyyy') : ''} disabled />
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
                                <InputMask mask="99.999.999/9999-99" className="inputDados" value={cnpj} type="text" disabled />
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
                                <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputDados" value={dataAbertura ? format(new Date(dataAbertura), 'dd/MM/yyyy') : ''} disabled />
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
                            <InputMask mask="99999-999" className="inputDados" value={cep} type="text" disabled />
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
                            <InputMask mask="(99) 99999-9999" className="inputDados" value={telefone} type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Email </label>
                            <input className="inputDados" value={email} type="email" disabled />
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
                    <br />
                    <div className='divbotaoCadastrarProposta'>
                        <button className='botaoCadastrarProposta' onClick={handleButtonClick}>
                            <span> Cadastrar Proposta </span>
                        </button>
                    </div>
                </div>
                <div className='divTabelaPropostasVisuCli'>
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
                </div>
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
            <div className='positionNavLateral'>
                <NavLateral />
            </div>
            <div className='positionNavSuperior'>
                <NavSuperior />
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