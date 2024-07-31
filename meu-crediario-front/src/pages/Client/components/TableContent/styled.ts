import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material";



export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 20px;
`;