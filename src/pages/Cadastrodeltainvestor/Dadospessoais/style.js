import styled from "styled-components";
import { xs, sm, md } from '../../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1200px;
  margin: 0 auto; */
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  
  h2{
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  p{
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
    color: rgb(102, 102, 102);

    a{
      text-decoration: none;
      border-bottom: #ffc709 1px solid;
      color: #18191a;
      font-weight: bold;
    }
  }

  ${md`
    width: 100%;
    padding: 0 24px;
  `}
  ${sm`
    width: 100%;
    padding: 0 24px;

  `}
  ${xs`
    width: 100%;
    padding: 0 24px;
  `}
`
export const CadastroDeltaContent = styled.div`
  gap: 100px;
  grid-template-columns: 2fr 1fr;
  display: grid;
  justify-content: space-between;
  margin-top: 40px;
`;

export const CadastroRight = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardPercent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`
export const Divider = styled.div`
  width: 24px;
  height: 4px;
  /* margin-bottom: 20px; */
  background: #FFC709;
`
export const CardPercentContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img{
    width: 50px;
    height: 100px;
  }
`
export const CardPercentBottom = styled.div`
  display: flex;
  flex-direction: column;

  >p{
    margin-bottom: 8px;
  }
`
export const CadastroLeft = styled.div`
   display: flex;
   flex-direction: column;
`
export const CadastroCard = styled.div`

`

export const Assessor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`
