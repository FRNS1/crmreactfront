import styled from 'styled-components';

import { xs, sm, md } from '../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  ${md`
    padding-right: 24px;
    padding-left: 24px;
  `}
  ${sm`
    padding-right: 24px;
    padding-left: 24px;
  `}
  ${xs`
    padding-right: 24px;
    padding-left: 24px;
  `}
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid #ccc;
  background-color: #F4F7F8;
  border-radius: 5px;

  h2{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;

    ${sm`
      font-size: 18px;
    `}
    ${xs`
      font-size: 16px;
    `}
  }

  form{
    width: 100%;
  }

  ${md`
    padding: 24px;
    max-width: 768px;
  `}
  ${sm`
    padding: 24px;
    max-width: 480px;
  `}
  ${xs`
    padding: 24px;
    max-width: 320px;
  `}
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;

    img{
      width: 125px;
      height: 125px;

      ${sm`
        width: 80px;
        height: 80px;
      `}
      ${xs`
        width: 80px;
        height: 80px;
      `}
    }
`

export const GroupCheckelist = styled.div`
  display: block;
  margin-bottom: 15px;
  text-align: left;

  label{
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 600;

    ${sm`
      font-size: 16px;
    `}
    ${xs`
      font-size: 16px;
    `}
  }

  input{
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #E8EEEF;

    ${md`
      padding: 8px;
      font-size: 14px;
    `}
    ${sm`
      padding: 8px;
      font-size: 14px;
    `}
    ${xs`
      padding: 8px;
      font-size: 14px;
    `}
  }
`
export const GroupCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;

  a{
    font-weight: 700;
    cursor: pointer;
  }

  input{
    background: #1c1c1c;
    width: 24px;
    height: 24px;
  
    ${md`
      width: 30px;
      height: 30px;
    `}
    ${sm`
      width: 30px;
      height: 30px;
    `}
    ${xs`
      width: 30px;
      height: 30px;
    `}
  }

  p{
    font-size: 15px;
    font-weight: normal;

    ${md`
      font-size: 12px;
    `}
    ${sm`
      font-size: 10px;
    `}
    ${xs`
      font-size: 10px;
    `}
  }
`
export const CheckListBtn = styled.div`
   width: 100%;
   color: #fff;
   border: none;
   cursor: pointer;
   margin: 0 auto;
   font-size: 18px;
   text-align: center;
   border-radius: 5px;
   padding: 10px;
   background-color: #081535;

   ${sm`
      font-size: 12px;
    `}
    ${xs`
      font-size: 12px;
    `}
`