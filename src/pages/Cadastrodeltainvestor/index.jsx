import { Field, Form, Formik } from 'formik';
import { TextField, } from 'formik-material-ui'
import { Card, CardContent, CardMedia, Typography, FormGroup } from '@mui/material';

import { 
  Container, 
  Content, 
  CadrastoRight, 
  CadrastoLeft,
  CadastroCard 
} from './style'

export default function CadastroDeltaInvestor(){
  return(
    <Container>
      <Content>
       <h2>Dados Pessoais</h2>
       <p>Se você iniciou seu cadastro, <a href='#'>finalize aqui</a></p>

       <CardContent>
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
          <Form>
            <FormGroup>
              <Field name="nome" component={TextField} label="Nome" />
              <Field name="cpf" component={TextField} label="CPF" />
            </FormGroup>
            
            <Field name="email" component={TextField} label="Email" />
            <Field name="telefone" component={TextField} label="Telefone" />
            <Field name="profissao" component={TextField} label="Profissão" />
            <Field name="rendaMedia" component={TextField} label="Renda Média" />
            <Field name="valorDesejado" component={TextField} label="Valor Desejado" />
            <Field name="prazo" component={TextField} label="Prazo" />
            <Field name="aceite" component={TextField} label="Aceite" />
          </Form>
        </Formik>
       </CardContent>
       <CadrastoLeft>
        <CadastroCard>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Você está dando os primeiros passos para abrir uma conta na Delta Investimentos.
              </Typography>
            </CardContent>
          </Card>
          
          <div>
            <img src="" alt="" />
            <div>
              <p>cadastro</p>
              <strong>100% Seguro</strong>
            </div>
          </div>
        </CadastroCard>
       </CadrastoLeft>
      </Content>
    </Container>
  )
}