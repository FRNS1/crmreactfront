import React, { useState } from 'react';
import '../css/registro_pagamento_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function RegistroPagamentoIndividual() {
    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> (Nome do cliente) </text>
                </div>
                <table className='tabelaPagamentosIndividual'>
                    <thead>
                        <tr>
                            <td> Geral </td>
                            <td> Observações </td>
                            <td> Finalizar contrato </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> Documento </th>
                            <th> Email </th>
                            <th> Telefone </th>
                            <th> Valor Contrato </th>
                            <th> Quantidade parcelas </th>
                            <th> Taxa </th>
                            <th> Juros Total </th>
                            <th> Valor Parcela </th>
                            <th> Multa </th>
                            <th> Mora p/dia </th>
                        </tr>
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
                            <td> TESTE </td>
                        </tr>
                    </tbody>
                </table>
                <br />
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
        </div>
    )
}

export { RegistroPagamentoIndividual };