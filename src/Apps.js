import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {NavLateral} from './js/navlateral';

const ButtonPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/navlateral');
  };

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
  }, []);

  return (
    <div className="container">
      <img className="deltaimg" src={require('./imgs/deltalogologin.png')} alt="Logo" />
      <br />
      <label className="stringInput"> Usuário </label>
      <input className="containerInput" type="text" />
      <br />
      <label className="stringInput"> Senha </label>
      <input className="containerInput" type="password" />
      <br />
      <div>
        <button className="botaoEntrar" onClick={handleButtonClick}> Entrar </button>
      </div>
      <a className="esqueceuSenha" href="https://testador.com.br"> Esqueceu sua senha? </a>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path='/navlateral' component = {<NavLateral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;