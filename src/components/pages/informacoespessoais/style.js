import styled from "styled-components";

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
  margin-bottom: 20px;

  label {
    width: 100%;
    margin: 0 20px;

    input {
      width: 100%;
    }

    select {
      padding: 10px;
      width: 100%;
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
