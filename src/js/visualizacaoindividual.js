import React, { useEffect, useState } from 'react';
import '../css/visualizacao_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { format } from 'date-fns';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';
import Cookies from 'js-cookie';
import axios from 'axios';

function VisualizacaoIndividual() {
    const [muda, handleButtonClick] = useState('infPropostas');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    // Variaveis proposal
    const [proposalId, setProposalId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerRazaoSocial, setCustomerRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [valorDesejado, setValorDesejado] = useState('');
    const [taxa, setTaxa] = useState('');
    const [corban, setCorban] = useState('');
    const [status, setStatus] = useState('');
    const [montante, setMontante] = useState('');
    const [valorLiberado, setValorLiberado] = useState('');
    const [prazo, setPrazo] = useState('');
    const [dataAbertura, setDataAbertura] = useState('');
    const [dataPrimeiraParcela, setDataPrimeiraParcela] = useState('');
    const [totalJuros, setTotalJuros] = useState('');
    const [statusContrato, setStatusContrato] = useState('');
    const [motivoReprovacao, setMotivoReprovacao] = useState('');
    const [observacaoCliente, setObservacaoCliente] = useState('');
    const [observacaoAnalista, setObservacaoAnalista] = useState('');
    // Variáveis Analytics
    const [numTitulosProtestados, setNumTitulosProtestados] = useState('');
    const [score, setScore] = useState('');
    const [numRefins, setNumRefins] = useState('');
    const [valorCadins, setValorCadins] = useState('');
    const [valorIss, setValorIss] = useState('');
    const [numProcessos, setNumProcessos] = useState('');
    const [valorProcessos, setValorProcessos] = useState('');
    const [numUfProcessos, setNumUfProcessos] = useState('');
    const [dividaAtiva, setDividaAtiva] = useState('');
    const [valorTitulosProtestados, setValorTitulosProtestados] = useState('');
    const [risco, setRisco] = useState('');
    const [pep, setPep] = useState('');
    const [numChequesDevolvidos, setNumChequesDevolvidos] = useState('');
    const [valorChequesDevolvidos, setValorChequesDevolvidos] = useState('');
    const [valorPefins, setValorPefins] = useState('');
    const [numPefins, setNumPefins] = useState('');
    const [empresasNaoInformadas, setEmpresasNaoInformadas] = useState('');
    // Variáveis SCR
    const [vencerValorTotal, setVencerValorTotal] = useState('');
    const [vencerAte30DiasvencidosAte14Dias, setVencerAte30DiasVencidosAte14Dias] = useState('');
    const [vencer3160Dias, setVencer3160Dias] = useState('');
    const [vencer6190Dias, setVencer6190Dias] = useState('');
    const [vencer181360Dias, setVencer181360Dias] = useState('');
    const [vencerAcima360Dias, setVencerAcima360Dias] = useState('');
    const [vencerIndeterminado, setVencerIndeterminado] = useState('');
    const [vencidoTotal, setVencidoTotal] = useState('');
    const [vencido1530Dias, setVencido1530Dias] = useState('');
    const [vencido3160Dias, setVencido3160Dias] = useState('');
    const [vencido6190Dias, setVencido6190Dias] = useState('');
    const [vencido91180Dias, setVencido91180Dias] = useState('');
    const [vencido181360Dias, setVencido181360Dias] = useState('');
    const [vencidoAcima360Dias, setVencidoAcima360Dias] = useState('');
    const [prejuizoTotal, setPrejuizoTotal] = useState('');
    const [prejuizoAte12Meses, setPrejuizoAte12Meses] = useState('');
    const [prejuizoAcima12Meses, setPrejuizoAcima12Meses] = useState('');
    const [coobrigacaoTotal, setCoobrigacaoTotal] = useState('');
    const [coobrigacaoAssumida, setCoobrigacaoAssumida] = useState('');
    const [coobrigacaoPrestadas, setCoobrigacaoPrestadas] = useState('');
    const [creditosLiberarTotal, setCreditosLiberarTotal] = useState('');
    const [creditosLiberarAte360Dias, setCreditosLiberarAte360Dias] = useState('');
    const [creditosLiberarAcima360Dias, setCreditosLiberarAcima360Dias] = useState('');
    const [limitesCreditoValorTotal, setLimitesCreditoValorTotal] = useState('');
    const [limitesCreditoVencimentoAte360Dias, setLimitesCreditosVencimentoAte360Dias] = useState('');
    const [limitesCreditoVencimentoAcima360Dias, setLimitesCreditosVencimentoAcima360Dias] = useState('');
    // Variáveis AllsData
    const [NumPendenciasFinanceirasAlls, setNumPendenciasFinanceirasAlls] = useState('');
    const [ValorPendenciasFinanceirasAlls, setValorPendenciasFinanceirasAlls] = useState('');
    const [NumRecuperacoesAlls, setNumRecuperacoesAlls] = useState('');
    const [valorRecuperacoesAlls, setValorRecuperacoesAlls] = useState('');
    const [NumChequeSemFundoAlls, setNumChequeSemFundoAlls] = useState('');
    const [NumProtestosAlls, setNumProtestosAlls] = useState('');
    const [valorProtestosAlls, setValorProtestosAlls] = useState('');
    const [limiteSugeridoAlls, setLimiteSugeridoAlls] = useState('');
    const [NumRestricoesAlls, setNumRestricoesAlls] = useState('');
    const [valorRestricoesAlls, setValorRestricoesAlls] = useState('');
    // Variáveis Files
    const [files, setFiles] = useState('');

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
            const data = response.data;
            setData(data);
            setProposalId(data.proposalId);
            setCustomerName(data.customerName);
            setCustomerRazaoSocial(data.customerRazaoSocial);
            setCnpj(data.cnpj);
            setCpf(data.cpf);
            setValorDesejado(data.valorDesejado);
            setTaxa(data.taxa);
            setCorban(data.corban);
            setStatus(data.status);
            setMontante(data.montante);
            setValorLiberado(data.valorLiberado);
            setPrazo(data.prazo);
            setDataAbertura(data.dataAbertura);
            setDataPrimeiraParcela(data.dataPrimeiraParcela);
            setTotalJuros(data.totalJuros);
            setStatusContrato(data.statusContrato);
            setMotivoReprovacao(data.motivoReprovacao);
            setObservacaoCliente(data.observacaoCliente);
            setObservacaoAnalista(data.observacaoAnalista);
            setNumTitulosProtestados(data.analytics.num_titulos_protestados);
            setScore(data.analytics.score);
            setNumRefins(data.analytics.num_refins);
            setValorCadins(data.analytics.valor_cadins);
            setValorIss(data.analytics.valor_iss);
            setNumProcessos(data.analytics.num_processos);
            setValorProcessos(data.analytics.valor_processos);
            setNumUfProcessos(data.analytics.num_uf_processos);
            setDividaAtiva(data.analytics.divida_ativa);
            setValorTitulosProtestados(data.analytics.valor_titulos_protestados);
            setRisco(data.analytics.risco);
            setPep(data.analytics.pep);
            setNumChequesDevolvidos(data.analytics.num_cheques_devolvidos);
            setValorChequesDevolvidos(data.analytics.valor_cheques_devolvidos);
            setValorPefins(data.analytics.valor_pefins);
            setNumPefins(data.analytics.num_pefins);
            setEmpresasNaoInformadas(data.analytics.empresas_nao_informadas);
            setVencerValorTotal(data.scr.vencer_valor_total);
            setVencerAte30DiasVencidosAte14Dias(data.scr.vencer_ate_30_dias_vencidos_ate_14_dias);
            setVencer3160Dias(data.scr.vencer_31_60_dias);
            setVencer6190Dias(data.scr.vencer_61_90_dias);
            setVencer181360Dias(data.scr.vencer_181_360_dias);
            setVencerAcima360Dias(data.scr.vencer_acima_360_dias);
            setVencerIndeterminado(data.scr.vencer_indeterminado);
            setVencidoTotal(data.scr.vencido_total);
            setVencido1530Dias(data.scr.vencido_15_30_dias);
            setVencido3160Dias(data.scr.vencido_31_60_dias);
            setVencido6190Dias(data.scr.vencido_61_90_dias);
            setVencido91180Dias(data.scr.vencido_91_180_dias);
            setVencido181360Dias(data.scr.vencido_181_360_dias);
            setVencidoAcima360Dias(data.scr.vencido_acima_360_dias);
            setPrejuizoTotal(data.scr.prejuizo_total);
            setPrejuizoAte12Meses(data.scr.prejuizo_ate_12_meses);
            setPrejuizoAcima12Meses(data.scr.prejuizo_acima_12_meses);
            setCoobrigacaoTotal(data.scr.coobrigacao_total);
            setCoobrigacaoAssumida(data.scr.coobrigacao_assumida);
            setCoobrigacaoPrestadas(data.scr.coobrigacao_prestadas);
            setCreditosLiberarTotal(data.scr.creditos_liberar_total);
            setCreditosLiberarAte360Dias(data.scr.creditos_liberar_ate_360_dias);
            setCreditosLiberarAcima360Dias(data.scr.creditos_liberar_acima_360_dias);
            setLimitesCreditoValorTotal(data.scr.limites_credito_valor_total);
            setLimitesCreditosVencimentoAte360Dias(data.scr.limites_credito_vencimento_ate_360_dias);
            setLimitesCreditosVencimentoAcima360Dias(data.scr.limites_credito_vencimento_acima_360_dias);
            setNumPendenciasFinanceirasAlls(data.num_pendencias_financeiras_alls);
            setValorPendenciasFinanceirasAlls(data.valor_pendencias_financeiras_alls);
            setNumRecuperacoesAlls(data.num_recuperacoes_alls);
            setValorRecuperacoesAlls(data.valor_recuperacoes_alls);
            setNumChequeSemFundoAlls(data.num_cheque_sem_fundo_alls);
            setNumProtestosAlls(data.num_protestos_alls);
            setValorProtestosAlls(data.valor_protestos_alls);
            setLimiteSugeridoAlls(data.limite_sugerido_alls);
            setNumRestricoesAlls(data.num_restricoes_alls);
            setValorRestricoesAlls(data.valor_restricoes);
            setFiles(data.files);
            console.log(response.data);
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDataProposal();
        alert(numTitulosProtestados)
    }, []);

    function InfPropostas() {

        const [montante, setMontante] = React.useState('');
        const handleMontanteChange = (value, name) => {
            setMontante(value);
        };
        const [valorliberado, setValorLiberado] = React.useState('');
        const handleValorLiberadoChange = (value, name) => {
            setValorLiberado(value);
        };
        const [totalJuros, setTotalJuros] = React.useState('');
        const handleTotalJurosChange = (value, name) => {
            setTotalJuros(value);
        };

        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Desejado </label>
                                <CurrencyInput
                                    name="totalValorDesejado"
                                    value={valorDesejado}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                    disabled
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Taxa </label>
                                <input className="inputCad" type="text" value={taxa} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Corban </label>
                                <input className="inputCad" type="text" value={corban} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Status </label>
                                <input className="inputCad" type="text" value={status} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Montante </label>
                                <CurrencyInput
                                    name="totalMontante"
                                    value={montante}
                                    onValueChange={handleMontanteChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Liberado </label>
                                <CurrencyInput
                                    name="valorliberado"
                                    value={valorliberado}
                                    onValueChange={handleValorLiberadoChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Prazo </label>
                                <input className="inputCad" type="text" value={prazo} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Data de Abertura </label>
                                <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputCad" value={dataAbertura ? format(new Date(dataAbertura), 'dd/MM/yyyy') : ''} disabled />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Data da Primeira Parcela </label>
                                <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" type="text" className="inputCad" value={dataPrimeiraParcela ? format(new Date(dataPrimeiraParcela), 'dd/MM/yyyy') : ''} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Total de Juros </label>
                                <CurrencyInput
                                    name="totalJuros"
                                    value={totalJuros}
                                    onValueChange={handleTotalJurosChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Status do Contrato </label>
                                <select className='inputCad' value={statusContrato}>
                                    <option className='inputCad'> Aguardando análise </option>
                                    <option className='inputCad'> Em análise </option>
                                    <option className='inputCad'> Aprovado </option>
                                    <option className='inputCad'> Reprovado </option>
                                    <option className='inputCad'> Empréstimo concedido </option>
                                </select>
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Motivo da reprovação </label>
                                <select className='inputCad' value={motivoReprovacao}>
                                    <option className='inputCad'> Selecione um motivo  </option>
                                    <option className='inputCad'> Restrição de biros de crédito  </option>
                                    <option className='inputCad'> Restrição por divida ativa </option>
                                    <option className='inputCad'> Restrição de cadin </option>
                                    <option className='inputCad'> Restrição por ausência de documento </option>
                                    <option className='inputCad'> Restrição por renda insuficiente </option>
                                    <option className='inputCad'> Restrição por score fora da política </option>
                                    <option className='inputCad'> Empresas ligadas com restrição </option>
                                </select>
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Observação do Cliente </label>
                                <input className="inputCad" type="text" value={observacaoCliente} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Observação do Analista </label>
                                <input className="inputCad" type="text" value={observacaoAnalista} />
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

        const [cadins, setCadins] = React.useState('');
        const handleCadinsChange = (value, name) => {
            setCadins(value);
        };
        const [valorTitulosProtestados, setValorTitulosProtestados] = React.useState('');
        const handleValorTitulosProtestadosChange = (value, name) => {
            setValorTitulosProtestados(value);
        };
        const [valorPefins, setValorPefins] = React.useState('');
        const handleValorPefinsChange = (value, name) => {
            setValorPefins(value);
        };
        const [valorChequesDevolvidos, setValorChequesDevolvidos] = React.useState('');
        const handleValorChequesDevolvidosChange = (value, name) => {
            setValorChequesDevolvidos(value);
        };
        const [valorProcessos, setValorProcessos] = React.useState('');
        const handleValorProcessosChange = (value, name) => {
            setValorProcessos(value);
        };
        const [dividaAtiva, setDividaAtiva] = React.useState('');
        const handleDividaAtivaChange = (value, name) => {
            setDividaAtiva(value);
        };

        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Score </label>
                                <input className="inputCad" type="text" value={score} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Risco </label>
                                <input className="inputCad" type="number" value={risco} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de titulos protestados </label>
                                <input className="inputCad" type="number" value={numTitulosProtestados} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos titulos protestados </label>
                                <CurrencyInput
                                    name="valortitulosprotestados"
                                    value={valorTitulosProtestados}
                                    onValueChange={handleValorTitulosProtestadosChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Refins </label>
                                <input className="inputCad" type="number" value={numRefins} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Cadins </label>
                                <CurrencyInput
                                    name="cadins"
                                    value={cadins}
                                    onValueChange={handleCadinsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de cheques devolvidos </label>
                                <input className="inputCad" type="number" value={numChequesDevolvidos} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos cheques devolvidos </label>
                                <CurrencyInput
                                    name="valorChequesDevolvidos"
                                    value={valorChequesDevolvidos}
                                    onValueChange={handleValorChequesDevolvidosChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Pefin </label>
                                <input className="inputCad" type="number" value={numPefins} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Pefin </label>
                                <CurrencyInput
                                    name="cadins"
                                    value={valorPefins}
                                    onValueChange={handleValorPefinsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Empresas não Informadas </label>
                                <input className="inputCad" type="text" value={empresasNaoInformadas} />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Disabled </label>
                                <input className="inputCad" type="text" disabled />
                            </div>
                        </div>
                        <br />
                        <br />
                        <text className='textJuridico'> Jurídico </text>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Processos </label>
                                <input className="inputCad" type="number" value={numProcessos} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Processos </label>
                                <CurrencyInput
                                    name="valorProcessos"
                                    value={valorProcessos}
                                    onValueChange={handleValorProcessosChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> UF Processos </label>
                                <input className="inputCad" type="number" value={numUfProcessos} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Divida Ativa </label>
                                <CurrencyInput
                                    name="dividaAtiva"
                                    value={dividaAtiva}
                                    onValueChange={handleDividaAtivaChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> PEP </label>
                                <input className="inputCad" type="text" value={pep} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> ISS </label>
                                <input className="inputCad" type="text" value={valorIss} />
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
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'> {vencerValorTotal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Até 30 dias e vencidos até 14 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencerAte30DiasvencidosAte14Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 31 a 60 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencer3160Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 61 a 90 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencer6190Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 91 a 180 dias</td>
                                <td className='colunasTabelaPropostasBacen'> OLHAR </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 181 a 360 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencer181360Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {vencerAcima360Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Indeterminado </td>
                                <td className='colunasTabelaPropostasBacen'> {vencerIndeterminado} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Vencido - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total  </th>
                                <th className='colunasTabelaPropostasBacen'> {vencidoTotal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 15 a 30 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {vencido1530Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 31 a 60 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencido3160Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 61 a 90 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencido6190Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 91 a 180 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencido91180Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> 181 a 360 dias</td>
                                <td className='colunasTabelaPropostasBacen'> {vencido181360Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {vencidoAcima360Dias} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Prejuízo - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'> {prejuizoTotal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Até 12 meses </td>
                                <td className='colunasTabelaPropostasBacen'> {prejuizoAte12Meses} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Acima de 12 meses </td>
                                <td className='colunasTabelaPropostasBacen'> {prejuizoAcima12Meses} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Coobrigação - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'> {coobrigacaoTotal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Coobrigação Assumida </td>
                                <td className='colunasTabelaPropostasBacen'> {coobrigacaoAssumida} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Coobrigação Prestadas </td>
                                <td className='colunasTabelaPropostasBacen'> {coobrigacaoPrestadas} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Créditos a Liberar - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'> {creditosLiberarTotal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Créditos a Liberar até 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {creditosLiberarAte360Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Créditos a Liberar acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {creditosLiberarAcima360Dias} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divtextodataBase'>
                    <text className='textodataBase'> Limites de Crédito - Total </text>
                </div>
                <div className='caixaTabelaPropostas'>
                    <br />
                    <table className='tabelaPropostasBacen'>
                        <thead>
                            <tr className='linhasTabelaPropostasBacen'>
                                <th className='colunasTabelaPropostasBacen'> Total </th>
                                <th className='colunasTabelaPropostasBacen'> {limitesCreditoValorTotal} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Limite de Crédito com vencimento até 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {limitesCreditoVencimentoAte360Dias} </td>
                            </tr>
                            <tr className='linhasTabelaPropostasBacen'>
                                <td className='colunasTabelaPropostasBacen'> Limites de Crédito com vencimento acima de 360 dias </td>
                                <td className='colunasTabelaPropostasBacen'> {limitesCreditoVencimentoAcima360Dias} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='divbotaoEnviarObservacoes'>
                    <button className='botaoEnviarObservacoes'>
                        <span className='stringEnviarDados'> Salvar </span>
                    </button>
                </div>
                <br />
            </div>
        );
    }

    function AllsData() {
        const [ValorPendenciasFinanceirasAlls, setValorPendenciasFinanceirasAlls] = React.useState('');
        const handleValorPendenciasFinanceirasAllsChange = (value, name) => {
            setValorPendenciasFinanceirasAlls(value);
        };
        const [valorRecuperacoesAlls, setValorRecuperacoesAlls] = React.useState('');
        const handleValorRecuperacoesAllsChange = (value, name) => {
            setValorRecuperacoesAlls(value);
        };
        const [valorProtestosAlls, setValorProtestosAlls] = React.useState('');
        const handleValorProtestosAllsChange = (value, name) => {
            setValorProtestosAlls(value);
        };
        const [limiteSugeridoAlls, setLimiteSugeridoAlls] = React.useState('');
        const handleLimiteSugeridoAllsChange = (value, name) => {
            setLimiteSugeridoAlls(value);
        };
        const [valorRestricoesAlls, setValorRestricoesAlls] = React.useState('');
        const handleValorRestricoesAllsChange = (value, name) => {
            setValorRestricoesAlls(value);
        };


        return (
            <div>
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de pendências financeiras </label>
                                <input className="inputCad" type="number" value={NumPendenciasFinanceirasAlls} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Valor das pendências financeiras </label>
                                <CurrencyInput
                                    name="ValorPendenciasFinanceirasAlls"
                                    value={ValorPendenciasFinanceirasAlls}
                                    onValueChange={handleValorPendenciasFinanceirasAllsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de recuperação </label>
                                <input className="inputCad" type="number" value={NumRecuperacoesAlls} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor da Recuperação </label>
                                <CurrencyInput
                                    name="valorRecuperacoesAlls"
                                    value={valorRecuperacoesAlls}
                                    onValueChange={handleValorRecuperacoesAllsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de cheque sem fundo </label>
                                <input className="inputCad" type="number" value={NumChequeSemFundoAlls} />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de protestos </label>
                                <input className="inputCad" type="number" value={NumProtestosAlls} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor dos protestos </label>
                                <CurrencyInput
                                    name="valorRecuperacoesAlls"
                                    value={valorProtestosAlls}
                                    onValueChange={handleValorProtestosAllsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Limite Sugerido </label>
                                <CurrencyInput
                                    name="limiteSugeridoAlls"
                                    value={limiteSugeridoAlls}
                                    onValueChange={handleLimiteSugeridoAllsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Quantidade de restrições </label>
                                <input className="inputCad" type="number" value={NumRestricoesAlls} />
                            </div>
                        </div>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor das restrições </label>
                                <CurrencyInput
                                    name="valorRestricoesAlls"
                                    value={valorRestricoesAlls}
                                    onValueChange={handleValorRestricoesAllsChange}
                                    allowNegativeValue={false}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="R$ "
                                    placeholder="R$ 0,00"
                                    className="inputCad"
                                />
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

    function Upload() {
        return (
            <div className='divUploadFiles'>
                <div className='stringUpload'>
                    <text> Faça o upload dos seus documentos </text>
                </div>
                <div className='divinputFiles'>
                    <input className='inputFiles' type="file" multiple />
                </div>
                <div className='divlistaFiles'>
                    <ul className='listaFiles'>
                        <li className='liFiles'> Nome do arquivo e arquivo </li>
                        <li className='liFiles'> Nome do arquivo e arquivo </li>
                        <li className='liFiles'> Nome do arquivo e arquivo </li>
                        <li className='liFiles'> Nome do arquivo e arquivo </li>
                    </ul>
                </div>
                <div className='divbotaoEnviarArquivos'>
                    <button className='botaoEnviarArquivos'>
                        <span className='stringEnviarDados'> Enviar Arquivos </span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {loading === false ? (
                <div className='containerPrincipal'>
                    <div>
                        <NavSuperior />
                        <NavLateral />
                    </div>
                    <div className='containerGeral'>
                        <div className='textoPropostas'>
                            <text className='stringTitulos'> {data.isCnpj == false ? customerName : customerRazaoSocial} </text>
                        </div>
                        <br />
                        <div className='rowbotoes'>
                            <button className={`botoes ${muda === 'infPropostas' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPropostas")}>
                                <span className='stringDados'> Informações </span>
                            </button>
                            <button className={`botoes ${muda === 'bureaus' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("bureaus")}>
                                <span className='stringDados'> Bureaus Crédito </span>
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
                            <button className={`botoes ${muda === 'upload' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("upload")}>
                                <span className='stringDados'> Upload </span>
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
                            {muda === 'bacen' && (
                                <Bacen />
                            )}
                            {muda === 'allsdata' && (
                                <AllsData />
                            )}
                            {muda === 'observacoes' && (
                                <Observacoes />
                            )}
                            {muda === 'upload' && (
                                <Upload />
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export { VisualizacaoIndividual };




