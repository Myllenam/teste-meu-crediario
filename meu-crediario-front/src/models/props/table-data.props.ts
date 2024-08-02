import { type ReactNode } from "react";

export interface ITableDataProps {
  children: ReactNode;
  columns: IDataTableColumns[];
}

export interface IDataTableColumns {
  headerName: string;
  width?: string;
}
