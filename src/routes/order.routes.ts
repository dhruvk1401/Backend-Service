import Router from "express";
import { OrderController } from "../controllers/order.controller";

const router = Router();
const controller = new OrderController();

router.post("/order/create", controller.createOrder);
router.get("/order/:id", controller.getOrderId);
router.get("/payment/checkout", controller.getPaymentStatus);
router.get("/orders", controller.getAll);

export default router;
