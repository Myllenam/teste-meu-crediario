import { type FC } from "react";

import { type ITableDataProps } from "src/models";
import { Table } from "./components/Table";
import {
  StyledBorderContaiener,
  StyledContainer,
  StyledContainerTable,
  StyledTableContainer,
} from "./styled";

export const TableData: FC<ITableDataProps> = ({ columns, children }) => {
  return (
    <StyledContainer data-testid="data-table-component">
      <StyledBorderContaiener>
        <StyledContainerTable>
          <StyledTableContainer>
            <Table columns={columns}>{children}</Table>
          </StyledTableContainer>
        </StyledContainerTable>
      </StyledBorderContaiener>
    </StyledContainer>
  );
};
