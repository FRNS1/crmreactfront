import { useState } from 'react'
import { Form, Formik } from 'formik';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup, 
  TextField
} from '@mui/material';

import Figure from '../../../imgs/first-steps.svg'

import { 
  Container, 
  Content, 
  CadrastoRight, 
  CadrastoLeft,
  CadastroCard,
  CadastroDeltaContent,
  Assessor,
  CardPercent,
  CardPercentBottom,
  CardPercentContent,
  Divider,
} from './style'

export default function Dadospessoais(){
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
                        id="firstName"
                        name="firstName"
                        label="Nome completo (como está no RG)"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="confirmar"
                        name="confirmar"
                        label="Confirme seu e-mail"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="firstName"
                        name="firstName"
                        label="Data de nascimento"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="celular"
                        name="celular"
                        label="Celular"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="rg"
                        name="rg"
                        label="RG"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="orgao"
                        name="orgao"
                        label="Orgão emissor"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="estado"
                        name="estado"
                        label="Estado onde foi emitido"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="emissao"
                        name="emissao"
                        label="Data emissão"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="mae"
                        name="mae"
                        label="Nome da mãe"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="pai"
                        name="pai"
                        label="Nome Pai (opcional)"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="civil"
                        name="civil"
                        label="Estado Civil"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="nacionalidade"
                        name="nacionalidade"
                        label="Nacionalidade"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="estadonasceu"
                        name="estadonasceu"
                        label="Estado onde nasceu"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="cidadenasceu"
                        name="cidadenasceu"
                        label="Cidade onde nasceu"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                      <Grid item xs={12} sm={6} sx={{ marginTop: '40px'}}>
                        <FormControl>
                          <FormLabel 
                            style={{ marginBottom: '10px' }}
                          >Gênero</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} sx={{ marginTop: '40px'}}>
                        <h2 style={{marginBottom: '10px'}}>Declarações</h2>
                        <FormGroup>
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Sou vinculado à XP Investimentos" />
                          <FormControlLabel control={<Checkbox />} label="Sou Us Person" />
                          <FormControlLabel control={<Checkbox />} label="Sou politicamente exposto" />
                        </FormGroup>
                      </Grid>
                  </Grid>
                </Form>
              </Formik>
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft>
            <CadastroCard>
              <Card sx={{ minWidth: 335 }}>
                <CardContent sx={{ padding: 4}}>
                  <img src={Figure} alt="figure" />
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Você está dando os primeiros passos para abrir uma conta na Delta Investimentos.
                  </Typography>
                </CardContent>
              </Card>
              
              <CardPercent>
                <Divider></Divider>
                <CardPercentContent>
                  <img src={Figure} alt="figure" />
                  <CardPercentBottom>
                    <p>cadastro</p>
                    <strong>100% Seguro</strong>
                  </CardPercentBottom>
                </CardPercentContent>
              </CardPercent>
            </CadastroCard>
          </CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}