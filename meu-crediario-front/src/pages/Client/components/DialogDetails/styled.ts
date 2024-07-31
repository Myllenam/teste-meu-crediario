import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Box } from "@mui/material";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 20px;
`;

export const StyledDialogContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 600px;
  max-height: 600px;
  max-width: 100%;
  width: 674px;
  /* overflow: hidden; */
`;