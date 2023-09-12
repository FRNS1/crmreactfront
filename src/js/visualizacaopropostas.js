import React, { useEffect, useState } from 'react';
import '../css/visualizacao_propostas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { format } from 'date-fns';
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
        navigate('/visualizacaoindividual');
      }

    function formataCnpj(cnpj) {
        const partesCNPJ = cnpj.split('')
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

    function formataCpf(cpf) {
        // let cpf2 = cpf + "babaca";
        // return cpf2;
        const partesCPF = cpf.split('')
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
                        {listProposal.map((proposal) =>(
                        <tr className='linhasTabelaPropostas' key={proposal.proposalId}>
                            <td className='colunasTabelaPropostas'>{proposal.indicador.username}</td>
                            <td className='colunasTabelaPropostas'>{proposal.business}</td>
                            <td className='colunasTabelaPropostas'>
                                <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputDadosTabela" value={proposal.dataCriacao ? format(new Date(proposal.dataCriacao), 'dd/MM/yyyy') : ''} />
                            </td>
                            <td className='colunasTabelaPropostas'>{proposal.cpf == null ? proposal.razaoSocial : proposal.nomeCompleto}</td>
                            <td className='colunasTabelaPropostas'>{proposal.cpf == null ? formataCnpj(proposal.cnpj) : formataCpf(proposal.cpf)} </td>
                            <td className='colunasTabelaPropostas'>{proposal.status} </td>
                            <td colunasTabelaPropostas>
                                <button className='botaoVer' onClick={() => visualizar(proposal.proposalId)}>
                                    <span className='stringVer'> Ver </span>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export { VisualizacaoPropostas };