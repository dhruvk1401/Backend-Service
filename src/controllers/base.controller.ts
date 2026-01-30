import { Request, Response } from "express";
import { BaseService } from "../services/base.service";

export class BaseController<T> {
  constructor(protected service: BaseService<T>) {
    this.service = service;
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.service.create(req.body);
      res.send(response);
    } catch (error: any) {
      res.send(error.message || 500);
    }
  };

  update = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const response = await this.service.update(id, req.body);
      res.send(response);
    } catch (error: any) {
      res.send(error.message || 500);
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const response = await this.service.delete(id);
      res.send(response);
    } catch (error: any) {
      res.send(error.message || 500);
    }
  };

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.service.getAll(req.body);
      res.send(response);
    } catch (error: any) {
      res.send(error.message || 500);
    }
  };

  getById = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const response = await this.service.getById(id);
      res.send(response);
    } catch (error: any) {
      throw error;
    }
  };
}
