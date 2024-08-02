import { Express } from "express";

import ContractsController from "../controllers/contracts.controller";


export default (app: Express) => {

  const contractsController = new ContractsController();

  app.get("/contracts", contractsController.get)

  app.post("/debt", contractsController.post);

};

