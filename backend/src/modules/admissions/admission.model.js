import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    admissionNo: {
      type: String,
      unique: true,
    },

    studentId: {
      type: String,
      unique: true,
    },

    firstName: String,
    lastName: String,
    fatherName: String,
    motherName: String,

    dob: Date,
    gender: String,

    mobile: String,

    address: String,

    centre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Centre",
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    fees: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    admissionDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admission", admissionSchema);