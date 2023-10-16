import { useState } from 'react'
import { useForm } from 'react-hook-form';

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
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isHidden, setIsHidden] = useState(true); // Estado para controlar a visibilidade da div

  const handleRadioChange = (event) => {
    setIsHidden(event.target.value === 'Sim');
  };

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
                        {...register('ocupacao', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
              </form>
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
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft></CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}