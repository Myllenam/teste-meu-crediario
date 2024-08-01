import { Box, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)`
  width:100%;
  height:86vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;
export const StyledContainerLoading = styled(Box)`
  width:100%;
  height:86vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
export const StyledTableContainer = styled(Box)`
  width:98%;
  padding-top:40px;
`;

export const StyledTypographyName = styled(Typography)`
padding:0 0 5px 10px;;
  color: ${({ theme }) => theme.colors.grayDarkest};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  ${({ theme }) => theme.breakpoints.down(520)} {
    font-size: 13px;
  }
`;


