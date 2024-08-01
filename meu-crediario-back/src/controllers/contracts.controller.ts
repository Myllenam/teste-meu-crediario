import { Request, Response } from "express"

import { ContractQuery } from "../models/contract-query"
import { pagination } from "../core/pagination.core";
import { highestDebt } from "../core/highestDebt.core";
import { IContracts } from "../models/contract";
import { IHighestDebtResponse } from "../models/highest-debt.response";

export default class ContractsController {

    public get(req: Request<{}, {}, {}, ContractQuery>, res: Response): void {
        const { page, limit } = req.query;

        if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
            res.status(400).send("Bad Request: Page and limit must be positive integers.");
            return;
        }
        const data = pagination(page, limit);
        res.json(data);
    }

    public post(req: Request<{}, {}, IContracts>, res: Response): void {
        const data: IContracts | undefined = req.body;

        if (!data || !data.contratos || !Array.isArray(data.contratos)) {
            console.error("🛑 API ERROR: Invalid or missing data in request body.");
            res.status(400).send("Bad Request: Invalid or missing data");
            return;
        }

        const dataResponse: IHighestDebtResponse | null = highestDebt(data);

        if (!dataResponse) {
            res.status(404).send("No debt information found");
            return;
        }

        res.json(dataResponse);
    }
}