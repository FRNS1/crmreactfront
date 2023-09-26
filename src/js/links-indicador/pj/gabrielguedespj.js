import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function GabrielGuedesPj(){
    const navigate = useNavigate();

    function redirectGabrielPj(){
        Cookies.set('codigoIndicador', 16)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectGabrielPj();
    }, []);

}

export { GabrielGuedesPj };