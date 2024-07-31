import { FC } from "react";
import { IconButton } from "@mui/material";

import { TableData } from "src/components/TableData";
import { DataTableCell } from "src/components/TableData/components/TableCell";
import { StyledFontAwesomeIcon } from "./styled";

const columns = [
  { headerName: "Detalhes" },
  { headerName: "Contrato" },
  { headerName: "Valor Entrada" },
  { headerName: "Valor Financiado" },
  { headerName: "Valor Total" },
  { headerName: "Data" },
];
export const TableContent: FC<{ onOpenDialog: () => void }> = ({ onOpenDialog }) => {
  return (
    <TableData columns={columns}>
      <DataTableCell isComponent={true}>
        <IconButton onClick={onOpenDialog}>
          <StyledFontAwesomeIcon icon="search-plus" />
        </IconButton>
      </DataTableCell>
      <DataTableCell>0480001240004830000001669920170504</DataTableCell>
      <DataTableCell>R$ 15,00</DataTableCell>
      <DataTableCell>R$ 0,00</DataTableCell>
      <DataTableCell>R$ 20.000,20</DataTableCell>
      <DataTableCell>05/04/2017</DataTableCell>
    </TableData>
  );
};
