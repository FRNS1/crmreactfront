import { useState } from 'react'
import { useForm } from 'react-hook-form';

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

import { 
  Container, 
  Content, 
  CadrastoRight, 
  CadrastoLeft,
  CadastroDeltaContent,
  CadastroAction,
  CadastroButtom,
} from './style'

export default function Dadosresidenciais(){
  const [mostrarGrid, setMostrarGrid] = useState(false); // Estado para controlar a visibilidade do Grid
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  const handleCheckboxChange = (event) => {
    setMostrarGrid(event.target.checked);
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
                      name="endereco"
                      label="Endereço"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('endereco', {
                        required: 'Campo obrigatório',
                      })}
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
                      name="bairro"
                      label="Bairro"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('bairro', {
                        required: 'Campo obrigatório',
                      })}
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
                      name="numero"
                      label="Número"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('numero', {
                        required: 'Campo obrigatório',
                      })}
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
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    {errors.cidade && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cidade.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Cidade</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="cidade"
                        label="Cidade "
                        {...register('cidade', {
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
                    {errors.cidade && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cidade.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="complemento"
                      name="complemento"
                      label="Complemento"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('cidade')}
                    />
                  </Grid>
                </Grid>
              </form>
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
                        name="nif"
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
                          id="país"
                          label="Cidade "
                          {...register('país', {
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
              {/* <CadastroAction>
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
              </CadastroAction> */}
            </CadastroButtom>
            </CardContent>
          </CadrastoRight>
          <CadrastoLeft></CadrastoLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  )
}