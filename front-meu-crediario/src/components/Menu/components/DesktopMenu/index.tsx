import { FC } from "react";

import {
  StyledBox,
  StyledButton,
  StyledNavLink,
  StyledSideBar,
} from "./styled";

export const DesktopMenu: FC = () => {
  return (
    <StyledBox>
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
