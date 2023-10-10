import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 40px auto;
  flex-direction: column;

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
export const CadrastoRight = styled.div``
export const CadrastoLeft = styled.div`
   display: flex;
   flex-direction: column;
`
export const CadastroCard = styled.div`

`
