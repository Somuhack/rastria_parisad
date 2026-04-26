import MyHome from "../pages/MyHome";
import AdmissionForm from "../pages/students/Registretion";
import CertificateVerification from "../pages/students/CertificateVerification";
import RecognitionPage from "../pages/Recongnition/Regongnition";
import AboutRPKK from "../pages/About/AboutRPKK";
import Chairmanmsg from "../pages/About/Chairmanmsg";
import Linkage from "../pages/About/Linkage";
import AboutLayout from "../pages/About/AboutLayout";
import Course from "../pages/Course/Course";

export const routes = [
  {
    label: "HOME",
    path: "/",
    element: MyHome,
  },
  {
    label: "ADMISSION FORM",
    path: "/admission",
    element: AdmissionForm,
  },
  {
    label: "CERTIFICATE VERIFICATIONS",
    path: "/certificate-verifications",
    element: CertificateVerification,
  },
  {
    label: "ABOUT RPKK",
    path: "/about",
    key: "about",
    element: AboutLayout, // parent layout/page
    children: [
      {
        label: "ABOUT RPKK",
        path: "/about/rpkk", // ✅ relative path
        element: AboutRPKK,
      },
      {
        label: "CHAIRMAN MESSAGE",
        path: "/about/chairman-message", // ✅ fixed spelling + no space
        element: Chairmanmsg,
      },
      {
        label: "LINKAGE",
        path: "/about/linkage",
        element: Linkage,
      },
    ],
  },
  {
    label: "COURSE",
    path: "/courses", // ✅ fixed spelling + lowercase
    element: Course,
  },
  {
    label: "RECOGNITION",
    path: "/recognition", // ✅ fixed spelling + lowercase
    element: RecognitionPage,
  },
];