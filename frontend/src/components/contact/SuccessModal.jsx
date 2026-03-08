import { useEffect } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function SuccessModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-sm mx-4 rounded-2xl shadow-2xl p-8 text-center animate-fadeIn">

        {/* Green Circle Icon */}
        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-green-100">
          <Check className="w-8 h-8 text-green-600" />
        </div>

        {/* Title */}
     <h2 className="text-lg font-semibold text-gray-900 mb-2">
  {t("messageSentTitle")}
</h2>

        {/* Description */}
      <p className="text-sm text-gray-500 mb-4">
  {t("messageSentDesc")}
</p>
        {/* Info Badge */}
       <div className="bg-blue-50 text-blue-700 text-xs px-4 py-2 rounded-lg mb-6">
  {t("confirmationEmail")}
</div>

        {/* Button */}
      <button
  onClick={onClose}
  className="w-full bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
>
  {t("gotIt")}
</button>
      </div>
    </div>
  );
}
