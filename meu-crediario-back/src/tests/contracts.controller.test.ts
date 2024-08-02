import { Request, Response } from "express";

import ContractsController from "../controllers/contracts.controller";
import { ContractQuery } from "../models/contract-query";
import { IContracts } from "../models/contract";
import teste from "./mockContract.json"

const contractsData = teste

describe('ContractsController', () => {
  let contractsController: ContractsController;

  beforeEach(() => {
    contractsController = new ContractsController();
  });

  it("should handle get request", () => {
    const req = {
      query: {
        page: 1,
        limit: 10,
      }
    } as unknown as Request<{}, {}, {}, ContractQuery>;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    contractsController.get(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  it("should handle post request", () => {
    const req = {
      body: contractsData,
    } as unknown as Request<{}, {}, IContracts>;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    contractsController.post(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  it("should handle post request and return expected response", () => {
    const req = {
      body: contractsData,
    } as unknown as Request<{}, {}, IContracts>;
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    contractsController.post(req, res);

    expect(res.json).toHaveBeenCalledWith({ "mes": "06/2019", "total_aberto": 1790.36 });
  });


});