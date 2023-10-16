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
  Steps, 
  StepButtonContainer, 
  FormContainer 
} from './style';

export default function CadastroDeltaInvestor() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleDocumentUpload = () => {
    // Lógica para lidar com o envio de documentos
    console.log('Iniciar envio de documentos');
    // Você pode adicionar a lógica necessária para o envio de documentos aqui
  };
  
  return (
    <Container>
      <Content>
        <Header>
          <Steps>
            <div className={step === 1 ? 'active' : ''}>
              <span>1</span> Dados Pessoais
            </div>
            <div className={step === 2 ? 'active' : ''}>
              <span>2</span> Dados Residenciais
            </div>
            <div className={step === 3 ? 'active' : ''}>
              <span>3</span> Dados Financeiros
            </div>
            <div className={step === 4 ? 'active' : ''}>
              <span>4</span> Dados Profissionais
            </div>
          </Steps>
        </Header>
        <FormContainer>
          {step === 1 && <DadosPessoais />}
          {step === 2 && <DadosResidenciais />}
          {step === 3 && <DadosFinanceiros />}
          {step === 4 && <DadosProfissionais />}
        </FormContainer>
        <StepButtonContainer>
          {step > 1 && (
            <Button 
              variant="contained"
              color="primary"
              onClick={handlePreviousStep}
            >
              Anterior
            </Button>
          )}
          {step < 4 && (
            <Button
              variant="contained"
              color="primary" 
              onClick={handleNextStep}
            >
              Próximo
            </Button>
          )}
          {step === 4 && (
            <Button 
              variant="contained"
              color="primary"
              onClick={handleDocumentUpload}>
              Enviar Documentos
            </Button>
          )}
        </StepButtonContainer>
      </Content>
    </Container>
  );
}
