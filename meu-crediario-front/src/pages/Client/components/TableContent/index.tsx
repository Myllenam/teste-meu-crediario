import { type FC } from "react";
import { IconButton, TableRow } from "@mui/material";

import { TableData } from "src/components/TableData";
import { DataTableCell } from "src/components/TableData/components/TableCell";
import { StyledFontAwesomeIcon } from "./styled";
import { type IContract, type IQuota } from "src/models";
import { formatMoneyValue, formatToLocalDate } from "src/utils";

const columns = [
  { headerName: "Parcelas" },
  { headerName: "Contrato" },
  { headerName: "Valor Entrada" },
  { headerName: "Valor Financiado" },
  { headerName: "Valor Total" },
  { headerName: "Data" },
];
export const TableContent: FC<{
  onOpenDialog: (details: IQuota[]) => void;
  data: IContract[] | undefined;
}> = ({ onOpenDialog, data }) => {
  return (
    <TableData columns={columns}>
      {data?.map((item, index) => (
        <TableRow key={index}>
          <DataTableCell isComponent={true}>
            <IconButton
              onClick={() => {
                onOpenDialog(item.parcelas);
              }}
            >
              <StyledFontAwesomeIcon icon="search-plus" />
            </IconButton>
          </DataTableCell>
          <DataTableCell>{item.contrato}</DataTableCell>
          <DataTableCell>{formatMoneyValue(item.valorentrada)}</DataTableCell>
          <DataTableCell>{formatMoneyValue(item.valorfinanciado)}</DataTableCell>
          <DataTableCell>{formatMoneyValue(item.valortotal)}</DataTableCell>
          <DataTableCell>{formatToLocalDate(item.data)}</DataTableCell>
        </TableRow>
      ))}
    </TableData>
  );
};
