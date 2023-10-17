import { ContainerSteps, StepContent, Content } from './style'

export default function Steps({ currentStep }){
  return(
    <ContainerSteps currentStep={currentStep}>
      <StepContent className={currentStep === 0 ? 'active' : ''}>
        <Content>
          <div></div>  
        </Content> Dados Pessoais
      </StepContent>
      <StepContent className={currentStep === 1 ? 'active' : ''}>
        <Content>
          <div></div>
        </Content> Dados Residenciais
      </StepContent>
      <StepContent className={currentStep === 2 ? 'active' : ''}>
        <Content>
          <div></div>  
        </Content> Dados Financeiros
      </StepContent>
      <StepContent className={currentStep === 3 ? 'active' : ''}>
        <Content>
          <div></div> 
        </Content> Dados Profissionais
      </StepContent>
    </ContainerSteps>
  )
}
