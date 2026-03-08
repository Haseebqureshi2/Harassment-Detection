import { useEffect, useState } from "react";
import { X } from "lucide-react";
import SuccessModal from "./SuccessModal";
import axiosClient from "../../api/axiosClient"; // adjust path if needed
import { useTranslation } from "react-i18next";
export default function ContactModal({ isOpen, onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axiosClient.post("/api/contact", formData);

      if (data.success) {
        setShowSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      alert(error.message); // handled by axios interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      {!showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="relative bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl p-8 animate-fadeIn">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

          <h2 className="text-lg font-semibold text-gray-900 mb-6">
  {t("contactTitle")}
</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
               <label className="text-sm text-gray-600">{t("lastName")}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
               <label className="text-sm text-gray-600">{t("firstName")}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
             <label className="text-sm text-gray-600">{t("email")}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
             <label className="text-sm text-gray-600">{t("yourMessage")}</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
              >
               {loading ? t("sending") : t("sendEmail")}
              </button>
            </form>
          </div>
        </div>
      )}

      <SuccessModal isOpen={showSuccess} onClose={handleSuccessClose} />
    </>
  );
}