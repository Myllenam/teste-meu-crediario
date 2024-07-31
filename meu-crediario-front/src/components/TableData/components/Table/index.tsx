import { FC } from "react";
import { TableBody, TableHead, TableRow } from "@mui/material";

import { ITableProps } from "src/models";
import {
  StyledCellTypography,
  StyledTable,
  StyledTableCell,
  StyledTableCellContent,
} from "./styled";

export const Table: FC<ITableProps> = ({ children, columns }) => {
  return (
    <StyledTable data-testid="table-component">
      <TableHead>
        <TableRow>
          {columns.map((item) => (
            <StyledTableCell key={item.headerName} align="center" width={item.width || "auto"}>
              <StyledTableCellContent>
                <StyledCellTypography>{item.headerName}</StyledCellTypography>
              </StyledTableCellContent>
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </StyledTable>
  );
};
