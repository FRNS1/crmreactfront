import React, { useState } from 'react';
import '../css/registro_pagamentos.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function RegistroPagamentos() {
    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> (Barra de pesquisa) </text>
                </div>
                <br />
                <hr />
                <table className="tabelaPagamentos">
                    <thead>
                        <tr>
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

export{ RegistroPagamentos };