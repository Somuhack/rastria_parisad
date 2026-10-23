import {
  createCertificate,
  getCertificateById,
} from "./certificate.service.js";

import {
  generateCertificatePDF,
} from "./certificate.pdf.js";


// =====================================================
// CREATE CERTIFICATE
// =====================================================

export const createCertificateController = async (
  req,
  res
) => {

  try {

    const {
      studentId,
      registrationNo,
      rollNo,
      session,
      certificateTitle,
      certificateCourse,
      examType,
      examYear,
      subject,
      division,
      grade,
      result,
      issueDate,
    } = req.body;


    if (!studentId) {

      return res.status(400).json({
        success: false,
        message: "studentId is required",
      });

    }


    const certificate =
      await createCertificate(
        studentId,
        {
          registrationNo,
          rollNo,
          session,
          certificateTitle,
          certificateCourse,
          examType,
          examYear,
          subject,
          division,
          grade,
          result,
          issueDate,
        }
      );


    return res.status(201).json({
      success: true,
      message: "Certificate created successfully",
      data: certificate,
    });

  } catch (error) {

    console.error(
      "Create certificate error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// =====================================================
// DOWNLOAD / OPEN PDF
// =====================================================

export const downloadCertificateController =
  async (req, res) => {

    try {

      const {
        id,
      } = req.params;


      const certificate =
        await getCertificateById(id);


      await generateCertificatePDF(
        certificate,
        res
      );

    } catch (error) {

      console.error(
        "Certificate PDF error:",
        error
      );


      if (!res.headersSent) {

        return res.status(404).json({
          success: false,
          message: error.message,
        });

      }

    }
  };