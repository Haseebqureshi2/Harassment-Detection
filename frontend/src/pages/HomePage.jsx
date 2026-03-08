import { useState } from "react";
import UploadArea from "../components/home/UploadArea";
import Header from "../layout/Header";
import FeaturesSection from "../components/features/FeaturesSection";
import { FlaskConical, Zap, Globe, Lock } from "lucide-react";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";
export default function HomePage() {
  const [file, setFile] = useState(null);
 const { t } = useTranslation();
  return (
    <>
          <Header />
    <div className="min-h-screen bg-gray-100 px-6 py-16 flex flex-col items-center">
      {/* Early Prototype Card */}
      <div className="bg-white border rounded-xl border-gray-400 px-6 py-4 max-w-3xl w-full shadow-sm">
        <div className="flex items-start gap-3">
          <FlaskConical className="w-5 h-5 text-teal-500 mt-1" />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
             {t("earlyPrototype")}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
             {t("earlyPrototypeDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mt-10 max-w-2xl">
        <h1 className="text-3xl font-semibold text-gray-900">
            {t("title")}
        </h1>
        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Upload Section */}
      <div className="mt-10 w-full">
        <UploadArea onFileSelect={setFile} />
      </div>

      {/* Info Lines */}
      <div className="mt-6 space-y-3 text-sm text-gray-500 text-center">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 text-blue-500" />
         {t("contextDetected")}
        </div>

        <div className="flex items-center justify-center gap-2">
          <Globe className="w-4 h-4 text-blue-500" />
           {t("supportedLanguages")}
        </div>
      </div>

      {/* Privacy Box */}
      <div className="mt-6 bg-blue-50 border border-blue-100 text-blue-700 text-sm px-6 py-3 rounded-xl flex items-center gap-2 max-w-2xl w-full justify-center">
        <Lock className="w-4 h-4" />
       
          {t("privacyText")}
      </div>

      {/* Why SafeAI */}
      <div className="mt-14 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
         {t("whySafeAI")}
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
 {t("whySafeAIDesc")}
        </p>
      </div>

      {file && (
        <div className="mt-6 text-sm text-gray-600">
         {t("selectedFile")}:  <span className="font-medium">{file.name}</span>
        </div>
      )}
    </div>
    <FeaturesSection />
    <Footer/>
    </>
  );
}
