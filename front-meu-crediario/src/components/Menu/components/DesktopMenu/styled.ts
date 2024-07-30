import { styled, AppBar, Toolbar, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
`;

export const StyledToolBar = styled(Toolbar)``;

export const StyledImage = styled(Box)<{ src: string }>`
  width: 168px;
`;

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:16px;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayDarkest};
`;
export const StyledNavLink = styled(NavLink)`
  &:active,
  &.active {
    button {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
export const StyledSideBar = styled(Box)`
width:2px;
height:16px;
background-color: ${({ theme }) => theme.colors.grayDarkest};
 
`;