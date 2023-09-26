import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function VanessaDonnianniPf(){
    const navigate = useNavigate();

    function redirectVanessaPf(){
        Cookies.set('codigoIndicador', 20)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectVanessaPf();
    }, []);

}

export { VanessaDonnianniPf };