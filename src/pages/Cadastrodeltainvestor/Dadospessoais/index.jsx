import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
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
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

import Figure from '../../../imgs/first-steps.svg';
import { formatCellPhone, formatCPF } from '../../../utils/inputMasks'

import {
  Container,
  Content,
  CadastroRight,
  CadastroLeft,
  CadastroCard,
  CadastroDeltaContent,
  CardPercent,
  CardPercentBottom,
  CardPercentContent,
  Divider,
} from './style';

export default function DadosPessoais() {
  const [taxDocumentCpf, setTaxDocumentCpf] = useState("");
  const [cellPhone, setCellPhone] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, getValues 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleKeyUpCpf = useCallback((e) => {
    formatCPF(e);
    setTaxDocumentCpf(e.target.value);
  }, []);

  const handleCellphone = useCallback((e) => {
    formatCellPhone(e);
    setCellPhone(e.target.value);
  }, []);

  return (
    <Container>
      <Content>
        <CadastroDeltaContent>
          <CadastroRight>
            <CardContent style={{ padding: '0' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="Nome completo (como está no RG)"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('firstName', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.firstName && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.firstName.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="email"
                      name="email"
                      label="E-mail"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('email', {
                        required: 'Campo obrigatório',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'E-mail inválido',
                        },
                      })}
                    />
                    {errors.email && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.email.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="confirmar"
                      name="confirmar"
                      label="Confirme seu e-mail"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('confirmar', {
                        required: 'Campo obrigatório',
                        validate: (value) =>
                          value === getValues('email') ||
                          'Os e-mails não coincidem',
                      })}
                    />
                    {errors.confirmar && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.confirmar.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cpf"
                      name="cpf"
                      label="CPF"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('cpf', {
                        required: 'Campo obrigatório',
                      })}
                      value={taxDocumentCpf}
                      onChange={handleKeyUpCpf}
                    />
                    {errors.cpf && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cpf.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="dataNascimento"
                      name="dataNascimento"
                      label="Data de Nascimento"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('dataNascimento', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.dataNascimento && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.dataNascimento.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="celular"
                      name="celular"
                      label="Celular"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('celular', {
                        required: 'Campo obrigatório',
                      })}
                      value={cellPhone}
                      onChange={handleCellphone}
                    />
                    {errors.celular && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.celular.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="rg"
                      name="rg"
                      label="RG"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('rg', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.rg && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.rg.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Orgão emissor</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="orgao"
                        name="orgao"
                        label="Orgão emissor"
                        {...register('orgao', {
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
                    {errors.orgao && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.orgao.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado onde foi emitido</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="estado"
                        name="estado"
                        label="Estado onde foi emitido"
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
                    {errors.estado && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.estado.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="emissao"
                      name="emissao"
                      label="Data emissão"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('emissao', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.emissao && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.emissao.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="mae"
                      name="mae"
                      label="Nome da mãe"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('mae', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.mae && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.mae.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="pai"
                      name="pai"
                      label="Nome do Pai (opcional)"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('pai')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado Civil</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="nacionalidade"
                        name="nacionalidade"
                        label="Estado Civil"
                        {...register('civil', {
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
                    {errors.civil && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.civil.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Nacionalidade</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="nacionalidade"
                        name="nacionalidade"
                        label="Nacionalidade"
                        {...register('nacionalidade', {
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
                    {errors.nacionalidade && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.nacionalidade.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado onde nasceu</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="estadonasceu"
                        name="estadonasceu"
                        label="Estado onde nasceu"
                        {...register('estadonasceu', {
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
                    {errors.estadonasceu && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.estadonasceu.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Cidade onde nasceu</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="cidadenasceu"
                        name="cidadenasceu"
                        label="Cidade onde nasceu"
                        {...register('cidadenasceu', {
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
                    {errors.cidadenasceu && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cidadenasceu.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: '40px' }}>
                    <FormControl>
                      <FormLabel style={{ marginBottom: '10px' }}>Gênero</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="genero"
                        {...register('genero')}
                      >
                        <FormControlLabel
                          value="masculino"
                          control={<Radio />}
                          label="Masculino"
                        />
                        <FormControlLabel
                          value="feminino"
                          control={<Radio />}
                          label="Feminino"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: '40px' }}>
                    <h2 style={{ marginBottom: '10px' }}>Declarações</h2>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Sou vinculado à XP Investimentos"
                      />
                      <FormControlLabel control={<Checkbox />} label="Sou Us Person" />
                      <FormControlLabel control={<Checkbox />} label="Sou politicamente exposto" />
                    </FormGroup>
                  </Grid>
                </Grid>
                {/* <Button type="submit" variant="contained" color="primary">
                  Enviar
                </Button> */}
              </form>
            </CardContent>
          </CadastroRight>
          <CadastroLeft>
            <CadastroCard>
              <Card sx={{ minWidth: 335 }}>
                <CardContent sx={{ padding: 4 }}>
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
          </CadastroLeft>
        </CadastroDeltaContent>
      </Content>
    </Container>
  );
}
