import { FC } from "react";

import { StyledDrawer } from "./styled";
import { Header } from "./components/Header";
import { BoxIcons } from "./components/BoxIcons";
import { ISideMenuProps } from "../../models";

export const SideMenu: FC<ISideMenuProps> = ({ onHideSideMenu, onShowSideMenu, open }) => {
  return (
    <StyledDrawer
      onClose={onHideSideMenu}
      onOpen={onShowSideMenu}
      open={open}
      variant="temporary"
      anchor="left"
      data-testid="side-menu"
    >
      <Header />
      <BoxIcons/>
    </StyledDrawer>
  );
};
