import React, { useState } from 'react';
import ContactModal from "../components/contact/ContactModal";
import logo from "../assets/safeai.png";
import { useTranslation } from "react-i18next"; // adjust path
import { Link } from "react-router-dom";

const Header = () => {

const { t, i18n } = useTranslation();
const currentLang = i18n.language;
 
  const [isContactOpen, setIsContactOpen] = useState(false);

 const toggleLanguage = () => {
  const newLang = i18n.language === "EN" ? "FR" : "EN";
  i18n.changeLanguage(newLang);
};


  return (
    <>
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-1 py-1 flex justify-between items-center gap-1">
        
        {/* Logo Section */}
    <Link
  to="/"
  className="flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
>
  <img
    src={logo}
    alt="SafeAI Logo"
    className="w-20 h-20 object-contain"
  />

</Link>

        {/* Right Section */}
        <div className="flex items-center gap-6 ml-auto">
          
          {/* Contact Us Link */}
       <button
  onClick={() => setIsContactOpen(true)}
  className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors hidden md:block"
>
   {t("contactUs")}
</button>
          {/* Watch Demo Button with Red YouTube Play Icon */}
          {/* <button 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg whitespace-nowrap"
            onClick={() => {
              console.log('Watch demo clicked');
            }}
          >
            <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
           {t("watchDemo")}
          </button> */}

          {/* Language Toggle Switch */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center h-10 rounded-full px-1 transition-colors duration-300 ${
             currentLang === 'EN'
                ? 'bg-gray-300' 
                : 'bg-gray-300'
            }`}
            aria-label="Toggle language"
          >
            {/* EN Button */}
            <div className={`w-9 h-8 flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-300 ${
            currentLang === 'EN'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600'
            }`}>
              EN
            </div>
            
            {/* FR Button */}
            <div className={`w-9 h-8 flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-300 ${
             currentLang === 'FR'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600'
            }`}>
              FR
            </div>
          </button>
        </div>
      </div>
    </header>
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
         </>
  );
};

export default Header;