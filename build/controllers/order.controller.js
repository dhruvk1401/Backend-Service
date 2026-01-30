"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const base_controller_1 = require("./base.controller");
const order_service_1 = require("../services/order.service");
const service = new order_service_1.OrderService();
class OrderController extends base_controller_1.BaseController {
    service;
    constructor() {
        super(service);
        this.service = service;
    }
    getOrderId = async (req, res) => {
        try {
            const { id } = req.params;
            const order = (await this.service.getByOrderId(id));
            const response = {
                userId: order.userId,
                products: order.products,
                orderId: order.orderId,
                amount: order.amount || 500,
                status: order.status || "Pending",
            };
            res.send(response);
        }
        catch (error) {
            throw error;
        }
    };
    getPaymentStatus = async (req, res) => {
        try {
            const status = await this.service.paymentStatus(req.body.id);
            const response = {
                paymentStatus: status?.status,
            };
            res.send(response);
        }
        catch (error) {
            throw error;
        }
    };
    createOrder = async (req, res) => {
        try {
            const create = await this.service.createOrder(req.body);
            res.send(create);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    };
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map