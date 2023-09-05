import React, { useEffect, useState } from 'react';
import '../css/visualizacao_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import Cookies from 'js-cookie';
import axios from 'axios';

function VisualizacaoIndividual() {
    const [muda, handleButtonClick] = useState('infPropostas');
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);

    const [score, setScore] = useState('');

    const handleData = (dataNew) => {
        setData(dataNew);
    }

    const Mudapagina = (value) => {
        handleButtonClick(value);
    };

    async function getDataProposal() {
        const token = Cookies.get('token');
        const url = `http://127.0.0.1:8080/api/v1/proposal/getbyid/${Cookies.get('propostaSelecionada')}`;
        try {
          const response = await axios.get(
            url,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
          );
          const dados = response.data
          await handleData(dados);
          await setScore(dados.analytics.proposal.score);
        } catch (error) {
          console.log('error', error);
        } finally {
            setLoading(false);
        }
      }

      useEffect(() => {
        getDataProposal();
        console.log(score);
      }, []);

      function InfPropostas() {
        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Desejado </label>
                                <input className="inputCad" type="text" value={data.proposal.valor_desejado} disabled />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Taxa </label>
                                <input className="inputCad" type="text" value={data.proposal.taxa} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Corban </label>
                                <input className="inputCad" type="text" value={data.proposal.corban} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Status </label>
                                <input className="inputCad" type="text" value={data.proposal.status} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Montante </label>
                                <input className="inputCad" type="text" value={data.proposal.montante} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Liberado </label>
                                <input className="inputCad" type="text" value={data.proposal.valor_liberado} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Prazo </label>
                                <input className="inputCad" type="text" value={data.proposal.prazo} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Data de Abertura </label>
                                <input className="inputCad" type="text" disabled value={data.proposal.data_abertura} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Data da Primeira Parcela </label>
                                <input className="inputCad" type="text" value={data.proposal.data_primeira_parcela} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Total de Juros </label>
                                <input className="inputCad" type="text" value={data.proposal.juros} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Status do Contrato </label>
                                <input className="inputCad" type="text" value={data.proposal.status_contrato} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Motivo da reprovação </label>
                                <input className="inputCad" type="text" value={data.proposal.motivo_reprovacao} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Observação do Cliente </label>
                                <input className="inputCad" type="text" value={data.proposal.observacao_cliente} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Observação do Analista </label>
                                <input className="inputCad" type="text" value={data.proposal.observacao_analista} />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            </div>
        );
    }
    
    function BearusCredito() {
        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Score </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.score} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Risco </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.risco} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Titulos Protestados </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.num_titulos_protestados} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Titulos Protestados </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.valor_titulos_protestados} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Refins </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.num_refins} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Cadins </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.valor_cadins}/>
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Cheques Devolvidos </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.num_cheques_devolvidos} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Cheques Devolvidos </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.valor_cheques_devolvidos} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Pefin </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.num_pefins}/>
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Pefin </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.valor_pefins} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Empresas não Informadas </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.num_empresas_nao_informadas} />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            </div>
        );
    }
    
    function Juridico() {
        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Processos </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.num_processos} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Processos </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.valor_processos} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> UF Processos </label>
                                <input className="inputCad" type="number" value={data.proposal.analytics.num_uf_processos} />
                            </div>
                        </div>
                    </div>
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> PEP </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.pep} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> ISS </label>
                                <input className="inputCad" type="text" value={data.proposal.analytics.valor_iss} />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="number" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            </div>
        );
    }
    
    function Bacen() {
        return (
            <div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Vencer - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostas'>
                        <thead>
                            <tr className='linhasTabelaPropostas'>
                                <th className='colunasTabelaPropostas'> Total a vencer </th>
                                <th className='colunasTabelaPropostas'> {data.proposal.scr.vencer_valor_total} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Até 30 dias e vencidos até 14 dias</td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_ate_30_dias_vencidos_ate_14_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 31 a 60 dias</td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_31_60_dias}</td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 61 a 90 dias</td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_61_90_dias}</td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 91 a 180 dias</td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_91_180_dias}</td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 181 a 360 dias</td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_181_360_dias}</td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Acima de 360 dias </td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_acima_360_dias}</td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Indeterminado </td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencer_indeterminado}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Vencido - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostas'>
                        <thead>
                            <tr className='linhasTabelaPropostas'>
                                <th className='colunasTabelaPropostas'> Total vencido </th>
                                <th className='colunasTabelaPropostas'> {data.proposal.scr.vencido_total} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 15 a 30 dias </td>
                                <td className='colunasTabelaPropostas'>{data.proposal.scr.vencido_15_30_dias}</td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 31 a 60 dias</td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.vencido_15_30_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 61 a 90 dias</td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.vencido_31_60_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 91 a 180 dias</td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.vencido_61_90_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> 181 a 360 dias</td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.vencido_91_180_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Acima de 360 dias </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.vencido_acima_360_dias} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Prejuízo - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostas'>
                        <thead>
                            <tr className='linhasTabelaPropostas'>
                                <th className='colunasTabelaPropostas'> Total Prejuízo </th>
                                <th className='colunasTabelaPropostas'> {data.proposal.scr.prejuizo_toal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Até 12 meses </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.prejuizo_ate_12_meses} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Acima de 12 meses </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.prejuizo_acima_12_meses} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Coobrigação - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostas'>
                        <thead>
                            <tr className='linhasTabelaPropostas'>
                                <th className='colunasTabelaPropostas'> Total Coobrigação </th>
                                <th className='colunasTabelaPropostas'> {data.proposal.scr.coobrigacao_total} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Coobrigação Assumida </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.coobrigacao_assumida} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Coobrigação Prestadas </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.coobrigacao_prestadas} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Créditos a Liberar - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostas'>
                        <thead>
                            <tr className='linhasTabelaPropostas'>
                                <th className='colunasTabelaPropostas'> Total Créditos a liberar </th>
                                <th className='colunasTabelaPropostas'> {data.proposal.scr.creditos_liberar_total} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Créditos a Liberar até 360 dias </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.creditos_liberar_ate_360_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Créditos a Liberar acima de 360 dias </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.creditos_liberar_acima_360_dias} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Limites de Crédito - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostas'>
                        <thead>
                            <tr className='linhasTabelaPropostas'>
                                <th className='colunasTabelaPropostas'> Total Limite de Crédito </th>
                                <th className='colunasTabelaPropostas'> {data.proposal.scr.limites_credito_valor_total} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Limite de Crédito com vencimento até 360 dias </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.limites_credito_vencimento_ate_360_dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostas'>
                                <td className='colunasTabelaPropostas'> Limites de Crédito com vencimento acima de 360 dias </td>
                                <td className='colunasTabelaPropostas'> {data.proposal.scr.limites_credito_vencimento_acima_360_dias} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            </div>
        );
    }
    
    function AllsData() {
        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Pendência Financeria </label>
                                <input className="inputCad" type="number" />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Pendência Financeria </label>
                                <input className="inputCad" type="text" />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Recuperação </label>
                                <input className="inputCad" type="number" />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Recuperação </label>
                                <input className="inputCad" type="text" />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Cheque sem fundo </label>
                                <input className="inputCad" type="number" />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Protesto </label>
                                <input className="inputCad" type="number" />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Protesto </label>
                                <input className="inputCad" type="text" />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Limite Sugerido </label>
                                <input className="inputCad" type="text" />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Restrições </label>
                                <input className="inputCad" type="number" />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Restrições </label>
                                <input className="inputCad" type="text" />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="number" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            </div>
        );
    }
    
    function Observacoes() {
        return (
            <div>
                <div className="stringObservacoes">
                    <text> Observações </text>
                </div>
                <div className='divtextAreaobservacoes'>
                    <textarea className='textAreaobservacoes'> </textarea>
                </div>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            {loading == false && (
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> {data.proposal.customer.cpf == null ? data.proposal.customer.razao_social : data.proposal.customer.nome_completo} </text>
                </div>
                <br />
                <div className='rowbotoes'>
                    <button className={`botoes ${muda === 'infPropostas' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPropostas")}>
                        <span className='stringDados'> Informações </span>
                    </button>
                    <button className={`botoes ${muda === 'bureaus' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("bureaus")}>
                        <span className='stringDados'> Bureaus Crédito </span>
                    </button>
                    <button className={`botoes ${muda === 'juridico' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("juridico")}>
                        <span className='stringDados'> Jurídico </span>
                    </button>
                    <button className={`botoes ${muda === 'bacen' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("bacen")}>
                        <span className='stringDados'> Bacen </span>
                    </button>
                    <button className={`botoes ${muda === 'allsdata' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("allsdata")}>
                        <span className='stringDados'> Alls Data </span>
                    </button>
                    <button className={`botoes ${muda === 'observacoes' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("observacoes")}>
                        <span className='stringDados'> Observações </span>
                    </button>
                </div>
                <br />
                <br />
                <hr className='linha' />
                <div>
                    {muda === 'infPropostas' && (
                        <InfPropostas />
                    )}
                    {muda === 'bureaus' && (
                        <BearusCredito />
                    )}
                    {muda === 'juridico' && (
                        <Juridico />
                    )}
                    {muda === 'bacen' && (
                        <Bacen />
                    )}
                    {muda === 'allsdata' && (
                        <AllsData />
                    )}
                    {muda === 'observacoes' && (
                        <Observacoes />
                    )}
                </div>
            </div>
            )}
        </div>
    );
};

export { VisualizacaoIndividual };
