import dataMock from "../../../historicodeMaria.json"
import { IHighestDebtResponse } from "../models/highest-debt.response";


const getYearMonth = (date: string): string => {
    const [year, month] = date.split('-');
    return `${year}/${month}`;
}

const encontrarMaiorTotalAberto = (results: IHighestDebtResponse[]): IHighestDebtResponse | null => {
    if (results.length === 0) {
        return null;
    }

    return results.reduce((max, resultado) => {
        return resultado.total_aberto > max.total_aberto ? resultado : max;
    });
}

export const highestDebt = (): IHighestDebtResponse | null => {
    const totaisPorMes = new Map<string, number>();

    dataMock.contratos.forEach(({ parcelas, valortotal }) => {
        let valorAberto = valortotal;

        parcelas.forEach((parcela, index) => {
            const { datavencimento } = parcela;
            const yearMonth = getYearMonth(datavencimento);

            if (index === 0) {
                totaisPorMes.set(yearMonth, (totaisPorMes.get(yearMonth) || 0) + valorAberto);
            } else {
                valorAberto -= parcela.valorvencimento;

                totaisPorMes.set(yearMonth, (totaisPorMes.get(yearMonth) || 0) + valorAberto);
            }
        });
    });

    const result: IHighestDebtResponse[] = [];
    totaisPorMes.forEach((totalAberto, mesAno) => {
        result.push({ mes: mesAno, total_aberto: totalAberto });
    });
    const maiorTotalAberto = encontrarMaiorTotalAberto(result);
    return maiorTotalAberto;
}