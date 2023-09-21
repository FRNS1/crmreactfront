import React, { useEffect, useState } from 'react';
import '../css/cadastro_propostas.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


function CadastroPropostas() {
    const navigate = useNavigate();
    const [valorDesejado, setValorDesejado] = useState('');
    const [prazo, setPrazo] = useState('');
    const [obsAnalista, setObsAnalista] = useState('');

    async function registerProposal() {
        try {
            const url = "http://35.175.231.117:8080/api/v1/proposal/register";
            const data = {
                customer_id: Cookies.get('clienteSelecionado'),
                user_id: Cookies.get('userid'),
                valor_desejado: valorDesejado,
                prazo: prazo,
                observacao_cliente: obsAnalista
            };
    
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            if (response.ok) {
                alert('Dados enviados com sucesso!');
                navigate('/visucli');
            } else {
                alert('Houve um erro na requisição');
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            alert('Houve um erro na requisição');
            console.error(error);
        }
    }

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
                                <input className="inputCad" type="text" value={prazo} onChange={(e) => setPrazo(e.target.value)} required />
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
                    <textarea className='textArea' onChange={(e) => setObsAnalista(e.target.value)}> </textarea>
                </div>
                <div className='divbotaoEnviarDados' onClick={registerProposal}>
                    <button className='botaoEnviarDados'>
                        <span className='stringEnviarDados'> Enviar Dados </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { CadastroPropostas };