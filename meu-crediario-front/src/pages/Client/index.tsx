import { FC, useState } from "react";
import {  CircularProgress } from "@mui/material";

import { Pagination } from "src/components";
import { StyledContainer, StyledContainerLoading, StyledTableContainer,  StyledTypographyName } from "./styled";
import { TableContent } from "./components/TableContent";
import { DebtButton } from "./components/DebtButton";
import { DialogDetails } from "./components/DialogDetails";
import { DialogDebt } from "./components/DialogDebt";
import { useGetContracts } from "src/hooks";
import { IQuota } from "src/models";

export const Component: FC = () => {
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [debtDialog, setDebtDialog] = useState(false);
  const [dialogQuotaData, setDialogQuotaData] = useState<IQuota[]|[]>([]);
  const {data,loading}= useGetContracts(page, 10)
  const onOpenDialog = (details:IQuota[])=>{
    setDialog(true);
    setDialogQuotaData(details);
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
    <>
    {loading?<StyledContainerLoading><CircularProgress/></StyledContainerLoading>:<StyledContainer>
      <DialogDetails onClose={onCloseDialog} open={dialog} quotaData={dialogQuotaData}/>
      <DialogDebt onClose={onCloseDebtDialog} open={debtDialog}/>
      <StyledTableContainer>
      <StyledTypographyName>Maria Fulana:</StyledTypographyName>
      <DebtButton onOpenDialog={onOpenDebtDialog}/>
        <TableContent onOpenDialog={onOpenDialog} data={data?.data}/>
      </StyledTableContainer>
      <Pagination
        page={page}
        totalPages={data?.totalPages||1}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </StyledContainer>}
    </>
    
  );
};
