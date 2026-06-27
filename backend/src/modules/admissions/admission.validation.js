import { body } from "express-validator";

export const createAdmissionValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required"),

  body("fatherName")
    .trim()
    .notEmpty()
    .withMessage("Father name is required"),

  body("motherName")
    .trim()
    .notEmpty()
    .withMessage("Mother name is required"),

  body("dob")
    .notEmpty()
    .withMessage("Date of birth is required")
    .isISO8601()
    .withMessage("Invalid date format"),

  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Invalid gender"),

  body("mobile")
    .notEmpty()
    .withMessage("Mobile is required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid mobile number"),

  body("centre")
    .notEmpty()
    .withMessage("Centre is required"),

  body("course")
    .notEmpty()
    .withMessage("Course is required"),

  body("fees")
    .optional()
    .isNumeric()
    .withMessage("Fees must be a number"),
];