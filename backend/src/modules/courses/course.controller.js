import {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from "./course.service.js";
import { generateUniqueCourseId } from "./course.utills.js";
export const createCourseController = async (req, res) => {
    const {courseName,category,duration,durationType,fees,description}=req.body
    const courseCode=generateUniqueCourseId(courseName,duration)
  try {
    const course = await createCourse({courseCode,courseName,category,duration,durationType,fees,description});

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCoursesController = async (req, res) => {
  try {
    const courses = await getCourses();

    res.json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCourseController = async (req, res) => {
  try {
    const course = await getCourse(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCourseController = async (req, res) => {
  try {
    const course = await updateCourse(req.params.id, req.body);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCourseController = async (req, res) => {
  try {
    const course = await deleteCourse(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};