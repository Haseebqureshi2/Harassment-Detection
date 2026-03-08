import ffmpeg from "../lib/ffmpeg.js";
import path from "path";
import fs from "fs";

const TEMP_DIR = "src/temp/audio";

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

export function extractAudio(inputPath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(inputPath)) {
      return reject(new Error("Input file not found"));
    }

    const outputPath = path.join(
      TEMP_DIR,
      `${Date.now()}.wav`
    );

    ffmpeg(inputPath)
      .noVideo()
      .audioCodec("pcm_s16le")     // Best for Whisper
      .audioChannels(1)           // Mono
      .audioFrequency(16000)      // 16kHz
      .format("wav")
      .output(outputPath)
      .on("end", () => resolve(outputPath))
      .on("error", (err) => {
        reject(new Error("Audio extraction failed: " + err.message));
      })
      .run();
  });
}