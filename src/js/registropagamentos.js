import React, { useState, useEffect } from 'react';
import '../css/registro_pagamentos.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/pesquisar.css';
import { useNavigate } from 'react-router-dom';

function RegistroPagamentos() {
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
            const nameCondition = selectedBusiness === 'TODOS' || (
                loan.isCnpj === false ? loan.nomeCliente.toLowerCase().includes(searchValue.toLowerCase()) : loan.razaoSocial.toLowerCase().includes(searchValue.toLowerCase())
            );
            return businessCondition && nameCondition;
        });
        setFilteredLoans(newFilteredLoans);
    }, [listLoans, selectedBusiness, searchValue]); // Atualiza os resultados do filtro sempre que listLoans, selectedBusiness ou searchValue mudar

    const handleSearchButtonClick = () => {
        // Quando o botão de pesquisa for clicado, você pode executar a mesma lógica de filtragem
        const newFilteredLoans = listLoans.filter((loan) => {
            const businessCondition = selectedBusiness === 'TODOS' || loan.business === selectedBusiness;
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

    return (
        <div className='containerPrincipal'>
            <div className='positionNavLateral'>
                <NavLateral />
            </div>
            <div className='positionNavSuperior'>
                <NavSuperior />
            </div>
            <div className='containerGeral'>
                <div className='filtros'>
                    <div className='divfiltroSelectRegistroPagamentos'>
                        <label className='labelFiltros'> Business </label>
                        <select className='filtroSelect' onChange={handleBusinessSelectChange} value={selectedBusiness}>
                            <option value='TODOS' className='optionsFiltroSelect'>TODOS</option>
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
                    <div className='caixaPesquisaNomeClienteRegistroPagamentos'>
                        <div className='filtroNomeClienteRegistroPagamentos'>
                            <label className='labelFiltros'> Nome Cliente </label>
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
                </div>
                <br />
                <hr />
            </div>
            <div className='divTabelaCLientes'>
                <table className="tabelaPagamentos">
                    <thead>
                        <tr className='thTabelaClientes'>
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
                            <tr className='trTabelaClientes' key={loan.proposalId}>
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
            </div>
        </div>
    )
}

export { RegistroPagamentos };