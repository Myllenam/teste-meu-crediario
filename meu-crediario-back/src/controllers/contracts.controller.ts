import { Request, Response } from "express"

import { ContractQuery } from "../models/contract-query"
import { pagination } from "../core/pagination.core";
import { highestDebt } from "../core/highestDebt.core";

export default class ContractsController {

    public get(req: Request<{}, {}, {}, ContractQuery>, res: Response): void {
        const { page, limit } = req.query;
        const data = pagination(page, limit)
        res.json(data);
    }

    public post(req: Request, res: Response): void {
        const data = req.body;
        const dataResponse = highestDebt()
        if (!data) {
            console.error("🛑 API ERROR: No data received on request body.");
            res.status(400).send("Bad Request");
            return;
        }

        res.json(dataResponse);
    }
}