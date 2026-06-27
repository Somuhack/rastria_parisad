import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Computer",
        "Vocational",
        "Technical",
        "Paramedical",
        "Distance",
        "Regular",
        "Nursing",
      ],
    },

    duration: {
      type: Number,
      required: true,
    },

    durationType: {
      type: String,
      enum: ["Month", "Year"],
      default: "Month",
    },

    fees: {
      type: Number,
      required: true,
    },

    description: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);