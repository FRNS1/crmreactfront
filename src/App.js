
function App() {
  return (
    <div className="container">
        <img className="deltaimg" src="deltalogologin.png" />
          <br>
          </br>
          <label className="stringInput"> Usuário </label>
            <input className="containerInput"
            type="text"
            />
          <br>
          </br>
        <label className="stringInput"> Senha </label>
            <input className="containerInput"
            type="password"
            />
          <br> 
          </br>
        <button className="botaoEntrar" type="submit">
          <text className="stringEntrar"> Entrar </text>
        </button>
        <a className="esqueceuSenha" href="https://testador.com.br"> Esqueceu sua senha? </a>
    </div>
  );
}

export default App;
