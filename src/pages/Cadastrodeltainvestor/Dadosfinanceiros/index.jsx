import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

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
  Content, 
  Container, 
  CadrastoLeft,
  OriginProduto,
  CadrastoRight, 
  CadastroButtom,
  CadastroAction,
  CadastroDeltaContent,
} from './style'

export default function Dadospessoais(){
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
              <Formik 
                initialValues={{
                  nome: '',
                  cpf: '',
                  email: '',
                  telefone: '',
                  profissao: '',
                  rendaMedia: '',
                  valorDesejado: '',
                  prazo: '',
                  aceite: ''
                }}
                onSubmit={() => {}}
              >
                <Form autoComplete='off'>
                  <Grid container spacing={3} >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="renda"
                        name="renda"
                        label="Renda Mensal"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                      <p>Exemplo: Salário, aposentadoria, pensão, etc.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="aplicacao"
                        name="aplicacao"
                        label="Aplicações financeiras "
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                      <p>Exemplo: Valor investido em poupança, produtos financeiros em bancos ou corretoras.</p>
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
                      <p>Exemplo: Valor aproximado de casas, apartamentos, chácaras e outros que estejam em seu nome.</p>
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
                      <p>Exemplo: Valor de carros, motos, barcos, e outros que estejam em seu nome.</p>
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
                      <p>Exemplo: Fontes de renda como: aluguel, proventos de algum negócio, rendimento de aplicações, etc.</p>
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
                        <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="Ocupação profissional" />
                          <FormControlLabel control={<Checkbox />} label="Herança" />
                          <FormControlLabel control={<Checkbox />} label="Doação" />
                          <FormControlLabel control={<Checkbox />} label="Partilha de Bens (Divórcio)" />
                          <FormControlLabel control={<Checkbox />} label="Aposentadoria" />
                          <FormControlLabel control={<Checkbox />} label="Aluguel de propriedades" />
                          <FormControlLabel control={<Checkbox />} label="Outros" />
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
                        <FormGroup>
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
                    </Grid>
                  </OriginProduto>
                  <CadastroButtom>
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
                  </CadastroButtom>
                </Form>
              </Formik>
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft></CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}