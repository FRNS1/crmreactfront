import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function HumbertoCardosoPj(){
    const navigate = useNavigate();

    function redirectHumbertoPj(){
        Cookies.set('codigoIndicador', 18)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectHumbertoPj();
    }, []);

}

export { HumbertoCardosoPj };