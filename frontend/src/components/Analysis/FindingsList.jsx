import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const severityStyles = {
  critical: "text-red-600",
  high: "text-orange-600",
  medium: "text-yellow-600",
  low: "text-green-600",
};
const severityDot = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

export default function FindingsList({ findings,   forceOpenForPdf = false }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const isOpen = forceOpenForPdf || open;
   const formatConfidence = (value) => {
      if (typeof value !== "number") return "0%";
      return `${Math.round(value * 100)}%`;
    };
  const formatTimestampRange = (range) => {
    if (!range) return "";
    const [start, end] = range.split("-").map(Number);
    const format = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return `${format(start)} - ${format(end)}`;
  };
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl">

      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-6 py-4 cursor-pointer"
      >
        <div className="flex items-center gap-3">
         <h3 className="font-semibold text-gray-800">
  {t("findings")}
</h3>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-100 text-red-600">
           {t("detectedCount", { count: findings.length })}
          </span>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </div>
{isOpen && (
        <div className="px-6 pb-6 space-y-4">
          {findings?.map((item, index) => (
            <div
              key={`${item.timestamp}-${index}`}
              className="bg-red-50 border border-red-200 rounded-xl p-5"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">

                  {/* Severity Dot */}
                  <span
                    className={`w-2 h-2 rounded-full mt-1 ${severityDot[item.severity]}`}
                  />

                  {/* Category */}
                  <span className="font-semibold text-gray-800 capitalize">
                    {item.category.replace("_", " ")}
                  </span>

                  {/* Speaker Badge */}
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-red-100 text-red-600 capitalize">
                    {item.speaker}
                  </span>
                </div>

                {/* Timestamp */}
                <div className="flex items-center gap-2 text-xs bg-white px-3 py-1 rounded-full text-gray-600">
                  <Clock size={14} />
                  {formatTimestampRange(item.timestamp)}
                </div>
              </div>
              {/* Quote */}
              <p className="mt-4 text-base font-medium text-gray-900">
                "{item.text}"
              </p>

              {/* Description */}
              {item.description && (
                <p className="mt-2 text-sm text-gray-600">
                  {item.explanation}
                </p>
              )}

              {/* Divider */}
              <div className="border-t border-red-200 my-4" />

              {/* Bottom Meta */}
              <div className="flex gap-6 text-sm text-gray-700">
                <span>
                 {t("confidence")}: {formatConfidence(item.confidence)}
                </span>

                <span>
                  {t("severity")}:{" "}
                  <span
                    className={`font-semibold capitalize ${severityStyles[item.severity]
                      }`}
                  >
                    {t(`severity_${item.severity}`)}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
