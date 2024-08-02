import { useEffect, useState } from "react";
import { api } from "src/services/requests";
import { type IContractsResponseData } from "src/models";

export const useGetContracts = (
  page: number,
  limit: number,
): { loading: boolean; data: IContractsResponseData | null } => {
  const [loading, setLoading] = useState(true);
  const [contractsData, setContractsData] = useState<IContractsResponseData | null>(null);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setLoading(true);
      try {
        const { data } = await api.get<IContractsResponseData>("/contracts", {
          params: {
            page,
            limit,
          },
        });
        setLoading(false);
        setContractsData(data);
      } catch (error) {
        console.error(error || "Nenhuma mensagem informada.");
        setContractsData(null);
      }
    };

    void getData();
  }, [page, limit]);

  return { loading, data: contractsData };
};
