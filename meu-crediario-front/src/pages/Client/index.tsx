import { FC, useState } from "react";

import { Pagination } from "src/components";
import { StyledContainer, StyledTableContainer,  StyledTypographyName } from "./styled";
import { TableContent } from "./components/TableContent";
import { DebtButton } from "./components/DebtButton";
import { DialogDetails } from "./components/DialogDetails";
import { DialogDebt } from "./components/DialogDebt";

export const Component: FC = () => {
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [debtDialog, setDebtDialog] = useState(false);
  console.log(dialog)
  const onOpenDialog = ()=>{
    setDialog(true)
  }
  const onCloseDialog = ()=>{
    setDialog(false)
  }

  const onOpenDebtDialog = ()=>{
    setDebtDialog(true)
  }
  const onCloseDebtDialog = ()=>{
    setDebtDialog(false)
  }
  
  return (
    <StyledContainer>
      <DialogDetails onClose={onCloseDialog} open={dialog}/>
      <DialogDebt onClose={onCloseDebtDialog} open={debtDialog}/>
      <StyledTableContainer>
      <StyledTypographyName>Maria Fulana:</StyledTypographyName>
      <DebtButton onOpenDialog={onOpenDebtDialog}/>
        <TableContent onOpenDialog={onOpenDialog}/>
      </StyledTableContainer>
      <Pagination
        page={page}
        totalPages={10}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </StyledContainer>
  );
};
