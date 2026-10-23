import Student from "./student.model.js";

/**
 * Create Student Admission
 */
export const createStudent = async (data) => {

 const student = await Student.create({
  studentId,
  admissionNo,
  registrationNo,

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
});
  return student;
};

/**
 * Get All Students
 */
export const getStudents = async () => {
  const students = await Student.find()
    .populate("centre", "centreName centreCode")
    .populate("course", "courseName courseCode")
    .sort({ createdAt: -1 });

  return students;
};

/**
 * Get Single Student
 */
export const getStudentById = async (id) => {
  const student = await Student.findById(id)
    .populate("centre")
    .populate("course");

  return student;
};

/**
 * Update Student
 */
export const updateStudent = async (id, data) => {
  const student = await Student.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return student;
};

/**
 * Delete Student (Soft Delete recommended later)
 */
export const deleteStudent = async (id) => {
  const student = await Student.findByIdAndDelete(id);
  return student;
};

/**
 * Upload Document (simple version)
 */
export const uploadDocument = async (studentId, fileUrl, type) => {
  const student = await Student.findById(studentId);

  if (!student) return null;

  student.documents.push({
    type,
    url: fileUrl,
  });

  await student.save();

  return student;
};