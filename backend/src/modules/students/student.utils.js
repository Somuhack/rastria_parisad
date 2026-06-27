// student.utils.js

export const generateStudentId = (year, sequence) => {
  return `ICCE${year}${String(sequence).padStart(5, "0")}`;
};

export const generateAdmissionNo = (year, sequence) => {
  return `ADM${year}${String(sequence).padStart(5, "0")}`;
};