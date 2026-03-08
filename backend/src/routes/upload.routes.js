import express from "express";
import multer from "multer";
import { handleUpload } from "../controllers/upload.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "src/temp/uploads/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB
});

router.post("/", upload.single("file"), handleUpload);

export default router;
