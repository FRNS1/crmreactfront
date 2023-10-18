/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

import DadosPessoais from './Dadospessoais';
import DadosResidenciais from './Dadosresidenciais';
import DadosFinanceiros from './Dadosfinanceiros';
import DadosProfissionais from './Dadosprofissionais';

import { 
  Container, 
  Content, 
  Header, 
  InputContainer,
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
        {/* <Header>
          <Steps currentStep={currentStep}/>
        </Header> */}
        <FormContainer>
          <>
            <InputContainer>
              {currentComponent}
            </InputContainer>
          </>
        </FormContainer>
      </Content>
    </Container>
  );
}
