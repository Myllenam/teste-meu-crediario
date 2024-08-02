import { useState } from "react";
import { api } from "src/services/requests";
import { type IHighestDebtResponse } from "src/models";
import mockData from "../../../historicodeMaria.json";

export const usePostDebt = (): {
  loadingDebt: boolean;
  debtData: IHighestDebtResponse | null;
  postData: () => Promise<void>;
} => {
  const [loadingDebt, setloadingDebt] = useState(false);
  const [contractsData, setContractsData] = useState<IHighestDebtResponse | null>(null);

  const postData = async (): Promise<void> => {
    setloadingDebt(true);
    try {
      const { data } = await api.post<IHighestDebtResponse>("/debt", mockData);
      setContractsData(data);
      setloadingDebt(false);
    } catch (error) {
      console.error(error || "Nenhuma mensagem informada.");
    }
  };

  return { loadingDebt, debtData: contractsData, postData };
};
