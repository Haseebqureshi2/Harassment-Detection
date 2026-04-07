import express from "express";
import {
  listAnalyses,
  analysisDetail
} from "../controllers/admin.analysis.controller.js";

const router = express.Router();

// router.use(protectAdmin);

router.get("/analyses", listAnalyses);
router.get("/analyses/:sessionId", analysisDetail);

export default router;