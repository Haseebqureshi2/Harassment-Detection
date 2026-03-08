export default function AnalysisSummary({ data }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-6">
      <p className="text-sm text-gray-500 mb-4 font-medium">
        ANALYSIS SUMMARY
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Risk Score</p>
          <p className="text-2xl font-bold text-red-500">
            {data.riskScore}/10
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Severity</p>
          <p className="text-2xl font-bold text-red-500">
            {data.severity}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Context</p>
          <p className="text-lg font-semibold text-gray-800">
            {data.context}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Findings</p>
          <p className="text-lg font-semibold text-gray-800">
            {data.findingsCount} detected
          </p>
        </div>
      </div>
    </div>
  );
}
