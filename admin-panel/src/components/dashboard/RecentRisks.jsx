export default function RecentRisks({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-5 rounded-2xl shadow-sm text-center text-gray-400">
        No high-risk sessions
      </div>
    );
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-600";
      case "high":
        return "bg-orange-100 text-orange-600";
      case "medium":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="font-semibold mb-4">
        Recent High Risk Sessions
      </h3>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item._id}
            className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
          >
            {/* LEFT SIDE */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-800">
                {item.context || "Unknown Context"}
              </p>

              <p className="text-xs text-gray-400">
                {formatDate(item.createdAt)}
              </p>

              <div className="flex gap-2 mt-1">
                <span
                  className={`text-xs px-2 py-1 rounded-md ${getSeverityColor(
                    item.max_severity
                  )}`}
                >
                  {item.max_severity}
                </span>

                <span className="text-xs px-2 py-1 rounded-md bg-purple-100 text-purple-600">
                  {item.action_level}
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="text-right">
              <p className="text-sm text-gray-500">Risk</p>
              <p className="text-lg font-semibold text-red-500">
                {item.risk_score}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}