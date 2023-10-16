import React, { useState } from 'react'
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

export default function Dadospessoais(){
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
                      id="renda"
                      name="renda"
                      label="Renda Mensal"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('renda', {
                        required: 'Informação de Renda Mensal não declarada',
                      })}
                    />
                    <span>Exemplo: Salário, aposentadoria, pensão, etc.</span>
                    {errors.renda && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.renda.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="aplicacao"
                      name="aplicacao"
                      label="Aplicações financeiras "
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('aplicacao', {
                        required: 'Informação de Aplicações Financeiras não declarada',
                      })}
                    />
                    <span>Exemplo: Valor investido em poupança, produtos financeiros em bancos ou corretoras.</span>
                    {errors.renda && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.renda.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="imoveis"
                      name="imoveis"
                      label="Bens Imóveis"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <span>Exemplo: Valor aproximado de casas, apartamentos, chácaras e outros que estejam em seu nome.</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="moveis"
                      name="moveis"
                      label="Bens Móveis"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <span>Exemplo: Valor de carros, motos, barcos, e outros que estejam em seu nome.</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="redimento"
                      name="rendimento"
                      label="Outros Rendimentos"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
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
                        id="origem"
                        {...register('origem', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        <FormControlLabel control={<Checkbox />} label="Ocupação profissional" />
                        <FormControlLabel control={<Checkbox />} label="Herança" />
                        <FormControlLabel control={<Checkbox />} label="Doação" />
                        <FormControlLabel control={<Checkbox />} label="Partilha de Bens (Divórcio)" />
                        <FormControlLabel control={<Checkbox />} label="Aposentadoria" />
                        <FormControlLabel control={<Checkbox />} label="Aluguel de propriedades" />
                        <FormControlLabel control={<Checkbox />} label="Outros" />
                      </FormGroup>
                    </FormControl>
                    {errors.origem && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.origem.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: '40px'}}>
                    <FormControl>
                      <FormLabel 
                          style={{ marginBottom: '10px' }}
                      >
                        Quais produtos você deseja adquirir na XP? 
                      </FormLabel>
                      <FormGroup
                        id="produto"
                        {...register('produto', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        <FormControlLabel control={<Checkbox />} label="Renda fixa" />
                        <FormControlLabel control={<Checkbox />} label="Sou Us Person" />
                        <FormControlLabel control={<Checkbox />} label="Renda variável" />
                        <FormControlLabel control={<Checkbox />} label="Derivativos" />
                        <FormControlLabel control={<Checkbox />} label="Fundos de investimentos" />
                        <FormControlLabel control={<Checkbox />} label="Remessas internacionais" />
                        <FormControlLabel control={<Checkbox />} label="Seguros" />
                        <FormControlLabel control={<Checkbox />} label="Previdência Privada" />
                        <FormControlLabel control={<Checkbox />} label="Outros" />
                      </FormGroup>
                    </FormControl>
                    {errors.produto && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.produto.message}
                      </span>
                    )}
                  </Grid>
                </OriginProduto>
                {/* <CadastroButtom>
                  <CadastroAction>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 6, mb: 2 }}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 6, mb: 2 }}
                    >
                      Próximo
                    </Button>
                  </CadastroAction>
                </CadastroButtom> */}
              </form>
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft></CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}