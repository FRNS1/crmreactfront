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
  const handleNomeCompletoChange = (nome) => {
    setNomeCompleto(nome);
  }
  const handleCpfChange = (cpf) => {
    setCpf(cpf);
  }
  const handleDataNascimentoChange = (dataNascimento) => {
    setDataNascimento(dataNascimento);
  }
  const handleEscolaridadeChange = (escolaridade) => {
    setEscolaridade(escolaridade);
  }
  const handleGeneroChange = (genero) => {
    setGenero(genero);
  }
  const handleOcupacaoChange = (ocupacao) => {
    setOcupacao(ocupacao);
  }
  // Handles campos PJ
  const handleNomeFantasiaChange = (nomeFantasia) => {
    setNomeFantasia(nomeFantasia);
  }
  const handleRazaoSocialChange = (razaoSocial) => {
    setRazaoSocial(razaoSocial);
  }
  const handleCnpjChange = (cnpj) => {
    setCnpj(cnpj);
  }
  const handleSegmentoChange = (segmento) => {
    setSegmento(segmento);
  }
  const handleDataAberturaChange = (dataAbertura) => {
    setDataAbertura(dataAbertura);
  }
  // Handles campos Endereço
  const handleCepChange = (cep) => {
    setCep(cep);
  }
  const handleLogradouroChange = (logradouro) => {
    setLogradouro(logradouro);
  }
  const handleBairroChange = (bairro) => {
    setBairro(bairro);
  }
  const handleCidadeChange = (cidade) => {
    setCidade(cidade);
  }
  const handleEstadoChange = (estado) => {
    setEstado(estado);
  }
  const handlePaisChange = (pais) => {
    setPais(pais);
  }
  // Handles campos Contatos
  const handleEmailChange = (email) => {
    setEmail(email);
  }
  const handleTelefoneChange = (telefone) => {
    setTelefone(telefone);
  }

  const handleOptionInput = (event) => {
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
        <form className='formularios'>
          <br />
          <div className='fields'>
            <label className='classesForm'> Dados Pessoais </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Nome Completo </label>
                <input className="inputCad" type="text" value={nomeCompleto} onInput={(event) => handleNomeCompletoChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> CPF </label>
                <input className="inputCad" type="text" value={cpf} onInput={(event) => handleCpfChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Data de Nascimento </label>
                <input className="inputCad" type="date" value={dataNascimento} onInput={(event) => handleDataNascimentoChange(event.target.value)} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Genêro </label>
                <input className="inputCad" type="text" value={genero} onInput={(event) => handleGeneroChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Escolaridade </label>
                <input className="inputCad" type="text" value={escolaridade} onInput={(event) => handleEscolaridadeChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Ocupação </label>
                <input className="inputCad" type="text" value={ocupacao} onInput={(event) => handleOcupacaoChange(event.target.value)} required />
              </div>
            </div>
            <br />
            <label className='classesForm'> Endereço </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> CEP </label>
                <input className="inputCad" type="text" value={cep} onInput={(event) => handleCepChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Logradouro </label>
                <input className="inputCad" type="text" value={logradouro} onInput={(event) => handleLogradouroChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" value={bairro} onInput={(event) => handleBairroChange(event.target.value)} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Cidade </label>
                <input className="inputCad" type="text" value={cidade} onInput={(event) => handleCidadeChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> País </label>
                <input className="inputCad" type="text" value={pais} onInput={(event) => handlePaisChange(event.target.value)} required />
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
                <input className="inputCad" type="text" value={telefone} onInput={(event) => handleTelefoneChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" value={email} onInput={(event) => handleEmailChange(event.target.value)} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> Hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
          </div>
          <button className='botaoEnviar' type="submit" onClick={registerCustomer}>
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
                <input className="inputCad" type="text" value={cnpj} onInput={(event) => handleCnpjChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Nome Fanstasia </label>
                <input className="inputCad" type="text" value={nomeFantasia} onInput={(event) => handleNomeFantasiaChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Razão Social </label>
                <input className="inputCad" type="text" value={razaoSocial} onInput={(event) => handleRazaoSocialChange(event.target.value)} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Segmento </label>
                <input className="inputCad" type="text" value={segmento} onInput={(event) => handleSegmentoChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Data de Abertura </label>
                <input className="inputCad" type="text" value={dataAbertura} onInput={(event) => handleDataAberturaChange(event.target.value)} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" value={email} onInput={(event) => handleEmailChange(event.target.value)} disabled />
              </div>
            </div>
            <br />
            <label className='classesForm'> Endereço </label>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> CEP </label>
                <input className="inputCad" type="text" value={cep} onInput={(event) => handleCepChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Logradouro </label>
                <input className="inputCad" type="text" value={logradouro} onInput={(event) => handleLogradouroChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Bairro </label>
                <input className="inputCad" type="text" value={bairro} onInput={(event) => handleBairroChange(event.target.value)} required />
              </div>
            </div>
            <div className='divrow'>
              <div className='divfield'>
                <label className="stringDados"> Cidade </label>
                <input className="inputCad" type="text" value={cidade} onInput={(event) => handleCidadeChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> País </label>
                <input className="inputCad" type="text" value={pais} onInput={(event) => handlePaisChange(event.target.value)} required />
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
                <input className="inputCad" type="text" value={telefone} onInput={(event) => handleTelefoneChange(event.target.value)} required />
              </div>
              <div className='divfield'>
                <label className="stringDados"> Email </label>
                <input className="inputCad" type="text" value={email} onInput={(event) => handleEmailChange(event.target.value)} required />
              </div>
              <div className='divfield' style={{opacity: 0}} id="none">
                <label className="stringDados"> hided </label>
                <input className="inputCad" type="text" disabled />
              </div>
            </div>
          </div>
          <button className='botaoEnviar' type="submit" onClick={registerCustomer}>
            <span className='stringEnviar'> Enviar </span>
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
          <select className='caixaOption' value={selectedOption} onInput={handleOptionInput}>
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