import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import studentRoutes from "./modules/students/index.js";
import admissionsRoutes from "./modules/admissions/index.js";
import centerRoutes from "./modules/centres/index.js";
import courseRoutes from "./modules/courses/index.js";
import categoryRoutes from "./modules/courseCategories/index.js";
import certificateRoutes from "./modules/certificates/certificate.routes.js";
import feesRoute from "./modules/fees/index.js";

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(cookieParser());
app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/students", studentRoutes);
app.use("/api/admissions", admissionsRoutes);
app.use("/api/centres", centerRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/fees", feesRoute);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ICCE Backend Running",
  });
});

export default app;
