import express from "express";
import { dashboardHome } from "../controllers/admin.dashboard.controller.js";
// import { protectAdmin } from "../middleware/adminAuth.js";

const router = express.Router();

// router.use(protectAdmin);

router.get("/dashboard", dashboardHome);

export default router;