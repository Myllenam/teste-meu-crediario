import { FC } from "react";
import { IconButton} from "@mui/material";
import { NavLink } from "react-router-dom";

import logo from "../../assets/meuCrediarioLogo.png";
import {
  StyledAppBar,
  StyledContainerImage,
  StyledFontAwesomeIcon,
  StyledImage,
  StyledToolBar,
} from "./styled";
import { DesktopMenu } from "./components/DesktopMenu";

export const Menu: FC<{onShowSideMenu:()=>void,  isUpSm:boolean}> = ({onShowSideMenu,isUpSm}) => {
  return (
    <StyledAppBar>
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
