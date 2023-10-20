import '../css/esqueceu_senha.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2'

function EsqueceuSenha() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [mudaPagina, setMudaPagina] = useState(1);
    const [codigo, setCodigo] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    function sendEmail() {
        setMudaPagina(2);
        // setIsLoading(true);
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "email": `${email}`,
        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://35.175.231.117:8080/api/v1/business/formwebindicacaopf", requestOptions)
        //     .then(response => {
        //         if (response.status === 200) {
        //             // Exibe o modal Swal.fire com timer embutido
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: 'Dados enviados com sucesso!',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             }).then(() => {
        //                 // Redireciona para uma página externa após o modal
        //                 window.location.href = "http://52.87.219.145:3000/";
        //             });
        //         }
        //     })
        //     .catch(error => alert('error', error))
        //     .finally(() => {
        //         setIsLoading(false);
        //         setEnviarCodigo(true);
        //     });
    }

    function sendCodigo() {
        setMudaPagina(3);
    }

    function novaSenha() {
        window.location.href = "http://52.87.219.145:3000/";
    }


    return (
        <>
            {mudaPagina === 1 && (
                <body className="body_redefinicaosenha">
                    <div className="container_redefinicaosenha">
                        <img className="deltaimg_redefinicaosenha" src={require('../imgs/deltalogologin.png')} alt="Logo" />
                        <br />
                        <label for="email" className="labelInput_redefinicaosenha"> Digite seu email: </label>
                        <input className="input_redefinicaosenha" type="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        {isLoading === false ? (
                            <button className="botaoEnviarEmail" onClick={sendEmail}> Enviar </button>
                        ) : null}
                    </div>
                </body>
            )}
            {mudaPagina === 2 && (
                <body className="body_redefinicaosenha">
                    <div className="container_redefinicaosenha">
                        <img className="deltaimg_redefinicaosenha" src={require('../imgs/deltalogologin.png')} alt="Logo" />
                        <br />
                        <label for="email" className="labelInput_redefinicaosenha"> Digite o código enviado para seu email: </label>
                        <input className="input_redefinicaosenha" type="text" required />
                        {isLoading === false ? (
                            <button className="botaoEnviarEmail" onClick={sendCodigo}> Enviar </button>
                        ) : null}
                        <span id="reenviaCodigo" onClick={sendEmail}> Não recebeu o código? clique aqui para reenviar </span>
                    </div>
                </body>
            )}
            {mudaPagina === 3 && (
                <body className="body_novasenha">
                    <div className="container_novasenha">
                        <img className="deltaimg_novasenha" src={require('../imgs/deltalogologin.png')} alt="Logo" />
                        <br />
                        <label className="labelInput_novasenha"> Digite sua nova senha </label>
                        <input className="input_novasenha" type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <label className="labelInput_novasenha"> Confirme sua nova senha </label>
                        <input className="input_novasenha" type="password" required value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
                        <button className="botaoEnviarSenha" onClick={novaSenha} disabled={senha !== confirmaSenha || senha === ""} > Enviar </button>
                    </div>
                </body>
            )}
        </>
    );
};

export { EsqueceuSenha };