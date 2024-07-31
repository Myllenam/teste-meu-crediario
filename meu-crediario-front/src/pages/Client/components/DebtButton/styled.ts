import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, styled, Typography, Button} from "@mui/material";


export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  padding-right:10px;
`;

export const StyledTypographyButton = styled(Typography)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform:none;
  ${({ theme }) => theme.breakpoints.down(520)} {
    font-size: 13px;
  }
`;
export const StyledButton = styled(Button)`
padding:10px;
background-color:${({ theme }) => theme.palette.primary.light};
:hover {
    background-color:${({ theme }) => theme.colors.primaryLightest};
  }
`;

export const StyledButtonContainer = styled(Box)`
  width:100%;
  display:flex;
  justify-content:end;
  padding:0 5px 10px 0;;
`;

