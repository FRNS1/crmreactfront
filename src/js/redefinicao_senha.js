import '../css/redefinicao_senha.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function RedefinicaoSenha() {
    const [email, setEmail] = useState('');


    return (
        <body className="body_redefinicaosenha">
            <div className="container_redefinicaosenha">
                <img className="deltaimg_redefinicaosenha" src={require('../imgs/deltalogologin.png')} alt="Logo" />
                <br />
                <label className="labelInput_redefinicaosenha"> Digite seu email: </label>
                <input className="input_redefinicaosenha" type="text" value={email} />
                <button className="botaoEnviarEmail"> Enviar Email </button>
            </div>
        </body>
    );
};

export { RedefinicaoSenha };