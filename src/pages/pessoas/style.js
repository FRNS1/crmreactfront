
import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  `
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PesquisaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const LabelinputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label{
    font-size: 18px;
    line-height: normal;
    flex-direction: column;
    font-weight: 700;
    display: flex;
  }

  input{
    padding: 6px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #F4F7F8;
    border-radius: 8px;
  }
`
export const IconPesquisa = styled.div`
  margin-top: 30px;

  button{
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    background-color: #081535;
  }
`

export const LabelSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label{
    font-size: 18px;
    line-height: normal;
    flex-direction: column;
    font-weight: 700;
    display: flex;
  }

  select{
    height: 100%;
    padding: 6px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #F4F7F8;
    border-radius: 8px;

    .option{
      padding: 24px;
      height: 100%;
      border-radius: 8px;
    }
  }
`

export const ContentAction = styled.div`
  margin-top: 30px;
  button{
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    background-color: #081535;
  }
`