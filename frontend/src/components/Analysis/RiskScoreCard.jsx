// components/Analysis/RiskScoreCard.jsx
import { useTranslation } from "react-i18next";
const severityStyles = {
  critical: {
    badge: "bg-red-100 text-red-600 border border-red-200",
    bar: "bg-red-500",
    score: "text-red-500",
  },
  high: {
    badge: "bg-orange-100 text-orange-600 border border-orange-200",
    bar: "bg-orange-500",
    score: "text-orange-500",
  },
  medium: {
    badge: "bg-yellow-100 text-yellow-600 border border-yellow-200",
    bar: "bg-yellow-500",
    score: "text-yellow-500",
  },
  low: {
    badge: "bg-green-100 text-green-600 border border-green-200",
    bar: "bg-green-500",
    score: "text-green-500",
  },
};

export default function RiskScoreCard({ data }) {
  const score = data.riskScore ?? 0;
  const percentage = Math.min((score / 10) * 100, 100);
const { t } = useTranslation();
  const severity = data.severity?.toLowerCase() || "low";
  const styles = severityStyles[severity] || severityStyles.low;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-500">
       {t("riskScore")}
        </h3>

        {/* 🔴 Top Right Badge = action_level */}
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${styles.badge}`}
        >
          {data.actionStatus}
        </span>
      </div>

      {/* Score */}
      <div className="mt-4 flex items-end gap-2">
        <span className={`text-6xl font-bold leading-none ${styles.score}`}>
          {score}
        </span>
        <span className="text-xl text-gray-400 mb-1">/10</span>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${percentage}%` }}
            className={`h-full ${styles.bar} rounded-full transition-all duration-500`}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-5" />

      {/* 🔵 Bottom Action Hint */}
      <div>
        <p className="text-xs text-gray-500 mb-1">
     {t("actionLevel")}
        </p>
        <p className={`text-sm font-semibold ${styles.score}`}>
          {data.actionLevel}
        </p>
      </div>
    </div>
  );
}
