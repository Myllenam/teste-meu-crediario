
export interface IContractsResponse {
    contratos: IContract[];
}

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