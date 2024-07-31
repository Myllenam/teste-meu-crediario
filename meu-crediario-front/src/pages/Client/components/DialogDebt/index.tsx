import  { FC } from "react";
import { DialogContainer } from "src/components/DialogContainer";

import { StyledFontAwesomeIcon } from "src/components/Menu/styled";
import { StyledBox, StyledDialogContainer, StyledText, StyledTitle } from "./styled";

export const DialogDebt: FC<{ onClose: () => void; open: boolean }> = ({ onClose, open }) => {
  return (
    <DialogContainer
      dialogHeaderDetails={{ icon: <StyledFontAwesomeIcon icon="money-check-dollar" />, text: "Maior endividamento" }}
      onClose={onClose}
      open={open}
    >
      <StyledDialogContainer>
        <StyledBox>
        <StyledTitle>MÊS :</StyledTitle>
        <StyledText>09/2020</StyledText>
        </StyledBox>
        <StyledBox>
        <StyledTitle>Valor total :</StyledTitle>
        <StyledText>R$ 2000,20</StyledText>
        </StyledBox>
      </StyledDialogContainer>
    </DialogContainer>
  );
};
