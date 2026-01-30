import { Router } from "express";
import order from "./order.routes";

const router = Router();

router.use(order);

export default router;
