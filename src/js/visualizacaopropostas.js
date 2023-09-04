import React, { useEffect, useState } from 'react';
import '../css/visualizacao_propostas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function VisualizacaoPropostas() {
    const navigate = useNavigate();
    const [listProposal, setListProposal] = useState([]);

    const handleListProposal = (list) => {
        setListProposal(list);
    }

    async function getDataProposal() {
        const token = Cookies.get('token');
        const grupo = Cookies.get('usergroup');
        const userid = Cookies.get('userid');
        const url = 'http://127.0.0.1:8080/api/v1/proposal/getcustomers';
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
        } catch (error) {
          console.log('error', error);
        }
      }

      const visualizar = (id) => {
        Cookies.set("propostaSelecionada", id);
        // navigate('/visualizacaoindividual');
      }

      useEffect(() => {
        getDataProposal();
      }, []);

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> Propostas </text>
                </div>
                <br />
                <table className='tabelaPropostas'>
<<<<<<< HEAD
                    <thead>
                        <tr className='linhasTabelaPropostas'>
                            <th className='colunasTabelaPropostas'> Indicador </th>
                            <th className='colunasTabelaPropostas'> Business </th>
                            <th className='colunasTabelaPropostas'> Data da criação </th>
                            <th className='colunasTabelaPropostas'> Nome Cliente </th>
                            <th className='colunasTabelaPropostas'> Documento </th>
                            <th className='colunasTabelaPropostas'> Status da propostas </th>
                            <th className='colunasTabelaPropostas'> Visualizar </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProposal.map((proposal) =>(
                        <tr className='linhasTabelaPropostas' key={proposal.proposalId}>
                            <td className='colunasTabelaPropostas'>{proposal.indicador.username}</td>
                            <td className='colunasTabelaPropostas'>{proposal.business}</td>
                            <td className='colunasTabelaPropostas'>{proposal.dataCriacao}</td>
                            <td className='colunasTabelaPropostas'>{proposal.cpf == null ? proposal.razaoSocial : proposal.nomeCompleto}</td>
                            <td className='colunasTabelaPropostas'>{proposal.cpf == null ? proposal.cnpj : proposal.cpf}</td>
                            <td className='colunasTabelaPropostas'>{proposal.status}</td>
                            <td colunasTabelaPropostas>
                                <button className='botaoVer' onClick={() => visualizar(proposal.proposalId)}>
                                    <span className='stringVer'> Ver </span>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
=======
                    <tr className='linhasTabelaPropostas'>
                        <th className='colunasTabelaPropostas'> Indicador </th>
                        <th className='colunasTabelaPropostas'> Business </th>
                        <th className='colunasTabelaPropostas'> Data da criação </th>
                        <th className='colunasTabelaPropostas'> Razão Social </th>
                        <th className='colunasTabelaPropostas'> Documento </th>
                        <th className='colunasTabelaPropostas'> Status da propostas </th>
                        <th className='colunasTabelaPropostas'> </th>
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
>>>>>>> 56ca593993c036819d6cc276dc0fb43cc819ac67
                </table>
            </div>
        </div>
    )
};

export { VisualizacaoPropostas };