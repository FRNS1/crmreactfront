import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function NilsonBentoPf(){
    const navigate = useNavigate();

    function redirectNilsonPf(){
        Cookies.set('codigoIndicador', 21)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectNilsonPf();
    }, []);

}

export { NilsonBentoPf };