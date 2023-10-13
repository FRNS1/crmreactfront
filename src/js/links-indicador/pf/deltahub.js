import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function DeltaHubPf(){
    const navigate = useNavigate();

    function redirectVanessaPf(){
        Cookies.set('codigoIndicador', 152)
        navigate('/checklistpf')
    }

    useEffect(() => {
        redirectVanessaPf();
    }, []);

}

export { DeltaHubPf };