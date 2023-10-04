import React, { useState, useEffect } from 'react';
import '../css/registro_pagamentos.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/pesquisar.css';
import { SearchBar } from '../js/pesquisar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function RegistroPagamentos() {
    const navigate = useNavigate();
    const [listLoans, setListLoans] = useState([]);

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
    }, []);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
        // Aqui você pode realizar a lógica de pesquisa, como fazer uma solicitação de API.
        // Neste exemplo, apenas atualizamos o estado com os resultados fictícios.
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
                <div className='caixaPesquisaNomeClienteRegistroPagamentos'>
                    <div className='filtroNomeClienteRegistroPagamentos'>
                        <label className='labelFiltros'> Nome Cliente </label>
                        <input className="inputPesquisa" placeholder="Pesquisar" />
                    </div>
                    <div className='divbotaoPesquisaNomeClienteRegistroPagamentos'>
                        <button className='botaoPesquisaNomeClienteRegistroPagamentos'>
                            <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                        </button>
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
                        {listLoans.map((loan) => (
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