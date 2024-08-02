import { styled, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 55px 5px 5px 5px;
`;

export const StyledButtonText = styled(Typography)`
  text-transform: none;
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayDarkest};
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 16px;
  }
  ${({ theme }) => theme.breakpoints.down(80)} {
    font-size: 10px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  padding: 8px 20px 8px 20px;
  width: 202px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  &:active,
  &.active {
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 4px;

    p {
      color: ${({ theme }) => theme.colors.white};
    }
    path {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.down(170)} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.grayDarkest};
  font-size: 20px;
`;
