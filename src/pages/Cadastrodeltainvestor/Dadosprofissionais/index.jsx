import { useState } from 'react'
import { Form, Formik } from 'formik';
import { 
  Grid,
  Radio,
  Button,
  Select,
  MenuItem,
  TextField,
  FormLabel,
  InputLabel,
  RadioGroup,
  CardContent, 
  FormControl,
  FormControlLabel
} from '@mui/material'


import { 
  Content, 
  Container, 
  CadrastoLeft,
  CadrastoRight, 
  CadastroAction,
  CadastroButtom,
  CadastroDeltaContent,
  CardPercent,
  CardPercentBottom,
  CardPercentContent,
  Divider,
  Header 
} from './style'

export default function Dadosresidenciais(){
  return(
    <Container>
      <Content>
        <h2>Dados profissionais</h2>
        <CadastroDeltaContent>
          <CadrastoRight>
            <CardContent 
              style={{ padding: '0'}}
            >
              <Formik 
                initialValues={{
                  nome: '',
                  numero: '',
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
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth style={{ padding: '0'}}>
                        <InputLabel id="demo-multi-select-label">
                          Ocupação Profissional
                        </InputLabel>
                        <Select variant="standard">
                          <MenuItem value="">1</MenuItem>
                          <MenuItem value="">1</MenuItem>
                          <MenuItem value="">1</MenuItem>
                          <MenuItem value="">1</MenuItem>
                          <MenuItem value="">1</MenuItem>
                          <MenuItem value="">1</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl>
                        <FormLabel 
                          style={{ marginBottom: '10px' }}
                        >
                          Você trabalha atualmente?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="Nao" control={<Radio />} label="Não" />
                          <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="empresa"
                        name="empresa"
                        label="Nome da empresa"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="cnpj"
                        name="cnpj"
                        label="CNPJ da empresa (opcional)"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
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
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft>
            {/* <CadastroCard>
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
            </CadastroCard> */}
          </CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}