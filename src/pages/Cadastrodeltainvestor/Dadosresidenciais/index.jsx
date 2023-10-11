import { useState } from 'react'
import { Form, Formik } from 'formik';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  Button
} from '@mui/material';

import Figure from '../../../imgs/first-steps.svg'

import { 
  Container, 
  Content, 
  CadrastoRight, 
  CadrastoLeft,
  CadastroCard,
  CadastroDeltaContent,
  CadastroAction,
  CadastroButtom,
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
        <h2>Dados residenciais</h2>
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="cep"
                        name="cep"
                        label="CEP"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="endereco"
                        name="endereco"
                        label="Endereço"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="bairro"
                        name="bairro"
                        label="Bairro"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="numero"
                        name="numero"
                        label="Número"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="estado"
                        name="estado"
                        label="Estado (selected)"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="cidade"
                        name="cidade"
                        label="Cidade (selected)"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="complemento"
                        name="complemento"
                        label="Complemento"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            <CadastroButtom>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Possuo residência fiscal, imóvel ou endereço fora do Brasil" />
              </FormGroup>
              <p><strong>Declaro</strong> para fins de comprovação de residência, sob as penas da Lei (art. 2° da Lei 7.115/83), que resido no endereço acima.</p>
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