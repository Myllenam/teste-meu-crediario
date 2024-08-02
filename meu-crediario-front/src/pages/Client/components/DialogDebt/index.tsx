import  { FC } from "react";
import { DialogContainer } from "src/components/DialogContainer";

import { StyledFontAwesomeIcon } from "src/components/Menu/styled";
import { StyledBox, StyledDialogContainer, StyledText, StyledTitle } from "./styled";
import { IHighestDebtResponse } from "src/models";
import { formatMoneyValue } from "src/utils";

export const DialogDebt: FC<{ onClose: () => void; open: boolean, debtData:IHighestDebtResponse|null}> = ({ onClose, open,debtData }) => {
  return (
    <DialogContainer
      dialogHeaderDetails={{ icon: <StyledFontAwesomeIcon icon="money-check-dollar" />, text: "Maior endividamento" }}
      onClose={onClose}
      open={open}
    >
      <StyledDialogContainer>
        <StyledBox>
        <StyledTitle>Mês :</StyledTitle>
        <StyledText>{debtData?debtData.mes:"Não encontrado"}</StyledText>
        </StyledBox>
        <StyledBox>
        <StyledTitle>Valor total :</StyledTitle>
        <StyledText>{debtData?formatMoneyValue(debtData.total_aberto):"Não encontrado"}</StyledText>
        </StyledBox>
      </StyledDialogContainer>
    </DialogContainer>
  );
};
