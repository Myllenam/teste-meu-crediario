import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Box, Typography } from "@mui/material";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 20px;
`;

export const StyledDialogContainer = styled(Box)`
 padding-top:20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 600px;
  max-height: 600px;
  max-width: 100%;
  width: 674px;
  gap:25px;
`;

export const StyledTextContainer = styled(Box)`
  align-items: center;
  display: flex;
  gap:10px;
  ${({ theme }) => theme.breakpoints.down(250)} {
    flex-direction:column;
  }

`;

export const StyledContainer = styled(Box)`
text-align:center;

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
  ${({ theme }) => theme.breakpoints.down(410)} {
    font-size: 12px;
  }
`;