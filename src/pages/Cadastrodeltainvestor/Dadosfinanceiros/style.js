import styled from "styled-components";

import { xs, sm, md, lg } from '../../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  p{
    margin-top: 4px;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.54);

    ${lg`
      font-size: 0.75rem;
    `}
    ${md`
      font-size: 0.75rem;
    `}
    ${sm`
      font-size: 0.75rem;
    `}
    ${xs`
      font-size: 0.75rem;
    `}
  }

  ${md`
    width: 100%;
    // padding: 0 24px;
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
    display: block;
  `}
  ${sm`
    display: block;
  `}
  ${xs`
    display: block;
  `}
`;

export const CadrastoRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const CadrastoLeft = styled.div`
   display: flex;
   flex-direction: column;
`
export const OriginProduto = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;

  ${lg`
    display: flex;
    flex-direction: column;
  `}
  ${md`
    display: flex;
    flex-direction: column;
  `}
  ${sm`
    display: flex;
    flex-direction: column;

  `}
  ${xs`
    display: flex;
    flex-direction: column;
  `}
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