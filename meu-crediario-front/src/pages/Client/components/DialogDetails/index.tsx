import { FC } from "react";

import { DialogContainer } from "src/components/DialogContainer";
import { StyledFontAwesomeIcon } from "src/components/Menu/styled";
import { StyledContainer, StyledDialogContainer, StyledText, StyledTextContainer, StyledTitle } from "./styled";
import { IQuota } from "src/models";
import { formatMoneyValue, formatToLocalDate } from "src/utils";

export const DialogDetails: FC<{ onClose: () => void; open: boolean; quotaData: IQuota[] }> = ({
  onClose,
  open,
  quotaData,
}) => {
  return (
    <DialogContainer
      dialogHeaderDetails={{ icon: <StyledFontAwesomeIcon icon="money-bill" />, text: "Parcelas" }}
      onClose={onClose}
      open={open}
      isXl={true}
    >
      <StyledDialogContainer>
        {quotaData?.map((item, index) => (
          <StyledContainer key={index}>
            <StyledTitle>{`Parcela ${index + 1}:`}</StyledTitle>
            <StyledTextContainer>
            <StyledText>Data do último pagamento: </StyledText>
            <StyledText>
              {item.dataultimopagamento
                ? formatToLocalDate(item.dataultimopagamento)
                : "Data não registrada"}
            </StyledText>
            </StyledTextContainer>
            <StyledTextContainer>
            <StyledText>Data de vencimento: </StyledText>
            <StyledText>
              {formatToLocalDate(item.datavencimento)}
            </StyledText>
            </StyledTextContainer>
            <StyledTextContainer>
            <StyledText>Valor do vencimento: </StyledText>
            <StyledText>
              {formatMoneyValue(item.valorvencimento)}
            </StyledText>
            </StyledTextContainer>
            <StyledTextContainer>
            <StyledText>Total pago: </StyledText>
            <StyledText>
              {formatMoneyValue(item.totalpago)}
            </StyledText>
            </StyledTextContainer>
            <StyledTextContainer>
            <StyledText>Capital aberto: </StyledText>
            <StyledText>
              {formatMoneyValue(item.capitalaberto)}
            </StyledText>
            </StyledTextContainer>
          </StyledContainer>
        ))}
      </StyledDialogContainer>
    </DialogContainer>
  );
};
