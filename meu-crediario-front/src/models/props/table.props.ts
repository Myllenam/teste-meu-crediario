import {  type ReactNode } from "react";
import { IDataTableColumns } from "./table-data.props";


export interface ITableProps {
  children: ReactNode;
  columns: IDataTableColumns[];

}