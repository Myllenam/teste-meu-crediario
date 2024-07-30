import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, AppBar, Toolbar, Box } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledToolBar = styled(Toolbar)`
  ${({ theme }) => theme.breakpoints.down(200)} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
export const StyledContainerImage = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledImage = styled(Box)<{ src: string }>`
  width: 168px;
  ${({ theme }) => theme.breakpoints.down(300)} {
    width: 110px;
  }
  ${({ theme }) => theme.breakpoints.down(120)} {
    width: 45px;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 26px;
`;
