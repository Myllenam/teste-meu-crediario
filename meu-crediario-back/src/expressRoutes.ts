import { Request, Response } from "express";

import { pagination } from "./useCase/pagination";
import { highestDebt } from "./useCase/highestDebt";

export default (app: any) => {
  app.get("/health", (req: Request, res: Response) => {
    console.log("Health check");
    res.json("teste");
    res.send({ status: "Up'n running!" });
  });

  app.post("/calcular", (req: Request, res: Response) => {
    const data = req.body;

    if (!data) {
      console.error("🛑 API ERROR: No data received on request body.");
      res.status(400).send("Bad Request");
      return;
    }

    console.log("Data received:", data);
    res.json(data);
  });

  interface ContractQueryData{
    page:number,
    limit:number,
  }

  app.get("/contracts", (req: Request<{},{},{},ContractQueryData>, res: Response) => {
    const { page, limit } = req.query;
    const data = pagination(page, limit)
    res.json(data);
  });

  app.post("/debt", (req: Request, res: Response) => {
    const data = req.body;
    const dataResponse = highestDebt()
    if (!data) {
      console.error("🛑 API ERROR: No data received on request body.");
      res.status(400).send("Bad Request");
      return;
    }

    console.log(dataResponse);
    res.json(dataResponse);
  });
  
};

