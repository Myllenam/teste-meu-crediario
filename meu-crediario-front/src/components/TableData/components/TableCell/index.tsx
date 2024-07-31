import { type FC, type ReactNode } from "react";

import {
  StyledTableCell,
  StyledDataTableCellTypography,
} from "./styled";

export const DataTableCell: FC<{
  children?: ReactNode;
  isComponent?: boolean;
  background?: string;
}> = ({ children, isComponent,  background }) => {
  const showDefaultTypography = !isComponent 

  return (
    <StyledTableCell
      background={background}
      data-testid="data-table-cell-component"
      align="center"
    >
      {isComponent && children}
      {showDefaultTypography && (
        <StyledDataTableCellTypography>{children}</StyledDataTableCellTypography>
      )}
    </StyledTableCell>
  );
};
