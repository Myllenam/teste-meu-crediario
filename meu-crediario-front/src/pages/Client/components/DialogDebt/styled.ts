
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Box, Typography } from "@mui/material";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 20px;
`;

export const StyledDialogContainer = styled(Box)`
  padding-top:40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 600px;
  max-height: 400px;
  max-width: 100%;
  width: 674px;
  gap:40px;
`;


export const StyledBox = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
 gap:10px;
`;

export const StyledTitle = styled(Typography)`
  font-size:20px;
  font-weight:800;
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  color:${({ theme }) => theme.palette.primary.main};
`;
export const StyledText = styled(Typography)`
  font-size:18px;
  font-weight:500;
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  color:${({ theme }) => theme.colors.grayDarkest};
`;