import fs from "fs";
import { openai } from "../config/openai.js";

const SUPPORTED_LANGUAGES = ["en", "fr"];

export async function transcribeAudio(audioPath) {
  const response = await openai.audio.transcriptions.create({
    file: fs.createReadStream(audioPath),
    model: "whisper-1",
    response_format: "verbose_json",
    timestamp_granularities: ["segment"]
  });

const detectedLanguage = (response.language || "").toLowerCase();

const normalizedLanguage =
  detectedLanguage === "english" ? "en" :
  detectedLanguage === "french" ? "fr" :
  detectedLanguage;

if (!SUPPORTED_LANGUAGES.includes(normalizedLanguage)) {
  throw new Error(
    `Unsupported language detected: ${detectedLanguage}. Only English and French are allowed.`
  );
}

response.language = normalizedLanguage;

  return response;
}