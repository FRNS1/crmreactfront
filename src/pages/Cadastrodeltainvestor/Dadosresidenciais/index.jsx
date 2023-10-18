import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";

import { 
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  CardContent, 
  FormControl,
} from '@mui/material';

import { cep } from '../../../utils/inputMasks'
import states  from '../../../utils/statesList'

import { 
  Container, 
  Content, 
  CadrastoRight, 
  CadrastoLeft,
  CadastroDeltaContent,
  CadastroAction,
  CadastroButtom,
} from './style'

export default function Dadosresidenciais({setFormData, formData, handleNextStep, handlePreviousStep}){
  const [addressZipcode, setAddressZipcode] = useState("");
  const [addressNumber, setAddressNumber] = useState("")

  const [address, setAddress] = useState(null)

  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setFormData({...formData, ...data});
    handleNextStep()
  }

  const handleAutoCompleteData = useCallback(async () => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${addressZipcode}/json/`
    );
    setAddress(response.data);
    setValue("endereco", response.data.logradouro);
    setValue("bairro", response.data.bairro);
    setValue("cidade", response.data.localidade);
    setValue("estado", response.data.uf);
  }, [addressZipcode, setValue]);



  const handleKeyUp = (e) => {
    cep(e);
    setAddressZipcode(e.target.value);
  };

  return(
    <Container>
      <Content>
        <h2>Dados residenciais</h2>
        <CadastroDeltaContent>
          <CadrastoRight>
            <CardContent 
              style={{ padding: '0'}}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cep"
                      label="CEP"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      value={addressZipcode}
                      onChange={handleKeyUp}
                      onBlur={handleAutoCompleteData}
                      {...register('cep', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.cep && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cep.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="endereco"
                      fullWidth
                      variant="standard"
                      disabled
                      {...register('endereco')}
                      value={address?.logradouro}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="bairro"
                      fullWidth
                      variant="standard"
                      disabled
                      {...register('bairro')}
                      value={address?.bairro}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cidade"
                      fullWidth
                      variant="standard"
                      disabled
                      value={address?.localidade}
                      {...register('cidade')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="numero"
                      label="Número"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('numero')}
                      value={addressNumber}
                      onChange={(e) => setAddressNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="estado"
                        {...register('estado')}
                      >
                        {states.map((state) => (
                          <MenuItem key={state.value} value={state.value}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="complemento"
                      label="Complemento"
                      autoComplete="given-name"
                      fullWidth
                      variant="standard"
                      {...register('complemento')}
                    />
                  </Grid>
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