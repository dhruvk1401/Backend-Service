import { Document } from "mongoose";
export interface Order {
    userId: string;
    products: {
        productId: string;
        quantity: number;
    }[];
    orderId: string;
    amount?: number;
    status?: "Pending" | "Paid" | "Failed";
}
export interface IOrder extends Order, Document {
}
export declare const OrderModel: import("mongoose").Model<IOrder, {}, {}, {}, Document<unknown, {}, IOrder, {}, import("mongoose").DefaultSchemaOptions> & IOrder & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IOrder>;
//# sourceMappingURL=order.d.ts.map