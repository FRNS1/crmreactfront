import '../css/nova_senha.css';
import React, { useEffect, useState } from 'react';

function NovaSenha() {
    const [senha, setSenha] = useState('')

    return (
        <body className="body_novasenha">
            <div className="container_novasenha">
                <img className="deltaimg_novasenha" src={require('../imgs/deltalogologin.png')} alt="Logo" />
                <br />
                <label className="labelInput_novasenha"> Digite sua nova senha </label>
                <input className="input_novasenha" type="password" />
                <label className="labelInput_novasenha"> Confirme sua nova senha </label>
                <input className="input_novasenha" type="password" />
                <button className="botaoEnviarSenha"> Enviar </button>
            </div>
        </body>
    );
};

export { NovaSenha };