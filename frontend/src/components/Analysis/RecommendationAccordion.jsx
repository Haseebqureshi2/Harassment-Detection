import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
const severityColors = {
  Critical: "bg-red-200 text-red-900",
  High: "bg-orange-200 text-orange-900",
  Medium: "bg-yellow-200 text-yellow-900",
  Low: "bg-green-200 text-green-900",
};
function resolveContext(context = "") {
  if (!context) return null;

  const c = context.toLowerCase();

  // ---- VTC ----
  if (
    c.includes("vehicle") ||
    c.includes("ride") ||
    c.includes("taxi") ||
    c.includes("transport") ||
    c.includes("chauffeur") ||
    c.includes("voiture")
  ) {
    return "vtc";
  }

  // ---- Corporate / Office ----
  if (
    c.includes("office") ||
    c.includes("workplace") ||
    c.includes("corporate") ||
    c.includes("meeting") ||
    c.includes("bureau") ||
    c.includes("entreprise") ||
    c.includes("travail")
  ) {
    return "corporate";
  }

  // ---- Education ----
  if (
    c.includes("class") ||
    c.includes("student") ||
    c.includes("training") ||
    c.includes("learning") ||
    c.includes("education") ||
    c.includes("cours") ||
    c.includes("école") ||
    c.includes("formation")
  ) {
    return "education";
  }

  // ---- Gaming ----
  if (
    c.includes("game") ||
    c.includes("gaming") ||
    c.includes("player") ||
    c.includes("jeu")
  ) {
    return "gaming";
  }

  // ---- Livestream ----
  if (
    c.includes("stream") ||
    c.includes("live") ||
    c.includes("broadcast") ||
    c.includes("diffusion")
  ) {
    return "livestream";
  }

  // ---- Call Center ----
  if (
    c.includes("support") ||
    c.includes("customer") ||
    c.includes("call") ||
    c.includes("service client")
  ) {
    return "callcenter";
  }

  // ---- Healthcare ----
  if (
    c.includes("medical") ||
    c.includes("doctor") ||
    c.includes("patient") ||
    c.includes("health") ||
    c.includes("médecin") ||
    c.includes("santé")
  ) {
    return "healthcare";
  }

  return null;
}
const severityLevels = ["Critical", "High", "Medium", "Low"];
const contextRecommendations = {
  vtc: {
    Critical: "rec_vtc_critical",
    High: "rec_vtc_high",
    Medium: "rec_vtc_medium",
    Low: "rec_vtc_low",
  },

  corporate: {
    Critical: "rec_corporate_critical",
    High: "rec_corporate_high",
    Medium: "rec_corporate_medium",
    Low: "rec_corporate_low",
  },

  livestream: {
    Critical: "rec_livestream_critical",
    High: "rec_livestream_high",
    Medium: "rec_livestream_medium",
    Low: "rec_livestream_low",
  },

  education: {
    Critical: "rec_education_critical",
    High: "rec_education_high",
    Medium: "rec_education_medium",
    Low: "rec_education_low",
  },

  gaming: {
    Critical: "rec_gaming_critical",
    High: "rec_gaming_high",
    Medium: "rec_gaming_medium",
    Low: "rec_gaming_low",
  },

  callcenter: {
    Critical: "rec_callcenter_critical",
    High: "rec_callcenter_high",
    Medium: "rec_callcenter_medium",
    Low: "rec_callcenter_low",
  },

  healthcare: {
    Critical: "rec_healthcare_critical",
    High: "rec_healthcare_high",
    Medium: "rec_healthcare_medium",
    Low: "rec_healthcare_low",
  },
};
export default function RecommendationAccordion({ context, forceOpenForPdf = false }) {
  const [open, setOpen] = useState(true);
  const isOpen = forceOpenForPdf || open;
const mappedContext = resolveContext(context);
const hasStaticRecommendations =
  mappedContext && contextRecommendations[mappedContext];

const { t } = useTranslation();
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-6 py-4 cursor-pointer"
      >
        <h3 className="font-semibold text-gray-800">
         {t("recommendationsTitle")}
        </h3>

        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-red-600 font-semibold mb-4">
{mappedContext
  ? t(`context_${mappedContext}`)
  : t("context_unknown")}
          </p>

        {hasStaticRecommendations ? (
  <div className="overflow-hidden rounded-lg border border-gray-200">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-[#1F3A5F] text-white text-left">
          <th className="px-4 py-3 font-medium">
            {t("severityHeader")}
          </th>
          <th className="px-4 py-3 font-medium">
            {t("actionsHeader")}
          </th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {severityLevels.map((level) => (
          <tr key={level} className="border-t border-gray-200">
            <td
              className={`px-4 py-3 font-semibold ${severityColors[level]}`}
            >
              {t(`severity_${level.toLowerCase()}`)}
            </td>

            <td className="px-4 py-3 text-gray-700">
              {t(contextRecommendations[mappedContext][level])}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <div className="text-gray-500 text-sm italic">
    {t("noRecommendationsAvailable")}
  </div>
)}
        </div>
      )}
    </div>
  );
}