import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Select } from "@rocketseat/unform";


import {
  ResetContent,
  ResetContainer,
  Formulary,
  FormContainer,
  FormContent,
  FormRight,
  Divider,
  LinksContainer,
  FlexGroup,
} from "./style";

function Register() {
  return (
    <ResetContainer>
      <ResetContent>
        <Formulary>
          <FormContainer>
            <FormRight>
              <FormContent>
                <h2>Cliente</h2>
                <Form>
                  <FlexGroup>
                    <label htmlFor="name">
                      Nome *:
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite seu nome"
                      />
                    </label>
                    <label htmlFor="email">
                      Email *:
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
                      CPF *:
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
                  <LinksContainer>
                    <button type="submit">
                      Salvar
                    </button>
                  </LinksContainer>
                </Form>
              </FormContent>
              <Divider/>
              <FormContent>
                <h2>Referência</h2>
                <Form>
                  <FlexGroup>
                    <label htmlFor="name">
                      Nome completo
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
                  <LinksContainer>
                    <button type="submit">
                      Salvar
                    </button>
                  </LinksContainer>
                </Form>
              </FormContent>
            </FormRight>
            <FormContent>
              <h2>Sócio</h2>
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
                <LinksContainer>
                  <button type="submit">
                    Salvar
                  </button>
                </LinksContainer>
              </Form>
            </FormContent>
          </FormContainer>
        </Formulary>
      </ResetContent>
    </ResetContainer>
  );
}

export default Register;
