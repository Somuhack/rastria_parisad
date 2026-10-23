import { createAdmission } from "./admission.service.js";

export const createAdmissionController = async (
  req,
  res
) => {

  try {

    const data = {
      ...req.body,

      photo: req.file
        ? `/uploads/students/${req.file.filename}`
        : null,
    };


    const result =
      await createAdmission(data);


    return res.status(201).json({
      success: true,
      message: "Admission created successfully",
      data: result,
    });

  } catch (error) {

    console.error(
      "Create admission error:",
      error
    );


    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};