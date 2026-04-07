import express from "express";
import {
  login,
  updatePassword,
  forgot,
  reset,
} from "../controllers/admin.auth.controller.js";
import { protectAdmin } from "../middlewares/admin.auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/change-password", protectAdmin, updatePassword);
router.post("/forgot-password", forgot);
router.post("/reset-password", reset);

export default router;