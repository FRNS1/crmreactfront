import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function VanessaDonnianniPj(){
    const navigate = useNavigate();

    function redirectVanessaPj(){
        Cookies.set('codigoIndicador', 20)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectVanessaPj();
    }, []);

}

export { VanessaDonnianniPj };