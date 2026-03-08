export function normalizeTranscript(segments) {
  return segments.map(seg => ({
    timestamp: `${seg.start.toFixed(2)}-${seg.end.toFixed(2)}`,
    text: seg.text.trim()
  }));
}
