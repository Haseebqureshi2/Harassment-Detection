import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    backgroundColor: "#ffffff",
  },

  reportTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
  },

  reportSubTitle: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 20,
  },

  divider: {
    height: 2,
    backgroundColor: "#111827",
    marginBottom: 20,
  },

  riskBanner: {
    padding: 12,
    marginBottom: 20,
  },

  riskScore: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 2,
  },

  riskLabel: {
    fontSize: 12,
    marginTop: 15,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  label: {
    color: "#374151",
  },

  value: {
    fontWeight: "bold",
  },

  box: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 12,
  },

  escalationBox: {
    backgroundColor: "#fee2e2",
    borderLeftWidth: 4,
    borderLeftColor: "#b91c1c",
    padding: 10,
  },

  findingBlock: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderLeftWidth: 4,
  },

  findingCategory: {
    fontWeight: "bold",
    marginBottom: 4,
  },

  smallText: {
    fontSize: 9,
    color: "#6b7280",
  },

  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },

  cellSeverity: {
    width: "25%",
    padding: 6,
    fontWeight: "bold",
  },

  cellAction: {
    width: "75%",
    padding: 6,
  },

  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    fontSize: 9,
    textAlign: "center",
    color: "#9ca3af",
  },
});

const severityLevels = ["Critical", "High", "Medium", "Low"];

const contextRecommendations = {
  VTC: {
    Critical:
      "Contact passenger immediately, offer to end trip, temporary driver suspension.",
    High:
      "Moderator review within 1 hour, flag driver account.",
    Medium:
      "Add to monitoring list and review if repeated.",
    Low:
      "Log for analytics only.",
  },

  Meeting: {
    Critical:
      "Notify HR immediately, separate parties, begin investigation.",
    High:
      "HR review within 24 hours and notify manager.",
    Medium:
      "Log incident and monitor future interactions.",
    Low:
      "Archive for record keeping.",
  },

  "Live Stream": {
    Critical:
      "Mute user immediately, temporary ban, preserve evidence.",
    High:
      "Warning to user and moderator review.",
    Medium:
      "Automated warning and monitoring.",
    Low:
      "Log for analytics.",
  },

  "E-Learning": {
    Critical:
      "Notify school administration and guardians immediately.",
    High:
      "Alert teacher and notify parents.",
    Medium:
      "Teacher intervention and warning.",
    Low:
      "Monitor behavior.",
  },
};

export default function AnalysisReportPdf({ data, fileName, analyzedAt }) {

  const severityMap = {
    critical: { bg: "#7f1d1d", text: "#ffffff" },
    high: { bg: "#b91c1c", text: "#ffffff" },
    medium: { bg: "#f59e0b", text: "#111827" },
    low: { bg: "#16a34a", text: "#ffffff" },
  };

  const severity =
    severityMap[data.max_severity?.toLowerCase()] || severityMap.low;

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>

        {/* HEADER */}
        <Text style={styles.reportTitle}>
          Sexual Harassment Report
        </Text>

        <Text style={styles.reportSubTitle}>
          File: {fileName} | Analyzed: {analyzedAt}
        </Text>

        <View style={styles.divider} />

        {/* RISK BANNER */}
        <View style={[styles.riskBanner, { backgroundColor: severity.bg }]}>
          <Text style={[styles.riskScore, { color: severity.text }]}>
            Risk Score: {data.risk_score} / 10
          </Text>

          <Text style={[styles.riskLabel, { color: severity.text }]}>
            Severity Level: {data.max_severity?.toUpperCase()}
          </Text>

          <Text style={[styles.riskLabel, { color: severity.text }]}>
            Recommended Action: {data.action_hint}
          </Text>
        </View>

        {/* INCIDENT OVERVIEW */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Incident Overview</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Language</Text>
            <Text style={styles.value}>{data.language}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Audio Duration</Text>
            <Text style={styles.value}>
              {Math.floor(data.audio_duration_seconds / 60)}m{" "}
              {data.audio_duration_seconds % 60}s
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Session ID</Text>
            <Text style={styles.value}>{data.session_id}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Context</Text>
            <Text style={styles.value}>{data.context || "Unknown"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Findings</Text>
            <Text style={styles.value}>{data.findings?.length || 0}</Text>
          </View>
        </View>

        {/* ESCALATION */}
        {data.escalation_detected && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Escalation Alert</Text>

            <View style={styles.escalationBox}>
              <Text>
                Escalation detected based on distress signals and conversation pattern.
              </Text>

              {data.pattern_description && (
                <Text style={{ marginTop: 5 }}>
                  {data.pattern_description}
                </Text>
              )}
            </View>
          </View>
        )}
 <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Detailed Findings
          </Text>

          {data.findings?.map((item, index) => (
            <View
              key={index}
              style={[
                styles.findingBlock,
                { borderLeftColor: severity.bg },
              ]}
            >
              <Text style={styles.findingCategory}>
                {item.category} ({item.severity})
              </Text>

              <Text>"{item.text}"</Text>

              <Text style={styles.smallText}>
                Confidence: {Math.round(item.confidence * 100)}%
              </Text>
            </View>
          ))}
        </View>

        {/* CONTEXT ANALYSIS */}
        {data.context_analysis && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Context Analysis</Text>

            <View style={styles.box}>
              <Text>{data.context_analysis}</Text>
            </View>
          </View>
        )}

        {/* RECOMMENDED ACTIONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Actions</Text>

          {severityLevels.map((level) => (
            <View key={level} style={styles.tableRow}>
              <Text style={styles.cellSeverity}>{level}</Text>

              <Text style={styles.cellAction}>
                {contextRecommendations[data.context]?.[level] ||
                  "No recommendation available"}
              </Text>
            </View>
          ))}
        </View>

        {/* CONFIDENCE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Model Confidence Assessment
          </Text>

          <View style={styles.box}>
            <Text>
              Overall Confidence Score:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {Math.round(data.confidence * 100)}%
              </Text>
            </Text>

            <Text style={styles.smallText}>
              This score reflects model certainty based on linguistic and contextual signals.
            </Text>
          </View>
        </View>

        {/* FINDINGS */}
       
        {/* SUMMARY */}
        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Executive Summary
            </Text>

            <View style={styles.box}>
              <Text>{data.summary}</Text>
            </View>
          </View>
        )}

        {/* FOOTER */}
        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Confidential HR Document • Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />

      </Page>
    </Document>
  );
}