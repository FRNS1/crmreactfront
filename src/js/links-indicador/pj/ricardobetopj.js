import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function RicardoBetoPj(){
    const navigate = useNavigate();

    function redirectRicardoPj(){
        Cookies.set('codigoIndicador', 10)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectRicardoPj();
    }, []);

}

export { RicardoBetoPj };