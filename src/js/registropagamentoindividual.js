import React, { useState, useEffect } from 'react';
import '../css/registro_pagamento_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import Cookies from 'js-cookie';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function RegistroPagamentoIndividual() {

    const [muda, handleButtonClick] = useState('geral');
    const [loanDetails, setLoanDetails] = useState([])

    const Mudapagina = (value) => {
        handleButtonClick(value);
    };

    async function fetchLoanDetails() {
        const token = Cookies.get('token');
        const proposalId = Cookies.get('chosenLoan');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const url = `http://127.0.0.1:8080/api/v1/proposal/loans/getproposal/info/${proposalId}`;
    
        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setLoanDetails(result);
            console.log(result);
        } catch (error) {
            console.error('error', error);
        }
    }

    useEffect(() => {
        fetchLoanDetails();
    }, []);

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> {loanDetails.proposal.customer._cnpj == true ? loanDetails.proposal.customer.razao_social : loanDetails.proposal.customer.nome_completo} </text>
                </div>
                <table className='tabelaPagamentosIndividual'>
                    <thead>
                        <tr>
                            <td>
                                <button className={`botoesGerais ${muda === 'geral' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("geral")}>
                                    <span className='stringbotoesGerais'> Geral </span>
                                </button>
                            </td>
                            <td>
                                <button className={`botoesGerais ${muda === 'observacoes' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("observacoes")}>
                                    <span className='stringbotoesGerais'> Observações </span>
                                </button>
                            </td>
                            <td>
                                <button className='botaofinalizarContrato'>
                                    <span className='stringbotoesGerais'> Finalizar Contrato </span>
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> Documento </th>
                            <th> Email </th>
                            <th> Telefone </th>
                            <th> Valor Contrato </th>
                            <th> Qtd. parcelas </th>
                            <th> Taxa </th>
                            <th> Juros Total </th>
                            <th> Multa </th>
                            <th> Mora p/dia </th>
                        </tr>
                        <tr>
                            <td>{loanDetails.proposal.customer._cnpj == true ? loanDetails.proposal.customer.cnpj : loanDetails.proposal.customer.cpf}</td>
                            <td>{loanDetails.contact.email}</td>
                            <td>{loanDetails.contact.telefone}</td>
                            <td>{loanDetails.proposal.valor_liberado}</td>
                            <td>{loanDetails.proposal.prazo}</td>
                            <td>{loanDetails.proposal.taxa}</td>
                            <td>{loanDetails.proposal.total_juros}</td>
                            <td>1% do valor da parcela.</td>
                            <td>0,033% do valor da parcela.</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {muda === 'geral' && (
                        <Geral />
                    )}
                    {muda === 'observacoes' && (
                        <Observacoes />
                    )}
                </div>
            </div>
        </div>
    )
}

function Geral() {
    return (
        <div>
            <table className='tabelaPagamentosIndividual'>
                <thead>
                    <tr>
                        <th> Parcela </th>
                        <th> Vencimento </th>
                        <th> Saldo Devedor </th>
                        <th> Amortização </th>
                        <th> Juros </th>
                        <th> Valor Parcela </th>
                        <th> Pago? </th>
                        <th> Data Pagamento </th>
                        <th> Editar? </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                        <td> TESTE </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

function Observacoes() {
    return (
        <div>
            <div className='divtextAreaRegistroPagIndiv'>
                <text className='stringObservacao'>Observação:</text>
                <br />
                <textarea className='textAreaRegistroPagIndiv'> </textarea>
            </div>
            <div className='divcaixaSelect'>
                <form className='formSelect'>
                    <select className='caixaSelect'>
                        <option className='inputStatus'> Em Atraso </option>
                        <option className='inputStatus'> Negativado </option>
                        <option className='inputStatus'> Cartório </option>
                        <option className='inputStatus'> Protestado </option>
                        <option className='inputStatus'> Cobrançca Terceirizada</option>
                        <option className='inputStatus'> Jurídico </option>
                    </select>
                    <select className='caixaSelect'>
                        <option className='inputStatus'> Telefone </option>
                        <option className='inputStatus'> WhatsApp </option>
                        <option className='inputStatus'> Email </option>
                        <option className='inputStatus'> SMS </option>
                    </select>
                </form>
                <button className='botaoEnviarSelect'>
                    <span className='stringbotoesGerais'> Enviar </span>
                </button>
            </div>
            <br />
            <hr />
            <div className='divtabelaStatus'>
                <table className='tabelaStatus'>
                    <thead>
                        <tr>
                            <th> Tipo </th>
                            <th> Observação </th>
                            <th> Status do Contrato </th>
                            <th> Atualizado em: </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                        </tr>
                        <tr>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                            <td> TESTE </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { RegistroPagamentoIndividual };