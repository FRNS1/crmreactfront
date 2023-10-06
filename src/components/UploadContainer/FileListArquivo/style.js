import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  
  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #444;

    & + li{
      margin-top: 15px;
    }
  }
`
export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  
  div{
    display: flex;
    flex-direction: column;

    span{
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button{
        cursor: pointer;
        border: none;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
      }
    }
  }
`

export const FileContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.scr});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: 10px;
`