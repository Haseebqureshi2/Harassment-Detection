import { AlertTriangle, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function EscalationCard({

  escalation = true,
  message = "Victim expressed distress followed by continued inappropriate responses.",
}) 

{
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      {escalation && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />

            <div>
           <p className="font-semibold text-red-700 mb-1">
  {t("escalationDetected")}
</p>
              <p className="text-sm text-red-600">{message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
        <div className="flex gap-3">
          <Lock className="w-5 h-5 text-blue-600 mt-1" />

          <div>
          <p className="text-sm text-blue-700">
  {t("privacyNotice")}
</p>
          </div>
        </div>
      </div>
    </div>
  );
}
