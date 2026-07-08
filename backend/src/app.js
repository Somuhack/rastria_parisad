import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import studentRoutes from "./modules/students/index.js";
import admissionsRoutes from "./modules/admissions/index.js";
import centerRoutes from "./modules/centres/index.js";
import courseRoutes from "./modules/courses/index.js";
import categoryRoutes from "./modules/courseCategories/index.js";
const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(cookieParser());
app.use("/api/students", studentRoutes);
app.use("/api/admissions", admissionsRoutes);
app.use("/api/cernter", admissionsRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/category", categoryRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ICCE Backend Running"
    });
});

export default app;