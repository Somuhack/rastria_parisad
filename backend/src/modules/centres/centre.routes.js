import express from "express";

import {
  createCentreController,
  getCentresController,
  getCentreController,
  deleteCentreController,
  updateCentreStatusController,
  updateCentreController
} from "./centre.controller.js";

const router = express.Router();

router.post("/", createCentreController);

router.get("/", getCentresController);

router.get("/:id", getCentreController);

router.put("/:id", updateCentreController);

router.delete("/:id", deleteCentreController);

router.patch("/:id/status", updateCentreStatusController);

export default router;
