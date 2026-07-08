import { body } from "express-validator";

export const createCourseValidation = [
  body("courseName")
    .trim()
    .notEmpty()
    .withMessage("Course name is required"),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("duration")
    .isNumeric()
    .withMessage("Duration must be a number"),

  body("durationType")
    .optional()
    .isIn(["Month", "Year"])
    .withMessage("Duration type must be Month or Year"),

  body("fees")
    .isNumeric()
    .withMessage("Fees must be a number"),
];

export const updateCourseValidation = [
  body("courseCode").optional().trim(),
  body("courseName").optional().trim(),
  body("category").optional().trim(),

  body("duration")
    .optional()
    .isNumeric()
    .withMessage("Duration must be a number"),

  body("durationType")
    .optional()
    .isIn(["Month", "Year"])
    .withMessage("Duration type must be Month or Year"),

  body("fees")
    .optional()
    .isNumeric()
    .withMessage("Fees must be a number"),
];