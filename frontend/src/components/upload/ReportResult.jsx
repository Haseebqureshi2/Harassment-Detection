export default function ReportResult({ report }) {
  if (!report) return null;

  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Analysis Report</h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div><strong>Language:</strong> {report.language}</div>
        <div><strong>Context:</strong> {report.context}</div>
        <div><strong>Risk Score:</strong> {report.riskScore}</div>
        <div><strong>Max Severity:</strong> {report.max_severity}</div>
        <div><strong>Action Level:</strong> {report.action_level}</div>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <strong>Recommended Action:</strong>
        <p className="mt-1">{report.action}</p>
      </div>
    </div>
  );
}
