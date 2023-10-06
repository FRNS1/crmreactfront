import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Select } from "@rocketseat/unform";


import {
  ResetContent,
  ResetContainer,
  FormContainer,
  FormContent,
  FormRight,
  Divider,
  LinksContainer,
  FlexGroup,
} from "./style";

function InfoPropostas() {
  return (
    <ResetContainer>
      <ResetContent>
          <FormContainer>
            <FormContent>
              <Form>
                <FlexGroup>
                  <label htmlFor="name">
                    Nome
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Digite seu nome"
                    />
                  </label>
                  <label htmlFor="email">
                    Email
                    <Input
                      style={{ userSelect: "none" }}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite seu email"
                    />
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label htmlFor="cpf">
                    CPF
                    <Input
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Digite seu cpf"
                    />
                  </label>
                  <label> 
                    Status 
                    <select>
                        <option value='EM ANALISE'> EM ANALISE </option>
                        <option value='APROVADO'> APROVADO </option>
                        <option value='REPROVADO'> REPROVADO </option>
                        <option value='EMPRESTIMO CONCEDIDO'> EMPRESTIMO CONCEDIDO </option>
                        <option value='PENDENCIA DE DOCUMENTACAO'> PENDENCIA DE DOCUMENTACAO </option>   
                    </select>
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label htmlFor="cpf">
                    CPF
                    <Input
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Digite seu cpf"
                    />
                  </label>
                  <label htmlFor="phoneNumber">
                    Telefone
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Digite seu número de telefone"
                    />
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label htmlFor="cpf">
                    CPF
                    <Input
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Digite seu cpf"
                    />
                  </label>
                  <label htmlFor="phoneNumber">
                    Telefone
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Digite seu número de telefone"
                    />
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label htmlFor="cpf">
                    CPF
                    <Input
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Digite seu cpf"
                    />
                  </label>
                  <label htmlFor="phoneNumber">
                    Telefone
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Digite seu número de telefone"
                    />
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label className="stringDados"> 
                    Status 
                    <select>
                      <option> Aberto </option>
                      <option> Quitado </option>   
                    </select>
                  </label>
                  <label> 
                    Motivo da reprovação 
                    <select>
                      <option> Selecione um motivo  </option>
                      <option> Restrição de bureaus de crédito  </option>
                      <option> Restrição por divida ativa </option>
                      <option> Restrição de cadin </option>
                      <option> Restrição por ausência de documento </option>
                      <option> Restrição por renda insuficiente </option>
                      <option> Restrição por score fora da política </option>
                      <option> Restrição por processo criminal ou civil </option>
                      <option> Empresas ligadas com restrição </option>
                    </select>
                  </label>
                </FlexGroup>
                <FlexGroup>
                  <label> 
                    Observação do Cliente 
                    <textarea
                        name="observacaoCliente"
                        // placeholder={observacaoCliente}
                        // onBlur={(event) => handleObservacaoClienteChange(event.target.value)}
                        
                        type="text"
                    />
                  </label>
                  
                </FlexGroup>
                <FlexGroup>
                  <label> 
                    Observação do Analista 
                    <textarea
                      name="observacaoCliente"
                      // placeholder={observacaoCliente}
                      // onBlur={(event) => handleObservacaoClienteChange(event.target.value)}
                      
                      type="text"
                    />
                  </label>
                </FlexGroup>
                <LinksContainer>
                  <button type="submit">
                    Salvar
                  </button>
                </LinksContainer>
              </Form>
            </FormContent>
          </FormContainer>
      </ResetContent>
    </ResetContainer>
  );
}

export default InfoPropostas;
