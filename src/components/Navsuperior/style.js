import styled from "styled-components";

export const NavSuperiorContainer = styled.div`
  width: 100%;
`

export const NavSuperiorContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
   
  ul{
    list-style: none;

    li{
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`