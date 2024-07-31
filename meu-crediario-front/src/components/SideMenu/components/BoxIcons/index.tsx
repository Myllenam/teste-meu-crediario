import { FC } from "react";

import {
  StyledBox,
  StyledButtonText,
  StyledFontAwesomeIcon,
  StyledNavLink,
} from "./styled";

export const BoxIcons: FC = () => {
  return (
    <StyledBox data-testid="side-menu-icons">
      <StyledNavLink to="/inicio">
        <StyledFontAwesomeIcon icon="house-chimney" />
        <StyledButtonText>Página Inicial</StyledButtonText>
      </StyledNavLink>
      <StyledNavLink to="/clientes">
        <StyledFontAwesomeIcon icon="credit-card" />
        <StyledButtonText>Clientes</StyledButtonText>
      </StyledNavLink>
    </StyledBox>
  );
};
