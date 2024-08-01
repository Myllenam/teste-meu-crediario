import dataMock from "../mockData/historicodeMaria.json"

export interface IHighestDebtResponse {
    mes: string;
    total_aberto: number;
}

const teste = {
    "contratos": [
        {
            "parcelas": [
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-06-22",
                    "dataultimopagamento": "2019-06-10",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-07-22",
                    "dataultimopagamento": "2019-07-10",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-08-22",
                    "dataultimopagamento": "2019-08-10",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-09-22",
                    "dataultimopagamento": "2019-09-11",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-10-22",
                    "dataultimopagamento": "2019-10-04",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-11-22",
                    "dataultimopagamento": "2019-11-07",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2019-12-22",
                    "dataultimopagamento": "2019-12-03",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2020-01-22",
                    "dataultimopagamento": "2020-01-10",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2020-02-22",
                    "dataultimopagamento": "2020-02-12",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2020-03-22",
                    "dataultimopagamento": "2020-03-17",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2020-04-22",
                    "dataultimopagamento": "2020-03-17",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                },
                {
                    "valorvencimento": 148.78,
                    "datavencimento": "2020-05-22",
                    "dataultimopagamento": "2020-03-17",
                    "totalpago": 148.78,
                    "capitalaberto": 0
                }
            ],
            "contrato": "0480000000000000000001669920190508",
            "data": "2019-05-08",
            "valortotal": 1785.36,
            "valorentrada": 0,
            "valorfinanciado": 1785.36
        }, {
            "parcelas": [
                {
                    "valorvencimento": 5.0,
                    "datavencimento": "2019-05-18",
                    "dataultimopagamento": "2019-05-19",
                    "totalpago": 5.0,
                    "capitalaberto": 0
                },


            ],
            "contrato": "0480001240004830000001669920170504",
            "data": "2019-05-04",
            "valortotal": 10.0,
            "valorentrada": 0,
            "valorfinanciado": 10.0
        }]
};



function extrairAnoEMes(data: string): string {
    const [ano, mes] = data.split('-');
    return `${mes}/${ano}`;
}

function encontrarMaiorTotalAberto(resultados: IHighestDebtResponse[]): IHighestDebtResponse | null {
    if (resultados.length === 0) {
        return null;
    }

    return resultados.reduce((max, resultado) => {
        return resultado.total_aberto > max.total_aberto ? resultado : max;
    });
}
export const highestDebt = (): IHighestDebtResponse | null => {
    const totaisPorMes = new Map<string, number>();

    dataMock.contratos.forEach(({ parcelas, valortotal }) => {
        let valorAberto = valortotal; // Inicialmente o valor total do contrato

        parcelas.forEach((parcela, index) => {
            const { datavencimento } = parcela;
            const mesAno = extrairAnoEMes(datavencimento);

            if (index === 0) {
                totaisPorMes.set(mesAno, (totaisPorMes.get(mesAno) || 0) + valorAberto);
            } else {
                valorAberto -= parcela.valorvencimento;

                totaisPorMes.set(mesAno, (totaisPorMes.get(mesAno) || 0) + valorAberto);
            }
        });
    });

    const resultados: IHighestDebtResponse[] = [];
    totaisPorMes.forEach((totalAberto, mesAno) => {
        resultados.push({ mes: mesAno, total_aberto: totalAberto });
    });
    const maiorTotalAberto = encontrarMaiorTotalAberto(resultados);
    return maiorTotalAberto;
}