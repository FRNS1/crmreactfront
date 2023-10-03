import '../css/tela_login.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function RedefinicaoSenha() {
    return (
        <body className="body">
            <div className="container">
                <img className="deltaimg" src={require('../imgs/deltalogologin.png')} alt="Logo" />
                <br />
                <label className="labelInput"> Digite seu email: </label>
                <input className="containerInput" type="text" id="user" />
                <button className="botaoEnviarEmail"> Enviar Email </button>
            </div>
        </body>
    );
};

export { RedefinicaoSenha };