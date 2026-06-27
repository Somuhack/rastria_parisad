import mongoose from "mongoose";

const centreSchema = new mongoose.Schema(
  {
    centreCode: {
      type: String,
      unique: true,
      index: true,
    },

    centreName: {
      type: String,
      required: true,
    },

    ownerName: {
      type: String,
      required: true,
    },

    email: String,
    mobile: String,

    address: String,
    city: String,
    state: String,
    pincode: String,

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Blocked"],
      default: "Pending",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    // ERP enhancement fields
    totalStudents: {
      type: Number,
      default: 0,
    },

    totalAdmissions: {
      type: Number,
      default: 0,
    },

    totalRevenue: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Centre", centreSchema);