import express from "express";

import {
  createStudentController,
  getStudentsController,
  getStudentController,
  updateStudentController,
  deleteStudentController,
  uploadStudentDocumentController,
} from "./student.controller.js";

import validate from "../../middleware/validate.js";
import {
  createStudentValidation,
  updateStudentValidation,
} from "./student.validation.js";

const router = express.Router();

/**
 * Create Student (Admission)
 */
router.post(
  "/",
  createStudentValidation,
  validate,
  createStudentController
);

/**
 * Get All Students
 */
router.get("/", getStudentsController);

/**
 * Get Student By ID
 */
router.get("/:id", getStudentController);

/**
 * Update Student
 */
router.put(
  "/:id",
  updateStudentValidation,
  validate,
  updateStudentController
);

/**
 * Delete Student
 */
router.delete("/:id", deleteStudentController);

/**
 * Upload Document
 */
router.post("/document", uploadStudentDocumentController);

export default router;