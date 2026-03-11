import fs from "fs";
import ffmpeg from "../lib/ffmpeg.js";
import path from "path";
import { openai } from "../config/openai.js";

const SUPPORTED_LANGUAGES = ["en", "fr"];
const TEMP_DIR = "src/temp/audio";

function extractPreview(audioPath) {
  return new Promise((resolve, reject) => {
    const previewPath = path.join(
      TEMP_DIR,
      `preview-${Date.now()}.wav`
    );

    ffmpeg(audioPath)
      .setStartTime(0)
      .duration(30) // only first 10 seconds
      .audioCodec("pcm_s16le")
      .audioChannels(1)
      .audioFrequency(16000)
      .format("wav")
      .output(previewPath)
      .on("end", () => resolve(previewPath))
      .on("error", reject)
      .run();
  });
}

export async function transcribeAudio(audioPath) {

  // 1️⃣ Extract preview
  const previewPath = await extractPreview(audioPath);

  // 2️⃣ Detect language quickly
 const previewResponse = await openai.audio.transcriptions.create({
  file: fs.createReadStream(previewPath),
  model: "whisper-1",
  response_format: "verbose_json"
});

fs.unlinkSync(previewPath);

const detectedLanguage = (previewResponse.language || "").toLowerCase();

const normalizedLanguage =
  detectedLanguage === "english" ? "en" :
  detectedLanguage === "french" ? "fr" :
  detectedLanguage;

if (!normalizedLanguage) {
  console.warn("Language detection failed, continuing...");
} 
else if (!SUPPORTED_LANGUAGES.includes(normalizedLanguage)) {
  throw new Error(
    `Unsupported language detected: ${detectedLanguage}. Only English and French are allowed.`
  );
}

  // 3️⃣ Full transcription only if allowed
  const response = await openai.audio.transcriptions.create({
    file: fs.createReadStream(audioPath),
    model: "whisper-1",
    response_format: "verbose_json",
    timestamp_granularities: ["segment"]
  });

  response.language = normalizedLanguage;

  return response;
}