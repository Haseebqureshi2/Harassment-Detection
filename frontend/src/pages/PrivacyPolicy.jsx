import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "controller", label: "2. Data Controller" },
  { id: "data-collect", label: "3. Data We Collect" },
  { id: "legal-basis", label: "4. Legal Basis" },
  { id: "use-data", label: "5. How We Use Your Data" },
  { id: "retention", label: "6. Data Retention" },
  { id: "rights", label: "7. Your Rights" },
  { id: "sharing", label: "8. Data Sharing" },
  { id: "security", label: "9. Data Security" },
  { id: "transfer", label: "10. International Data Transfers" },
  { id: "cookies", label: "11. Cookies" },
  { id: "changes", label: "12. Changes to This Policy" },
  { id: "contact", label: "13. Contact Us" },
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState("introduction");

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
                SECTIONS
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

          {/* MAIN CONTENT */}
          <div className="flex-1 bg-[#F6F9FC] p-10">
            <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-6">
              LEGAL DOCUMENT
            </h2>

            <h1 className="text-3xl font-bold text-black">
              Privacy Policy
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Last updated: February 2026
            </p>

            <div className="mt-10 space-y-12 text-gray-700 text-sm leading-relaxed">

              {/* 1 */}
              <section id="introduction">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  1. Introduction
                </h2>
                <p>
                  IJATECH ("IJATECH", "we", "us", or "our") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you
                  use SafeAI, our voice harassment detection solution.
                </p>
                <p className="mt-4">
                  We comply with the General Data Protection Regulation (GDPR)
                  and other applicable data protection laws. By using SafeAI,
                  you consent to the practices described in this policy.
                </p>
              </section>

              {/* 2 */}
              <section id="controller">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  2. Data Controller
                </h2>
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <p className="font-bold text-black">IJATECH</p>
                  <p>60 rue de l'Aigle</p>
                  <p>92250 La Garenne-Colombes, France</p>
                  <p className="mt-3 text-blue-700">
                    Email: contact@safeai-tech.com
                  </p>
                  <p className="mt-4">
                    SafeAI is a voice sexual harassment detection solution developed and operated by IJATECH.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section id="data-collect">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  3. Data We Collect
                </h2>

                <h3 className="font-semibold mt-4">3.1 Audio/Video Files</h3>
                <p>
                  When you upload a file for analysis, we temporarily process the audio/video content.
                  <span className="text-[rgb(51,210,152)] font-medium">
                    {" "}Files are automatically deleted immediately after analysis is complete.
                  </span>{" "}
                  We do not store, archive, or retain any audio or video content.
                </p>

                <h3 className="font-semibold mt-4">3.2 Analysis Results</h3>
                <p>
                  We may temporarily store analysis results (risk scores, findings, timestamps)
                  to generate your report. These are deleted within 24 hours unless you request otherwise.
                </p>

                <h3 className="font-semibold mt-4">3.3 Contact Information</h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>First name</li>
                  <li>Last name (optional)</li>
                  <li>Email address</li>
                  <li>Company name (optional)</li>
                  <li>Role/Job title</li>
                  <li>Industry</li>
                  <li>Company size (optional)</li>
                  <li>Use case description (optional)</li>
                </ul>

                <h3 className="font-semibold mt-4">3.4 Feedback Data</h3>
                <p>
                  If you provide feedback, we collect your ratings and comments to improve our service.
                </p>

                <h3 className="font-semibold mt-4">3.5 Technical Data</h3>
                <p>
                  We automatically collect certain technical information including IP address,
                  browser type, device information, and usage data for security and analytics purposes.
                </p>
              </section>

              {/* 6 TABLE SECTION */}
              <section id="retention">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  6. Data Retention
                </h2>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-[#F6F9FC] text-blue-500">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Data Type
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Retention Period
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Audio/Video files
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Deleted immediately after analysis
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Analysis results
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          24 hours
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Contact information
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          3 years or until deletion request
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Feedback data
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          3 years (anonymized)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Technical logs
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          12 months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

{/* 7 */}
<section id="rights">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    7. Your Rights (GDPR)
  </h2>

  <p>Under GDPR, you have the following rights:</p>

  <ul className="list-disc ml-6 mt-3 space-y-2">
    <li>
      <strong>Right of Access:</strong> Request a copy of your personal data
    </li>
    <li>
      <strong>Right to Rectification:</strong> Request correction of inaccurate data
    </li>
    <li>
      <strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")
    </li>
    <li>
      <strong>Right to Restrict Processing:</strong> Limit how we use your data
    </li>
    <li>
      <strong>Right to Data Portability:</strong> Receive your data in a machine-readable format
    </li>
    <li>
      <strong>Right to Object:</strong> Object to processing based on legitimate interests
    </li>
    <li>
      <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time
    </li>
  </ul>

  <p className="mt-4">
    To exercise these rights, contact us at{" "}
    <span className="text-[rgb(51,210,152)]">
      contact@safeai-tech.com
    </span>
  </p>
</section>

{/* 8 */}
<section id="sharing">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    8. Data Sharing
  </h2>

  <p>We may share your data with:</p>

  <ul className="list-disc ml-6 mt-3 space-y-2">
    <li>
      <strong>Service Providers:</strong> Cloud hosting, email delivery, analytics (all GDPR-compliant)
    </li>
    <li>
      <strong>Legal Authorities:</strong> When required by law or legal process
    </li>
    <li>
      <strong>Business Transfers:</strong> In connection with a merger or acquisition
    </li>
  </ul>

  <p className="mt-4">
    We do not sell your personal data to third parties.
  </p>
</section>

{/* 9 */}
<section id="security">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    9. Data Security
  </h2>

  <p>
    We implement appropriate technical and organizational measures to protect your data:
  </p>

  <ul className="list-disc ml-6 mt-3 space-y-2">
    <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
    <li>Secure cloud infrastructure (EU-based servers)</li>
    <li>Access controls and authentication</li>
    <li>Regular security audits</li>
    <li>Automatic file deletion after processing</li>
  </ul>
</section>

{/* 10 */}
<section id="transfer">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    10. International Data Transfers
  </h2>

  <p>
    Your data is processed within the European Economic Area (EEA). 
    If we transfer data outside the EEA, we ensure appropriate safeguards 
    are in place (Standard Contractual Clauses or adequacy decisions).
  </p>
</section>

{/* 11 */}
<section id="cookies">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    11. Cookies
  </h2>

  <p>
    We use essential cookies for site functionality and optional analytics cookies 
    with your consent. You can manage cookie preferences through your browser settings.
  </p>
</section>

{/* 12 */}
<section id="changes">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    12. Changes to This Policy
  </h2>

  <p>
    We may update this policy from time to time. We will notify you of significant 
    changes via email or a notice on our website.
  </p>
</section>

              {/* 13 */}
              <section id="contact">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  13. Contact Us
                </h2>
                <p>For any questions about this Privacy Policy or to exercise your rights:</p>
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p>Email: <span className="text-[rgb(51,210,152)]">contact@safeai-tech.com</span></p>
                <p>IJATECH</p>
                <p>60 rue de l'Aigle</p>
                <p>92250 La Garenne-Colombes, France</p>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the French Data Protection Authority (CNIL):  <span className="text-blue-700">www.cnil.fr</span>
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
