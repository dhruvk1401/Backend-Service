"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const node_crypto_1 = require("node:crypto");
const order_1 = require("../models/order");
const base_service_1 = require("./base.service");
const ioredis_1 = __importDefault(require("ioredis"));
class OrderService extends base_service_1.BaseService {
    redis = new ioredis_1.default({
        host: "localhost",
        port: 6379,
    });
    constructor() {
        super(order_1.OrderModel);
    }
    async createOrder(data) {
        try {
            const Data = {
                ...data,
                orderId: (0, node_crypto_1.randomUUID)(),
                amount: data.amount || 500,
                status: "Pending",
            };
            const response = await this.model.create(Data);
            await this.redis.set(`order:${Data.orderId}`, JSON.stringify(response));
            console.log("Redis key Set");
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async paymentStatus(id) {
        try {
            const response = await this.model.findOne({ orderId: id });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async getByOrderId(id) {
        try {
            const response = await this.model.findOne({ orderId: id });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map