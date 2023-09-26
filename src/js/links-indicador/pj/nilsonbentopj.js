import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function NilsonBentoPj(){
    const navigate = useNavigate();

    function redirectNilsonPj(){
        Cookies.set('codigoIndicador', 21)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectNilsonPj();
    }, []);

}

export { NilsonBentoPj };