import express from "express";
import {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
} from "../controllers/feedback.controller.js";
import { upload } from "../config/multer.js";
const router = express.Router();

router.post(
  "/",
  upload.single("report"), // IMPORTANT
  createFeedback
);

// admin routes
router.get("/", getAllFeedback);
router.get("/:id", getFeedbackById);

export default router;