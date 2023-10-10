import React from 'react'
import LogoImg from '../../imgs/deltalogoazul.png'

import { LogoContainer, LogoImage } from './style'

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage>
        <img src={LogoImg} alt="logodeltalogoazul" />
      </LogoImage>
    </LogoContainer>
  )
}
