import PDFDocument from "pdfkit";
import QRCode from "qrcode";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// =====================================================
// PATH
// =====================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(
  __dirname,
  "../../assets/certificate-template.png",
);

const getLocalUploadPath = (photo) => {

  if (!photo) {
    return null;
  }

  const cleanPath =
    photo.replace(/^\/+/, "");

  return path.resolve(
    cleanPath
  );
};

// =====================================================
// HELPERS
// =====================================================

const safe = (value) => {
  if (value === undefined || value === null || value === "") {
    return "";
  }

  return String(value);
};

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-GB");
};

// =====================================================
// CENTER TEXT
// =====================================================

const centerText = (
  doc,
  text,
  y,
  fontSize = 14,
  font = "Times-Italic",
  options = {},
) => {
  doc
    .font(font)
    .fontSize(fontSize)
    .fillColor(options.color || "#000000")
    .text(safe(text), options.x ?? 150, y, {
      width: options.width ?? doc.page.width - 300,
      align: "center",
      lineBreak: false,
    });
};

// =====================================================
// GENERATE CERTIFICATE PDF
// =====================================================

export const generateCertificatePDF = async (certificate, res) => {
  // ===================================================
  // CHECK TEMPLATE
  // ===================================================

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Certificate template not found: ${templatePath}`);
  }

  // ===================================================
  // CREATE PDF
  // ===================================================

  const doc = new PDFDocument({
    size: "A4",
    layout: "landscape",
    margin: 0,
    autoFirstPage: true,
  });

  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;

  // ===================================================
  // RESPONSE
  // ===================================================

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader(
    "Content-Disposition",
    `inline; filename="certificate-${certificate.certificateNo}.pdf"`,
  );

  doc.pipe(res);

  // ===================================================
  // TEMPLATE
  // ===================================================

  doc.image(templatePath, 0, 0, {
    width: pageWidth,
    height: pageHeight,
  });

  // ===================================================
  // DATABASE DATA
  // ===================================================

  const student = certificate.student || {};

  const course = certificate.course || {};

  const centre = certificate.centre || {};

  // ===================================================
  // STUDENT NAME
  // ===================================================

  const studentName = [student.firstName, student.middleName, student.lastName]
    .filter(Boolean)
    .join(" ")
    .toUpperCase();

  // ===================================================
  // FATHER NAME
  // ===================================================

  const fatherName = safe(student.fatherName).toUpperCase();

  // ===================================================
  // CENTRE NAME
  // ===================================================

  const centreName = safe(centre.centreName);

  // ===================================================
  // COURSE
  // ===================================================



  // ===================================================
  // CENTRE ADDRESS
  // ===================================================

  const centreAddress = [
    centre.address,
    centre.city,
    centre.district,
    centre.state,
  ]
    .filter(Boolean)
    .join(", ");

  // ===================================================
  // TOP LEFT
  // ===================================================

  doc
    .font("Times-Bold")
    .fontSize(11)
    
    .fillColor("#9E1B32");

  // Centre Code

  doc.text(safe(centre.centreCode), 195, 32, {
    width: 150,
    align: "left",
  });

  // Index No.

  doc.text(safe(centre.indexNo || centre.centreCode), 175, 47, {
    width: 150,
    align: "left",
  });

  // Session

  doc.text(safe(certificate.session), 162, 63, {
    width: 150,
    align: "left",
  });

  // ===================================================
  // TOP RIGHT
  // ===================================================

  doc.text(safe(certificate.registrationNo), 655, 32, {
    width: 100,
    align: "left",
  });

  doc.text(safe(certificate.rollNo), 675, 48, {
    width: 100,
    align: "left",
  });

  // ===================================================
  // IMPORTANT
  // ===================================================
  //
  // DO NOT DRAW:
  //
  // CERTIFICATE
  // PRARAMBHIK PART-2
  // This is to Certify that
  // Appeared from
  //
  // because these already exist
  // inside certificate-template.png
  //
  // ===================================================

  // ===================================================
  // STUDENT NAME
  // ===================================================

  centerText(doc, studentName, 275, 17, "Times-BoldItalic", {
    x: 200,
    width: 440,
  });

  // ===================================================
  // FATHER NAME
  // ===================================================

  // centerText(doc, `S/O / D/O ${fatherName}`, 300, 12, "Times-BoldItalic", {
  //   x: 230,
  //   width: 380,
  // });

  const studentPhotoPath =
  getLocalUploadPath(student.photo);
  // ===================================================
// STUDENT PHOTO
// ===================================================

if (
  studentPhotoPath &&
  fs.existsSync(studentPhotoPath)
) {

  try {

    doc.image(
      studentPhotoPath,

      // X
      700,

      // Y
      220,

      {
        width: 75,
        height: 95,
        fit: [75, 95],
        align: "center",
        valign: "center",
      }
    );

  } catch (error) {

    console.error(
      "Student photo error:",
      error.message
    );

  }
}
  // ===================================================
  // CENTRE NAME
  // ===================================================

  centerText(doc, centreName, 335, 8 , "Times-BoldItalic", {
    x: 210,
    width: 420,
  });

  // ===================================================
  // CENTRE ADDRESS
  // ===================================================

  centerText(doc, centreAddress, 357, 10, "Times-Italic", {
    x: 220,
    width: 400,
  });

  // ===================================================
  // EXAM YEAR
  // ===================================================
const courseName = safe(
  certificate.certificateCourse ||
  course.courseName
).toUpperCase();
  centerText(doc, safe(certificate.examYear), 387, 12, "Times-BoldItalic", {
    x: 350,
    width: 140,
  });
  

  centerText(
  doc,
  courseName,
  195,
  17,
  "Times-Bold",
  {
    x: 250,
    width: 400,
  }
);

  // ===================================================
  // SUBJECT
  // ===================================================

  centerText(
    doc,
    safe(certificate.subject).toUpperCase(),
    414,
    12,
    "Times-BoldItalic",
    {
      x: 340,
      width: 280,
    },
  );

  // ===================================================
  // DIVISION
  // ===================================================

  doc.font("Times-BoldItalic").fontSize(12).fillColor("#000000");

  doc.text(safe(certificate.division).toUpperCase(), 275, 439, {
    width: 170,
    align: "center",
  });

  // ===================================================
  // GRADE
  // ===================================================

  doc.text(safe(certificate.grade), 530, 500, {
    width: 70,  
    align: "center",
  });

  // ===================================================
  // RESULT
  // ===================================================

  doc.text(`(${safe(certificate.result)})`, 600, 439, {
    width: 100,
    align: "center",
  });

  // ===================================================
  // DATE
  // ===================================================

  doc.font("Times-Bold").fontSize(11).fillColor("#000000");

  doc.text(formatDate(certificate.issueDate), 215, pageHeight - 43, {
    width: 110,
    align: "center",
  });

  // ===================================================
  // QR CODE
  // ===================================================

  try {
    const verificationUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/verify/certificate/${certificate._id}`;

    const qrBuffer = await QRCode.toBuffer(verificationUrl, {
      width: 200,
      margin: 1,
    });

    doc.image(qrBuffer, 50, 215, {
      width: 55,
      height: 55,
    });
  } catch (error) {
    console.error("QR generation error:", error.message);
  }

  // ===================================================
  // END
  // ===================================================

  doc.end();
};
