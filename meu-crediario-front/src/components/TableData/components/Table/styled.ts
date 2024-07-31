import { Box, Table, TableCell, Typography, styled } from "@mui/material";

export const StyledTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 2px;
  min-width: 650px;
`;

export const StyledTableCell = styled(TableCell)`
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 4px 4px 0px 0px;
  border: none;
  height: 30px;
  padding: 0 4px;
`;

export const StyledTableCellContent = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledCellTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.grayDarkest};
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.154px;
  line-height: 14px;
  text-align: center;
`;
