export const generateStudentId = (year, seq) => {
  return `ICCE${year}${String(seq).padStart(5, "0")}`;
};

export const generateAdmissionNo = (year, seq) => {
  return `ADM${year}${String(seq).padStart(5, "0")}`;
};