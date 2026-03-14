import ffmpeg from "../lib/ffmpeg.js";
import fs from "fs";

const allowedMimeTypes = [
  "audio/mpeg",
  "audio/wav",
  "video/mp4",
  "video/quicktime",
];

const MAX_FILE_SIZE = 300 * 1024 * 1024;  // 100MB
const MAX_DURATION = 20 * 60; // 20 minutes in seconds

// ✅ Validate file type + size
export function validateFile(file) {
  if (!file) {
    throw new Error("No file uploaded");
  }

  if (!allowedMimeTypes.includes(file.mimetype)) {
    throw new Error("Unsupported file format");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File exceeds 300MB limit");
  }

  return true;
}

// ✅ Validate duration using ffprobe
export function validateDuration(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      return reject(new Error("File not found"));
    }

    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        return reject(new Error("Failed to analyze media file"));
      }

      const duration = metadata?.format?.duration;

      if (!duration) {
        return reject(new Error("Unable to determine file duration"));
      }

      if (duration > MAX_DURATION) {
        return reject(new Error("File exceeds 20 minutes limit"));
      }

      resolve(duration);
    });
  });
}