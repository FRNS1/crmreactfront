import React, { useState } from 'react';
import '../css/cadastro_cli.css';
import { NavSuperior } from '../js/navsuperior';
import { NavLateral } from '../js/navlateral';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function Cadastrocli() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('form1');
  // Campos PF
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [genero, setGenero] = useState('');
  const [ocupacao, setOcupacao] = useState('');
  // Campos PJ
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [segmento, setSegmento] = useState('');
  const [dataAbertura, setDataAbertura] = useState('');
  // Campos endereço
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  // Campos Contato
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Handles campos PF
  const handleNomeCompletoChange = (event) => {
    setNomeCompleto(event.target.value);
  }
  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  }
  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  }
  const handleEscolaridadeChange = (event) => {
    setEscolaridade(event.target.value);
  }
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  }
  const handleOcupacaoChange = (event) => {
    setOcupacao(event.target.value);
  }
  // Handles campos PJ
  const handleNomeFantasiaChange = (event) => {
    setNomeFantasia(event.target.value);
  }
  const handleRazaoSocialChange = (event) => {
    setRazaoSocial(event.target.value);
  }
  const handleCnpjChange = (event) => {
    setCnpj(event.target.value);
  }
  const handleSegmentoChange = (event) => {
    setSegmento(event.target.value);
  }
  const handleDataAberturaChange = (event) => {
    setDataAbertura(event.target.value);
  }
  // Handles campos Endereço
  const handleCepChange = (event) => {
    setCep(event.target.value);
  }
  const handleLogradouroChange = (event) => {
    setLogradouro(event.target.value);
  }
  const handleBairroChange = (event) => {
    setBairro(event.target.value);
  }
  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  }
  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  }
  const handlePaisChange = (event) => {
    setPais(event.target.value);
  }
  // Handles campos Contatos
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  async function registerCustomer(){
    const token = Cookies.get('token');
    const grupo = Cookies.get('usergroup');
    const userid = Cookies.get('userid');
    const url = 'http://127.0.0.1:8080/api/v1/customers/register'
    if (selectedOption === 'formpj'){
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
                <input className="inputCad" type="text" value={nomeCompleto} onChange={handleNomeCompletoChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> CPF </label>
                <input className="inputCad" type="text" value={cpf} onChange={handleCpfChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Data de Nascimento </label>
                <input className="inputCad" type="date" value={dataNascimento} onChange={handleDataNascimentoChange} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Genêro </label>
                <input className="inputCad" type="text" value={genero} onChange={handleGeneroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Escolaridade </label>
                <input className="inputCad" type="text" value={escolaridade} onChange={handleEscolaridadeChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Ocupação </label>
                <input className="inputCad" type="text" value={ocupacao} onChange={handleOcupacaoChange} required />
              </div>
            </div>
            <br />
            <label className='classesForm'> Endereço </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> CEP </label>
                <input className="inputCad" type="text" value={cep} onChange={handleCepChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Logradouro </label>
                <input className="inputCad" type="text" value={logradouro} onChange={handleLogradouroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" value={bairro} onChange={handleBairroChange} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Cidade </label>
                <input className="inputCad" type="text" value={cidade} onChange={handleCidadeChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> País </label>
                <input className="inputCad" type="text" value={pais} onChange={handlePaisChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> Hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
            <br />
            <label className='classesForm'> Contatos </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Telefone </label>
                <input className="inputCad" type="text" value={telefone} onChange={handleTelefoneChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" value={email} onChange={handleEmailChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> Hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
          </div>
          <button className='botaoEnviar' type="submit">
            Enviar
          </button>
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
                <input className="inputCad" type="text" value={cnpj} onChange={handleCnpjChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Nome Fanstasia </label>
                <input className="inputCad" type="text" value={nomeFantasia} onChange={handleNomeFantasiaChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Razão Social </label>
                <input className="inputCad" type="text" value={razaoSocial} onChange={handleRazaoSocialChange} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Segmento </label>
                <input className="inputCad" type="text" value={segmento} onChange={handleSegmentoChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Data de Abertura </label>
                <input className="inputCad" type="text" value={dataAbertura} onChange={handleDataAberturaChange} required />
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
                <input className="inputCad" type="text" value={cep} onChange={handleCepChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Logradouro </label>
                <input className="inputCad" type="text" value={logradouro} onChange={handleLogradouroChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" value={bairro} onChange={handleBairroChange} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Cidade </label>
                <input className="inputCad" type="text" value={cidade} onChange={handleCidadeChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> País </label>
                <input className="inputCad" type="text" value={pais} onChange={handlePaisChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
            <br />
            <label className='classesForm'> Contatos </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Telefone </label>
                <input className="inputCad" type="text" value={telefone} onChange={handleTelefoneChange} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" value={email} onChange={handleEmailChange} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
          </div>
          <button className='botaoEnviar' type="submit">
            Enviar
          </button>
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
    
export {Cadastrocli};