import React, { FC } from "react";
import { DialogContainer } from "src/components/DialogContainer";
import { StyledFontAwesomeIcon } from "src/components/Menu/styled";
import { StyledDialogContainer } from "./styled";

export const DialogDetails: FC<{ onClose: () => void; open: boolean }> = ({ onClose, open }) => {
  return (
    <DialogContainer
      dialogHeaderDetails={{ icon: <StyledFontAwesomeIcon icon="money-bill" />, text: "Parcelas" }}
      onClose={onClose}
      open={open}
      isXl={true}
    >
      <StyledDialogContainer>
        <h1>oi</h1>
      </StyledDialogContainer>
    </DialogContainer>
  );
};
