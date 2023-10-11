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
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  
  >p{
    margin-bottom: 40px;
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