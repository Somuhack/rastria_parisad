import { body } from "express-validator";

export const createStudentValidation = [
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

  body("centre")
    .notEmpty()
    .withMessage("Centre is required"),

  body("course")
    .notEmpty()
    .withMessage("Course is required"),

  body("mobile")
    .optional()
    .isMobilePhone("en-IN")
    .withMessage("Invalid mobile number"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email"),

  body("gender")
    .optional()
    .isIn(["Male", "Female", "Other"])
    .withMessage("Invalid gender"),
];

export const updateStudentValidation = [
  body("firstName")
    .optional()
    .trim()
    .notEmpty(),

  body("fatherName")
    .optional()
    .trim()
    .notEmpty(),

  body("motherName")
    .optional()
    .trim()
    .notEmpty(),

  body("mobile")
    .optional()
    .isMobilePhone("en-IN"),

  body("email")
    .optional()
    .isEmail(),
];