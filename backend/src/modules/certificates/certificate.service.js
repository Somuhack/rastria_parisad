import Certificate from "./certificate.model.js";
import Student from "../students/student.model.js";
import Course from "../courses/course.model.js";
import Centre from "../centres/centre.model.js";

import { getNextSequence } from "../counter/counter.service.js";


// =====================================================
// CREATE CERTIFICATE
// =====================================================

export const createCertificate = async (studentId, data = {}) => {
  const student = await Student.findById(studentId);

  if (!student) {
    throw new Error("Student not found");
  }

  const course = await Course.findById(student.course);

  if (!course) {
    throw new Error("Course not found");
  }

  const centre = await Centre.findById(student.centre);

  if (!centre) {
    throw new Error("Centre not found");
  }


  // Check existing certificate
  const existing = await Certificate.findOne({
    student: student._id,
    status: "Issued",
  });

  if (existing) {
    throw new Error("Certificate already issued for this student");
  }


  // Generate certificate sequence
  const sequence = await getNextSequence("certificate");

  const year = new Date().getFullYear();

  const certificateNo =
    `RPKK/${year}/${String(sequence).padStart(5, "0")}`;


  // Create certificate
  const certificate = await Certificate.create({
    certificateNo,

    student: student._id,

    course: course._id,

    centre: centre._id,

    studentId: student.studentId,

    admissionNo: student.admissionNo,

    registrationNo:
      data.registrationNo || student.registrationNo,

    rollNo:
      data.rollNo || student.rollNo,

    session:
      data.session || `${year}-${year + 1}`,

    certificateTitle:
      data.certificateTitle || "CERTIFICATE",

    certificateCourse:
      data.certificateCourse || course.courseName,

    examType:
      data.examType || "Annual/Bi Annual",

    examYear:
      data.examYear || `${year}-${year + 1}`,

    subject:
      data.subject || "",

    division:
      data.division || "",

    grade:
      data.grade || "",

    result:
      data.result || "",

    issueDate: data.issueDate || new Date(),

    status: "Issued",
  });


  return certificate;
};


// =====================================================
// GET CERTIFICATE
// =====================================================

export const getCertificateById = async (id) => {
  const certificate = await Certificate.findById(id)
    .populate("student")
    .populate("course")
    .populate("centre");

  if (!certificate) {
    throw new Error("Certificate not found");
  }

  return certificate;
};


// =====================================================
// GET CERTIFICATE BY STUDENT
// =====================================================

export const getCertificateByStudent = async (studentId) => {
  const certificate = await Certificate.findOne({
    student: studentId,
    status: "Issued",
  })
    .populate("student")
    .populate("course")
    .populate("centre");

  if (!certificate) {
    throw new Error("Certificate not found");
  }

  return certificate;
};