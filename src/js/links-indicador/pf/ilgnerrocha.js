import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function IlgnerRochaPf(){
    const navigate = useNavigate();

    function redirectIlgnerPf(){
        Cookies.set('codigoIndicador', 15)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectIlgnerPf();
    }, []);

}

export { IlgnerRochaPf };