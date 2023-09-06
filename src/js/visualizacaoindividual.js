import React, { useState } from 'react';
import '../css/visualizacao_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import CurrencyInput from 'react-currency-input-field';

function VisualizacaoIndividual() {
    const [muda, handleButtonClick] = useState('infPropostas');

    const Mudapagina = (value) => {
        handleButtonClick(value);
    };

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='textoPropostas'>
                    <text className='stringTitulos'> Nome do Cliente </text>
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
                    {muda === 'upload' && (
                        <Upload />
                    )}
                </div>
            </div>
        </div>
    );
};

function InfPropostas() {
    const [totalJuros, setTotalJuros] = React.useState('');
    const handleTotalJurosChange = (value, name) => {
        setTotalJuros(value);
    };
    const [valorDesejado, setValorDesejado] = React.useState('');
    const handleTotalValorDesejadoChange = (value, name) => {
        setValorDesejado(value);
    };
    const [montante, setMontante] = React.useState('');
    const handleMontanteChange = (value, name) => {
        setMontante(value);
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
                                onValueChange={handleTotalValorDesejadoChange}
                                allowNegativeValue={false}
                                decimalSeparator=","
                                groupSeparator="."
                                prefix="R$ "
                                placeholder="R$ 0,00"
                                className="inputCad"
                            />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Taxa </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Corban </label>
                            <input className="inputCad" type="text" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Status </label>
                            <select className='inputCad'>
                                <option className='inputCad'> Aguardando análise </option>
                                <option className='inputCad'> Em análise </option>
                                <option className='inputCad'> Aprovado </option>
                                <option className='inputCad'> Reprovado </option>
                                <option className='inputCad'> Empréstimo concedido </option>
                            </select>
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
                            <input className="inputCad" type="text" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Prazo </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Data de Abertura </label>
                            <input className="inputCad" type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Data da Primeira Parcela </label>
                            <input className="inputCad" type="text" />
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
                            <select className='inputCad'>
                                <option className='inputCad'> Aberto </option>
                                <option className='inputCad'> Quitado </option>
                            </select>
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Motivo da reprovação </label>
                            <select className='inputCad'>
                                <option className='inputCad'> Restrição biros de crédito  </option>
                                <option className='inputCad'> Restrição de divida ativa </option>
                                <option className='inputCad'> Restrição de cadin </option>
                                <option className='inputCad'> Restrição de ausência de documento </option>
                                <option className='inputCad'> Restrição de renda insuficiente </option>
                                <option className='inputCad'> Restrição por score fora da política </option>
                                <option className='inputCad'> Empresas ligadas com restrição </option>
                            </select>
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Observação Cliente </label>
                            <textarea className='observacaoCliente'> </textarea>
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
export default InfPropostas;

function BearusCredito() {
    return (
        <div>
            <form className='formularios'>
                <br />
                <div className='fields'>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Score </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Risco </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Quantidade de titulos protestados </label>
                            <input className="inputCad" type="number" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Valor dos titulos protestados </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Refins </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Cadins </label>
                            <input className="inputCad" type="text" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Quantidade de cheques devolvidos </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Valor dos cheques devolvidos </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Quantidade de pefin </label>
                            <input className="inputCad" type="number" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Valor do pefin </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Empresas não Informadas </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> </label>
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
                            <label className="stringDados"> Quantidade de processos </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Valor de processos </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> UF Processos </label>
                            <input className="inputCad" type="number" />
                        </div>
                    </div>
                </div>
                <div className='fields'>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> PEP </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> ISS </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> </label>
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
                            <th className='colunasTabelaPropostas'> Total </th>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Até 30 dias e vencidos até 14 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 31 a 60 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 61 a 90 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 91 a 180 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 181 a 360 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Acima de 360 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Indeterminado </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
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
                            <th className='colunasTabelaPropostas'> Total  </th>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 15 a 30 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 31 a 60 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 61 a 90 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 91 a 180 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> 181 a 360 dias</td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Acima de 360 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
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
                            <th className='colunasTabelaPropostas'> Total </th>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Até 12 meses </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Acima de 12 meses </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
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
                            <th className='colunasTabelaPropostas'> Total </th>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Coobrigação Assumida </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Coobrigação Prestadas </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
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
                            <th className='colunasTabelaPropostas'> Total </th>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Créditos a Liberar até 360 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Créditos a Liberar acima de 360 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
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
                            <th className='colunasTabelaPropostas'> Total </th>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Limite de Crédito com vencimento até 360 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
                        </tr>
                        <tr className='linhasTabelaPropostas'>
                            <td className='colunasTabelaPropostas'> Limites de Crédito com vencimento acima de 360 dias </td>
                            <td className='colunasTabelaPropostas'>
                                <input className='dadosBacen' type='text' />
                            </td>
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
                            <label className="stringDados"> Quantidade de pendências financeiras </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Valor das pendências financeiras </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Quantidade de recuperação </label>
                            <input className="inputCad" type="number" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Valor da recuperação </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Cheque sem fundo </label>
                            <input className="inputCad" type="number" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Quantidade de protestos </label>
                            <input className="inputCad" type="number" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Valor dos protestos </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Limite Sugerido </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Quantidade de restrições </label>
                            <input className="inputCad" type="number" />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Valor das restrições </label>
                            <input className="inputCad" type="text" />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> </label>
                            <input className="inputCad" type="text" disabled />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> </label>
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
        </div>
    );
}

export { VisualizacaoIndividual };