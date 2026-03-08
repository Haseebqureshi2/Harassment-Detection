import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function SummaryAccordion({
  summary,
  patternDescription,
  contextAnalysis,
  forceOpenForPdf = false
}) {
  const [open, setOpen] = useState(false);
const { t } = useTranslation();
  const isOpen = forceOpenForPdf || open;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-sm font-medium"
      >
       {t("analysisSummary")}
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          size={16}
        />
      </button>
{isOpen && (
        <div className="px-4 pb-4 space-y-4 text-sm text-gray-600">
          
          {/* Summary */}
          {summary && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
             {t("summary")}
              </h4>
              <p>{summary}</p>
            </div>
          )}

          {/* Escalation Pattern */}
          {patternDescription && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
            {t("escalationPattern")}
              </h4>
              <p>{patternDescription}</p>
            </div>
          )}

          {/* Context Analysis */}
          {contextAnalysis && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
              {t("contextAnalysis")}
              </h4>
              <p>{contextAnalysis}</p>
            </div>
          )}

        </div>
      )}
    </div>
  );
}