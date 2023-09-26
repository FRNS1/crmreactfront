import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function HumbertoCardosoPf(){
    const navigate = useNavigate();

    function redirectHumbertoPf(){
        Cookies.set('codigoIndicador', 18)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectHumbertoPf();
    }, []);

}

export { HumbertoCardosoPf };