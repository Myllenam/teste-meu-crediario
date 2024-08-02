import { type FC } from "react";

import { StyledContainer, StyledContainerText, StyledTypography } from "./styled";
import background from "src/assets/mulher-sorrindo-no-parque.jpg";

export const Component: FC = () => {
  return (
    <StyledContainer src={background} data-testid="home">
      <StyledContainerText>
        <StyledTypography>Sistema para gestão de crediário próprio</StyledTypography>
      </StyledContainerText>
    </StyledContainer>
  );
};
