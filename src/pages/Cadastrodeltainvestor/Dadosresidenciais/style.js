import styled from "styled-components";

import { xs, sm, md } from '../../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80px;
  
  display: flex;
  flex-direction: column;

  h2{
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 16px;
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
export const CardPercentContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img{
    width: 50px;
    height: 100px;
  }
`
export const CadrastoLeft = styled.div`
   display: flex;
   flex-direction: column;
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