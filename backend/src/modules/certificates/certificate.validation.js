import { body } from "express-validator";

export const createCertificateValidation = [
  body("studentId")
    .notEmpty()
    .withMessage("Student ID is required"),
];