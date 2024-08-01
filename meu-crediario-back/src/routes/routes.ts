import ContractsController from "../controllers/contracts.controller";


export default (app: any) => {

  const contractsController = new ContractsController();

  app.get("/contracts", contractsController.get)

  app.post("/debt", contractsController.post);

};

