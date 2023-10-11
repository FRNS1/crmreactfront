import styled from 'styled-components';

import { xs, sm, md } from '../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
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
export const Content = styled.div`
  width: 100%;
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
  }

  form{
    width: 100%;
  }
  
  
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
  }

  input{
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #E8EEEF;
  }
`
export const GroupCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;

  a{
    font-weight: 700;
    cursor: pointer;
  }
`
export const CheckListBtn = styled.div`
   background-color: #081535;
   color: #fff;
   padding: 10px 20px;
   font-size: 18px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   display: block;
   margin: 0 auto;
   width: 100%;
`