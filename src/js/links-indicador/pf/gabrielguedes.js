import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function GabrielGuedesPf(){
    const navigate = useNavigate();

    function redirectGabrielPf(){
        Cookies.set('codigoIndicador', 16)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectGabrielPf();
    }, []);

}

export { GabrielGuedesPf };