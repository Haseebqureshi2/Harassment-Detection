// src/components/GenericResultModal.jsx

import { useEffect } from "react";

export default function GenericResultModal({
  isOpen,
  onClose,
  icon,
  title,
  description,
  buttonText = "Close",
  onButtonClick,
}) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onButtonClick || onClose}
          className="px-10 h-12 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium transition"
        >
          {buttonText}
        </button>

      </div>
    </div>
  );
}
