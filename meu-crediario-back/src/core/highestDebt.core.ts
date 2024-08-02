import { IContracts } from "../models/contract";
import { IHighestDebtResponse } from "../models/highest-debt.response";

const getYearMonth = (date: string): string => {
    const [year, month] = date.split('-');
    return `${month}/${year}`;
};

const calculateOpenValues = (valortotal: number, parcelas: { datavencimento: string, valorvencimento: number }[]): Map<string, number> => {
    const monthTotals = new Map<string, number>();
    let openValue = valortotal;

    parcelas.forEach(({ datavencimento, valorvencimento }, index) => {
        const yearMonth = getYearMonth(datavencimento);

        if (index === 0) {
            monthTotals.set(yearMonth, (monthTotals.get(yearMonth) || 0) + openValue);
        } else {
            openValue -= valorvencimento;
            monthTotals.set(yearMonth, (monthTotals.get(yearMonth) || 0) + openValue);
        }
    });

    return monthTotals;
};

const aggregateMonthTotals = (contratos: { valortotal: number, parcelas: { datavencimento: string, valorvencimento: number }[] }[]): Map<string, number> => {
    return contratos.reduce((totals, { valortotal, parcelas }) => {
        const monthTotals = calculateOpenValues(valortotal, parcelas);

        monthTotals.forEach((value, key) => {
            totals.set(key, (totals.get(key) || 0) + value);
        });

        return totals;
    }, new Map<string, number>());
};

const findHighestDebt = (results: IHighestDebtResponse[]): IHighestDebtResponse | null => {
    if (results.length === 0) {
        return null;
    }

    return results.reduce((max, resultado) => resultado.total_aberto > max.total_aberto ? resultado : max);
};

export const highestDebt = (dataMock: IContracts): IHighestDebtResponse | null => {
    const monthTotals = aggregateMonthTotals(dataMock.contratos);

    const results: IHighestDebtResponse[] = Array.from(monthTotals.entries()).map(([mes, total_aberto]) => ({
        mes,
        total_aberto
    }));

    return findHighestDebt(results);
};
