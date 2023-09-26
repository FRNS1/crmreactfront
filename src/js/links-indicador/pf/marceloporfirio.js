import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function MarceloPorfirioPf(){
    const navigate = useNavigate();

    function redirectMarceloPf(){
        Cookies.set('codigoIndicador', 5)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectMarceloPf();
    }, []);

}

export { MarceloPorfirioPf };