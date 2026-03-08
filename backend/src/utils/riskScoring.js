const SEVERITY_SCORE = {
  low: 2,
  medium: 4,
  high: 7,
  critical: 10
};

export function calculateRiskScore(
  findings = [],
  distressDetected = false,
  escalationDetected = false
) {
  if (!Array.isArray(findings) || findings.length === 0) return 0;

  let scores = [];
  let categoryCounts = {};
  let threatSeen = false;
  let coercionSeen = false;

  for (const f of findings) {
    if (!f?.severity) continue;

    const base = SEVERITY_SCORE[f.severity] ?? 0;
    const confidence = typeof f.confidence === "number" ? f.confidence : 0;

    scores.push(base * confidence);

    categoryCounts[f.category] = (categoryCounts[f.category] || 0) + 1;

    if (f.category === "threat") threatSeen = true;
    if (f.category === "coercion") coercionSeen = true;
  }

  let baseScore = Math.max(...scores);

  // 🔥 Repetition amplification
  const repeatedViolations = Object.values(categoryCounts).some(c => c >= 3);
  if (repeatedViolations) {
    baseScore += 1.5;
  }

  // 🔥 Escalation amplification
  if (escalationDetected) {
    baseScore += 2;
  }

  // 🔥 Distress amplification
  if (distressDetected) {
    baseScore += 1.5;
  }

  // 🔥 Coercion boost
  if (coercionSeen) {
    baseScore += 1;
  }

  // 🔥 Threat override
  if (threatSeen) {
    return 10;
  }

  return Math.min(10, Math.round(baseScore));
}