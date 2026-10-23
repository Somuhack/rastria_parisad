import express from "express";

import {
  createCentreController,
  getCentresController,
  getCentreController,
  deleteCentreController,
  updateCentreStatusController,
  updateCentreController,
  updateCentreActiveStatusController,
} from "./centre.controller.js";

const router = express.Router();

router.post("/", createCentreController);

router.get("/", getCentresController);

router.get("/:id", getCentreController);

router.put("/:id", updateCentreController);

router.delete("/:id", deleteCentreController);

router.patch("/:id/status", updateCentreStatusController);
router.patch("/:id/active-status", updateCentreActiveStatusController);

export default router;
