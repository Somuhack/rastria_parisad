import express from "express";
import {
  createCertificateController,
  downloadCertificateController,
} from "./certificate.controller.js";

const router = express.Router();


// Create certificate
router.post(
  "/",
  createCertificateController
);


// Open certificate PDF
router.get(
  "/:id/pdf",
  downloadCertificateController
);


export default router;