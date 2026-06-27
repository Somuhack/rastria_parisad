import express from "express";

import { createAdmissionController } from "./admission.controller.js";
import validate from "../../middleware/validate.js";
import { createAdmissionValidation } from "./admission.validation.js";

const router = express.Router();

router.post(
  "/",
  createAdmissionValidation,
  validate,
  createAdmissionController
);

export default router;