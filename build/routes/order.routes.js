"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.default)();
const controller = new order_controller_1.OrderController();
router.post("/order/create", controller.createOrder);
router.get("/order/:id", controller.getOrderId);
router.get("/payment/checkout", controller.getPaymentStatus);
router.get("/orders", controller.getAll);
exports.default = router;
//# sourceMappingURL=order.routes.js.map