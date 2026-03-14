export function buildReport({
  session_id,
  analyzed_at,
  audio_duration_seconds,
  language,
  context,
  findings = [],
  riskScore = 0,
  // recommended_action = null,
  context_analysis = null,
  summary = null,
  escalation_detected = false,
  pattern_description = null,
  max_severity = "low",
  action_level = "low",
  action_hint = null
}) {
  return {
    session_id,
    analyzed_at: analyzed_at || new Date().toISOString(),
    audio_duration_seconds: audio_duration_seconds ?? 0,
    language: language || "unknown",
    context,
    summary,
    context_analysis,
    risk_score: riskScore,
    max_severity,
    action_level,
    action_hint,

    confidence: findings.length
      ? Math.max(...findings.map(f => f.confidence || 0))
      : 0,

    escalation_detected,
    pattern_description,
    findings,
    // recommended_action
  };
}