import { createFeeAccount, addPayment } from "./fee.service.js";

export const createFeeController = async (req, res) => {
  try {
    const fee = await createFeeAccount(
      req.body.studentId,
      req.body.courseId,
      req.body.totalFee
    );

    res.status(201).json({
      success: true,
      message: "Fee account created",
      data: fee,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const addPaymentController = async (req, res) => {
  try {
    const result = await addPayment(req.params.feeId, req.body);

    res.json({
      success: true,
      message: "Payment recorded",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};