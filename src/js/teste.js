import React, { useEffect, useState, useRef } from 'react';
import '../css/visualizacao_individual.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { format } from 'date-fns';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';
import Cookies from 'js-cookie';
import axios from 'axios';


function Teste() {
    const [loading, setLoading] = useState(true);
    const [taxa, setTaxa] = useState('');

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
            setTaxa(data.taxa);

        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    }





    return (
        <div>
            <form className='formularios'>
                <br />
                <div className='fields'>
                    <div className='divrow'>
                        <div className='divfield'>
                            <label className="stringDados"> Valor Desejado </label>
                            <input
                            />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Taxa </label>
                            <input
                            />
                        </div>
                        <div className='divfield'>
                            <label className="stringDados"> Corban </label>
                            <input
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export {Teste};