import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
  FormGroup, 
  FormControl,
  Checkbox,
  FormControlLabel
} from '@mui/material'

import { cnpj }  from '../../../utils/inputMasks'

import { 
  Content, 
  Container, 
  CadrastoLeft,
  CadrastoRight, 
  CadastroAction,
  CadastroButtom,
  CadastroDeltaContent,
} from './style'

export default function Dadosresidenciais({formData, handlePreviousStep}){
  const [taxDocumentNumber, setTaxDocumentNumber] = useState("");
  const [empregado, setEmpregado] = useState("")

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://35.175.231.117:8080/api/v1/formxp/register', { ...formData, ...data });
  
      if (response.status === 200) {
        // Redirecionar para a página externa após o envio bem-sucedido
        window.location.href = 'http://hubdelta.com.br/';
      } else {
        console.error('Erro ao enviar os dados');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
    }
  };
  
  const handleKeyUpCnpj = useCallback((e) => {
    cnpj(e);
    setTaxDocumentNumber(e.target.value);
  }, []);

  return(
    <Container>
      <Content>
        <h2>Dados profissionais</h2>
        <CadastroDeltaContent>
          <CadrastoRight>
            <CardContent 
              style={{ padding: '0'}}
            >
              <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={12}>
                    <FormLabel style={{ marginBottom: '10px', fontSize:'36px' }}>Ocupação Profissional</FormLabel>
                      <FormGroup {...register('empregado')}>
                        <FormControlLabel control={<Checkbox />}label="Sim" />
                        <FormControlLabel control={<Checkbox />} label="Não" />
                      </FormGroup>
                    {/* <FormControl>
                      <FormLabel 
                        style={{ marginBottom: '10px' }}
                      >
                        Ocupação Profissional
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        id="empregado"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="Nao" control={<Radio />} label="Não" />
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                      </RadioGroup>
                    </FormControl> */}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="nome_empresa"
                      label="Nome da empresa"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('nome_empresa')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="cnpj"
                      label="CNPJ da empresa (opcional)"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('cnpj')}
                      value={taxDocumentNumber}
                      onChange={handleKeyUpCnpj}
                    />
                  </Grid>
                </Grid>
                <CadastroButtom>
                  <CadastroAction>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 6, mb: 2, padding: '8px 40px', fontSize: '0.9375rem'}}
                      onClick={handlePreviousStep}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 6, mb: 2, padding: '8px 40px', fontSize: '0.9375rem'}}
                      type='submit'
                    >
                      Enviar
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