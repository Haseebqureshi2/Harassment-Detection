import { ShieldCheck, ShieldX } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function DetectedContextCard({ context }) {
  const isDetected = Boolean(context);
const { t } = useTranslation();
  const containerStyles = isDetected
    ? "bg-green-50 border-green-200"
    : "bg-gray-50 border-gray-200";

  const iconBg = isDetected ? "bg-green-100" : "bg-gray-200";
  const iconColor = isDetected ? "text-green-600" : "text-gray-500";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
    <h3 className="text-sm font-semibold text-gray-700 mb-4">
  {t("detectedContext")}
</h3>

      <div
        className={`flex items-center gap-3 border rounded-lg p-3 ${containerStyles}`}
      >
        <div
          className={`w-9 h-9 flex items-center justify-center rounded-full ${iconBg}`}
        >
          {isDetected ? (
            <ShieldCheck className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <ShieldX className={`w-5 h-5 ${iconColor}`} />
          )}
        </div>

        <div>
        <p className="font-medium text-gray-800 uppercase">
  {context || t("unknown")}
</p>
         <p className="text-xs text-gray-500">
  {isDetected ? t("autoDetected") : t("notDetected")}
</p>
        </div>
      </div>
    </div>
  );
}