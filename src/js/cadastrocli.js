import React, { useState } from 'react';
import '../css/cadastro_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';

function Cadastrocli() {
  const [selectedOption, setSelectedOption] = useState('form1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='containerPrincipal'>
      <div>
        <NavSuperior />
        <NavLateral />
      </div>
      <div className='containerGeral'>
        <label className='stringSelect'> Escolha o tipo de pessoa: </label>
          <select className='caixaOption' value={selectedOption} onChange={handleOptionChange}>
            <option value="formpf" className='stringOption'> Pessoa Jurídica </option>
            <option value="formpj" className='stringOption'> Pessoa Fisíca </option>
          </select>
          <div>
            {selectedOption === 'formpj' ? (
              <FormPF />
            ) : (
              <FormPJ />
            )}
          </div>  
      </div>
    </div>

  );
}

function FormPF() {
  return (
      <form className='formularios'>
        <br />
        <div className='fields'>
          <label className='classesForm'> Dados Pessoais </label>
          <div className='divrow'>
            <div className='divfield'>
              <label className="stringDados"> Nome Completo </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> CPF </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> Idade </label>
              <input className="inputCad" type="text" required />
            </div>
          </div>
          <div className='divrow'>
            <div className='divfield'>
              <label className="stringDados"> Genêro </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> Escolaridade </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> Ocupação </label>
              <input className="inputCad" type="text" required />
            </div>
          </div>
          <div className='divrow'>
            <div className='divfield'>
              <label className="stringDados"> Data de Nascimento </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield' style={{opacity: 0}} id="none">
              <label className="stringDados"> Email </label>
              <input className="inputCad" type="text" disabled />
            </div>
            <div className='divfield' style={{opacity: 0}} id="none">
              <label className="stringDados"> Email </label>
              <input className="inputCad" type="text" disabled />
            </div>
          </div>
          <br />
          <label className='classesForm'> Endereço </label>
          <div className='divrow'>
            <div className='divfield'>
              <label className="stringDados"> CEP </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> Logradouro </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> Bairro </label>
              <input className="inputCad" type="text" required />
            </div>
          </div>
          <div className='divrow'>
            <div className='divfield'>
              <label className="stringDados"> Cidade </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> País </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield' style={{opacity: 0}} id="none">
              <label className="stringDados"> Email </label>
              <input className="inputCad" type="text" disabled />
            </div>
          </div>
          <br />
          <label className='classesForm'> Contatos </label>
          <div className='divrow'>
            <div className='divfield'>
              <label className="stringDados"> Telefone </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield'>
              <label className="stringDados"> Email </label>
              <input className="inputCad" type="text" required />
            </div>
            <div className='divfield' style={{opacity: 0}} id="none">
              <label className="stringDados"> Email </label>
              <input className="inputCad" type="text" disabled />
            </div>
          </div>
        </div>
        <button className='botaoEnviar' type="submit">
          <span className='stringEnviar'> Enviar </span>
        </button>
      </form>
      );
    }

function FormPJ() {
  return (
    <form className='formularios'>
    <br />
    <div className='fields'>
      <label className='classesForm'> Dados da Empresa </label>
      <div className='divrow'>
        <div className='divfield'>
          <label className="stringDados"> CNPJ </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> Nome Fanstasia </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> Razão Social </label>
          <input className="inputCad" type="text" required />
        </div>
      </div>
      <div className='divrow'>
        <div className='divfield'>
          <label className="stringDados"> Segmento </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> Data de Abertura </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield' style={{opacity: 0}} id="none">
          <label className="stringDados"> Email </label>
          <input className="inputCad" type="text" disabled />
        </div>
      </div>
      <br />
      <label className='classesForm'> Endereço </label>
      <div className='divrow'>
        <div className='divfield'>
          <label className="stringDados"> CEP </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> Logradouro </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> Bairro </label>
          <input className="inputCad" type="text" required />
        </div>
      </div>
      <div className='divrow'>
        <div className='divfield'>
          <label className="stringDados"> Cidade </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> País </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield' style={{opacity: 0}} id="none">
          <label className="stringDados"> Email </label>
          <input className="inputCad" type="text" disabled />
        </div>
      </div>
      <br />
      <label className='classesForm'> Contatos </label>
      <div className='divrow'>
        <div className='divfield'>
          <label className="stringDados"> Telefone </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield'>
          <label className="stringDados"> Email </label>
          <input className="inputCad" type="text" required />
        </div>
        <div className='divfield' style={{opacity: 0}} id="none">
          <label className="stringDados"> Email </label>
          <input className="inputCad" type="text" disabled />
        </div>
      </div>
    </div>
    <button className='botaoEnviar' type="submit">
      <span className='stringEnviar'> Enviar </span>
    </button>
  </form>
  );
}
    
export {Cadastrocli};