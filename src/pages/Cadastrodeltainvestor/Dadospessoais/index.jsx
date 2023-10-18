import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
import orgaosEmissores  from '../../../utils/orgaoEmissor'
import states  from '../../../utils/statesList'

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
  CadastroAction
} from './style';

export default function DadosPessoais({setFormData, formData, handleNextStep}) {
  const [taxDocumentCpf, setTaxDocumentCpf] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [nationalName, setNationalName] = useState("");
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, getValues 
  } = useForm();

  const onSubmit = (data) => {
    setFormData({...formData, ...data})
    handleNextStep()
    console.log({...formData})
  };
  
  const handleKeyUpCpf = useCallback((e) => {
    formatCPF(e);
    setTaxDocumentCpf(e.target.value);
  }, []);

  const handleCellphone = useCallback((e) => {
    formatCellPhone(e);
    setCellPhone(e.target.value);
  }, []);

  const estadoCivilOptions = [
    { id: 'solteiro', name: 'Solteiro(a)' },
    { id: 'casado', name: 'Casado(a)' },
    { id: 'divorciado', name: 'Divorciado(a)' },
    { id: 'viuvo', name: 'Viúvo(a)' },
    { id: 'separado', name: 'Separado(a)' },
    { id: 'uniao_estavel', name: 'União Estável' },
  ];

  const nacionalidadeOptions = [
    { id: 'brasileiro', name: 'Brasileiro(a)' },
    { id: 'estrangeiro', name: 'Estrangeiro(a)' },
  ];

  return (
    <Container>
      <Content>
        <h2>Dados Pessoais</h2>
        <p>Se você já iniciou seu cadastro, <a href='#'>finalize aqui</a></p>
        <CadastroDeltaContent>
          <CadastroRight>
            <CardContent style={{ padding: '0' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="nome_completo"
                      name="nome_completo"
                      label="Nome completo (como está no RG)"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('nome_completo', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.nome_completo && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.nome_completo.message}
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
                      id="email_confirmacao"
                      name="email_confirmacao"
                      label="Confirme seu e-mail"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('email_confirmacao', {
                        required: 'Campo obrigatório',
                        validate: (value) =>
                          value === getValues('email') ||
                          'Os e-mails não coincidem',
                      })}
                    />
                    {errors.email_confirmacao && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.email_confirmacao.message}
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
                      id="data_nascimento"
                      name="data_nascimento"
                      label="Data de Nascimento"
                      type='date'
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('data_nascimento', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.data_nascimento && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.data_nascimento.message}
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
                        id="orgao_emissor"
                        name="orgao_emissor"
                        label="Orgão emissor"
                        {...register('orgao_emissor', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        {orgaosEmissores.map((orgao) => (
                          <MenuItem key={orgao.id} value={orgao.nome}>
                            {orgao.nome}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {errors.orgao_emissor && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.orgao_emissor.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado onde foi emitido</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="estado_emissao"
                        name="estado_emissao"
                        label="Estado onde foi emitido"
                        {...register('estado_emissao', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        {states.map((state) => (
                          <MenuItem key={state.value} value={state.value}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {errors.estado_emissao && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.estado_emissao.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="data_emissao"
                      name="data_emissao"
                      label="Data emissão"
                      type='date'
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('data_emissao', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.data_emissao && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.data_emissao.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="nome_mae"
                      label="Nome da mãe"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('nome_mae', {
                        required: 'Campo obrigatório',
                      })}
                    />
                    {errors.nome_mae && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.nome_mae.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="nome_pai"
                      label="Nome do Pai (opcional)"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...register('nome_pai')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Estado Civil</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="estado_civil"
                        label="Estado Civil"
                        {...register('estado_civil', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        {estadoCivilOptions.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {errors.estado_civil && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.estado_civil.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Nacionalidade</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="nacionalidade"
                        label="Nacionalidade"
                        {...register('nacionalidade', {
                          required: 'Campo obrigatório',
                        })}
                        value={nationalName}
                        onChange={(e) => setNationalName(e.target.value)}
                      >
                        {nacionalidadeOptions.map((nacionalidade) => (
                          <MenuItem key={nacionalidade.id} value={nacionalidade.name}>
                            {nacionalidade.name}
                          </MenuItem>
                        ))}
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
                        id="estado_nascimento"
                        label="Estado onde nasceu"
                        {...register('estado_nascimento', {
                          required: 'Campo obrigatório',
                        })}
                      >
                        {states.map((state) => (
                          <MenuItem key={state.value} value={state.value}>
                            {state.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {errors.estado_nascimento && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.estado_nascimento.message}
                      </span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        id="cidade_nascimento"
                        label="Cidade onde nasceu"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        {...register('cidade_nascimento', {
                          required: 'Campo obrigatório',
                        })}
                      />
                    {errors.cidade_nascimento && (
                      <span style={{ color: 'red', marginTop: '8px' }}>
                        {errors.cidade_nascimento.message}
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
                    <FormGroup {...register('vinculado_xp')}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Sou vinculado à XP Investimentos"
                      />
                      <FormControlLabel control={<Checkbox />} label="Sou Us Person" />
                      <FormControlLabel control={<Checkbox />} label="Sou politicamente exposto" />
                    </FormGroup>
                  </Grid>
                </Grid>
                <CadastroAction>
                  <Button type="submit" variant="contained" color="primary" sx={{ padding: '8px 40px', fontSize: '0.9375rem'}}>
                    Próximo
                  </Button>
                </CadastroAction>
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
