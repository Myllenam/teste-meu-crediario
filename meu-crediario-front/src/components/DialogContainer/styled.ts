import { Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-container > div {
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.palette.success.main};
  }
`;
