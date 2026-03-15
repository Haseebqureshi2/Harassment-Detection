import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";


export default function TermsOfService() {
  const [active, setActive] = useState("introduction");
const { t } = useTranslation();
const sections = [
  { id: "introduction", label: t("terms_intro_title") },
  { id: "company", label: t("terms_company_title") },
  { id: "service", label: t("terms_service_title") },
  { id: "prototype", label: t("terms_prototype_title") },
  { id: "obligations", label: t("terms_obligations_title") },
  { id: "rights", label: t("terms_rights_title") },
  { id: "processing", label: t("terms_processing_title") },
  { id: "ip", label: t("terms_ip_title") },
  { id: "disclaimers", label: t("terms_disclaimers_title") },
  { id: "liability", label: t("terms_liability_title") },
  { id: "indemnification", label: t("terms_indemnification_title") },
  { id: "termination", label: t("terms_termination_title") },
  { id: "modifications", label: t("terms_modifications_title") },
  { id: "law", label: t("terms_law_title") },
  { id: "dispute", label: t("terms_dispute_title") },
  { id: "severability", label: t("terms_severability_title") },
  { id: "contact", label: t("terms_contact_title") },
];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#F6F9FC] px-6 py-16">
        <div className="max-w-7xl mx-auto flex gap-10">

          {/* Sidebar */}
          <div className="hidden md:block w-64 sticky top-28 h-fit">
            <div className="bg-[#F6F9FC] p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
              {t("terms_contents")}
              </h3>

              <div className="space-y-3 text-sm">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block text-left w-full transition ${
                      active === section.id
                        ? "text-[rgb(51,210,152)] font-semibold"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#F6F9FC] p-10">
            <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-6">
             {t("terms_legal_agreement")}
            </h2>

            <h1 className="text-3xl font-bold text-black">
             {t("terms_page_title")}
            </h1>

            <p className="text-sm text-gray-500 mt-2">
            {t("terms_last_updated")}
            </p>

            <div className="mt-10 space-y-12 text-gray-700 text-sm leading-relaxed">

              {/* 1 */}
          <section id="introduction">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_intro_title")}
  </h2>

  <p>{t("terms_intro_p1")}</p>

  <p className="mt-4">
    {t("terms_intro_p2")}
  </p>
</section>

              {/* 2 */}
            <section id="company">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_company_title")}
  </h2>
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <p className="font-bold">IJATECH</p>
                  <p>60 rue de l'Aigle</p>
                  <p>92250 La Garenne-Colombes, France</p>
                  <p className="mt-3 text-[rgb(51,210,152)]">
                    Email: contact@safeai-tech.com
                  </p>
                </div>
              </section>

              {/* 3 */}
             <section id="service">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_service_title")}
  </h2>

  <p>{t("terms_service_p1")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_feature_upload")}</li>
    <li>{t("terms_feature_detection")}</li>
    <li>{t("terms_feature_timestamp")}</li>
    <li>{t("terms_feature_reports")}</li>
    <li>{t("terms_feature_multicontext")}</li>
  </ul>
</section>

              {/* 4 */}
          <section id="prototype">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_prototype_title")}
  </h2>

  <div className="bg-yellow-50 border border-red-100 rounded-xl p-6">
    <p className="font-semibold text-yellow-700 uppercase">
      {t("terms_prototype_notice")}
    </p>

    <p className="mt-3 text-gray-700 leading-relaxed">
      {t("terms_prototype_text")}
    </p>
  </div>
</section>
{/* 5 */}
<section id="obligations">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_obligations_title")}
  </h2>

  <p>{t("terms_obligations_intro")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_obligation_accurate")}</li>
    <li>{t("terms_obligation_lawful")}</li>
    <li>{t("terms_obligation_rights")}</li>
    <li>{t("terms_obligation_upload_right")}</li>
    <li>{t("terms_obligation_laws")}</li>
    <li>{t("terms_obligation_reverse")}</li>
    <li>{t("terms_obligation_harm")}</li>
  </ul>
</section>

{/* 6 */}
{/* 6 */}
<section id="rights">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_rights_title")}
  </h2>

  <p>{t("terms_rights_intro")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_rights_ownership")}</li>
    <li>{t("terms_rights_consents")}</li>
    <li>{t("terms_rights_laws")}</li>
    <li>{t("terms_rights_minors")}</li>
  </ul>

  <p className="mt-4">
    {t("terms_rights_license")}
  </p>
</section>

{/* 7 */}
<section id="processing">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_processing_title")}
  </h2>

  <p>{t("terms_processing_intro")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_processing_delete")}</li>
    <li>{t("terms_processing_retention")}</li>
    <li>{t("terms_processing_no_storage")}</li>
    <li>{t("terms_processing_eu")}</li>
  </ul>
</section>

{/* 8 */}
<section id="ip">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_ip_title")}
  </h2>

  <p>{t("terms_ip_intro")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_ip_copy")}</li>
    <li>{t("terms_ip_trademark")}</li>
    <li>{t("terms_ip_reverse")}</li>
    <li>{t("terms_ip_automation")}</li>
  </ul>
</section>
{/* 9 */}
{/* 9 */}
<section id="disclaimers">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_disclaimers_title")}
  </h2>

  <div className="bg-white border border-gray-300 rounded-xl p-6">
    <p className="font-semibold uppercase">
      {t("terms_disclaimers_notice")}
    </p>

    <ul className="list-disc ml-6 mt-4 space-y-2">
      <li>{t("terms_disclaimers_accuracy")}</li>
      <li>{t("terms_disclaimers_fitness")}</li>
      <li>{t("terms_disclaimers_noninfringement")}</li>
      <li>{t("terms_disclaimers_uninterrupted")}</li>
    </ul>

    <p className="bg-yellow-50 border border-red-100 rounded-xl p-6 text-red-400 mt-4">
      {t("terms_disclaimers_ai_warning")}
    </p>
  </div>
</section>

{/* 10 */}
<section id="liability">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_liability_title")}
  </h2>

  <p>{t("terms_liability_intro")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_liability_indirect")}</li>
    <li>{t("terms_liability_total")}</li>
    <li>{t("terms_liability_decisions")}</li>
    <li>{t("terms_liability_user_content")}</li>
  </ul>

  <p className="mt-4">
    {t("terms_liability_exception")}
  </p>
</section>
{/* 11 */}
{/* 11 */}
<section id="indemnification">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_indemnification_title")}
  </h2>

  <p>{t("terms_indemnification_text")}</p>
</section>

{/* 12 */}
<section id="termination">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_termination_title")}
  </h2>

  <p>{t("terms_termination_intro")}</p>

  <p className="mt-4">{t("terms_termination_upon")}</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>{t("terms_termination_access")}</li>
    <li>{t("terms_termination_cancel")}</li>
    <li>{t("terms_termination_delete")}</li>
  </ul>
</section>

{/* 13 */}
<section id="modifications">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_modifications_title")}
  </h2>

  <p>{t("terms_modifications_text")}</p>
</section>

{/* 14 */}
<section id="law">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    {t("terms_law_title")}
  </h2>

  <p>{t("terms_law_text")}</p>

  <p className="mt-4">{t("terms_law_eu")}</p>
</section>

{/* 15 */}
<section id="dispute">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
  {t("disputeTitle")}
  </h2>

  <p>  {t("disputeText1")}</p>

  <p className="mt-4">  {t("disputeText2")}</p>

  <a
    href="https://ec.europa.eu/consumers/odr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[rgb(51,210,152)] underline"
  >
    https://ec.europa.eu/consumers/odr
  </a>
</section>

{/* 16 */}
<section id="severability">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
     {t("severabilityTitle")}
  </h2>

  <p>  {t("severabilityText")}</p>
</section>

{/* 17 */}
<section id="contact">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
   {t("contactTerm")}
  </h2>

  <div className="bg-white rounded-xl border border-gray-300 p-6">
    <p> {t("email")}: contact@safeai-tech.com</p>
    <p> {t("company")}</p>
    <p> {t("address1")}</p>
    <p> {t("address2")}</p>
  </div>

  <p className="mt-6 text-gray-500"> {t("copyright")}</p>
</section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
