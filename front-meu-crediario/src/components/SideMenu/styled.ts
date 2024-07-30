import { styled, SwipeableDrawer } from "@mui/material";

export const StyledDrawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    padding: 10px;
    width: 85%;
    transition: all 0.3s ease;
    overflow: hidden;
  }
`;
