import { Request, Response } from 'express';

import ContractsController from "../controllers/contracts.controller";
import { ContractQuery } from "../models/contract-query";
import { IContract, IContracts } from "../models/contract";
import contratos from "./mockContract.json"


describe('ContractsController', () => {
  let contractsController: ContractsController;

  beforeEach(() => {
    contractsController = new ContractsController();
  });

  it('should handle get request', () => {
    const req = {
        query:{
            page:1,
            limit:10,
        }
    } as unknown as Request<{}, {}, {}, ContractQuery>;

    const res = {
      send: jest.fn(),
    } as unknown as Response;

    contractsController.get(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  it('should handle post request', () => {
   
    const req = {
      body: {
      
      }
    } as Request<{}, {}, IContracts>;
    const res = {
      send: jest.fn(),
    } as unknown as Response;

    contractsController.post(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});