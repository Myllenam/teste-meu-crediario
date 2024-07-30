import { FC } from "react";
import { IconButton} from "@mui/material";
import { NavLink } from "react-router-dom";

import logo from "src/assets/meuCrediarioLogo.png";
import {
  StyledAppBar,
  StyledContainerImage,
  StyledFontAwesomeIcon,
  StyledImage,
  StyledToolBar,
} from "./styled";
import { DesktopMenu } from "./components/DesktopMenu";
import { IMenuProps } from "src/models";





export const Menu: FC<IMenuProps> = ({onShowSideMenu,isUpSm}) => {
  return (
    <StyledAppBar data-testid="menu">
      <StyledToolBar>
        {!isUpSm && <IconButton onClick={onShowSideMenu}><StyledFontAwesomeIcon icon="bars" /></IconButton>}
        <StyledContainerImage>
          <NavLink to="/inicio">
            <StyledImage component="img" src={logo} />
          </NavLink>
        </StyledContainerImage>
        {isUpSm && <DesktopMenu />}
      </StyledToolBar>
    </StyledAppBar>
  );
};
