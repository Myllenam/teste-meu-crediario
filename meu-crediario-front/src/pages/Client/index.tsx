import { type FC, useState } from "react";
import { CircularProgress } from "@mui/material";

import { Pagination } from "src/components";
import {
  StyledContainer,
  StyledContainerLoading,
  StyledTableContainer,
  StyledTypographyName,
} from "./styled";
import { TableContent } from "./components/TableContent";
import { DebtButton } from "./components/DebtButton";
import { DialogDetails } from "./components/DialogDetails";
import { DialogDebt } from "./components/DialogDebt";
import { useGetContracts, usePostDebt } from "src/hooks";
import { type IQuota } from "src/models";

export const Component: FC = () => {
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [debtDialog, setDebtDialog] = useState(false);
  const [dialogQuotaData, setDialogQuotaData] = useState<IQuota[] | []>([]);
  const { data, loading } = useGetContracts(page, 10);
  const { loadingDebt, debtData, postData } = usePostDebt();

  // Em um projeto real eu aplicaria redux ou o context do react para gerenciar os estados

  const onOpenDialog = (details: IQuota[]): void => {
    setDialog(true);
    setDialogQuotaData(details);
  };
  const onCloseDialog = (): void => {
    setDialog(false);
  };

  const onOpenDebtDialog = (): void => {
    setDebtDialog(true);
    postData();
  };
  const onCloseDebtDialog = (): void => {
    setDebtDialog(false);
  };

  return (
    <>
      {loading || loadingDebt ? (
        <StyledContainerLoading data-testid="client">
          <CircularProgress />
        </StyledContainerLoading>
      ) : (
        <StyledContainer data-testid="client">
          <DialogDetails onClose={onCloseDialog} open={dialog} quotaData={dialogQuotaData} />
          <DialogDebt onClose={onCloseDebtDialog} open={debtDialog} debtData={debtData} />
          <StyledTableContainer>
            <StyledTypographyName>Maria Fulana:</StyledTypographyName>
            <DebtButton onOpenDialog={onOpenDebtDialog} />
            <TableContent onOpenDialog={onOpenDialog} data={data?.data} />
          </StyledTableContainer>
          <Pagination
            page={page}
            totalPages={data?.totalPages || 1}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </StyledContainer>
      )}
    </>
  );
};
