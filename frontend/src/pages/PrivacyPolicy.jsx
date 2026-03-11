import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useTranslation } from "react-i18next";
const sections = [
  { id: "introduction", label: "privacy_intro_title" },
  { id: "controller", label: "privacy_controller_title" },
  { id: "data-collect", label: "privacy_data_collect_title" },
  { id: "legal-basis", label: "privacy_legal_basis_title" },
  { id: "use-data", label: "privacy_use_data_title" },
  { id: "retention", label: "privacy_retention_title" },
  { id: "rights", label: "privacy_rights_title" },
  { id: "sharing", label: "privacy_sharing_title" },
  { id: "security", label: "privacy_security_title" },
  { id: "transfer", label: "privacy_transfer_title" },
  { id: "cookies", label: "privacy_cookies_title" },
  { id: "changes", label: "privacy_changes_title" },
  { id: "contact", label: "privacy_contact_title" },
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState("introduction");
  const { t } = useTranslation();
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

          {/* LEFT SIDEBAR */}
          <div className="hidden md:block w-64 sticky top-28 h-fit">
            <div className="bg-[#F6F9FC] p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                {t("privacySections")}
              </h3>

              <div className="space-y-3 text-sm">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block text-left w-full transition ${active === section.id
                        ? "text-[rgb(51,210,152)] font-semibold"
                        : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {t(section.label)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 bg-[#F6F9FC] p-10">
            <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-6">
              {t("privacyLegalDocument")}
            </h2>

            <h1 className="text-3xl font-bold text-black">
              {t("privacyTitle")}
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              {t("privacyLastUpdated")}
            </p>

            <div className="mt-10 space-y-12 text-gray-700 text-sm leading-relaxed">

              {/* 1 */}
              <section id="introduction">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  {t("privacy_intro_title")}
                </h2>
                <p>
                  {t("privacy_intro_p1")}
                </p>
                <p className="mt-4">
                  {t("privacy_intro_p2")}
                </p>
              </section>

              {/* 2 */}
              <section id="controller">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  {t("privacy_controller_title")}
                </h2>
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <p className="font-bold text-black">IJATECH</p>
                  <p>60 rue de l'Aigle</p>
                  <p>92250 La Garenne-Colombes, France</p>
                  <p className="mt-3 text-blue-700">
                    {t("privacy_email")}: contact@safeai-tech.com
                  </p>
                  <p className="mt-4">
                    {t("privacy_controller_company")}
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section id="data-collect">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  {t("privacy_data_collect_title")}
                </h2>

                <h3 className="font-semibold mt-4">
                  {t("privacy_data_collect_audio_title")}
                </h3>

                <p>
                  {t("privacy_data_collect_audio_p1")}
                  <span className="text-[rgb(51,210,152)] font-medium">
                    {" "}{t("privacy_data_collect_audio_p2")}
                  </span>{" "}
                  {t("privacy_data_collect_audio_p3")}
                </p>

                <h3 className="font-semibold mt-4">
                  {t("privacy_data_collect_analysis_title")}
                </h3>

                <p>{t("privacy_data_collect_analysis_p")}</p>

                <h3 className="font-semibold mt-4">
                  {t("privacy_data_collect_contact_title")}
                </h3>

                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{t("privacy_data_collect_contact_firstname")}</li>
                  <li>{t("privacy_data_collect_contact_lastname")}</li>
                  <li>{t("privacy_data_collect_contact_email")}</li>
                  <li>{t("privacy_data_collect_contact_company")}</li>
                  <li>{t("privacy_data_collect_contact_role")}</li>
                  <li>{t("privacy_data_collect_contact_industry")}</li>
                  <li>{t("privacy_data_collect_contact_company_size")}</li>
                  <li>{t("privacy_data_collect_contact_usecase")}</li>
                </ul>

                <h3 className="font-semibold mt-4">
                  {t("privacy_data_collect_feedback_title")}
                </h3>

                <p>{t("privacy_data_collect_feedback_p")}</p>

                <h3 className="font-semibold mt-4">
                  {t("privacy_data_collect_technical_title")}
                </h3>

                <p>{t("privacy_data_collect_technical_p")}</p>
              </section>

              {/* 6 TABLE SECTION */}
              <section id="retention">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                 {t("privacy_retention_title")}
                </h2>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-[#F6F9FC] text-blue-500">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          {t("privacy_retention_table_datatype")}
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          {t("privacy_retention_table_period")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          {t("privacy_retention_audio")}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {t("privacy_retention_audio_period")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          {t("privacy_retention_analysis")}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {t("privacy_retention_analysis_period")}

                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          {t("privacy_retention_contact")}

                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                                                   {t("privacy_retention_contact_period")}

                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                   {t("privacy_retention_feedback")}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                         {t("privacy_retention_feedback_period")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                         {t("privacy_retention_logs")}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                        {t("privacy_retention_logs_period")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 7 */}
              <section id="rights">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
              {t("privacy_rights_title_full")}
                </h2>

                <p>{t("privacy_rights_intro")}</p>

                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>
                    <strong>{t("privacy_right_access")}</strong> {t("privacy_right_access_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_right_rectification")}</strong> {t("privacy_right_rectification_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_right_erasure")}</strong> {t("privacy_right_erasure_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_right_restrict")}</strong> {t("privacy_right_restrict_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_right_portability")}</strong> {t("privacy_right_portability_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_right_object")}</strong>{t("privacy_right_object_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_right_withdraw")}</strong> {t("privacy_right_withdraw_desc")}
                  </li>
                </ul>

                <p className="mt-4">
                {t("privacy_rights_contact")}
                  <span className="text-[rgb(51,210,152)]">
                    contact@safeai-tech.com
                  </span>
                </p>
              </section>

              {/* 8 */}
              <section id="sharing">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                 {t("privacy_sharing_title")}
                </h2>

                <p>{t("privacy_sharing_intro")}:</p>

                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>
                    <strong>{t("privacy_sharing_service")}:</strong> {t("privacy_sharing_service_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_sharing_legal")}:</strong> {t("privacy_sharing_legal_desc")}
                  </li>
                  <li>
                    <strong>{t("privacy_sharing_transfer")}:</strong> {t("privacy_sharing_transfer_desc")}
                  </li>
                </ul>

                <p className="mt-4">
                {t("privacy_sharing_note")}
                </p>
              </section>

              {/* 9 */}
              <section id="security">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                 {t("privacy_security_title")}
                </h2>

                <p>
               {t("privacy_security_intro")}
                </p>

                <ul className="list-disc ml-6 mt-3 space-y-2">
                  <li>{t("privacy_security_encryption")}</li>
                  <li>{t("privacy_security_cloud")}</li>
                  <li>{t("privacy_security_access")}</li>
                  <li>{t("privacy_security_audits")}</li>
                  <li>{t("privacy_security_deletion")}</li>
                </ul>
              </section>

              {/* 10 */}
              <section id="transfer">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  {t("privacy_transfer_title")}
                </h2>

                <p>
                 {t("privacy_transfer_text")}.
                </p>
              </section>

              {/* 11 */}
              <section id="cookies">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                 {t("privacy_transfer_title")}
                </h2>

                <p>
                {t("privacy_cookies_text")}
                </p>
              </section>

              {/* 12 */}
              <section id="changes">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                 {t("privacy_changes_title")}
                </h2>

                <p>
                {t("privacy_changes_text")}
                </p>
              </section>

              {/* 13 */}
              <section id="contact">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
               {t("privacy_contact_title")}
                </h2>
                <p>{t("privacy_contact_intro")}:</p>
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <p>Email: <span className="text-[rgb(51,210,152)]">contact@safeai-tech.com</span></p>
                  <p>IJATECH</p>
                  <p>60 rue de l'Aigle</p>
                  <p>92250 La Garenne-Colombes, France</p>
                  <p className="mt-4">
                  {t("privacy_contact_email_label")}:  <span className="text-blue-700">www.cnil.fr</span>
                  </p>


                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
