import styled from "styled-components";

import { xs, sm, md } from '../../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  h2{
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 16px;

    ${sm`
      font-size: 24px;
    `}
    ${xs`
      font-size: 18px;
    `}
  }

  form{
    width: 100%;
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

  ${md`
    width: 100%;
    display: block;
  `}
  ${sm`
    width: 100%;
    display: block;

  `}
  ${xs`
    width: 100%;
    display: block;
  `}
`;

export const CadrastoRight = styled.div`
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

export const Header = styled.div`
  h2{
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  p{
    line-height: 1.5;
    font-size: 16px;
    color: rgb(102, 102, 102);

    a{
      color: #18191a;
      text-decoration: none;
      border-bottom: #ffc709 1px solid;
      font-weight: bold;
    }
  }
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
export const CadrastoLeft = styled.div`
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
export const CadastroButtom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  p{
    font-weight: 400;
    color: #18191a;
    font-size: 12px;
    margin-top: 40px;
  }
`
export const CadastroAction = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`