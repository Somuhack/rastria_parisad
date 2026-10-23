import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    certificateNo: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    student: {
      type: String,
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    centre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Centre",
      required: true,
    },

    studentId: {
      type: String,
      required: true,
    },

    admissionNo: {
      type: String,
      required: true,
    },

    registrationNo: {
      type: String,
    },

    rollNo: {
      type: String,
    },

    session: {
      type: String,
    },

    certificateTitle: {
      type: String,
      default: "CERTIFICATE",
    },

    certificateCourse: {
      type: String,
    },

    examType: {
      type: String,
      default: "Annual/Bi Annual",
    },

    examYear: {
      type: String,
    },

    subject: {
      type: String,
    },

    division: {
      type: String,
    },

    grade: {
      type: String,
    },

    result: {
      type: String,
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Issued", "Cancelled"],
      default: "Issued",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Certificate", certificateSchema);