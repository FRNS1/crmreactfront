import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function PedroRiccoPj(){
    const navigate = useNavigate();

    function redirectPedroPf(){
        Cookies.set('codigoIndicador', 3)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectPedroPf();
    }, []);

}

export { PedroRiccoPj };