import styled, { css } from 'styled-components';

// Defina o objeto responsivo
const responsive = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1216px',
  xxl: '1440px',
};

// Crie mixins para os diferentes tamanhos responsivos
const xs = (content) => css`
  @media screen and (max-width: ${responsive.xs}) {
    ${content};
  }
`;

const sm = (content) => css`
  @media screen and (max-width: ${responsive.sm}) {
    ${content};
  }
`;

const md = (content) => css`
  @media screen and (max-width: ${responsive.md}) {
    ${content};
  }
`;

const lg = (content) => css`
  @media screen and (max-width: ${responsive.lg}) {
    ${content};
  }
`;

const xl = (content) => css`
  @media screen and (max-width: ${responsive.xl}) {
    ${content};
  }
`;

const xxl = (content) => css`
  @media screen and (max-width: ${responsive.xxl}) {
    ${content};
  }
`;

export { xs, sm, md, lg, xl, xxl };
