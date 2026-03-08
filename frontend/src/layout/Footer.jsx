import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logosafe.png";
export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-gray-100 ">
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">

                {/* Logo + Brand */}
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 mb-6 hover:opacity-80 transition-opacity"
                >
                    {/* Replace this with your logo image */}
                    {/* Example: <img src="/logo.png" alt="SafeAI Logo" className="w-8 h-8" /> */}
                    <img
                        src={logo}
                        alt="SafeAI Logo"
                        className="w-12 h-12 object-contain"
                    />

                    <span className="text-lg font-semibold text-gray-800">
                        SafeAI
                    </span>
                </Link>

                {/* Links */}
                <div className="flex justify-center gap-8 text-sm text-gray-600 mb-8">
                    <Link
                        to="/privacy-policy"
                        className="hover:text-gray-900 transition-colors"
                    >
                        {t("privacyPolicy")}
                    </Link>

                    <Link
                        to="/terms-of-service"
                        className="hover:text-gray-900 transition-colors"
                    >
                        {t("termsOfService")}
                    </Link>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Company Info */}
                <div className="text-xs text-gray-500 space-y-2">
                    <p>SafeAI is a product of IJATECH</p>
                    <p>60 rue de l’Aigle, 92520 La Garenne-Colombes, France</p>
                    <p>© 2026 IJATECH. All rights reserved. GDPR compliant.</p>
                </div>

            </div>
        </footer>
    );
}
