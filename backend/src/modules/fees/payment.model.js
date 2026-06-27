import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    fee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fee",
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },

    amount: {
      type: Number,
      required: true,
    },

    method: {
      type: String,
      enum: ["Cash", "Online", "UPI", "Bank"],
      default: "Cash",
    },

    transactionId: String,

    receiptNo: String,

    paidAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Payment", paymentSchema);