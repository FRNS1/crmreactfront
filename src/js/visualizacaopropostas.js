import React, { useEffect, useState } from 'react';
import '../css/visualizacao_propostas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function VisualizacaoPropostas() {
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
        }
    }

    const visualizar = (id) => {
        Cookies.set("propostaSelecionada", id);
        navigate('/visualizacaoindividual');
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

    return (
        <div className='containerPrincipal'>
            <div className='positionNavLateral'>
                <NavLateral />
            </div>
            <div className='positionNavSuperior'>
                <NavSuperior />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> Propostas </text>
                </div>
                <div className='filtros'>
                    <div className='divfiltroSelect'>
                        <label className='labelFiltros'> Status </label>
                        <select className='filtroSelect' value={selectedFilter} onChange={handleFilterChange}>
                            <option value='' className='optionsFiltroSelect'>Todos</option>
                            <option value='EM ANALISE' className='optionsFiltroSelect'>Em análise</option>
                            <option value='APROVADO' className='optionsFiltroSelect'>Aprovado</option>
                            <option value='REPROVADO' className='optionsFiltroSelect'>Reprovado</option>
                            <option value='EMPRESTIMO CONCEDIDO' className='optionsFiltroSelect'>Empréstimo concedido</option>
                            <option value='PENDENCIA DE DOCUMENTACAO' className='optionsFiltroSelect'>Pendência de documentação</option>
                        </select>
                    </div>
                    <div className='caixaPesquisa'>
                        <label className='labelFiltros'> Nome </label>
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
                    </div>
                    <div className='divbotaoPesquisaNome'>
                        <button className='botaoPesquisaNome' onClick={handleSearch}>
                            <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                        </button>
                    </div>
                    <div className='divfiltroSelect'>
                        <label className='labelFiltros'> Business </label>
                        <select className='filtroSelect' value={selectedFilterBusiness} onChange={handleFilterBusinessChange} disabled={selectedFilter !== '' || searchTerm.trim() !== ''}>
                            <option value='GRUPOS' className='optionsFiltroSelect'>TODOS</option>
                            <option value='MASTER' className='optionsFiltroSelect'>MASTER</option>
                            <option value='RISK' className='optionsFiltroSelect'>RISK</option>
                            <option value='CHARGES' className='optionsFiltroSelect'>CHARGES</option>
                            <option value='BDI DIGITAL' className='optionsFiltroSelect'>BDI DIGITAL</option>
                            <option value='BDI DIGITAL MASTER' className='optionsFiltroSelect'>BDI DIGITAL MASTER</option>
                            <option value='KEEPER MASTER' className='optionsFiltroSelect'>KEEPER MASTER</option>
                            <option value='KEEPER' className='optionsFiltroSelect'>KEEPER</option>
                            <option value='INDICADOR' className='optionsFiltroSelect'>INDICADOR</option>
                        </select>
                    </div>
                    {/* <div className='divfiltroData'>
                        <div className='dataInicial'>
                            <label className='textofiltroData'> De: </label>
                            <input type='date'
                            className='inputfiltroData'
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className='dataFinal'>
                            <label className='textofiltroData'> Até: </label>
                            <input type='date' 
                            className='inputfiltroData'
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <button className="botaoFiltrarData" onClick={handleSearch}>
                            <span>Filtrar por Data</span>
                        </button>
                    </div> */}
                </div>
            </div>
            <br />
            <div className='divTabelaPropostas'>
                <table className='tabelaPropostas'>
                    <thead>
                        <tr className='linhasTabelaPropostas'>
                            <th className='colunasTabelaPropostas'> Indicador </th>
                            <th className='colunasTabelaPropostas'> Business </th>
                            <th className='colunasTabelaPropostas'> Data da criação </th>
                            <th className='colunasTabelaPropostas'> Nome Cliente </th>
                            <th className='colunasTabelaPropostas'> Documento </th>
                            <th className='colunasTabelaPropostas'> Status da propostas </th>
                            <th className='colunasTabelaPropostas'> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? (
                            (selectedFilter === '' ? searchResults : searchStatusResult).map((proposal) => (
                                <tr className='linhasTabelaPropostas' key={proposal.proposalId}>
                                    <td className='colunasTabelaPropostas'>{proposal.indicador.username}</td>
                                    <td className='colunasTabelaPropostas'>{proposal.business}</td>
                                    <td className='colunasTabelaPropostas'>
                                        <InputMask
                                            mask="99/99/9999"
                                            placeholder="DD/MM/AAAA"
                                            type="text"
                                            className="inputDadosTabela"
                                            value={proposal.dataCriacao ? format(new Date(proposal.dataCriacao), 'dd/MM/yyyy') : ''}
                                            disabled
                                        />
                                    </td>
                                    <td className='colunasTabelaPropostas'>
                                        {proposal.cpf == null
                                            ? proposal.razaoSocial
                                            : proposal.nomeCompleto}
                                    </td>
                                    <td className='colunasTabelaPropostas'>
                                        {proposal.cpf == null
                                            ? formataCnpj(proposal.cnpj)
                                            : formataCpf(proposal.cpf)}
                                    </td>
                                    <td className='colunasTabelaPropostas'>{proposal.status}</td>
                                    <td className='colunasTabelaPropostas'>
                                        <button className='botaoVer' onClick={() => visualizar(proposal.proposalId)}>
                                            <span className='stringVer'> Ver </span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export { VisualizacaoPropostas };