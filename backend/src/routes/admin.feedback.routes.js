import express from "express";
import {
  listFeedback,
  feedbackDetail,
  feedbackStats
} from "../controllers/admin.feedback.controller.js";

const router = express.Router();

router.get("/feedback", listFeedback);
router.get("/feedback/stats", feedbackStats);
router.get("/feedback/:id", feedbackDetail);

export default router;