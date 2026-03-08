import { useTranslation } from "react-i18next";

export default function AnalysisDetailsCard({
  duration = "1m 34s",
  language = "English",
  findings = 5,
  confidence = "90%",
  sessionId = "4DF89K2",
}) {

  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        {t("analysisDetails")}
      </h3>

      <div className="space-y-3 text-sm">
        <DetailRow label={t("duration")} value={duration} />
        <DetailRow label={t("language")} value={language} />
        <DetailRow
          label={t("findings")}
          value={t("detected", { count: findings })}
        />
        <DetailRow label={t("confidence")} value={confidence} />
        <DetailRow label={t("sessionId")} value={sessionId} />
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between text-gray-600">
      <span>{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}