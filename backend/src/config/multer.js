import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 300 * 1024 * 1024, // 300MB
  },
});