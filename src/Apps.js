import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Defina o componente ButtonPage fora do componente App
const ButtonPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navegar para a página desejada
    navigate('/navlateral');
  };

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
        {/* Defina outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
