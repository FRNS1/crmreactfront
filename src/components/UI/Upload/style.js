import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`
const dragReject = css`
  border-color: #e57878;
`

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  h2{
    font-size: 32px;
    margin-top: 20px;
  }
`
export const UploadFiles = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px;
  margin-top: 50px;
  max-width: 400px;
  border: 1px dashed #ddd;
  border-radius: 4px;
`;
export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 10px;
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}
`;

const messageColors = {
  default:'#999',
  error: "#e57878",
  success: "#78e5d5"
}

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']}
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`