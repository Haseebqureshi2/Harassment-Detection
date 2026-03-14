import express from "express";
import { upload } from "../config/multer.js";
import { handleUpload } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/", upload.single("file"), handleUpload);

export default router;