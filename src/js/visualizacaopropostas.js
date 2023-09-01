import React from 'react';
import '../css/visualizacao_propostas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function VisualizacaoPropostas() {

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringPropostas'> Propostas </text>
                </div>
                <br />
                <table className='tabelaPropostas'>
                    <tr className='linhasTabelaPropostas'>
                        <th className='colunasTabelaPropostas'> Indicador </th>
                        <th className='colunasTabelaPropostas'> Business </th>
                        <th className='colunasTabelaPropostas'> Data da criação </th>
                        <th className='colunasTabelaPropostas'> Razão Social </th>
                        <th className='colunasTabelaPropostas'> Documento </th>
                        <th className='colunasTabelaPropostas'> Status da propostas </th>
                        <th className='colunasTabelaPropostas'> Visualizar </th>
                    </tr>
                    <tr className='linhasTabelaPropostas'>
                    <td className='colunasTabelaPropostas'> TESTE </td>
                    <td className='colunasTabelaPropostas'> TESTE </td>
                    <td className='colunasTabelaPropostas'> TESTE </td>
                    <td className='colunasTabelaPropostas'> TESTE </td>
                    <td className='colunasTabelaPropostas'> TESTE </td>
                    <td className='colunasTabelaPropostas'> TESTE </td>
                    <td colunasTabelaPropostas>
                        <button className='botaoVer'>
                            <span className='stringVer'> Ver </span>
                        </button>
                    </td>
                </tr>
                </table>
            </div>
        </div>
    )
};

export { VisualizacaoPropostas };