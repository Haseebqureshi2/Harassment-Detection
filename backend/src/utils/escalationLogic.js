export function enforceEscalation(findings = []) {
  if (!Array.isArray(findings) || findings.length === 0) return false;

  let distressSeen = false;
  let persistenceAfterDistress = false;
  let coercionSeen = false;
  let threatSeen = false;

  for (const f of findings) {
    if (!f?.category) continue;

    if (f.category === "victim_distress") {
      distressSeen = true;
    }

    if (
      distressSeen &&
      f.speaker === "harasser" &&
      ["refusal_ignored", "boundary_violation", "coercion"].includes(f.category)
    ) {
      persistenceAfterDistress = true;
    }

    if (f.category === "coercion") coercionSeen = true;
    if (f.category === "threat") threatSeen = true;
  }

  if (threatSeen) return true;
  if (coercionSeen) return true;
  if (distressSeen && persistenceAfterDistress) return true;

  return false;
}