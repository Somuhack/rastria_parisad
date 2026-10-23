import express from "express";

import { createAdmissionController } from "./admission.controller.js";
import validate from "../../middleware/validate.js";
import { createAdmissionValidation } from "./admission.validation.js";
import { studentPhotoUpload } from "../../middleware/upload.middleware.js";
const router = express.Router();

router.post(
  "/",
  studentPhotoUpload.single("photo"),
  createAdmissionValidation,
  validate,
  createAdmissionController,
);

export default router;
