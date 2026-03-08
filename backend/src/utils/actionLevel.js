export function getActionLevel(
  riskScore,
  maxSeverity,
  escalationDetected = false
) {
  const severity = String(maxSeverity || "").toLowerCase();

  // 🔴 CRITICAL CONDITIONS
  if (
    severity === "critical" ||
    riskScore >= 9 ||
    escalationDetected
  ) {
    return "critical";
  }

  // 🟠 HIGH CONDITIONS
  if (
    severity === "high" ||
    riskScore >= 7
  ) {
    return "high";
  }

  // 🟡 MEDIUM CONDITIONS
  if (
    severity === "medium" ||
    riskScore >= 4
  ) {
    return "medium";
  }

  return "low";
}