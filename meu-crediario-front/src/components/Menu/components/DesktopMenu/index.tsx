import { type FC } from "react";

import { StyledBox, StyledButton, StyledNavLink, StyledSideBar } from "./styled";

export const DesktopMenu: FC = () => {
  return (
    <StyledBox data-testid="desktop-menu">
      <StyledNavLink to="/inicio">
        <StyledButton>Página Inicial</StyledButton>
      </StyledNavLink>
      <StyledSideBar component="div" />
      <StyledNavLink to="/clientes">
        <StyledButton>Clientes</StyledButton>
      </StyledNavLink>
    </StyledBox>
  );
};
