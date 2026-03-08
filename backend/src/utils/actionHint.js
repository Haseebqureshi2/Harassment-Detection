
const VALID_LEVELS = [
  "low",
  "medium",
  "high",
  "critical"
];
export function getActionHint(context, actionLevel) {
  if (!context || !actionLevel) return null;

  const normalizedLevel = String(actionLevel).trim().toLowerCase();

  if (!VALID_LEVELS.includes(normalizedLevel)) {
    return `GENERAL_LOW`;
  }

  // Always return dynamic context
  return `${String(context).toUpperCase()}_${normalizedLevel.toUpperCase()}`;
}