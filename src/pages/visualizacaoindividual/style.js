import styled from "styled-components";
import { xs, sm, md } from '../../style/responsiveStyles';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  `
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-size: 24px;
    font-weight: 700;
  }
`
export const ActionsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`
export const DividerHeader = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 30px 0;
`

export const TableContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  table{
    width: 100%;
    border-collapse: collapse;
    thead{
      width: 100%;
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
      /* width: 300px; */
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 8px 24px;

    }

    ${md`
      width: 100%;
      // padding: 0 24px;
    `}
    ${sm`
      width: 100%;
      // padding: 0 24px;

    `}
    ${xs`
      width: 100%;
      // padding: 0 24px;
    `}
  }

  .pointer {
    cursor: pointer;
    font-weight: bold;
  }

  ${md`
    width: 100%;
    // padding: 0 24px;
  `}
  ${sm`
    width: 100%;
    // padding: 0 24px;

  `}
  ${xs`
    width: 100%;
    // padding: 0 24px;
  `}
`
export const ResetContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ResetContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 25px;
    color: #ffffff;

    @media only screen and (max-width: 600px) {
      font-size: 18px;
      margin-top: 20px;
    }
  }
`;

export const Formulary = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* background-color: #f7f4f4; */

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;


export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;

    p {
      font-size: 18px;
      margin: 20px;
      color: #0059cb;
    }

    label {
      display: flex;
      flex-direction: column;
      width: 100%;

      input {
        width: 100%;
        padding: 10px;
        background: transparent;
        border: 1px solid #cac7c7;
        border-radius: 4px;
        margin-top: 5px;
      }
    }

    button {
      width: 50%;
      padding: 10px;
      background: #081535;
      color: #f7f4f4;
      font-weight: 600;
      border-radius: 4px;
      border: none;
      transition: all 0.3s ease-out;

      &:hover {
        filter: brightness(0.9);
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    height: 100%;
    margin-top: -30px;

    form {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

export const FormContent = styled.div`
  width: 100%;
  margin-top: 30px;

  h2{
    font-size: 28px;
    margin-bottom: 16px;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 12px;
    font-size: 16px;
    color: black;
    font-weight: bold;

    input {
      width: 100%;
      padding: 10px;
      background: transparent;
      border: 1px solid #cac7c7;
      border-radius: 4px;
      margin-top: 5px;
    }

    select {
      width: 100%;
      padding: 10px;
      border: none;
      height: 100%;
      border-radius: 4px;
      background: #cac7c7;
    }

    textarea{
      width: 100%;
      height: 200px;
      padding: 10px;
      border: 1px solid #cac7c7;
      border-radius: 4px;
      outline: unset;
    }
  }

  .action{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    button {
      width: 50%;
      padding: 10px;
      background: #081535;
      color: #f7f4f4;
      font-weight: 600;
      border-radius: 4px;
      border: none;
      transition: all 0.3s ease-out;

      &:hover {
        filter: brightness(0.9);
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
`

export const FormRight = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Divider = styled.div`
  width: 1px;
  height: 250px;
  background: #ccc;
  margin: 0 10px;
`

export const LinksContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    cursor: pointer;
    color: #0059cb;
    transition: all 0.3s ease-out;
    font-size: 0.875rem;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    background: #0059cb;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 13px;
    }
  }
`;

export const FlexGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  label {
    width: 100%;
    margin: 0 20px;

    input {
      width: 100%;
    }

    input:disabled {
      width: 100%;
      color: black;
    }

    select {
      padding: 10px;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 4px;
      background: #cac7c7;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 10px;

    label {
      width: 100%;
      margin-top: 15px;

      input {
        width: 100% !important;
      }

      select {
        width: 100% !important;
      }
    }
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormTop = styled.div`

`
export const FormBottom = styled.div`
  margin-top: 30px;
`
export const ContentTableGroup = styled.div`
  display: flex;
  flex-direction: column;

  .actionBacen{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    button {
      width: 50%;
      padding: 10px;
      background: #081535;
      color: #f7f4f4;
      font-weight: 600;
      border-radius: 4px;
      border: none;
      transition: all 0.3s ease-out;

      &:hover {
        filter: brightness(0.9);
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
`
export const GroupOne = styled.div`
  margin-top: 50px;

  h2{
    font-size: 24px;
    font-weight: 700;
  }

  input{
    font-size: 16px;
    border: none;
  }
`
export const UploadContent = styled.div`
 display: flex;
 flex-direction: column;

 h2{
  font-size: 32px;
  font-weight: 700;
 }

 .actionUpload{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    button {
      width: 50%;
      padding: 10px;
      background: #081535;
      color: #f7f4f4;
      font-weight: 600;
      border-radius: 4px;
      border: none;
      transition: all 0.3s ease-out;

      &:hover {
        filter: brightness(0.9);
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
 }
`
export const InputFiles = styled.div`
  margin-top: 30px;
  input{
    font-size: 18px;
    font-weight: 700;
  }
`
