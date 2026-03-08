import mongoose from "mongoose";

const analysisSessionSchema = new mongoose.Schema(
  {
    session_id: {
      type: String,
      required: true,
      unique: true,
    },

    context: {
      type: String,
      default: "VTC",
      index: true,
    },

    risk_score: {
      type: Number,
      required: true,
      index: true,
    },

    max_severity: {
      type: String,
      enum: ["critical", "high", "medium", "low"],
      required: true,
      index: true,
    },

    action_level: {
      type: String,
      enum: ["critical", "high", "medium", "low"],
      required: true,
      index: true,
    },

    action_hint: {
      type: String,
      required: true,
    },

    escalation_detected: {
      type: Boolean,
      default: false,
      index: true,
    },

    audio_duration_seconds: {
      type: Number,
    },

    language: {
      type: String,
    },
  },
  {
    timestamps: true, // ✅ automatically adds createdAt & updatedAt
  }
);

export default mongoose.model("AnalysisSession", analysisSessionSchema);