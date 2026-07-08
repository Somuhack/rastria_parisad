import express from "express";

import {
  createCourseController,
  getCoursesController,
  getCourseController,
  updateCourseController,
  deleteCourseController,
} from "./course.controller.js";

import validate from "../../middleware/validate.js";

import {
  createCourseValidation,
  updateCourseValidation,
} from "./course.validation.js";

const router = express.Router();

router.post(
  "/",
  createCourseValidation,
  validate,
  createCourseController
);

router.get("/", getCoursesController);

router.get("/:id", getCourseController);

router.put(
  "/:id",
  updateCourseValidation,
  validate,
  updateCourseController
);

router.delete("/:id", deleteCourseController);

export default router;