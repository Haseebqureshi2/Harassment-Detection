import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import adminDashboardRoutes from "./routes/admin.dashboard.routes.js";
import adminAnalysisRoutes from "./routes/admin.analysis.routes.js";
import adminFeedbackRoutes from "./routes/admin.feedback.routes.js";
import adminAuthRoutes from "./routes/admin.auth.routes.js";

const app = express();
import path from "path";
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/public", express.static("public"));
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));

app.use("/api/upload", uploadRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminDashboardRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin", adminAnalysisRoutes);
app.use("/api/admin", adminFeedbackRoutes);
app.use("/api/admin/auth", adminAuthRoutes);
export default app;