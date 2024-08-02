import { type FC } from "react";

import {
  StyledButton,
  StyledButtonContainer,
  StyledFontAwesomeIcon,
  StyledTypographyButton,
} from "./styled";

export const DebtButton: FC<{ onOpenDialog: () => void }> = ({ onOpenDialog }) => {
  return (
    <StyledButtonContainer onClick={onOpenDialog} data-testid="debt-button">
      <StyledButton>
        <StyledFontAwesomeIcon icon="money-check-dollar" />
        <StyledTypographyButton>Mês de maior endividamento</StyledTypographyButton>
      </StyledButton>
    </StyledButtonContainer>
  );
};
