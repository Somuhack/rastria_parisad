// student.utils.js
import { getNextSequence } from "../counter/counter.service.js";
export const generateStudentId = async() => {
  const year = new Date().getFullYear();
  const studentSeq = await getNextSequence("student");  
  return `ICCE${year}${String(studentSeq).padStart(5, "0")}`;
};

export const generateAdmissionNo = async() => {
    const year = new Date().getFullYear();
     const sequence = await getNextSequence("addmission");
  return `ADM${year}${String(sequence).padStart(5, "0")}`;
};
const registrationSeq = await getNextSequence("registration");



export const registrationNo = `RPKK/${year}/${String(registrationSeq).padStart(5, "0")}`;
