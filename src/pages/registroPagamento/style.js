
import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  /* background: red; */
  `
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: flex-start;
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
  margin-top: 25px;

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
export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  table{
    width: 100%;
    border-collapse: collapse;
    thead{
      text-align: center;
      th{
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
    tr{
      padding: 8px 24px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    td{
      width: 300px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 8px 24px;

    }
  }
`
