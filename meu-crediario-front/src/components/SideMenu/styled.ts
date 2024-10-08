import { styled, SwipeableDrawer } from "@mui/material";

export const StyledDrawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    padding: 10px;
    width: 80%;
    transition: all 0.3s ease;
    overflow: hidden;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      padding: 0;
    }
  }
`;
