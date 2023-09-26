import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function IlgnerRochaPj(){
    const navigate = useNavigate();

    function redirectIlgnerPj(){
        Cookies.set('codigoIndicador', 15)
        navigate('/checklistpj')
    }

    useEffect(() => {
        redirectIlgnerPj();
    }, []);

}

export { IlgnerRochaPj };