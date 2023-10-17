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
  FormControl,
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

export default function Dadosresidenciais({setFormData, formData, handlePreviousStep}){
  const [taxDocumentNumber, setTaxDocumentNumber] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://52.87.219.145:8080/api/v1/formxp/register', data);

      if (response.status === 200) {
        setFormData({ ...formData, ...data });
        // Continuar com a ação desejada, por exemplo, navegar para a próxima etapa
      } else {
        console.error('Erro ao enviar os dados');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
    }
  };

  const [isHidden, setIsHidden] = useState(true);

  const handleRadioChange = (event) => {
    setIsHidden(event.target.value === 'Sim');
  };

  const handleKeyUpCnpj = useCallback((e) => {
    cnpj(e);
    setTaxDocumentNumber(e.target.value);
  }, []);

  const ocupacaoProfissionalOptions = [
    { id: 'estudante', name: 'Estudante' },
    { id: 'trabalhador', name: 'Trabalhador' },
    { id: 'empresario', name: 'Empresário' },
    { id: 'autonomo', name: 'Autônomo' },
    { id: 'aposentado', name: 'Aposentado' },
  ];

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
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Ocupação Profissional</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="ocupacao"
                        label="Ocupação Profissional"
                        value={taxDocumentNumber}
                        onChange={handleKeyUpCnpj}
                        {...register('ocupacao', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        {ocupacaoProfissionalOptions.map((ocupacao) => (
                          <MenuItem key={ocupacao.id} value={ocupacao.id}>
                            {ocupacao.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {errors.ocupacao && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.ocupacao.message}
                      </span>
                    )}
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
                        onChange={handleRadioChange}
                      >
                        <FormControlLabel value="Nao" control={<Radio />} label="Não" />
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {isHidden && (
                    <>
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
                    </>
                  )}
                </Grid>
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
                      sx={{ mt: 6, mb: 2 }}
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