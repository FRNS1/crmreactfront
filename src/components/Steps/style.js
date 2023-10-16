import styled from "styled-components";

export const ContainerSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`
export const StepContent = styled.div`
  display: block;
  position: relative;
  flex: 1;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.83;
  letter-spacing: normal;
  color: rgb(0, 0, 43);

  &.active {
    color: rgb(0, 0, 43);
  }
`
export const Content = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgb(224, 173, 0);

  >div{
    width: 10px;
    height: 10px;
    top: 3px;
    left: 3px;
    position: absolute;
    border-radius: 50%;
    background-color: rgb(224, 173, 0);
  }
`