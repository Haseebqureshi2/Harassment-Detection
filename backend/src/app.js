import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes.js";
import contactRoutes from "./routes/contact.routes.js"; // ✅ NEW
import feedbackRoutes from "./routes/feedback.routes.js";
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
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/contact", contactRoutes); // ✅ NEW


app.use("/api/feedback", feedbackRoutes);
export default app;