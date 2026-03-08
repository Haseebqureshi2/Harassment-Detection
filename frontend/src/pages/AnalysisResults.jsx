// pages/AnalysisResults.jsx

import { useState } from "react";
import RiskScoreCard from "../components/Analysis/RiskScoreCard";
import DetectedContextCard from "../components/Analysis/DetectedContextCard";
import AnalysisDetailsCard from "../components/Analysis/AnalysisDetailsCard";
import EscalationCard from "../components/Analysis/EscalationCard";
import FindingsList from "../components/Analysis/FindingsList";
import SummaryAccordion from "../components/Analysis/SummaryAccordion";
import RecommendationAccordion from "../components/Analysis/RecommendationAccordion";
import { MessageSquare } from "lucide-react";
import Footer from "../layout/Footer";
import { ArrowLeft } from "lucide-react";
// import { downloadPdf } from "../utils/downloadPdf";
import FeedbackModal from "../components/Analysis/FeedbackModal";
import GenericResultModal from "../components/Analysis/GenericResultModal";
import { Mail } from "lucide-react"; // or your icon library
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { pdf } from "@react-pdf/renderer";
// import AnalysisReportPdf from "../utils/AnalysisReportPdf";
export default function AnalysisResults() {
  const [showExportModal, setShowExportModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const { t } = useTranslation();
  const { analysisData, fileName, analyzedAt } = location.state || {};
const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  if (!analysisData) {
    navigate("/");
    return null;
  }
  const data = analysisData;
const [feedbackMode, setFeedbackMode] = useState("feedback");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
const handleExportJSON = () => {
  if (!analysisData) return;

  const jsonString = JSON.stringify(analysisData, null, 2); // pretty format

  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName || "analysis"}-report.json`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
  return (
    <div  className="p-10 space-y-6 bg-gray-100 min-h-screen">
      {/* ===== Header Section ===== */}
      <div className="bg-gray-100 px-6 py-5 ">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-200 transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div>
         <h1 className="text-2xl font-semibold text-gray-900">
  {t("resultsTitle")}
</h1>
          <p className="text-sm text-gray-500 mt-1">
  {fileName} • {t("analyzedAt")} {analyzedAt}
</p>
          </div>
        </div>
      </div>
  {/* ===== Report Section (PDF ONLY) ===== */}
<div id="analysis-report" className="grid grid-cols-12 gap-6">

  <div className="col-span-4 space-y-4">
    <RiskScoreCard
      data={{
        riskScore: data.risk_score,
        severity: data.max_severity,
        actionLevel: data.action_hint,
        actionStatus: data.action_level,
      }}
    />
    <DetectedContextCard context={data.context} />
    <AnalysisDetailsCard
      duration={`${Math.floor(data.audio_duration_seconds / 60)}m ${data.audio_duration_seconds % 60}s`}
      language={data.language}
      findings={data.findings?.length || 0}
      confidence={`${Math.round(data.confidence * 100)}%`}
      sessionId={data.session_id}
    />
    <EscalationCard
      escalation={data.escalation_detected}
      message={data.pattern_description}
    />
  </div>

  <div className="col-span-8 space-y-4">
 <FindingsList
  findings={data.findings}
  forceOpenForPdf={isGeneratingPdf}
/>

<SummaryAccordion
  summary={data.summary}
  patternDescription={data.pattern_description}
  contextAnalysis={data.context_analysis}
  forceOpenForPdf={isGeneratingPdf}
/>

<RecommendationAccordion
  context={data.context}
  forceOpenForPdf={isGeneratingPdf}
/>
  </div>

</div>

{/* ===== Buttons Section (NOT IN PDF) ===== */}
<div className="flex items-center justify-end gap-12 pt-6 mr-6">
  
  <button
  onClick={() => {
    setFeedbackMode("feedback");
    setIsFeedbackOpen(true);
  }}
    className="flex items-center gap-3 px-6 h-14 rounded-xl bg-white hover:bg-gray-100 transition border border-gray-200 shadow-sm"
  >
    <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center">
      <MessageSquare className="w-5 h-5 text-gray-600" />
    </div>
    <div className="text-left leading-tight">
    <div className="text-sm font-semibold text-gray-800">
  {t("giveFeedback")}
</div>

<div className="text-xs text-gray-500">
  {t("feedbackHint")}
</div>
    </div>
  </button>
<button
  onClick={() => {
    setFeedbackMode("pdf");
    setIsFeedbackOpen(true);
  }}
  className="px-8 h-12 rounded-xl text-white font-semibold shadow-md transition 
    bg-linear-to-r from-teal-400 to-teal-600 
    hover:from-teal-500 hover:to-teal-700"
>
 {t("downloadPdf")}
</button>
<button
  onClick={() => {
    setFeedbackMode("json");
    setIsFeedbackOpen(true);
  }}
    className="px-8 h-12 rounded-xl bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition"
  >
   {t("exportJson")}
  </button>

</div>
      <Footer />
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
      <GenericResultModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        icon={<Mail className="w-8 h-8 text-green-600" />}
     title={t("reportOnWay")}
      description={t("reportDescription")}
      buttonText={t("backToResults")}
        onButtonClick={() => {
          setShowExportModal(false);
          navigate("/analysis");
        }}
      />
      <FeedbackModal
  isOpen={isFeedbackOpen}
  onClose={() => setIsFeedbackOpen(false)}
  mode={feedbackMode}
  analysisData={analysisData}
  fileName={fileName}
  analyzedAt={analyzedAt}
/>
    </div>
  );
}

