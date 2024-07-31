import { type FC } from "react";

import {
 
  StyledDialogHeader,
  StyledFontAwesomeIcon,
  StyledIconButton,
  StyledTitleContainer,
  StyledTitleTypography,
} from "./styled";
import { IDialogHeader } from "src/models";


export const DialogHeader: FC<{ onClose: () => void; details: IDialogHeader }> = ({
  onClose,
  details,
}) => {
  return (
    <StyledDialogHeader data-testid="dialog-header">
      <StyledIconButton data-testid="close-dialog-button" onClick={onClose}>
        <StyledFontAwesomeIcon icon="close" />
      </StyledIconButton>
      <StyledTitleContainer>
        {details.icon}
        <StyledTitleTypography>{details.text}</StyledTitleTypography>
      </StyledTitleContainer>
    </StyledDialogHeader>
  );
};