import express from "express";
import {
  createFeeController,
  addPaymentController,
} from "./fee.controller.js";

const router = express.Router();

router.post("/", createFeeController);

router.post("/payment/:feeId", addPaymentController);

export default router;