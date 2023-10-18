import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import { 
  Grid,
  Button,
  Checkbox,
  FormLabel,
  FormGroup, 
  TextField,
  FormControl,
  CardContent, 
  FormControlLabel
} from '@mui/material'

import { money } from '../../../utils/inputMasks'

import { 
  Header,
  Content,
  Container, 
  CadrastoLeft,
  HeaderContent, 
  OriginProduto,
  CadrastoRight, 
  CadastroButtom,
  CadastroAction,
  CadastroDeltaContent,
} from './style'

export default function Dadospessoais({setFormData, formData, handleNextStep, handlePreviousStep}){
  const [moneyMask, setMoneyMsk] = useState("");
  const [aplicacaoMask, setAplicacaoMask] = useState("");
  const [origemRecursos, setOrigemRecursos] = useState({
    "Ocupação profissional": false,
    "Herança": false,
    "Doação": false,
    "Partilha de Bens (Divórcio)": false,
    "Aposentadoria": false,
    "Aluguel de propriedades": false,
    "Outros": false,
  });
  const [xpProdutos, setXpProdutos] = useState({
    "Renda fixa": false,
    "Sou Us Person": false,
    "Renda variável": false,
    "Derivativos": false,
    "Fundos de investimentos": false,
    "Remessas internacionais": false,
    "Seguros": false,
    "Previdência Privada": false,
    "Outros": false,
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const recursos = Object.entries(origemRecursos)
      .filter(item => item[1]===true)
      .map(item => item[0])

    const produtos = Object.entries(xpProdutos)
    .filter(item => item[1]===true)
    .map(item => item[0])

     setFormData({...formData, ...data, origem_recursos: recursos, produtos_xp: produtos})
    handleNextStep()
  };

  const handleKeyUpMoney = useCallback((e) => {
    const value = money(e.target.value);
    setMoneyMsk( "R$ " + value);
  }, []);

  const handleKeyUpMoney2 = useCallback((e) => {
    const value = money(e.target.value);
    setAplicacaoMask( "R$ " + value);
  }, []);

  const handleCheckBox = (e, name) => {
    setOrigemRecursos({...origemRecursos, [name]: e.target.checked })
  }

  const handleCheckBox2 = (e, name) => {
    setXpProdutos({...xpProdutos, [name]: e.target.checked })
  }

  return(
    <Container>
      <Content>
        <CadastroDeltaContent>
          <CadrastoRight>
            <CardContent 
              style={{ padding: '0'}}
            >
              <Header>
                <h2>Dados Patrimoniais</h2>
                <HeaderContent>
                  <p>
                    Para oferecer o investimento ideal para você, precisamos de alguns dados patrimoniais. 
                    <br/>
                    Você pode informar valores aproximados de cada item. 
                  </p>
                  <strong>Não se preocupe: essas informações são confidenciais.</strong>
                </HeaderContent>
              </Header>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      id="renda_mensal"
                      label="Renda Mensal"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('renda_mensal', {
                        required: 'Informação de Renda Mensal não declarada',
                      })}
                      value={moneyMask}
                      onChange={handleKeyUpMoney}
                    />
                    <span>Exemplo: Salário, aposentadoria, pensão, etc.</span>
                    {errors.renda_mensal && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.renda_mensal.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="aplicacoes_financeiras"
                      label="Aplicações financeiras "
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('aplicacoes_financeiras', {
                        required: 'Informação de Aplicações Financeiras não declarada',
                      })}
                      value={aplicacaoMask}
                      onChange={handleKeyUpMoney2}
                    />
                    <span>Exemplo: Valor investido em poupança, produtos financeiros em bancos ou corretoras.</span>
                    {errors.aplicacoes_financeiras && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.aplicacoes_financeiras.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="bens_imoveis"
                      label="Bens Imóveis"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('bens_imoveis')}
                    />
                    <span>Exemplo: Valor aproximado de casas, apartamentos, chácaras e outros que estejam em seu nome.</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="bens_moveis"
                      label="Bens Móveis"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('bens_moveis')}
                    />
                    <span>Exemplo: Valor de carros, motos, barcos, e outros que estejam em seu nome.</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outros_rendimentos"
                      label="Outros Rendimentos"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('outros_rendimentos')}
                    />
                    <span>Exemplo: Fontes de renda como: aluguel, proventos de algum negócio, rendimento de aplicações, etc.</span>
                  </Grid>
                </Grid>
                <OriginProduto>
                  <Grid item xs={12} sm={6} sx={{ marginTop: '40px'}}>
                    <FormControl>
                      <FormLabel 
                          style={{ marginBottom: '10px' }}
                      >
                        Qual a origem dos seus recursos?
                      </FormLabel>
                      <FormGroup 
                        id="origem_recursos"
                        {...register('origem_recursos')}
                      >
                        {Object.entries(origemRecursos).map(item => <FormControlLabel key={item[0]} control={<Checkbox checked={item[1]} onChange={(e) => handleCheckBox(e, item[0])}/>} label={item[0]} />)}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: '40px'}}>
                    <FormControl>
                      <FormLabel 
                          style={{ marginBottom: '10px' }}
                      >
                        Quais produtos você deseja adquirir na XP? 
                      </FormLabel>
                      <FormGroup
                        id="produtos_xp"
                        {...register('produtos_xp')}
                      >
                        {Object.entries(xpProdutos).map(item => <FormControlLabel key={item[0]} control={<Checkbox checked={item[1]} onChange={(e) => handleCheckBox2(e, item[0])}/>} label={item[0]} />)}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </OriginProduto>
                <CadastroButtom>
                  <CadastroAction>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 6, mb: 2 }}
                      onClick={handlePreviousStep}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type='submit'
                      sx={{ mt: 6, mb: 2 }}
                    >
                      Próximo
                    </Button>
                  </CadastroAction>
                </CadastroButtom>
              </form>
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft></CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}