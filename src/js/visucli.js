import React, { useState } from 'react';
import '../css/visu_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function Visucli() {
    const [muda, handleButtonClick] = useState('infPessoal');

    const Mudapagina = (value) => {
        handleButtonClick(value);
        console.log(muda)
    };

    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div className='rowbotoes'>
                    <button className={`botoes ${muda === 'infPessoal' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("infPessoal")}>
                        <span className='stringDados'> Informações pessoais </span>
                    </button>
                    <button className={`botoes ${muda === 'endereco' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("endereco")}>
                        <span className='stringDados'> Endereço </span>
                    </button>
                    <button className={`botoes ${muda === 'contatos' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("contatos")}>
                        <span className='stringDados'> Contatos </span>
                    </button>
                    <button className={`botoes ${muda === 'propostas' ? 'botaoAtivo' : ''}`} onClick={() => Mudapagina("propostas")}>
                        <span className='stringDados'> Propostas </span>
                    </button>
                </div>
                <br />
                <br />
                <hr className='linha' />
                <div>
                    {muda === 'infPessoal' && (
                        <Forminf />
                    )}
                    {muda === 'endereco' && (
                        <Formend />
                    )}
                    {muda === 'contatos' && (
                        <Formcontat />
                    )}
                    {muda === 'propostas' && (
                        <Tabprop />
                    )}
                </div>
            </div>
        </div>
    );
}

function Forminf() {
    return (
        <form className='formularios'>
            <br />
            <div className='fields'>
                <h2> PF </h2>
                <div className='divrow'>
                    <div className='divfield'>
                        <label className="stringDados"> Nome Completo </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> CPF </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> Data de Nascimento </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                </div>
                <div className='divrow'>
                    <div className='divfield'>
                        <label className="stringDados"> Gênero </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> Escolaridade </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> Ocupação </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                </div>
                <div className='DADOSPJ'>
                    <br />
                    <h2> PJ </h2>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> CNPJ </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Nome Fantasia </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Razão Social </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                    </div>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Segmento </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Data de abertura </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                        <div className='divfield' style={{ opacity: 0 }} id="none">
                            <label className="stringDados"> Ocupação </label>
                            <input className="inputDados" type="text" disabled />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

function Formend() {
    return (
        <form className='formularios'>
            <br />
            <div className='fields'>
                <div className='divrow'>
                    <div className='divfield'>
                        <label className="stringDados"> CEP </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> Logradouro </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> Bairro </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                </div>
                <div className='divrow'>
                    <div className='divfield'>
                        <label className="stringDados"> Cidade </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> País </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield' style={{ opacity: 0 }} id="none">
                        <label className="stringDados"> Ocupação </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                </div>
            </div>
        </form>
    );
}

function Formcontat() {
    return (
        <form className='formularios'>
            <br />
            <div className='fields'>
                <div className='divrow'>
                    <div className='divfield'>
                        <label className="stringDados"> Telefone </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield'>
                        <label className="stringDados"> Email </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                    <div className='divfield' style={{ opacity: 0 }} id="none">
                        <label className="stringDados"> Ocupação </label>
                        <input className="inputDados" type="text" disabled />
                    </div>
                </div>
            </div>
        </form>
    );
}

function Tabprop() {
    return (
        <div className='caixaTabelaPropostas'>
            <br />
            <div className='divbotaoCadastrarNovoCliente'>
                <button className='botaoCadastrarNovoCliente'>
                    <span className='stringCadastrarNovoCliente'> Cadastrar Nova Proposta </span>
                </button>
            </div>
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
    );
}

export { Visucli };