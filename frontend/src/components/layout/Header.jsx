import { Youtube } from "lucide-react";
import logo from "../../assets/logo.png"; // adjust path if needed
import ContactModal from "../contact/ContactModal";
import { useState } from "react";
export default function Header({ language = "EN", setLanguage }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="SafeAI Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="font-semibold text-gray-900 text-sm">
            SafeAI
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
         <button
        onClick={() => setIsContactOpen(true)}
        className="text-sm text-gray-600"
      >
        Contact us
      </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition">
            <Youtube size={16} />
            Watch Demo
          </button>

          <div className="flex items-center bg-gray-100 rounded-md p-1">
            <button
              onClick={() => setLanguage?.("EN")}
              className={`px-3 py-1 text-xs rounded-md transition ${
                language === "EN"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage?.("FR")}
              className={`px-3 py-1 text-xs rounded-md transition ${
                language === "FR"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              FR
            </button>
          </div>

        </div>
      </div>
        <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </header>
  );
}
