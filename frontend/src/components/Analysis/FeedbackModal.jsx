// src/components/FeedbackModal.jsx

import { useEffect } from "react";
import { X } from "lucide-react";
import { Star } from "lucide-react";
import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { FlaskConical } from "lucide-react";
import GenericResultModal from "./GenericResultModal";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createFeedback } from "../../api/feedback.api";
import { useTranslation } from "react-i18next";
import { pdf } from "@react-pdf/renderer";
import AnalysisReportPdf from "../../utils/AnalysisReportPdf";
export default function FeedbackModal({
    isOpen,
    onClose,
    mode,
    analysisData,
    fileName,
    analyzedAt
}) {
    const { t } = useTranslation();
    const [ratings, setRatings] = useState({
        accuracy: 0,
        usefulness: 0,
        recommend: 0,
    });
const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        industry: "",
        companySize: "",
        useCase: "",
        improvement: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    useEffect(() => {
        function handleEsc(e) {
            if (e.key === "Escape") onClose();
        }


        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    function StarRating({ value, onChange }) {
        return (
            <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => {
                    const isActive = star <= value;

                    return (
                        <button
                            type="button"
                            key={star}
                            onClick={() => onChange(star)}
                            className="transition hover:scale-105"
                        >
                            <Star
                                className={`w-6 h-6 ${isActive
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-200 text-gray-300"
                                    }`}
                            />
                        </button>
                    );
                })}
            </div>
        );
    }

    const getButtonText = () => {
        if (mode === "pdf") return "Submit Feedback & Get Report";
        if (mode === "json") return "Submit Feedback & Get JSON";
        return "Submit Feedback";
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-gray-900">
                                {t("quickFeedback")}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {t("secondsShort")}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* ===== Form Section ===== */}
                <form
                  onSubmit={async (e) => {
  e.preventDefault();

  if (loading) return; // prevent double click
  setLoading(true);

  try {

                            const payload = {
                                ...formData,
                                ratings,

                                sessionId: analysisData?.session_id,
                                riskScore: analysisData?.risk_score,
                                severity: analysisData?.max_severity,
                                context: analysisData?.context,
                                findingsCount: analysisData?.findings
                                    ? analysisData.findings.length
                                    : analysisData?.findingsCount || 0,
                                analysisData,
                                mode,
                            };
                            console.log("Feedback payload:", payload);

                            if (!payload.companySize) {
                                delete payload.companySize;
                            };
                            let pdfBlob = null;

                            if (mode === "pdf" && analysisData) {
                                pdfBlob = await pdf(
                                    <AnalysisReportPdf
                                        data={{ ...analysisData }}
                                        fileName={fileName}
                                        analyzedAt={analyzedAt}
                                    />
                                ).toBlob();
                            }

                            const formDataToSend = new FormData();

                            formDataToSend.append(
                                "payload",
                                JSON.stringify({
                                    ...formData,
                                    ratings,
                                    sessionId: analysisData?.session_id,
                                    riskScore: analysisData?.risk_score,
                                    severity: analysisData?.max_severity,
                                    context: analysisData?.context,
                                    findingsCount: analysisData?.findings?.length || 0,
                                    analysisData,
                                    mode,
                                })
                            );

                            if (pdfBlob) {
                                formDataToSend.append(
                                    "report",
                                    pdfBlob,
                                    `${fileName || "analysis-report"}.pdf`
                                );
                            }

                            await createFeedback(formDataToSend);
                            setShowSuccess(true);
                            if (mode === "json" && analysisData) {
                                const jsonString = JSON.stringify(analysisData, null, 2);

                                const blob = new Blob([jsonString], { type: "application/json" });
                                const url = URL.createObjectURL(blob);

                                const link = document.createElement("a");
                                link.href = url;
                                link.download = `${fileName || "analysis"}-report.json`;
                                link.click();

                                URL.revokeObjectURL(url);
                            }

                            setShowSuccess(true);

                            // reset form
                            setFormData({
                                firstName: "",
                                lastName: "",
                                email: "",
                                company: "",
                                role: "",
                                industry: "",
                                companySize: "",
                                useCase: "",
                                improvement: "",
                            });

                            setRatings({
                                accuracy: 0,
                                usefulness: 0,
                                recommend: 0,
                            });
setLoading(false);
                        } catch (error) {
  console.error("Feedback submit error:", error.message);
  alert(error.message);
  setLoading(false);
}
                    }}
                    className="space-y-6"
                >

                    {/* Name Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-600">{t("firstNameRequired")}</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">{t("lastNameOptional")}</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@company.com"
                            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="text-sm text-gray-600">{t("company")}</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Role + Industry */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-600">{t("roleRequired")}</label>
                            <input
                                type="text"
                                name="role"
                                required
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="e.g. Safety Manager"
                                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">{t("industryRequired")}</label>
                            <select
                                name="industry"
                                required
                                value={formData.industry}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">{t("select")}</option>
                                <option value="transport">{t("industry_transport")}</option>
                                <option value="healthcare">{t("industry_healthcare")}</option>
                                <option value="education">{t("industry_education")}</option>
                                <option value="technology">{t("industry_technology")}</option>
                            </select>
                        </div>
                    </div>

                    {/* Company Size */}
                    <div>
                        <label className="text-sm text-gray-600">{t("companySize")}</label>
                        <select
                            name="companySize"
                            value={formData.companySize || ""}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">{t("select")}</option>
                            <option value="1-10">{t("companySize_1_10")}</option>
                            <option value="11-50">{t("companySize_11_50")}</option>
                            <option value="51-200">{t("companySize_51_200")}</option>
                            <option value="200+">{t("companySize_200_plus")}</option>
                        </select>
                    </div>

                    {/* Goal */}
                    <div>
                        <label className="text-sm text-gray-600">
                            {t("useCaseQuestion")}
                        </label>
                        <textarea
                            name="useCase"
                            value={formData.useCase}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Prototype Notice */}
                    <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">

                        <div className="flex gap-4">

                            {/* Icon Column */}
                            <div className="shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <FlaskConical className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>

                            {/* Text Column */}
                            <div className="text-sm text-blue-900">
                                <div className="font-semibold mb-1">
                                    {t("prototypeVersion")}
                                </div>

                                <p className="text-blue-800 leading-relaxed">
                                    {t("prototypeDesc")}
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Divider */}
                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-6 space-y-6">

                        <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">
                                {t("helpImprove")}
                            </h3>

                            <div className="space-y-6 text-sm text-gray-700">

                                <div>
                                    <label className="font-medium">
                                        {t("accuracyQuestion")}
                                    </label>
                                    <StarRating
                                        value={ratings.accuracy}
                                        onChange={(val) =>
                                            setRatings((prev) => ({ ...prev, accuracy: val }))
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="font-medium">
                                        {t("usefulnessQuestion")}
                                    </label>
                                    <StarRating
                                        value={ratings.usefulness}
                                        onChange={(val) =>
                                            setRatings((prev) => ({ ...prev, usefulness: val }))
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="font-medium">
                                        {t("recommendQuestion")}
                                    </label>
                                    <StarRating
                                        value={ratings.recommend}
                                        onChange={(val) =>
                                            setRatings((prev) => ({ ...prev, recommend: val }))
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="font-medium">
                                        {t("missingQuestion")}
                                    </label>
                                    <textarea
                                        name="improvement"
                                        value={formData.improvement}
                                        onChange={handleChange}
                                        rows="3"
                                        className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Submit Button Centered */}
                        <div className="flex justify-center pt-6">
                       <button
  type="submit"
  disabled={loading}
  className={`flex items-center gap-2 px-10 h-12 rounded-xl 
  text-white font-semibold shadow-md transition
  ${loading 
    ? "bg-blue-400 cursor-not-allowed" 
    : "bg-blue-600 hover:bg-blue-700"}
`}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className="opacity-25"
        />
        <path
          d="M4 12a8 8 0 018-8"
          stroke="currentColor"
          strokeWidth="4"
          className="opacity-75"
        />
      </svg>
      Submitting...
    </>
  ) : (
    <>
      <Send className="w-4 h-4" />
      {getButtonText()}
    </>
  )}
</button>
                        </div>


                    </div>


                </form>
            </div>
            <GenericResultModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                icon={<Check className="w-8 h-8 text-green-600" />}
                title={t("feedbackThanksTitle")}
                description={t("feedbackThanksDesc")}
                buttonText={t("backToResults")}
                onButtonClick={() => {
                    setShowSuccess(false);
                    navigate("/analysis");
                }}
            />
        </div >
    );
}
