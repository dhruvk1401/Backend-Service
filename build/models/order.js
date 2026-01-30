"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
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
exports.OrderModel = (0, mongoose_1.model)("orders", orderSchema);
//# sourceMappingURL=order.js.map