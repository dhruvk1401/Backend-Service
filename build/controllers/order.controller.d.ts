import { BaseController } from "./base.controller";
import { OrderService } from "../services/order.service";
import { Request, Response } from "express";
import { IOrder } from "../models/order";
export declare class OrderController extends BaseController<IOrder> {
    protected service: OrderService;
    constructor();
    getOrderId: (req: Request<{
        id: string;
    }>, res: Response) => Promise<void>;
    getPaymentStatus: (req: Request<{
        id: string;
    }>, res: Response) => Promise<void>;
    createOrder: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=order.controller.d.ts.map