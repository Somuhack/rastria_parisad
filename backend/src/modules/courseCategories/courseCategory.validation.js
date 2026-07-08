import { body } from "express-validator";

export const createCategoryValidation = [
  body("categoryName")
    .trim()
    .notEmpty()
    .withMessage("Category name is required"),
];

export const updateCategoryValidation = [
  body("categoryName")
    .optional()
    .trim(),
];