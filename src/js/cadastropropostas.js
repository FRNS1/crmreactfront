import React, { useEffect, useState } from 'react';
import '../css/cadastro_propostas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import CurrencyInput from 'react-currency-input-field';

function CadastroPropostas() {
    const [valorDesejado, setValorDesejado] = React.useState('');
    const handleValorDesejadoChange = (value, name) => {
        setValorDesejado(value);
    };
    return (
        <div className='containerPrincipal'>
            <div>
                <NavSuperior />
                <NavLateral />
            </div>
            <div className='containerGeral'>
                <div>
                    <text className='stringTitulos'> Cadastro de Propostas </text>
                </div>
                <br />
                <form className='formularios'>
                    <br />
                    <div className='fields'>
                        <div className='divrow'>
                            <div className='divfield'>
                                <label className="stringDados"> Valor Desejado </label>
                                <CurrencyInput
                                name="valorDesejado"
                                value={valorDesejado}
                                onValueChange={handleValorDesejadoChange}
                                allowNegativeValue={false}
                                decimalSeparator=","
                                groupSeparator="."
                                prefix="R$ "
                                placeholder="R$ 0,00"
                                className="inputCad"
                                />
                            </div>
                            <div className='divfield'>
                                <label className="stringDados"> Prazo </label>
                                <input className="inputCad" type="text" required />
                            </div>
                            <div className='divfield' style={{ opacity: 0 }} id="none">
                                <label className="stringDados"> Observação Cliente </label>
                                <input className="inputDados" type="text" disabled />
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <div className="stringObservaçãoCliente">
                    <text> Observação Cliente </text>
                </div>
                <div className='divtextArea'>
                    <textarea className='textArea'> </textarea>
                </div>
                <div className='divbotaoEnviarDados'>
                    <button className='botaoEnviarDados'>
                        <span className='stringEnviarDados'> Enviar Dados </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { CadastroPropostas };