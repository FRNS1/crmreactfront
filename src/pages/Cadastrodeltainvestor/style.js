import styled from "styled-components";

import { xs, sm, md } from '../../style/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Content = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* margin-top: 80px; */
  display: flex;
  flex-direction: column;
  
  >p{
    margin-bottom: 40px;
  }

  ${md`
    // width: 100%;
    // padding: 0 24px;
  `}
  ${sm`
    // width: 100%;
    // padding: 0 24px;

  `}
  ${xs`
    // width: 100%;
    padding: 0 24px;
  `}
`
export const Header = styled.div`
  h2{
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  >p{
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
export const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  div {
    position: relative;
    flex: 1;
    text-align: center;
    color: gray;

    &.active {
      color: yellow;
    }

    span {
      display: block;
      width: 15px;
      height: 15px;
      background: gray;
      border-radius: 50%;
      margin: 0 auto 5px;
    }

    &.active span {
      background: yellow;
    }
  }
`
export const FormContainer = styled.div``
export const StepButtonContainer = styled.div``