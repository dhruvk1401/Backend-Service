import { Document, Schema, model } from "mongoose";

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

export interface IOrder extends Order, Document {}

const orderSchema = new Schema<IOrder>({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  orderId: { type: String },
  amount: { type: Number },
  status: { type: String },
});

export const OrderModel = model<IOrder>("orders", orderSchema);
