import { Box, IconButton, Typography, styled } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledDialogHeader = styled(Box)`
  align-items: center;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  top: 16px;
  ${({ theme }) => theme.breakpoints.down(450)} {
    top: 6px;
  }
`;

export const StyledTitleContainer = styled(Box)`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 34px;
  width: 100%;
`;

export const StyledTitleTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${({ theme }) => theme.breakpoints.down(450)} {
    font-size: 20px;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 20px;
`;
