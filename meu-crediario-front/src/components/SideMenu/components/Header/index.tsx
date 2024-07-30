import  { FC } from 'react'

import logo from "../../../../assets/meuCrediarioLogo.png"
import { StyledBox, StyledBoxImage } from './styled'

export const Header:FC = () => {
  return (
    <StyledBox>
    <StyledBoxImage src={logo} component="img"/>
    </StyledBox>
  )
}
