import { type ReactNode } from "react";
import { type IDataTableColumns } from "./table-data.props";

export interface ITableProps {
  children: ReactNode;
  columns: IDataTableColumns[];
}
