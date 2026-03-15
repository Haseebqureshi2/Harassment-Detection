import { validateFile, validateDuration } from "../services/fileValidation.service.js";
import { extractAudio } from "../services/ffmpeg.service.js";
import { transcribeAudio } from "../services/whisper.service.js";
import { enforceEscalation } from "../utils/escalationLogic.js";
import { normalizeTranscript } from "../utils/normalizeTranscript.js";
import { analyzeHarassment } from "../services/harassmentAnalyzer.js";
import { calculateRiskScore } from "../utils/riskScoring.js";
import { buildReport } from "../utils/buildReport.js";
import { v4 as uuidv4 } from "uuid";
import { getMaxSeverity } from "../utils/severity.js";
import { getActionLevel } from "../utils/actionLevel.js";
import { getActionHint } from "../utils/actionHint.js";
import AnalysisSession from "../models/AnalysisSession.js";
import { safeDelete } from "../utils/cleanup.js";
import fs from "fs/promises";



export async function handleUpload(req, res) {

  let file = req.file || null;
  let audioPath = null;

  try {
    file = req.file;

    if (!file) {
      throw new Error("No file uploaded");
    }

    // const context = String(req.body.context || "Unknown").trim();
    const providedContext = "Unknown";

    // ✅ Validate file
    validateFile(file);

    const audioDuration = await validateDuration(file.path);
    const roundedDuration = Math.round(audioDuration);

    const sessionId = uuidv4();
    const analyzedAt = new Date().toISOString();

    // ✅ Extract audio if video
    audioPath = file.mimetype.startsWith("video")
      ? await extractAudio(file.path)
      : file.path;

    // ✅ Transcribe
// ✅ Transcribe
const transcription = await transcribeAudio(audioPath);

if (!transcription?.segments?.length) {
  throw new Error("Transcription failed or empty audio");
}

// DEBUG: what Whisper actually transcribed
console.log("---- WHISPER TRANSCRIPT ----");

transcription.segments.forEach((s, i) => {
  console.log(
    `[${s.start.toFixed(2)} - ${s.end.toFixed(2)}] ${s.text}`
  );
});
    // 1️⃣ Normalize transcript
    const normalized = normalizeTranscript(transcription.segments);

    // 2️⃣ AI Analysis
   const analysisResult = await analyzeHarassment(
  normalized,
  transcription.language
);

    // ✅ Safe destructuring with guards
    const findings = Array.isArray(analysisResult?.analysis)
      ? analysisResult.analysis
      : [];

    const distress_detected = Boolean(analysisResult?.distress_detected);
    const llmEscalation = Boolean(analysisResult?.escalation_detected);
    const context_analysis = analysisResult?.context_analysis || null;
    const detected_context =
  analysisResult?.detected_context || "Unknown";
    const summary = analysisResult?.summary || null;
    // const recommended_action = analysisResult?.recommended_action || null;
    const pattern_description = analysisResult?.pattern_description || null;

    // 3️⃣ Backend escalation enforcement
    const backendEscalation = enforceEscalation(findings);
    const escalation_detected = llmEscalation || backendEscalation;

    // 4️⃣ Risk Scoring
    const riskScore = calculateRiskScore(
      findings,
      distress_detected,
      escalation_detected
    );
    const max_severity = getMaxSeverity(findings);

    const action_level = getActionLevel(
      riskScore,
      max_severity,
      escalation_detected
    );

    const action_hint = getActionHint(detected_context, action_level);

    // 5️⃣ Build report
    const report = buildReport({
      session_id: sessionId,
      analyzed_at: analyzedAt,
      audio_duration_seconds: roundedDuration,
      language: transcription.language || "unknown",
       context: detected_context,
      summary,
      context_analysis,
      findings,
      riskScore,
      // recommended_action,
      escalation_detected,
      pattern_description,
      max_severity,
      action_level,
      action_hint
    });

    // ✅ Structured log (no transcript logging)
   console.log(report)

    // 6️⃣ Persist session metadata
    await AnalysisSession.create({
      session_id: sessionId,
    context: detected_context,
      risk_score: riskScore,
      max_severity,
      action_level,
      action_hint,
      escalation_detected,
      audio_duration_seconds: roundedDuration,
      language: transcription.language || "unknown"
    });

    return res.json(report);

  } catch (error) {

    console.error("Analysis error:", error.message);

    return res.status(400).json({
      success: false,
      message: error.message || "Analysis failed"
    });

  } finally {

    // cleanup upload
    if (file?.path) {
      await safeDelete(file.path);
    }

    // cleanup extracted audio
    if (audioPath && audioPath !== file?.path) {
      await safeDelete(audioPath);
    }

  }
}