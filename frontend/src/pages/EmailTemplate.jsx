import { mockEmailData } from "../data/mockEmailData";
import AttachmentItem from "../components/email/AttachmentItem";
import AnalysisSummary from "../components/email/AnalysisSummary";
import FeedbackBox from "../components/email/FeedbackBox";

export default function EmailTemplate() {
  const data = mockEmailData;

  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div
          style={{ background: "linear-gradient(to right, #10B981, #06B6D4)" }}
          className="px-8 py-6"
        >
          <span className="text-2xl font-bold text-white">SafeAI</span>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <p className="text-lg mb-6">
            Hi <span className="font-semibold">{data.firstName}</span>,
          </p>

          <p className="mb-6">
            Thank you for testing SafeAI! Your analysis report is ready.
          </p>

          {/* Attachments */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
            <AttachmentItem
              fileName={`SafeAI_Report_${data.sessionId}.pdf`}
              description="Full analysis report"
              bgColor="bg-red-100"
              iconColor="text-red-500"
            />

            <AttachmentItem
              fileName={`SafeAI_Data_${data.sessionId}.json`}
              description="Raw JSON data"
              bgColor="bg-amber-100"
              iconColor="text-amber-600"
            />
          </div>

          <AnalysisSummary data={data} />
          <FeedbackBox data={data} />
        </div>
      </div>
    </div>
  );
}
