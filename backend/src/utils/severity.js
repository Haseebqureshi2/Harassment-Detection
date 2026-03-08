export function getMaxSeverity(findings = []) {
  if (!Array.isArray(findings) || findings.length === 0) {
    return "low";
  }

  const severityRank = {
    low: 1,
    medium: 2,
    high: 3,
    critical: 4
  };

  let maxLevel = "low";
  let maxRank = 1;

  for (const f of findings) {
    const severity = String(f?.severity || "").toLowerCase();
    const rank = severityRank[severity];

    if (rank && rank > maxRank) {
      maxRank = rank;
      maxLevel = severity;
    }
  }

  return maxLevel;
}