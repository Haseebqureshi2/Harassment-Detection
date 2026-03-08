import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "company", label: "2. Company Information" },
  { id: "service", label: "3. Service Description" },
  { id: "prototype", label: "4. Prototype Status" },
  { id: "obligations", label: "5. User Obligations" },
  { id: "rights", label: "6. Content Rights & Consent" },
  { id: "processing", label: "7. Data Processing" },
  { id: "ip", label: "8. Intellectual Property" },
  { id: "disclaimers", label: "9. Disclaimers" },
  { id: "liability", label: "10. Limitation of Liability" },
  { id: "indemnification", label: "11. Indemnification" },
  { id: "termination", label: "12. Termination" },
  { id: "modifications", label: "13. Modifications to Terms" },
  { id: "law", label: "14. Governing Law" },
  { id: "dispute", label: "15. Dispute Resolution" },
  { id: "severability", label: "16. Severability" },
  { id: "contact", label: "17. Contact Us" },
];

export default function TermsOfService() {
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

          {/* Sidebar */}
          <div className="hidden md:block w-64 sticky top-28 h-fit">
            <div className="bg-[#F6F9FC] p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                CONTENTS
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
              Legal Agreement
            </h2>

            <h1 className="text-3xl font-bold text-black">
              Terms of Service
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
                  Welcome to SafeAI. These Terms of Service ("Terms") govern your
                  access to and use of SafeAI, a voice sexual harassment detection
                  solution ("Service") developed and operated by IJATECH.
                </p>
                <p className="mt-4">
                  By accessing or using our Service, you agree to be bound by these
                  Terms. If you disagree with any part of the Terms, you may not access the Service.
                </p>
              </section>

              {/* 2 */}
              <section id="company">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  2. Company Information
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
                  3. Service Description
                </h2>
                <p>
                  SafeAI provides an AI-powered voice sexual harassment detection
                  service that analyzes audio and video recordings.
                </p>

                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Audio/video file upload and analysis</li>
                  <li>Sexual harassment detection and risk scoring</li>
                  <li>Timestamped findings and evidence generation</li>
                  <li>PDF and JSON report generation</li>
                  <li>Multi-context detection (VTC, meetings, live streams, e-learning)</li>
                </ul>
              </section>

              {/* 4 */}
              <section id="prototype">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  4. Prototype Status
                </h2>
<div className="bg-yellow-50 border border-red-100 rounded-xl p-6">
  <p className="font-semibold text-yellow-700 uppercase">
    ⚠️ Important Notice:
  </p>

  <p className="mt-3 text-gray-700 leading-relaxed">
    The current version of SafeAI is a prototype for testing and evaluation purposes.
    Results may not be 100% accurate and should not be used as the sole basis for
    legal, employment, or other significant decisions. We are continuously training
    and improving our AI model based on user feedback.
  </p>
</div>

              </section>

{/* 5 */}
<section id="obligations">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    5. User Obligations
  </h2>

  <p>By using our Service, you agree to:</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>Provide accurate information when requested</li>
    <li>Use the Service only for lawful purposes</li>
    <li>Not upload content that violates the rights of others</li>
    <li>
      Ensure you have the legal right to upload and analyze the audio/video content
    </li>
    <li>
      Comply with all applicable laws and regulations, including data protection laws
    </li>
    <li>
      Not attempt to reverse engineer, decompile, or hack the Service
    </li>
    <li>
      Not use the Service to harass, abuse, or harm others
    </li>
  </ul>
</section>

{/* 6 */}
<section id="rights">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    6. Content Rights & Consent
  </h2>

  <p>You represent and warrant that:</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>You own or have the necessary rights to the content you upload</li>
    <li>
      You have obtained all necessary consents from individuals whose voices
      appear in the recordings (where legally required)
    </li>
    <li>
      Your use of the Service complies with applicable privacy and wiretapping laws
    </li>
    <li>
      You will not upload content containing minors without appropriate legal authorization
    </li>
  </ul>

  <p className="mt-4">
    SafeAI does not claim ownership of your content. However, you grant us a
    limited license to process your content solely for providing the Service.
  </p>
</section>

{/* 7 */}
<section id="processing">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    7. Data Processing
  </h2>

  <p>
    We process your data in accordance with our Privacy Policy. Key points:
  </p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>Audio/video files are deleted immediately after analysis</li>
    <li>Analysis results are retained for a maximum of 24 hours</li>
    <li>We do not store or archive your audio/video content</li>
    <li>Your data is processed in the EU</li>
  </ul>
</section>

{/* 8 */}
<section id="ip">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    8. Intellectual Property
  </h2>

  <p>
    The Service, including its technology, algorithms, software, design, and
    content, is owned by SafeAI and protected by intellectual property laws.
    You may not:
  </p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>Copy, modify, or distribute our technology</li>
    <li>Use our trademarks without permission</li>
    <li>Reverse engineer or attempt to extract our AI models</li>
    <li>
      Use automated systems to access the Service without authorization
    </li>
  </ul>
</section>
{/* 9 */}
<section id="disclaimers">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    9. Disclaimers
  </h2>

  <div className="bg-white border border-gray-300 rounded-xl p-6">
    <p className="font-semibold uppercase">
      THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
    </p>

    <ul className="list-disc ml-6 mt-4 space-y-2">
      <li>Accuracy or completeness of analysis results</li>
      <li>Fitness for a particular purpose</li>
      <li>Non-infringement</li>
      <li>Uninterrupted or error-free service</li>
    </ul>

    <p className="bg-yellow-50 border border-red-100 rounded-xl p-6 text-red-400 mt-4">
      AI analysis results should not be used as the sole basis for legal,
      employment, disciplinary, or other significant decisions. Human review
      and judgment are always recommended.
    </p>
  </div>
</section>

{/* 10 */}
<section id="liability">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    10. Limitation of Liability
  </h2>

  <p>To the maximum extent permitted by applicable law:</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>
      SafeAI shall not be liable for any indirect, incidental, special,
      consequential, or punitive damages
    </li>
    <li>
      Our total liability shall not exceed the amount paid by you (if any)
      for the Service in the 12 months prior to the claim
    </li>
    <li>
      We are not liable for decisions made based on our analysis results
    </li>
    <li>
      We are not liable for content uploaded by users
    </li>
  </ul>

  <p className="mt-4">
    These limitations do not apply where prohibited by law, including
    liability for gross negligence or willful misconduct.
  </p>
</section>

{/* 11 */}
<section id="indemnification">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    11. Indemnification
  </h2>

  <p>
    You agree to indemnify and hold harmless SafeAI, its officers,
    directors, employees, and agents from any claims, damages, losses,
    or expenses arising from your use of the Service, your content,
    or your violation of these Terms.
  </p>
</section>

{/* 12 */}
<section id="termination">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    12. Termination
  </h2>

  <p>
    We may terminate or suspend your access to the Service immediately,
    without prior notice, for any reason, including if you breach these Terms.
  </p>

  <p className="mt-4">Upon termination:</p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>Your right to use the Service will cease immediately</li>
    <li>Any pending analyses will be cancelled</li>
    <li>
      We may delete your data in accordance with our Privacy Policy
    </li>
  </ul>
</section>

{/* 13 */}
<section id="modifications">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    13. Modifications to Terms
  </h2>

  <p>
    We reserve the right to modify these Terms at any time. We will notify
    users of significant changes via email or a notice on our website.
    Continued use of the Service after changes constitutes acceptance
    of the modified Terms.
  </p>
</section>

{/* 14 */}
<section id="law">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    14. Governing Law & Jurisdiction
  </h2>

  <p>
    These Terms are governed by the laws of France. Any disputes arising
    from these Terms or the Service shall be subject to the exclusive
    jurisdiction of the courts of Paris, France.
  </p>

  <p className="mt-4">
    For EU consumers: You may also be entitled to bring claims in the
    courts of your country of residence and benefit from mandatory
    consumer protection laws.
  </p>
</section>

{/* 15 */}
<section id="dispute">
  <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
    15. Dispute Resolution
  </h2>

  <p>
    In the event of a dispute, we encourage you to contact us first at
    contact@safeai-tech.com to seek an amicable resolution.
  </p>

  <p className="mt-4">
    EU consumers may use the European Online Dispute Resolution platform:
  </p>

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
    16. Severability
  </h2>

  <p>
    If any provision of these Terms is found to be unenforceable or invalid,
    that provision will be limited or eliminated to the minimum extent
    necessary, and the remaining provisions will remain in full force
    and effect.
  </p>
</section>

              {/* 17 */}
              <section id="contact">
                <h2 className="text-lg font-semibold text-[rgb(51,210,152)] mb-3">
                  17. Contact Us
                </h2>
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <p>Email: contact@safeai-tech.com</p>
                  <p>IJATECH</p>
                  <p>60 rue de l'Aigle</p>
                  <p>92250 La Garenne-Colombes, France</p>
                </div>

                <p className="mt-6 text-gray-500">
                  © 2026 IJATECH. All rights reserved. SafeAI is a product of IJATECH.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
