import {  TableCell, Typography, styled } from "@mui/material";

export const StyledTableCell = styled(TableCell)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.grayLight};
  border: none;
  height: 30px;
  padding: 0 4px;
`;

export const StyledDataTableCellTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.grayDarkest};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.132px;
  line-height: 14px;
  text-align: center;
`;




