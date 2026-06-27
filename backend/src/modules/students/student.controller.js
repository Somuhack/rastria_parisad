import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  uploadDocument,
} from "./student.service.js";
export const uploadStudentDocumentController = async (req, res) => {
  try {
    const { studentId, type, fileUrl } = req.body;

    const student = await uploadDocument(studentId, fileUrl, type);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      message: "Document uploaded successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/**
 * Create Student
 */
export const createStudentController = async (req, res) => {
  try {
    const student = await createStudent(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All Students
 */
export const getStudentsController = async (req, res) => {
  try {
    const students = await getStudents();

    res.json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Student By ID
 */
export const getStudentController = async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update Student
 */
export const updateStudentController = async (req, res) => {
  try {
    const student = await updateStudent(req.params.id, req.body);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete Student
 */
export const deleteStudentController = async (req, res) => {
  try {
    const student = await deleteStudent(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};