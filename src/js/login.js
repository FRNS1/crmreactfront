import '../css/tela_login.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const ButtonPage = () => {
    const navigate = useNavigate();
  
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [logged, setLogged] = useState(false);
    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [token, setToken] = useState("");
    const [erro, setErro] = useState("");
  
    const handleErroChange = (erro) => {
      setErro(erro);
    }
  
    const handleTokenChange = (token) => {
      setToken(token);
    }
  
    const handleLoggedChange = () => {
      setLogged(true);
    }
  
    const handleEmailChange = (email) => {
      setUserEmail(email);
    }
  
    const handleUserFullNameChange = (name) => {
      setUserFullName(name);
    }
  
    const handleUserChange = (event) => {
      setUser(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    async function handleButtonClick() {
      const apiUrl = "http://35.175.231.117:8080/api/v1/users/login";
    
      const requestData = {
        username: `${user}`,
        password: `${password}`
      };
  
      const headers = {
        "Content-Type": "application/json"
      };
  
      try {
        const response = await axios.post(apiUrl, requestData, { headers });
        const result = response.data;
        Cookies.set('token', result.token);
        Cookies.set('email', result.email);
        Cookies.set('nome', result.nome);
        Cookies.set('logged', true);
        Cookies.set('userid', result.userid);
        Cookies.set('usergroup', result.usergroup);
        navigate('/pessoas');
      } catch (error) {
        handleErroChange("Usuário ou senha incorretos.")
      }
    };
  
  
    function test() {
      console.log(token, userEmail);
    }
  
    const handleEnterKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleButtonClick();
      }
    };
  
  
    useEffect(() => {
      window.addEventListener('keydown', handleEnterKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleEnterKeyPress);
      };
    }, [handleEnterKeyPress]);
  
    return (
      <body className="body">
        <div className="container">
          <img className="deltaimg" src={require('../imgs/deltalogologin.png')} alt="Logo" />
          <br />
          <label className="labelInput"> Usuário </label>
          <input className="containerInput" type="text" id="user" value={user} onChange={handleUserChange} />
          <br />
          <label className="labelInput"> Senha </label>
          <input className="containerInput" type="password" id="password" value={password} onChange={handlePasswordChange} />
          <br />
          <div className='divbotaoEntrar'>
            <button className="botaoEntrar" onClick={handleButtonClick}> Entrar </button>
          </div>
          <text className='erro'>{erro}</text>
          <a className="esqueceuSenha" href="RedefinicaoSenha"> Esqueceu sua senha? </a>
        </div>
      </body>
    );
  };

export {ButtonPage};