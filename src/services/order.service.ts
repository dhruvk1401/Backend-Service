import { randomUUID } from "node:crypto";
import { IOrder, Order, OrderModel } from "../models/order";
import { BaseService } from "./base.service";
import Redis from "ioredis";

export class OrderService extends BaseService<IOrder> {
  private redis: Redis = new Redis({
    host: "localhost",
    port: 6379,
  });
  constructor() {
    super(OrderModel);
  }

  async createOrder(data: Order): Promise<IOrder> {
    try {
      const Data = {
        ...data,
        orderId: randomUUID(),
        amount: data.amount || 500,
        status: "Pending",
      };
      const response = await this.model.create(Data);
      await this.redis.set(`order:${Data.orderId}`, JSON.stringify(response));
      console.log("Redis key Set");
      return response;
    } catch (error) {
      throw error;
    }
  }

  async paymentStatus(id: string): Promise<Order | null> {
    try {
      const response = await this.model.findOne({ orderId: id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getByOrderId(id: string): Promise<Order | null> {
    try {
      const response = await this.model.findOne({ orderId: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
