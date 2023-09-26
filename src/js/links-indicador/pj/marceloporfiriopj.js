import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function MarceloPorfirioPj(){
    const navigate = useNavigate();

    function redirectMarceloPj(){
        Cookies.set('codigoIndicador', 5)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectMarceloPj();
    }, []);

}

export { MarceloPorfirioPj };