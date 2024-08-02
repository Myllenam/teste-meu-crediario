import { Box, TableContainer, styled } from "@mui/material";

export const StyledContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const StyledBorderContaiener = styled(Box)`
  align-items: center;
  border-radius: 8px;
  border: ${({ theme }) => `2px solid ${theme.palette.secondary.main}`};
  display: flex;
  flex-direction: column;
  min-height: 60px;
  position: relative;
  width: 100%;
`;

export const StyledContainerTable = styled(TableContainer)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledTableContainer = styled(TableContainer)``;
