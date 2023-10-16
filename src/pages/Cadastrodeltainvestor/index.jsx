import React, { useState } from 'react';
import { Button } from '@mui/material';

import DadosPessoais from './Dadospessoais';
import DadosResidenciais from './Dadosresidenciais';
import DadosFinanceiros from './Dadosfinanceiros';
import DadosProfissionais from './Dadosprofissionais';

import { 
  Container, 
  Content, 
  Header, 
  InputContainer,
  StepButtonContainer, 
  FormContainer 
} from './style';
import { useFormCustom } from '../../hooks/useFormCustom';
import Steps from '../../components/Steps';

export default function CadastroDeltaInvestor() {
  const formComponents = [
    DadosPessoais,
    DadosResidenciais,
    DadosFinanceiros,
    DadosProfissionais
  ]

  const { 
    currentStep,
    currentComponent, 
    changeStep,
    isLastStep,
    isFirstStep
  } = useFormCustom(formComponents)

  const handleNextStep = (e) => {
    // Implemente aqui a lógica para avançar para o próximo step
    changeStep(currentStep + 1, e);
  };

  const handlePreviousStep = (e) => {
    // Implemente aqui a lógica para voltar ao step anterior
    changeStep(currentStep - 1, e);
  };
  
  return (
    <Container>
      <Content>
        <Header>
          <Steps currentStep={currentStep}/>
        </Header>
        <FormContainer>
          <form>
            <InputContainer>
              {currentComponent}
            </InputContainer>
            <StepButtonContainer onClick={(e) => e.stopPropagation()}>
              {!isFirstStep && (
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={handlePreviousStep}
                >
                  Anterior
                </Button>
              )}
              {!isLastStep ? (
                <Button
                  variant="contained"
                  color="primary" 
                  onClick={handleNextStep}
                >
                  Próximo
                </Button>
              ) : (
                <Button 
                  variant="contained"
                  color="primary"
                  // onClick={handleDocumentUpload}
                >
                  Enviar Documentos
                </Button>
              )}
            </StepButtonContainer>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
}
