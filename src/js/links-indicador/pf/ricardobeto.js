import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function RicardoBetoPf(){
    const navigate = useNavigate();

    function redirectRicardoPf(){
        Cookies.set('codigoIndicador', 10)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectRicardoPf();
    }, []);

}

export { RicardoBetoPf };