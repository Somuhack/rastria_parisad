import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    documentType: {
      type: String,
      enum: [
        "Photo",
        "Signature",
        "Aadhaar",
        "Marksheet",
        "Birth Certificate",
        "Transfer Certificate",
      ],
    },

    fileUrl: String,

    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("StudentDocument", schema);