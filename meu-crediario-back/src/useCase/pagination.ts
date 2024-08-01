import dataMock from "../mockData/historicodeMaria.json" 

export interface IQuota {
    valorvencimento: number;
    datavencimento: string;
    dataultimopagamento?: string;
    totalpago: number;
    capitalaberto: number;
}

export interface IContract {
    parcelas: IQuota[];
    contrato: string;
    data: string;
    valortotal: number;
    valorentrada: number;
    valorfinanciado: number;
}
interface IContractsResponse{
    totalPages:number;
    data:IContract[];
}
export const pagination =(page:number, limit:number): IContractsResponse=>{
const totalItens=dataMock.contratos.length;
const totalPages= Math.ceil(totalItens/limit);
const offset =(page-1)*limit;
const paginatedData= dataMock.contratos.slice(offset, offset+limit);

return{
    totalPages,
    data:paginatedData
}
}