import { BaseController } from "./base.controller";
import { OrderService } from "../services/order.service";
import { Request, Response } from "express";
import { IOrder, Order } from "../models/order";

const service = new OrderService();

export class OrderController extends BaseController<IOrder> {
  protected service: OrderService;
  constructor() {
    super(service);
    this.service = service;
  }

  getOrderId = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const order = (await this.service.getByOrderId(id)) as Order;
      const response: Order = {
        userId: order.userId,
        products: order.products,
        orderId: order.orderId,
        amount: order.amount || 500,
        status: order.status || "Pending",
      };
      res.send(response);
    } catch (error) {
      throw error;
    }
  };

  getPaymentStatus = async (
    req: Request<{ id: string }>,
    res: Response,
  ): Promise<void> => {
    try {
      const status = await this.service.paymentStatus(req.body.id);
      const response = {
        paymentStatus: status?.status,
      };
      res.send(response);
    } catch (error) {
      throw error;
    }
  };

  createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const create = await this.service.createOrder(req.body);
      res.send(create);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}
