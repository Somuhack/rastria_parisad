import { createAdmission } from "./admission.service.js";

export const createAdmissionController = async (req, res) => {
  try {
    const admission = await createAdmission(req.body);

    res.status(201).json({
      success: true,
      message: "Admission created successfully",
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};