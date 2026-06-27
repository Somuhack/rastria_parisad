import Admission from "./admission.model.js";
import Student from "../students/student.model.js";
import { getNextSequence } from "../counter/counter.service.js";
import { generateStudentId, generateAdmissionNo } from "./admission.utils.js";

export const createAdmission = async (data) => {
  const year = new Date().getFullYear();

  const studentSeq = await getNextSequence("student");
  const admissionSeq = await getNextSequence("admission");

  const studentIdCode = generateStudentId(year, studentSeq);
  const admissionNo = generateAdmissionNo(year, admissionSeq);

  // 1. Create Admission
  const admission = await Admission.create({
    ...data,
    studentId: studentIdCode,
    admissionNo,
  });

  // 2. Create Student automatically
  const student = await Student.create({
    studentId: studentIdCode,
    admissionId: admission._id,

    firstName: data.firstName,
    lastName: data.lastName,
    fatherName: data.fatherName,
    motherName: data.motherName,

    dob: data.dob,
    gender: data.gender,
    mobile: data.mobile,
    address: data.address,

    centre: data.centre,
    course: data.course,

    admissionDate: new Date(),
  });

  return {
    admission,
    student,
  };
};