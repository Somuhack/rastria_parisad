import MyHome from "../pages/MyHome";
import AdmissionForm from "../pages/students/Registretion";
import CertificateVerification from "../pages/students/CertificateVerification";
import AboutICCE from "../pages/students/About/About";
import RecognitionPage from "../pages/Recongnition/Regongnition";

export const routes = [
  {
    label: "HOME",
    path: "/",
    element: MyHome,
  },
  {
    label: "ADDMISSION FORM",
    path: "/addmission",
    element: AdmissionForm,
  },
  {
    label: "CERTIFICATE VERFICATIONS",
    path: "/certificate-verifications",
    element: CertificateVerification,
  },
  {
    label: "ABOUT",
    path: "/about",
    element: AboutICCE,
  },
  {
    path: "/RECONIZATION",
    element: RecognitionPage,
  },
];
