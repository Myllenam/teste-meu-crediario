import dataMock from "../../../historicodeMaria.json"
import { IContractsResponse } from "../models/contract";


export const pagination = (page: number, limit: number): IContractsResponse => {
  const totalItems = dataMock.contratos.length;
  const totalPages = Math.ceil(totalItems / limit);
  const offset = (Number(page) - 1) * limit;

  if (page < 1 || page > totalPages) {
    return {
      totalPages: totalPages,
      data: []
    };
  }

  const paginatedData = dataMock.contratos.slice(offset, offset + Number(limit));

  return {
    totalPages: totalPages,
    data: paginatedData
  };
};