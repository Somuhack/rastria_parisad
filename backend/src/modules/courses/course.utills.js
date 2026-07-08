// student.utils.js

export const generateUniqueCourseId = (courseName, duration) => {
  const uniqueId = crypto.randomUUID().split('-')[0]; // Takes a short 8-character hash
  return `RPKK_${duration}_${uniqueId}`;
};
