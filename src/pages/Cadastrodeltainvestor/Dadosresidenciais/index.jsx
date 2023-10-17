import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";

import { 
  Grid,
  Button,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  FormGroup,
  InputLabel,
  CardContent, 
  FormControl,
  FormControlLabel,
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
  const [mostrarGrid, setMostrarGrid] = useState(false); 
  const [addressZipcode, setAddressZipcode] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressDistrict, setAddressDistrict] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressNumber, setAddressNumber] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    
    const formData = {
      cep: data.cep,
      endereco: data.endereco,
      bairro: data.bairro,
      numero: data.numero,
      cidade: data.cidade,
      estado: data.estado,
    };

    try {
      const response = await axios.post('http://52.87.219.145:8080/api/v1/formxp/register', formData);

      if (response.status === 200) {
        console.log('Dados do formulário enviados com sucesso.');
        
        handleNextStep();
      } else {
        
        console.error('Erro ao enviar os dados do formulário.');
      }
    } catch (error) {
      console.error('Erro na chamada à API:', error);
    }
  };


  const handleCheckboxChange = (event) => {
    setMostrarGrid(event.target.checked);
  };

  const handleAutoCompleteData = useCallback(async () => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${addressZipcode}/json/`
    );
    setAddressCity(response.data.localidade);
    setAddressStreet(response.data.logradouro);
    setAddressDistrict(response.data.bairro);
    setAddressState(response.data.uf);
  }, [addressZipcode]);

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
                      {...register('cep', {
                        required: 'Campo obrigatório',
                      })}
                      value={addressZipcode}
                      onChange={handleKeyUp}
                      onBlur={handleAutoCompleteData}
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
                      label="Endereço"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('endereco', {
                        required: 'Campo obrigatório',
                      })}
                      value={addressStreet}
                      onChange={(e) => setAddressStreet(e.target.value)}
                    />
                    {errors.endereco && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.endereco.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="bairro"
                      label="Bairro"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('bairro', {
                        required: 'Campo obrigatório',
                      })}
                      value={addressDistrict}
                      onChange={(e) => setAddressDistrict(e.target.value)}
                    />
                    {errors.bairro && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.bairro.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="numero"
                      label="Número"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('numero', {
                        required: 'Campo obrigatório',
                      })}
                      value={addressNumber}
                      onChange={(e) => setAddressNumber(e.target.value)}
                    />
                    {errors.numero && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.numero.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="estado"
                        label="Estado"
                        {...register('estado', {
                          required: 'Campo obrigatório',
                        })}
                        value={addressState}
                      >
                        {states.map((state) => (
                          <MenuItem key={state.value} value={state.value}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {errors.cidade && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cidade.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cidade"
                      label="Cidade "
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      value={addressCity}
                      onChange={(e) => setAddressCity(e.target.value)}
                      {...register('cidade', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.cidade && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cidade.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="complemento"
                      label="Complemento"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('complemento')}
                    />
                  </Grid>
                </Grid>
                <CadastroButtom>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked={false} onChange={handleCheckboxChange} />} label="Possuo residência fiscal, imóvel ou endereço fora do Brasil" />
                  </FormGroup>
                  {mostrarGrid && (
                    <>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="nif"
                            label="NIF"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            {...register('nif', {
                              required: 'Campo obrigatório',
                            })}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">País</InputLabel>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="pais"
                              label="País"
                              {...register('pais', {
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
                          {errors.país && (
                            <span style={{ color: 'red', marginTop: '8px' }}>
                              {errors.país.message}
                            </span>
                          )}
                        </Grid>
                      </Grid>
                    </>
                  )}
              
                  <p><strong>Declaro</strong> para fins de comprovação de residência, sob as penas da Lei (art. 2° da Lei 7.115/83), que resido no endereço acima.</p>
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