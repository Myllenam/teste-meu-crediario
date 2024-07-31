import { type FC, forwardRef } from "react";
import { Slide } from "@mui/material";
import { type TransitionProps } from "@mui/material/transitions";

import { StyledDialog } from "./styled";
import { DialogHeader } from "./components/DialogHeader";
import { DialogContainerProps } from "src/models";


const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogContainer: FC<DialogContainerProps> = ({
  open,
  children,
  isXl,
  dialogHeaderDetails,
  onClose,
}) => {
  const size = isXl ? "xl" : "sm";
  return (
    <StyledDialog
      data-testid="table-dialog-container"
      TransitionComponent={Transition}
      open={open}
      maxWidth={size}
    >
      <DialogHeader details={dialogHeaderDetails} onClose={onClose} />
      {children}
    </StyledDialog>
  );
};
