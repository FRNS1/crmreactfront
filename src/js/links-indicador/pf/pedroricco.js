import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function PedroRiccoPf(){
    const navigate = useNavigate();

    function redirectPedroPf(){
        Cookies.set('codigoIndicador', 3)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectPedroPf();
    }, []);

}

export { PedroRiccoPf };