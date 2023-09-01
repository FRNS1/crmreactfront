import React, { useState, useEffect } from 'react';
import '../css/cadastro_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function Cadastrocli() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('formpf');
  // Campos PF
  let nomeCompleto = ('');
  let cpf = ('');
  let dataNascimento = ('');
  let escolaridade = ('Fundamental Incompleto');
  let genero = ('Masculino');
  let ocupacao = ('');
  // Campos PJ
  let nomeFantasia = ('');
  let razaoSocial = ('');
  let cnpj = ('');
  let segmento = ('');
  let dataAbertura = ('');
  // Campos endereço
  let cep = ('');
  let logradouro = ('');
  let bairro = ('');
  let cidade = ('');
  let estado = ('');
  let pais = ('');
  // Campos Contato
  let email = ('');
  let telefone = ('');

  // Handles campos PF
  const handleNomeCompletoChange = (event) => {
    nomeCompleto = event.target.value;
  }
  const handleCpfChange = (event) => {
    cpf = event.target.value;
  }
  const handleDataNascimentoChange = (event) => {
    dataNascimento = event.target.value;
  }
  const handleEscolaridadeChange = (event) => {
    escolaridade = event.target.value;
  }
  const handleGeneroChange = (event) => {
    genero = event.target.value;
  }
  const handleOcupacaoChange = (event) => {
    ocupacao = event.target.value;
  }
  // Handles campos PJ
  const handleNomeFantasiaChange = (event) => {
    nomeFantasia = event.target.value;
  }
  const handleRazaoSocialChange = (event) => {
    razaoSocial = event.target.value;
  }
  const handleCnpjChange = (event) => {
    cnpj = event.target.value;
  }
  const handleSegmentoChange = (event) => {
    segmento = event.target.value;
  }
  const handleDataAberturaChange = (event) => {
    dataAbertura = event.target.value;
  }
  // Handles campos Endereço
  const handleCepChange = (event) => {
    cep = event.target.value;
  }
  const handleLogradouroChange = (event) => {
    logradouro = event.target.value;
  }
  const handleBairroChange = (event) => {
    bairro = event.target.value;
  }
  const handleCidadeChange = (event) => {
    cidade = event.target.value;
  }
  const handleEstadoChange = (event) => {
    estado = event.target.value;
  }
  const handlePaisChange = (event) => {
    pais = event.target.value;
  }
  // Handles campos Contatos
  const handleEmailChange = (event) => {
    email = event.target.value;
  }
  const handleTelefoneChange = (event) => {
    telefone = event.target.value;
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  async function registerCustomer(){
    const token = Cookies.get('token');
    const grupo = Cookies.get('usergroup');
    const userid = Cookies.get('userid');
    const url = 'http://127.0.0.1:8080/api/v1/customers/register'
    alert(selectedOption);
    if (selectedOption === 'formpj'){
      alert("TA ERRADO");
      try{
        const response = await axios.post(url, {
          is_cnpj: true,
          nome_fantasia: nomeFantasia,
          razao_social: razaoSocial,
          cnpj: cnpj,
          segmento: segmento,
          data_abertura: dataAbertura,
          email: email,
          telefone: telefone,
          cep: cep,
          logradouro: logradouro,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          pais: pais,
          created_by: userid,
          business: grupo
        },
          {
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
          }
        );
        if (response.data === 'Created'){
          navigate('/pessoas');
        }
      }catch (error) {
        console.log('error', error)
      }
    }else {
      alert("TA CERTO");
      try{
        const response = await axios.post(url, {
          is_cnpj: false,
          nome_completo: nomeCompleto,
          cpf: cpf,
          data_nascimento: dataNascimento,
          escolaridade: escolaridade,
          genero: genero,
          ocupacao: ocupacao,
          email: email,
          telefone: telefone,
          cep: cep,
          logradouro: logradouro,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          pais: pais,
          created_by: userid,
          business: grupo
        },
          {
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
          }
        );
        if (response.data === 'Created'){
          navigate('/pessoas');
        }
      }catch (error) {
        console.log('error', error)
      }
    }
  }


  function FormPF() {
    return (
        <form onSubmit={registerCustomer}>
          <br />
          <div className='fields'>
            <label className='classesForm'> Dados Pessoais </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Nome Completo </label>
                <input className="inputCad" type="text" onChange={handleNomeCompletoChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> CPF </label>
                <input className="inputCad" type="text" onChange={handleCpfChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Data de Nascimento </label>
                <input className="inputCad" type="date" onChange={handleDataNascimentoChange} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Genêro </label>
                <select className="inputCad" type="text" onChange={handleGeneroChange} required >
                  <option value="Masculino" className='stringOption'>Masculino</option>
                  <option value="Feminino" className='stringOption'>Feminino</option>
                  <option value="pnd" className='stringOption'>Prefiro não dizer</option>
                </select>
              </div>
              <div className='divfield'>
                <label className="stringDados"> Escolaridade </label>
                <select className="inputCad" type="text" onChange={handleEscolaridadeChange} required >
                  <option value="Fundamental Incompleto" className='stringOption'>Fundamental Incompleto</option>
                  <option value="Fundamental Completo" className='stringOption'>Fundamental Completo</option>
                  <option value="Ensino Médio Incompleto" className='stringOption'>Ensino Médio Incompleto</option>
                  <option value="Ensino Médio Completo" className='stringOption'>Ensino Médio Completo</option>
                  <option value="Superior Incompleto" className='stringOption'>Superior Incompleto</option>
                  <option value="Superior Completo" className='stringOption'>Superior Completo</option>
                </select>
              </div>
              <div className='divfield'>
                <label className="stringDados"> Ocupação </label>
                <input className="inputCad" type="text" onChange={handleOcupacaoChange} required />
              </div>
            </div>
            <br />
            <label className='classesForm'> Endereço </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> CEP </label>
                <input className="inputCad" type="text" onChange={handleCepChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Logradouro </label>
                <input className="inputCad" type="text" onChange={handleLogradouroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" onChange={handleBairroChange} required />
              </div>
            </div>
            <div className='divrow'>
            <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" value={bairro} onChange={handleBairroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Cidade </label>
                <input className="inputCad" type="text" onChange={handleCidadeChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Estado </label>
                <input className="inputCad" type="text" onChange={handleEstadoChange}/>
              </div>
              <div className='divfield'>
                <label className="stringDados"> País </label>
                <input className="inputCad" type="text" onChange={handlePaisChange} required />
              </div>
            </div>
            <br />
            <label className='classesForm'> Contatos </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Telefone </label>
                <input className="inputCad" type="text" onChange={handleTelefoneChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" onChange={handleEmailChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> Hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
          </div>
        </form>
        );
      }

      function FormPJ() {
        return (
          <form onSubmit={registerCustomer}>
          <br />
          <div className='fields'>
            <label className='classesForm'> Dados da Empresa </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> CNPJ </label>
                <input className="inputCad" type="text" onChange={handleCnpjChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Nome Fanstasia </label>
                <input className="inputCad" type="text" onChange={handleNomeFantasiaChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Razão Social </label>
                <input className="inputCad" type="text" onChange={handleRazaoSocialChange} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Segmento </label>
                <input className="inputCad" type="text" onChange={handleSegmentoChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Data de Abertura </label>
                <input className="inputCad" type="date" onChange={handleDataAberturaChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" value={email} onChange={handleEmailChange} disabled />
              </div>
            </div>
            <br />
            <label className='classesForm'> Endereço </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> CEP </label>
                <input className="inputCad" type="text" onChange={handleCepChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Logradouro </label>
                <input className="inputCad" type="text" onChange={handleLogradouroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" onChange={handleBairroChange} required />
              </div>
            </div>
            <div className='divrow'>
            <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" value={bairro} onChange={handleBairroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Cidade </label>
                <input className="inputCad" type="text" onChange={handleCidadeChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Estado </label>
                <input className="inputCad" type="text" onChange={handleEstadoChange}/>
              </div>
              <div className='divfield'>
                <label className="stringDados"> País </label>
                <input className="inputCad" type="text" onChange={handlePaisChange} required />
              </div>
            </div>
            <br />
            <label className='classesForm'> Contatos </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Telefone </label>
                <input className="inputCad" type="text" onChange={handleTelefoneChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" onChange={handleEmailChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
          </div>
          </form>
        );
      }

  return (
    <div className='containerPrincipal'>
      <div>
        <NavSuperior />
        <NavLateral />
      </div>
      <div className='containerGeral'>
        <label className='stringSelect'> Escolha o tipo de pessoa: </label>
          <select className='caixaOption' value={selectedOption} onChange={handleOptionChange}>
            <option value="formpf" className='stringOption'> Pessoa Fisíca </option>
            <option value="formpj" className='stringOption'> Pessoa Jurídica </option>
          </select>
          <div>
            {selectedOption === 'formpf' ? (
              <FormPF />
            ) : (
              <FormPJ />
            )}
          <button className='botaoEnviar' onClick={registerCustomer}>
            <span className='stringEnviar'> Enviar </span>
          </button>
          </div>  
      </div>
    </div>

  );
}
    
export {Cadastrocli};