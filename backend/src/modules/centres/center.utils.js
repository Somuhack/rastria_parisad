export const generateCentreCode = (seq) => {
  return `ICCE-CEN-${String(seq).padStart(4, "0")}`;
};