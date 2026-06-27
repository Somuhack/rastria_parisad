import Fee from "./fee.model.js";
import Payment from "./payment.model.js";

export const createFeeAccount = async (studentId, courseId, totalFee) => {
  const fee = await Fee.create({
    student: studentId,
    course: courseId,
    totalFee,
    dueAmount: totalFee,
  });

  return fee;
};
export const addPayment = async (feeId, data) => {
  const fee = await Fee.findById(feeId);

  if (!fee) throw new Error("Fee not found");

  fee.paidAmount += data.amount;
  fee.dueAmount = fee.totalFee - fee.paidAmount;

  if (fee.dueAmount <= 0) {
    fee.status = "Paid";
    fee.dueAmount = 0;
  } else {
    fee.status = "Partial";
  }

  await fee.save();

  const payment = await Payment.create({
    fee: feeId,
    student: fee.student,
    amount: data.amount,
    method: data.method,
    transactionId: data.transactionId,
    receiptNo: `REC-${Date.now()}`,
  });

  return { fee, payment };
};