/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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
  const [formData, setFormData] = useState({})
  useEffect(()=>{
    console.log(formData)
  },[formData])


  const handlePreviousStep = (e) => {
    // Implemente aqui a lógica para voltar ao step anterior
    changeStep(currentStep - 1, e);
  };

  const handleNextStep = (e) => {
    // Implemente aqui a lógica para avançar para o próximo step
    changeStep(currentStep + 1, e);
  };
  const formComponents = [
    <DadosPessoais 
      setFormData={setFormData} 
      formData={formData} 
      handleNextStep={handleNextStep}
    />,
    <DadosResidenciais 
      setFormData={setFormData} 
      formData={formData} 
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />,
    <DadosFinanceiros
      setFormData={setFormData} 
      formData={formData} 
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />,
    <DadosProfissionais
      setFormData={setFormData} 
      formData={formData} 
      handlePreviousStep={handlePreviousStep}
    />
  ]

  const { 
    currentStep,
    currentComponent, 
    changeStep,
    isLastStep,
    isFirstStep
  } = useFormCustom(formComponents)

  
  return (
    <Container>
      <Content>
        <Header>
          <Steps currentStep={currentStep}/>
        </Header>
        <FormContainer>
          <>
            <InputContainer>
              {currentComponent}
            </InputContainer>
            {/* <StepButtonContainer onClick={(e) => e.stopPropagation()}>
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
                  type='submit'

                >
                  Próximo
                </Button>
              ) : (
                <Button 
                  variant="contained"
                  color="primary"
                  // type='submit'
                >
                  Enviar Documentos
                </Button>
              )}
            </StepButtonContainer> */}
          </>
        </FormContainer>
      </Content>
    </Container>
  );
}
