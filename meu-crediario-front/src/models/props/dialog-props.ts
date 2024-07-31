import { type ReactNode } from "react";

import { IDialogHeader } from "./dialog-header.props";

export interface DialogContainerProps {
  open: boolean;
  children: ReactNode;
  isXl?: boolean;
  onClose: () => void;
  dialogHeaderDetails: IDialogHeader;
}
