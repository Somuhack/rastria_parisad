import express from "express";

import {
  createCategoryController,
  getCategoriesController,
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "./courseCategory.controller.js";

import validate from "../../middleware/validate.js";

import {
  createCategoryValidation,
  updateCategoryValidation,
} from "./courseCategory.validation.js";

const router = express.Router();

router.post(
  "/",
  createCategoryValidation,
  validate,
  createCategoryController
);

router.get("/", getCategoriesController);

router.get("/:id", getCategoryController);

router.put(
  "/:id",
  updateCategoryValidation,
  validate,
  updateCategoryController
);

router.delete("/:id", deleteCategoryController);

export default router;