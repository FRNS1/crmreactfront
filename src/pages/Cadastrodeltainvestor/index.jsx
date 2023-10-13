// import Dadospessoais from './Dadospessoais'
// import Dadosresidenciais from './Dadosresidenciais'
import Dadosfinanceiros from './Dadosfinanceiros'
// import Dadosprofissionais from './Dadosprofissionais'

import { Container, Content, Header } from './style'

export default function CadastroDeltaInvestor(){
  return(
    <Container>
      <Content>
        {/* <p>primeiros passos</p>
        <Header>
          <h2>Dados Pessoais</h2>
          <p>Se você iniciou seu cadastro, <a href='#'>finalize aqui</a></p>
        </Header> */}
        {/* <Dadosresidenciais/> */}
        {/* <Dadospessoais/> */}
        <Dadosfinanceiros/>
        {/* <Dadosprofissionais/> */}
      </Content>
    </Container>
  )
}