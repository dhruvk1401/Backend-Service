import { IOrder, Order } from "../models/order";
import { BaseService } from "./base.service";
export declare class OrderService extends BaseService<IOrder> {
    private redis;
    constructor();
    createOrder(data: Order): Promise<IOrder>;
    paymentStatus(id: string): Promise<Order | null>;
    getByOrderId(id: string): Promise<Order | null>;
}
//# sourceMappingURL=order.service.d.ts.map