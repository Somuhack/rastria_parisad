import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      unique: true,
      index: true,
    },

    admissionNo: {
      type: String,
      unique: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    motherName: {
      type: String,
      required: true,
    },
    admissionId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Admission",
},

    dob: Date,

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    mobile: String,

    email: String,

    address: String,

    photo: String,

    centre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Centre",
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    admissionDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Active", "Completed", "Dropped"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Student", studentSchema);