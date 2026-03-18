
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  EN: {
    translation: {
      
  recommendation_message: "These are suggested actions based on the severity level detected by our AI. In production, our API returns the severity and findings — you decide how to handle them in your own system. If our AI does not detect any context, we will not be able to suggest a recommendation table.",

      privacySections: "SECTIONS",
privacyLegalDocument: "LEGAL DOCUMENT",
privacy_cookies_text:
"We use essential cookies for site functionality and optional analytics cookies with your consent. You can manage cookie preferences through your browser settings.",

privacy_changes_text:
"We may update this policy from time to time. We will notify you of significant changes via email or a notice on our website.",

privacy_contact_intro:
"For any questions about this Privacy Policy or to exercise your rights:",

privacy_contact_email_label: "Email",

privacy_contact_cnil_text:
"You also have the right to lodge a complaint with the French Data Protection Authority (CNIL):",

privacy_contact_copyright:
"© 2026 IJATECH. All rights reserved. SafeAI is a product of IJATECH.",
privacyTitle: "Privacy Policy",
privacyLastUpdated: "Last updated: February 2026",
privacy_data_collect_title: "3. Data We Collect",
privacy_legal_basis_title: "4. Legal Basis",
privacy_use_data_title: "5. How We Use Your Data",
privacy_retention_title: "6. Data Retention",
privacy_rights_title: "7. Your Rights",
privacy_sharing_title: "8. Data Sharing",
privacy_security_title: "9. Data Security",
privacy_transfer_title: "10. International Data Transfers",
privacy_cookies_title: "11. Cookies",
privacy_changes_title: "12. Changes to This Policy",
privacy_contact_title: "13. Contact Us",
privacy_intro_title: "1. Introduction",
privacy_intro_p1:
  'IJATECH ("IJATECH", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use SafeAI, our voice harassment detection solution.',
privacy_intro_p2:
  "We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. By using SafeAI, you consent to the practices described in this policy.",

privacy_controller_title: "2. Data Controller",
privacy_controller_company:
  "SafeAI is a voice sexual harassment detection solution developed and operated by IJATECH.",
  privacy_data_collect_audio_title: "3.1 Audio/Video Files",
privacy_data_collect_audio_p1:
  "When you upload a file for analysis, we temporarily process the audio/video content.",
privacy_data_collect_audio_p2:
  "Files are automatically deleted immediately after analysis is complete.",
privacy_data_collect_audio_p3:
  "We do not store, archive, or retain any audio or video content.",

privacy_data_collect_analysis_title: "3.2 Analysis Results",
privacy_data_collect_analysis_p:
  "We may temporarily store analysis results (risk scores, findings, timestamps) to generate your report. These are deleted within 24 hours unless you request otherwise.",

privacy_data_collect_contact_title: "3.3 Contact Information",

privacy_data_collect_contact_firstname: "First name",
privacy_data_collect_contact_lastname: "Last name (optional)",
privacy_data_collect_contact_email: "Email address",
privacy_data_collect_contact_company: "Company name (optional)",
privacy_data_collect_contact_role: "Role/Job title",
privacy_data_collect_contact_industry: "Industry",
privacy_data_collect_contact_company_size: "Company size (optional)",
privacy_data_collect_contact_usecase: "Use case description (optional)",

privacy_data_collect_feedback_title: "3.4 Feedback Data",
privacy_data_collect_feedback_p:
  "If you provide feedback, we collect your ratings and comments to improve our service.",

privacy_data_collect_technical_title: "3.5 Technical Data",
privacy_legal_basis_title: "4. Legal Basis for Processing",

privacy_legal_basis_intro:
"We process your data based on:",

privacy_legal_basis_consent: "Consent",
privacy_legal_basis_consent_desc:
"For processing audio/video files and sending marketing communications",

privacy_legal_basis_contract: "Contract",
privacy_legal_basis_contract_desc:
"To provide our analysis service",

privacy_legal_basis_interest: "Legitimate Interest",
privacy_legal_basis_interest_desc:
"For service improvement, security, and fraud prevention",

privacy_legal_basis_obligation: "Legal Obligation",
privacy_legal_basis_obligation_desc:
"To comply with applicable laws",


privacy_use_data_title: "5. How We Use Your Data",

privacy_use_data_analysis:
"To analyze audio/video content for harassment detection",

privacy_use_data_reports:
"To generate and send analysis reports",

privacy_use_data_improve:
"To improve our AI model and service quality",

privacy_use_data_support:
"To respond to your inquiries and provide support",

privacy_use_data_communication:
"To send service-related communications",

privacy_use_data_fraud:
"To detect and prevent fraud or abuse",

privacy_use_data_legal:
"To comply with legal obligations",
privacy_data_collect_technical_p:
  "We automatically collect certain technical information including IP address, browser type, device information, and usage data for security and analytics purposes.",
privacy_email: "Email",
      earlyPrototype: "Early Prototype",
      earlyPrototypeDesc:
        "This is not a final product. Results may not be 100% accurate as we continue to train our model. Your feedback is essential to help us improve — please share your thoughts after testing!",

      title: "Sexual Harassment Voice Detection",

      description:
        "Upload an audio or video file to analyze conversations for potential sexual harassment. Our AI-powered solution uses advanced speech recognition and natural language processing to identify concerning patterns.",

      contextDetected:
        "Context auto-detected: VTC, Meeting, Education / E-learning or Live Stream and more.",

      supportedLanguages:
        "Supported Languages: English & French",

      privacyText:
        "We don’t store any audio/video data. Your file will be deleted immediately after realizing the test.",

      whySafeAI: "Why SafeAI?",

      whySafeAIDesc:
        "Advanced AI-powered harassment detection with unique capabilities",

      selectedFile: "Selected File",
      contactUs: "Contact us",
      watchDemo: "Watch Demo",
      welcome: "Welcome to SafeAI",
      escalationTitle: "Escalation Detection",
      escalationDesc:
        "Identifies when situations are getting worse — detects behavioral patterns that signal danger",

      multiContextTitle: "Multi-Context",
      multiContextDesc:
        "Auto-adapts to VTC rides, corporate meetings, live streams, e-learning sessions and more",

      speakerTitle: "Speaker Identification",
      speakerDesc:
        "Distinguishes between harasser, victim, and bystanders in the conversation",
privacy_retention_table_datatype: "Data Type",
privacy_retention_table_period: "Retention Period",

privacy_retention_audio: "Audio/Video files",
privacy_retention_audio_period: "Deleted immediately after analysis",

privacy_retention_analysis: "Analysis results",
privacy_retention_analysis_period: "24 hours",

privacy_retention_contact: "Contact information",
privacy_retention_contact_period: "3 years or until deletion request",

privacy_retention_feedback: "Feedback data",
privacy_retention_feedback_period: "3 years (anonymized)",

privacy_retention_logs: "Technical logs",
privacy_retention_logs_period: "12 months",

privacy_rights_title_full: "7. Your Rights (GDPR)",
privacy_rights_intro: "Under GDPR, you have the following rights:",

privacy_right_access: "Right of Access",
privacy_right_access_desc: "Request a copy of your personal data",

privacy_right_rectification: "Right to Rectification",
privacy_right_rectification_desc: "Request correction of inaccurate data",

privacy_right_erasure: "Right to Erasure",
privacy_right_erasure_desc: 'Request deletion of your data ("right to be forgotten")',

privacy_right_restrict: "Right to Restrict Processing",
privacy_right_restrict_desc: "Limit how we use your data",

privacy_right_portability: "Right to Data Portability",
privacy_right_portability_desc: "Receive your data in a machine-readable format",

privacy_right_object: "Right to Object",
privacy_right_object_desc: "Object to processing based on legitimate interests",

privacy_right_withdraw: "Right to Withdraw Consent",
privacy_right_withdraw_desc: "Withdraw consent at any time",

privacy_rights_contact: "To exercise these rights, contact us at",

privacy_sharing_intro: "We may share your data with:",

privacy_sharing_service: "Service Providers",
privacy_sharing_service_desc: "Cloud hosting, email delivery, analytics (all GDPR-compliant)",

privacy_sharing_legal: "Legal Authorities",
privacy_sharing_legal_desc: "When required by law or legal process",

privacy_sharing_transfer: "Business Transfers",
privacy_sharing_transfer_desc: "In connection with a merger or acquisition",

privacy_sharing_note: "We do not sell your personal data to third parties.",

privacy_security_intro:
"We implement appropriate technical and organizational measures to protect your data:",

privacy_security_encryption:
"Encryption in transit (TLS 1.3) and at rest (AES-256)",

privacy_security_cloud:
"Secure cloud infrastructure (EU-based servers)",

privacy_security_access:
"Access controls and authentication",

privacy_security_audits:
"Regular security audits",

privacy_security_deletion:
"Automatic file deletion after processing",

privacy_transfer_text:
"Your data is processed within the European Economic Area (EEA). If we transfer data outside the EEA, we ensure appropriate safeguards are in place (Standard Contractual Clauses or adequacy decisions).",
      timestampTitle: "Timestamped Evidence",
      timestampDesc:
        "Every incident is precisely located in the recording for easy review and documentation",

      multiLanguageTitle: "Multi-Language",
      multiLanguageDesc:
        "Analyzes conversations in English and French with native understanding",
      uploadClick: "Click to upload",
      orDragDrop: "or drag & drop",
      fileFormats: "MP3, WAV, MP4, MOV (up to 300 MB and 20 min max)",

      agreeTerms: "I agree to the Terms of Service and Privacy Policy.",

      processingAI: "Processing with AI...",

      startAnalysis: "Start Analysis",
      remove: "Remove",
      cancelAnalysis: "Cancel Analysis",

      contactTitle: "Contact Us",

      lastName: "Last Name",
      firstName: "First Name",
      email: "Email *",
      yourMessage: "Your Message *",

      sending: "Sending...",
      sendEmail: "Send the email",

      messageSentTitle: "Message Sent!",
      messageSentDesc:
        "Thank you for reaching out! We’ve received your message and will get back to you within 24–48 hours.",

      confirmationEmail:
        "📩 A confirmation email has been sent to your inbox.",

      gotIt: "Got it!",
      detectedContext: "Detected Context",
      unknown: "Unknown",
      autoDetected: "Auto detected",
      notDetected: "Not detected",

      escalationDetected: "Escalation Detected",
      privacyNotice:
        "For the best experience, we don’t store any audio/video data.",

      quickFeedback: "Quick Feedback",
      secondsShort: "(30 seconds)",

      firstNameRequired: "First name *",
      lastNameOptional: "Last name",
      companylabel: "Company",
      roleRequired: "Role *",
      industryRequired: "Industry *",
      companySize: "Company Size",
      select: "Select",

      useCaseQuestion: "What’s your use case?",

      prototypeVersion: "Prototype Version",
      prototypeDesc:
        "This demo uses simulated scenarios and is not connected to live models. Your feedback is essential to help us improve.",

      helpImprove: "Help us improve",

      accuracyQuestion: "How accurate was the analysis?",
      usefulnessQuestion: "How useful is this for your work?",
      recommendQuestion: "Would you recommend SafeAI?",
      missingQuestion: "What’s missing or wrong?",

      submitFeedback: "Submit Feedback",

      feedbackThanksTitle: "Thank you! 👍",
      feedbackThanksDesc:
        "Your feedback is invaluable and will help us improve SafeAI. We truly appreciate you taking the time to test our prototype.",
      backToResults: "Back to Results",
        submitFeedback: "Submit Feedback",
  submitFeedbackGetReport: "Submit Feedback & Get Report",
  submitFeedbackGetJson: "Submit Feedback & Get JSON",
      findings: "Findings",
      detectedCount: "{{count}} detected",
      confidence: "Confidence",
      severity: "Severity",
      severity_critical: "Critical",
      severity_high: "High",
      severity_medium: "Medium",
      severity_low: "Low",
      riskScore: "Risk Score",
      actionLevel: "Action Level",
      action_immediate_action: "Immediate Action Required",
      action_monitor: "Monitor Situation",
      action_low_risk: "Low Risk",
      analysisSummary: "Analysis Summary",
      summary: "Summary",
      escalationPattern: "Escalation Pattern",
      contextAnalysis: "Context Analysis",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      recommendationsTitle: "Recommended Actions",
      severityHeader: "Severity",
      actionsHeader: "Suggested Actions",

      context_vtc: "Transport (VTC)",
      context_corporate: "Corporate Meeting",
      context_livestream: "Live Stream",
      context_education: "Education / E-learning",
      context_gaming: "Gaming / Multiplayer",
      context_callcenter: "Call Center",
      context_healthcare: "Healthcare / Telemedicine",
rec_education_critical:
  "Notifier immédiatement l’administration scolaire, contacter les parents ou tuteurs, retirer l’élève de la session, documenter pour un examen disciplinaire, impliquer le conseiller scolaire",

rec_education_high:
  "Alerter l’enseignant ou le formateur, avertissement privé à l’élève, notifier les parents dans les 24 heures, planifier un suivi avec le conseiller scolaire",

rec_education_medium:
  "Intervention de l’enseignant pendant la session, avertissement verbal, enregistrer pour le suivi des comportements répétés, envisager de notifier les parents",

rec_education_low:
  "Note pour information de l’enseignant, surveiller les interactions futures, aucune action immédiate requise",
  rec_gaming_critical:
  "Bannissement permanent du compte, retrait de la session de jeu en cours, signalement à l’éditeur du jeu, conservation des preuves, notification de l’équipe de modération de la plateforme",

rec_gaming_high:
  "Bannissement temporaire (3 à 14 jours), expulsion de la session de jeu en cours, avertissement formel au compte, signalement pour suivi des récidives",

rec_gaming_medium:
  "Mise en sourdine du joueur pour la session, avertissement automatique dans le jeu, ajout à la liste de surveillance de modération",

rec_gaming_low:
  "Enregistrer l’incident, surveiller les prochaines sessions, aucune action immédiate",
  rec_gaming_critical:
  "Permanent account ban, remove from current session, report to game publisher, preserve evidence, notify platform moderation team",
  rec_callcenter_critical:
  "Agent authorized to terminate call immediately, notify supervisor in real-time, block caller number, document for legal action, offer agent psychological support",

rec_callcenter_high:
  "Supervisor alert during call, agent empowered to issue formal warning to caller, log for caller profile, consider callback restriction",

rec_callcenter_medium:
  "Supervisor notification, agent coached on de-escalation, log incident in CRM, monitor caller account",

rec_callcenter_low:
  "Log in caller profile, flag for pattern tracking, no immediate action",
  rec_healthcare_critical:
  "Terminate consultation immediately, notify clinic administration, block patient access pending review, document for legal or ethical board, offer practitioner support",

rec_healthcare_high:
  "Practitioner empowered to end session, formal warning to patient, flag in patient record, notify department head within 24 hours",

rec_healthcare_medium:
  "Practitioner alert with intervention guidance, log in patient file, schedule review with administration",

rec_healthcare_low:
  "Note in patient record, monitor future consultations, no immediate action",

rec_gaming_high:
  "Temporary ban (3-14 days), kick from current game session, formal warning to account, flag for repeat offense tracking",

rec_gaming_medium:
  "Mute player for session, automated in-game warning, add to moderation watchlist",

rec_gaming_low:
  "Log incident, monitor next sessions, no immediate action",
      rec_vtc_critical:
        "Contact passenger immediately, offer to end trip, temporary driver suspension, document with audio evidence",
      rec_vtc_high:
        "Moderator review within 1 hour, flag driver account, follow-up with passenger post-trip",
      rec_vtc_medium:
        "Add to driver monitoring list, review if pattern repeats",
      rec_vtc_low:
        "Log for analytics, no immediate action",

    rec_corporate_critical:
  "Alert HR immediately, suspend meeting access for alleged harasser, notify legal or compliance team, secure evidence for formal investigation, inform victim of their rights",

rec_corporate_high:
  "HR notification within 2 hours, formal written warning, mandatory sensitivity training, document for personnel file, offer victim support resources",

rec_corporate_medium:
  "Manager alert, verbal warning documented, schedule HR review meeting, log in compliance system",

rec_corporate_low:
  "Note for HR awareness, monitor future meetings, no immediate action required",
  rec_livestream_critical:
  "Permanent ban of user, mute and remove from stream immediately, alert streamer, archive evidence for platform moderation, notify law enforcement if threats involved",

rec_livestream_high:
  "Temporary ban (7-30 days), public removal visible to other viewers, alert streamer, report to platform Trust and Safety",

rec_livestream_medium:
  "Timeout (1-24 hours), automated warning message sent, add to watchlist, streamer notification",

rec_livestream_low:
  "Log for analytics, silent watchlist add, no visible action",
      analysisDetails: "Analysis Details",
      duration: "Duration",
      language: "Language",
      findings: "Findings",
      confidence: "Confidence",
      sessionId: "Session ID",
      detected: "{{count}} detected",
      resultsTitle: "Analysis Results",
    analyzedAt: "Analyzed",
    giveFeedback: "Give Feedback",
    feedbackHint: "Help us improve – no download required",
    downloadPdf: "Download Report (PDF)",
    exportJson: "Export JSON",
    reportOnWay: "Report on its way!",
    reportDescription: "Check your inbox. Your PDF report and JSON file will arrive shortly. Thank you for testing SafeAI! Your feedback will help us build a better product.",
    
  usecase_vtc: "VTC / Ride-sharing",
usecase_gaming: "Gaming / Streaming",
usecase_corporate: "Corporate / Enterprise",
usecase_hr_legal: "HR / Legal",
usecase_education: "Education / E-learning",
usecase_other: "other",

companySize_1_10: "1–10 employees",
companySize_11_50: "11–50 employees",
companySize_51_200: "51–200 employees",
companySize_200_plus: "200+ employees",
terms_intro_title: "1. Introduction",
terms_company_title: "2. Company Information",
terms_service_title: "3. Service Description",
terms_prototype_title: "4. Prototype Status",
terms_obligations_title: "5. User Obligations",
terms_rights_title: "6. Content Rights & Consent",
terms_processing_title: "7. Data Processing",
terms_ip_title: "8. Intellectual Property",
terms_disclaimers_title: "9. Disclaimers",
terms_liability_title: "10. Limitation of Liability",
terms_indemnification_title: "11. Indemnification",
terms_termination_title: "12. Termination",
terms_modifications_title: "13. Modifications to Terms",
terms_law_title: "14. Governing Law",
terms_dispute_title: "15. Dispute Resolution",
terms_severability_title: "16. Severability",
terms_contact_title: "17. Contact Us",
terms_contents: "CONTENTS",

terms_legal_agreement: "Legal Agreement",
terms_page_title: "Terms of Service",
terms_last_updated: "Last updated: February 2026",

terms_intro_title: "1. Introduction",
terms_intro_p1:
"Welcome to SafeAI. These Terms of Service (\"Terms\") govern your access to and use of SafeAI, a voice sexual harassment detection solution (\"Service\") developed and operated by IJATECH.",
 disputeTitle: "15. Dispute Resolution",
    disputeText1:
      "In the event of a dispute, we encourage you to contact us first at contact@safeai-tech.com to seek an amicable resolution.",
    disputeText2:
      "EU consumers may use the European Online Dispute Resolution platform:",

    severabilityTitle: "16. Severability",
    severabilityText:
      "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.",

    contactTerm: "17. Contact Us",
    email: "Email",
    company: "IJATECH",
    address1: "60 rue de l'Aigle",
    address2: "92250 La Garenne-Colombes, France",

    copyright:
      "© 2026 IJATECH. All rights reserved. SafeAI is a product of IJATECH.",
terms_intro_p2:
"By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.",

terms_company_title: "2. Company Information",

terms_service_title: "3. Service Description",

terms_service_p1:
"SafeAI provides an AI-powered voice sexual harassment detection service that analyzes audio and video recordings.",

terms_feature_upload: "Audio/video file upload and analysis",
terms_feature_detection: "Sexual harassment detection and risk scoring",
terms_feature_timestamp: "Timestamped findings and evidence generation",
terms_feature_reports: "PDF and JSON report generation",
terms_feature_multicontext:
"Multi-context detection (VTC, meetings, live streams, e-learning)",
terms_prototype_title: "4. Prototype Status",

terms_prototype_notice: "⚠️ Important Notice:",

terms_prototype_text:
"The current version of SafeAI is a prototype for testing and evaluation purposes. Results may not be 100% accurate and should not be used as the sole basis for legal, employment, or other significant decisions. We are continuously training and improving our AI model based on user feedback.",


terms_obligations_title: "5. User Obligations",

terms_obligations_intro: "By using our Service, you agree to:",

terms_obligation_accurate: "Provide accurate information when requested",
terms_obligation_lawful: "Use the Service only for lawful purposes",
terms_obligation_rights: "Not upload content that violates the rights of others",
terms_obligation_upload_right:
"Ensure you have the legal right to upload and analyze the audio/video content",
terms_obligation_laws:
"Comply with all applicable laws and regulations, including data protection laws",
terms_obligation_reverse:
"Not attempt to reverse engineer, decompile, or hack the Service",
terms_obligation_harm:
"Not use the Service to harass, abuse, or harm others",
terms_rights_intro: "You represent and warrant that:",

terms_rights_ownership:
"You own or have the necessary rights to the content you upload",

terms_rights_consents:
"You have obtained all necessary consents from individuals whose voices appear in the recordings (where legally required)",

terms_rights_laws:
"Your use of the Service complies with applicable privacy and wiretapping laws",

terms_rights_minors:
"You will not upload content containing minors without appropriate legal authorization",

terms_rights_license:
"SafeAI does not claim ownership of your content. However, you grant us a limited license to process your content solely for providing the Service.",


terms_processing_intro:
"We process your data in accordance with our Privacy Policy. Key points:",

terms_processing_delete:
"Audio/video files are deleted immediately after analysis",

terms_processing_retention:
"Analysis results are retained for a maximum of 24 hours",

terms_processing_no_storage:
"We do not store or archive your audio/video content",

terms_processing_eu:
"Your data is processed in the EU",

terms_disclaimers_notice:
'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:',

terms_disclaimers_accuracy:
"Accuracy or completeness of analysis results",

terms_disclaimers_fitness:
"Fitness for a particular purpose",

terms_disclaimers_noninfringement:
"Non-infringement",

terms_disclaimers_uninterrupted:
"Uninterrupted or error-free service",

terms_disclaimers_ai_warning:
"AI analysis results should not be used as the sole basis for legal, employment, disciplinary, or other significant decisions. Human review and judgment are always recommended.",


terms_liability_intro:
"To the maximum extent permitted by applicable law:",

terms_liability_indirect:
"SafeAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages",

terms_liability_total:
"Our total liability shall not exceed the amount paid by you (if any) for the Service in the 12 months prior to the claim",

terms_liability_decisions:
"We are not liable for decisions made based on our analysis results",
terms_indemnification_text:
"You agree to indemnify and hold harmless SafeAI, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service, your content, or your violation of these Terms.",


terms_termination_intro:
"We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including if you breach these Terms.",

terms_termination_upon:
"Upon termination:",

terms_termination_access:
"Your right to use the Service will cease immediately",

terms_termination_cancel:
"Any pending analyses will be cancelled",

terms_termination_delete:
"We may delete your data in accordance with our Privacy Policy",


terms_modifications_text:
"We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or a notice on our website. Continued use of the Service after changes constitutes acceptance of the modified Terms.",


terms_law_text:
"These Terms are governed by the laws of France. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Paris, France.",

terms_law_eu:
"For EU consumers: You may also be entitled to bring claims in the courts of your country of residence and benefit from mandatory consumer protection laws.",
terms_liability_user_content:
"We are not liable for content uploaded by users",

terms_liability_exception:
"These limitations do not apply where prohibited by law, including liability for gross negligence or willful misconduct.",
terms_ip_intro:
"The Service, including its technology, algorithms, software, design, and content, is owned by SafeAI and protected by intellectual property laws. You may not:",

terms_ip_copy:
"Copy, modify, or distribute our technology",

terms_ip_trademark:
"Use our trademarks without permission",

terms_ip_reverse:
"Reverse engineer or attempt to extract our AI models",

terms_ip_automation:
"Use automated systems to access the Service without authorization",
    },
  },

  FR: {
    translation: {
      
      terms_indemnification_text:
"Vous acceptez d’indemniser et de dégager de toute responsabilité SafeAI, ses dirigeants, administrateurs, employés et agents contre toute réclamation, dommage, perte ou dépense résultant de votre utilisation du Service, de votre contenu ou de votre violation des présentes Conditions.",


terms_termination_intro:
"Nous pouvons résilier ou suspendre votre accès au Service immédiatement, sans préavis, pour quelque raison que ce soit, notamment si vous violez les présentes Conditions.",

terms_termination_upon:
"En cas de résiliation :", 

terms_termination_access:
"Votre droit d’utiliser le Service cessera immédiatement",

terms_termination_cancel:
"Toutes les analyses en cours seront annulées",

terms_termination_delete:
"Nous pouvons supprimer vos données conformément à notre politique de confidentialité",


terms_modifications_text:
"Nous nous réservons le droit de modifier ces Conditions à tout moment. Nous informerons les utilisateurs des changements importants par e-mail ou via un avis sur notre site web. L’utilisation continue du Service après ces modifications constitue une acceptation des nouvelles Conditions.",


terms_law_text:
"Les présentes Conditions sont régies par les lois françaises. Tout litige découlant des présentes Conditions ou du Service sera soumis à la compétence exclusive des tribunaux de Paris, France.",

terms_law_eu:
"Pour les consommateurs de l’UE : vous pouvez également être autorisé à saisir les tribunaux de votre pays de résidence et bénéficier des lois obligatoires de protection des consommateurs.",
      terms_rights_intro: "Vous déclarez et garantissez que :", 

terms_rights_ownership:
"Vous possédez ou disposez des droits nécessaires sur le contenu que vous téléversez",

terms_rights_consents:
"Vous avez obtenu tous les consentements nécessaires des personnes dont la voix apparaît dans les enregistrements (lorsque la loi l’exige)",

terms_rights_laws:
"L’utilisation du Service est conforme aux lois applicables en matière de confidentialité et d’enregistrement",

terms_rights_minors:
"Vous ne téléverserez pas de contenu contenant des mineurs sans autorisation légale appropriée",

terms_rights_license:
"SafeAI ne revendique pas la propriété de votre contenu. Cependant, vous nous accordez une licence limitée pour traiter votre contenu uniquement dans le but de fournir le Service.",


terms_processing_intro:
"Nous traitons vos données conformément à notre politique de confidentialité. Points clés :", 

terms_processing_delete:
"Les fichiers audio/vidéo sont supprimés immédiatement après l’analyse",

terms_processing_retention:
"Les résultats de l’analyse sont conservés pendant un maximum de 24 heures",

terms_processing_no_storage:
"Nous ne stockons ni n’archivons aucun contenu audio ou vidéo",

terms_processing_eu:
"Vos données sont traitées dans l’Union européenne",


terms_ip_intro:
"Le Service, y compris sa technologie, ses algorithmes, son logiciel, sa conception et son contenu, appartient à SafeAI et est protégé par les lois sur la propriété intellectuelle. Vous ne pouvez pas :", 

terms_ip_copy:
"Copier, modifier ou distribuer notre technologie",

terms_ip_trademark:
"Utiliser nos marques sans autorisation",

terms_ip_reverse:
"Tenter de rétro-concevoir ou d’extraire nos modèles d’IA",

terms_ip_automation:
"Utiliser des systèmes automatisés pour accéder au Service sans autorisation",
terms_disclaimers_notice:
'LE SERVICE EST FOURNI "TEL QUEL" ET "TEL QUE DISPONIBLE" SANS GARANTIE D’AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS S’Y LIMITER :',

terms_disclaimers_accuracy:
"Exactitude ou exhaustivité des résultats d’analyse",

terms_disclaimers_fitness:
"Adéquation à un usage particulier",

terms_disclaimers_noninfringement:
"Absence de violation de droits",

terms_disclaimers_uninterrupted:
"Service ininterrompu ou sans erreur",

terms_disclaimers_ai_warning:
"Les résultats de l’analyse par IA ne doivent pas être utilisés comme seule base pour des décisions juridiques, professionnelles, disciplinaires ou autres décisions importantes. Une vérification humaine est toujours recommandée.",


terms_liability_intro:
"Dans la mesure maximale permise par la loi applicable :", 

terms_liability_indirect:
"SafeAI ne pourra être tenu responsable de tout dommage indirect, accessoire, spécial, consécutif ou punitif",

terms_liability_total:
"Notre responsabilité totale ne dépassera pas le montant que vous avez payé (le cas échéant) pour le Service au cours des 12 mois précédant la réclamation",

terms_liability_decisions:
"Nous ne sommes pas responsables des décisions prises sur la base des résultats de notre analyse",

terms_liability_user_content:
"Nous ne sommes pas responsables du contenu téléversé par les utilisateurs",
disputeTitle: "15. Résolution des litiges",
    disputeText1:
      "En cas de litige, nous vous encourageons à nous contacter d'abord à contact@safeai-tech.com afin de rechercher une résolution amiable.",
    disputeText2:
      "Les consommateurs de l'Union européenne peuvent utiliser la plateforme européenne de règlement en ligne des litiges :",

    severabilityTitle: "16. Divisibilité",
    severabilityText:
      "Si une disposition des présentes Conditions est jugée inapplicable ou invalide, cette disposition sera limitée ou supprimée dans la mesure minimale nécessaire, et les autres dispositions resteront pleinement en vigueur.",

    contactTerm: "17. Contactez-nous",
    email: "Email",
    company: "IJATECH",
    address1: "60 rue de l'Aigle",
    address2: "92250 La Garenne-Colombes, France",

    copyright:
      "© 2026 IJATECH. Tous droits réservés. SafeAI est un produit d'IJATECH.",
terms_liability_exception:
"Ces limitations ne s’appliquent pas lorsque la loi l’interdit, y compris en cas de négligence grave ou de faute intentionnelle.",
usecase_vtc: "VTC / Covoiturage",
usecase_gaming: "Gaming / Streaming",
usecase_corporate: "Entreprise / Corporate",
usecase_hr_legal: "RH / Juridique",
usecase_education: "Éducation / E-learning",
usecase_other: "Autre",

companySize_1_10: "1–10 employés",
companySize_11_50: "11–50 employés",
companySize_51_200: "51–200 employés",
companySize_200_plus: "200+ employés",
      analysisDetails: "Détails de l'analyse",
      duration: "Durée",
      language: "Langue",
      findings: "Signalements",
      confidence: "Confiance",
      sessionId: "ID de session",
      detected: "{{count}} détecté(s)",
      earlyPrototype: "Prototype précoce",
      resultsTitle: "Analyseergebnisse",
    analyzedAt: "Analysiert",
  
  giveFeedback: "Donner un avis",
  feedbackHint: "Aidez-nous à nous améliorer – aucun téléchargement requis",
  downloadPdf: "Télécharger le rapport (PDF)",
  exportJson: "Exporter JSON",

  
  reportOnWay: "Votre rapport est en route !",
  reportDescription: "Vérifiez votre boîte de réception. Votre rapport PDF et le fichier JSON arriveront sous peu.",

      earlyPrototypeDesc:
        "Ce n'est pas un produit final. Les résultats peuvent ne pas être précis à 100 % car nous continuons à entraîner notre modèle. Vos commentaires sont essentiels pour nous aider à améliorer — veuillez partager vos impressions après le test.",

      title: "Détection vocale du harcèlement sexuel",

      description:
        "Téléchargez un fichier audio ou vidéo pour analyser les conversations et détecter un éventuel harcèlement sexuel. Notre solution alimentée par l'IA utilise la reconnaissance vocale avancée et le traitement du langage naturel.",

      contextDetected:
        "Contexte détecté automatiquement : VTC, Réunion, Éducation / E-learning ou Diffusion en direct et plus encore.",

      supportedLanguages:
        "Langues prises en charge : Anglais et Français",

      privacyText:
        "Nous ne stockons aucune donnée audio/vidéo. Votre fichier sera supprimé immédiatement après le test.",

      whySafeAI: "Pourquoi SafeAI?",

      whySafeAIDesc:
        "Détection avancée du harcèlement alimentée par l'IA avec des capacités uniques",

      selectedFile: "Fichier sélectionné",
      contactUs: "Contactez-nous",
      watchDemo: "Voir la démo",
      welcome: "Bienvenue sur SafeAI",
      escalationTitle: "Détection d'escalade",
      escalationDesc:
        "Identifie lorsque les situations empirent — détecte les comportements signalant un danger",

      multiContextTitle: "Multi-contexte",
      multiContextDesc:
        "S'adapte automatiquement aux trajets VTC, réunions, diffusions en direct et e-learning",

      speakerTitle: "Identification du locuteur",
      speakerDesc:
        "Distingue le harceleur, la victime et les témoins dans la conversation",

      timestampTitle: "Preuve horodatée",
      timestampDesc:
        "Chaque incident est localisé précisément dans l'enregistrement",

      multiLanguageTitle: "Multi-langue",
      multiLanguageDesc:
        "Analyse les conversations en anglais et en français avec compréhension native",
      uploadClick: "Cliquez pour téléverser",
      orDragDrop: "ou glissez-déposez",
      fileFormats: "MP3, WAV, MP4, MOV (jusqu’à 300 MB et 20 min max)",

      agreeTerms:
        "J'accepte les Conditions d'utilisation et la Politique de confidentialité.",

      processingAI: "Analyse par IA en cours...",

      startAnalysis: "Démarrer l'analyse",
      remove: "Supprimer",
      cancelAnalysis: "Annuler l'analyse",
      contactTitle: "Contactez-nous",

      lastName: "Nom",
      firstName: "Prénom",
      email: "Email *",
      yourMessage: "Votre message *",

      sending: "Envoi en cours...",
      sendEmail: "Envoyer l’email",

      messageSentTitle: "Message envoyé !",
      messageSentDesc:
        "Merci de nous avoir contactés ! Nous avons bien reçu votre message et nous vous répondrons sous 24 à 48 heures.",

      confirmationEmail:
        "📩 Un email de confirmation a été envoyé dans votre boîte de réception.",

      gotIt: "Compris !",
      detectedContext: "Contexte détecté",
      unknown: "Inconnu",
      autoDetected: "Détecté automatiquement",
      notDetected: "Non détecté",

      escalationDetected: "Escalade détectée",
      privacyNotice:
        "Pour une meilleure expérience, nous ne stockons aucune donnée audio/vidéo.",

      quickFeedback: "Retour rapide",
      secondsShort: "(30 secondes)",

      firstNameRequired: "Prénom *",
      lastNameOptional: "Nom",
      companylabel: "Entreprise",
      roleRequired: "Rôle *",
      industryRequired: "Secteur *",
      companySize: "Taille de l'entreprise",
      select: "Sélectionner",

      useCaseQuestion: "Quel est votre cas d'utilisation ?",
      privacy_cookies_text:
"Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies d’analyse optionnels avec votre consentement. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.",

privacy_changes_text:
"Nous pouvons mettre à jour cette politique de temps à autre. Nous vous informerons des changements importants par e-mail ou via un avis sur notre site web.",
privacy_contact_intro:
"Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :",

privacy_contact_email_label: "Email",

privacy_contact_cnil_text:
"Vous avez également le droit de déposer une plainte auprès de l’autorité française de protection des données (CNIL) :", 

privacy_contact_copyright:
"© 2026 IJATECH. Tous droits réservés. SafeAI est un produit de IJATECH.",
privacy_retention_table_datatype: "Type de données",
privacy_retention_table_period: "Durée de conservation",

privacy_retention_audio: "Fichiers audio/vidéo",
privacy_retention_audio_period: "Supprimés immédiatement après l’analyse",

privacy_retention_analysis: "Résultats de l’analyse",
privacy_retention_analysis_period: "24 heures",

privacy_retention_contact: "Informations de contact",
privacy_retention_contact_period: "3 ans ou jusqu’à la demande de suppression",

privacy_retention_feedback: "Données de feedback",
privacy_retention_feedback_period: "3 ans (anonymisées)",

privacy_retention_logs: "Journaux techniques",
privacy_retention_logs_period: "12 mois",

privacy_rights_title_full: "7. Vos droits (RGPD)",
privacy_rights_intro: "Conformément au RGPD, vous disposez des droits suivants :",


privacy_right_access: "Droit d’accès",
privacy_right_access_desc: "Demander une copie de vos données personnelles",

privacy_right_rectification: "Droit de rectification",
privacy_right_rectification_desc: "Demander la correction de données inexactes",

privacy_right_erasure: "Droit à l’effacement",
privacy_right_erasure_desc: "Demander la suppression de vos données (« droit à l’oubli »)",

privacy_right_restrict: "Droit à la limitation du traitement",
privacy_right_restrict_desc: "Limiter la manière dont nous utilisons vos données",

privacy_right_portability: "Droit à la portabilité des données",
privacy_right_portability_desc: "Recevoir vos données dans un format lisible par machine",

privacy_right_object: "Droit d’opposition",
privacy_right_object_desc: "Vous opposer au traitement fondé sur un intérêt légitime",

privacy_right_withdraw: "Droit de retirer votre consentement",
privacy_right_withdraw_desc: "Retirer votre consentement à tout moment",

privacy_rights_contact: "Pour exercer ces droits, contactez-nous à",

privacy_sharing_intro: "Nous pouvons partager vos données avec :",


privacy_sharing_service: "Prestataires de services",
privacy_sharing_service_desc: "Hébergement cloud, livraison d’e-mails, analyses (conformes au RGPD)",

privacy_sharing_legal: "Autorités légales",
privacy_sharing_legal_desc: "Lorsque la loi ou une procédure judiciaire l’exige",

privacy_sharing_transfer: "Transferts d’entreprise",
privacy_sharing_transfer_desc: "Dans le cadre d’une fusion ou acquisition",

privacy_sharing_note: "Nous ne vendons pas vos données personnelles à des tiers.",

privacy_security_intro:
"Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :",

privacy_security_encryption:
"Chiffrement en transit (TLS 1.3) et au repos (AES-256)",

privacy_security_cloud:
"Infrastructure cloud sécurisée (serveurs basés dans l’UE)",

privacy_security_access:
"Contrôles d’accès et authentification",

privacy_security_audits:
"Audits de sécurité réguliers",

privacy_security_deletion:
"Suppression automatique des fichiers après traitement",

privacy_transfer_text:
"Vos données sont traitées au sein de l’Espace économique européen (EEE). Si nous transférons des données en dehors de l’EEE, nous garantissons des garanties appropriées (clauses contractuelles types ou décisions d’adéquation).",
      prototypeVersion: "Version prototype",
      prototypeDesc:
        "Cette démo utilise des scénarios simulés et n'est pas connectée à des modèles en direct. Vos retours sont essentiels pour nous améliorer.",

      helpImprove: "Aidez-nous à nous améliorer",

      accuracyQuestion: "Quelle était la précision de l’analyse ?",
      usefulnessQuestion: "Quelle est son utilité pour votre travail ?",
      recommendQuestion: "Recommanderiez-vous SafeAI ?",
      missingQuestion: "Qu’est-ce qui manque ou pose problème ?",

      submitFeedback: "Envoyer le feedback",

      feedbackThanksTitle: "Merci ! 👍",
      feedbackThanksDesc:
        "Votre retour est précieux et nous aidera à améliorer SafeAI. Merci d’avoir pris le temps de tester notre prototype.",
      backToResults: "Retour aux résultats",
       submitFeedback: "Envoyer un avis",
  submitFeedbackGetReport: "Envoyer l'avis et télécharger le rapport",
  submitFeedbackGetJson: "Envoyer l'avis et télécharger le JSON",
      findings: "Signalements",
      detectedCount: "{{count}} détecté(s)",
      confidence: "Confiance",
      severity: "Gravité",
      severity_critical: "Critique",
      severity_high: "Élevée",
      severity_medium: "Moyenne",
      severity_low: "Faible",
      action_immediate_action: "Action immédiate requise",
      action_monitor: "Surveiller la situation",
      action_low_risk: "Risque faible",
      riskScore: "Score de risque",
      actionLevel: "Niveau d'action",
      analysisSummary: "Résumé de l'analyse",
      summary: "Résumé",
      escalationPattern: "Schéma d'escalade",
      contextAnalysis: "Analyse du contexte",
      privacyPolicy: "Politique de confidentialité",
      termsOfService: "Conditions d'utilisation",
      recommendationsTitle: "Actions recommandées",
      severityHeader: "Gravité",
      actionsHeader: "Actions suggérées",

      context_vtc: "Transport (VTC)",
      context_corporate: "Réunion d'entreprise",
      context_livestream: "Diffusion en direct",
      context_education: "Éducation / E-learning",
      context_gaming: "Jeu en ligne / Multijoueur",
      context_callcenter: "Centre d'appel",
      context_healthcare: "Santé / Télémédecine",
rec_education_critical:
  "Retrait immédiat de l’élève de la classe/session, alerter l’enseignant ou l’administration scolaire, notifier les parents/tuteurs si nécessaire, archiver les preuves pour examen disciplinaire",

rec_education_high:
  "Avertissement formel envoyé à l’élève, signalement à l’enseignant ou au personnel académique, ajout à la liste de surveillance comportementale",

rec_education_medium:
  "Message d’avertissement automatique envoyé à l’élève, notification de l’enseignant, surveillance en cas de répétition du comportement",

rec_education_low:
  "Enregistrer pour analyse et suivi du comportement en classe, aucune action immédiate",
  rec_healthcare_critical:
  "Mettre fin immédiatement à la consultation, notifier l’administration de la clinique, bloquer l’accès du patient en attente d’examen, documenter pour le comité légal ou éthique, offrir un soutien au praticien",

rec_healthcare_high:
  "Praticien autorisé à mettre fin à la session, avertissement formel au patient, signalement dans le dossier patient, notifier le responsable du service dans les 24 heures",

rec_healthcare_medium:
  "Alerte du praticien avec recommandations d’intervention, enregistrement dans le dossier patient, planifier un examen avec l’administration",

rec_healthcare_low:
  "Note dans le dossier patient, surveiller les consultations futures, aucune action immédiate",
  rec_callcenter_critical:
  "Agent autorisé à mettre fin immédiatement à l’appel, notifier le superviseur en temps réel, bloquer le numéro de l’appelant, documenter pour action juridique, offrir un soutien psychologique à l’agent",

rec_callcenter_high:
  "Alerte du superviseur pendant l’appel, agent autorisé à émettre un avertissement formel à l’appelant, enregistrement dans le profil de l’appelant, envisager une restriction de rappel",

rec_callcenter_medium:
  "Notification du superviseur, accompagnement de l’agent pour la désescalade, enregistrement de l’incident dans le CRM, surveillance du compte appelant",

rec_callcenter_low:
  "Enregistrer dans le profil de l’appelant, signaler pour suivi des comportements répétés, aucune action immédiate",
  rec_livestream_critical:
  "Bannissement permanent de l’utilisateur, mise en sourdine et retrait immédiat du stream, alerter le streamer, archiver les preuves pour la modération de la plateforme, notifier les forces de l’ordre en cas de menaces",

rec_livestream_high:
  "Bannissement temporaire (7 à 30 jours), retrait public visible par les autres spectateurs, alerter le streamer, signaler à l’équipe Trust and Safety de la plateforme",

rec_livestream_medium:
  "Timeout (1 à 24 heures), envoi automatique d’un message d’avertissement, ajout à la liste de surveillance, notification du streamer",

rec_livestream_low:
  "Enregistrer pour analyse, ajout discret à la liste de surveillance, aucune action visible",
  rec_corporate_critical:
  "Alerter immédiatement les ressources humaines, suspendre l’accès à la réunion pour le harceleur présumé, notifier l’équipe juridique ou conformité, sécuriser les preuves pour une enquête formelle, informer la victime de ses droits",

rec_corporate_high:
  "Notification des ressources humaines dans les 2 heures, avertissement écrit formel, formation obligatoire à la sensibilisation, documenter dans le dossier du personnel, proposer des ressources de soutien à la victime",

rec_corporate_medium:
  "Alerte au manager, avertissement verbal documenté, planifier une réunion d’examen avec les ressources humaines, enregistrer dans le système de conformité",

rec_corporate_low:
  "Note pour information des ressources humaines, surveiller les réunions futures, aucune action immédiate requise",
      rec_vtc_critical:
        "Contacter immédiatement le passager, proposer d'arrêter le trajet, suspension temporaire du chauffeur, documenter avec preuve audio",
      rec_vtc_high:
        "Examen par un modérateur sous 1 heure, signaler le compte du chauffeur, suivi avec le passager après le trajet",
      rec_vtc_medium:
        "Ajouter à la liste de surveillance des chauffeurs, examiner si le comportement se répète",
      rec_vtc_low:
        "Enregistrer pour analyse, aucune action immédiate",
        privacySections: "SECTIONS",
privacyLegalDocument: "DOCUMENT LÉGAL",
privacyTitle: "Politique de confidentialité",
privacyLastUpdated: "Dernière mise à jour : février 2026",

privacy_intro_title: "1. Introduction",
privacy_intro_p1:
  'IJATECH ("IJATECH", "nous", "notre") s’engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez SafeAI, notre solution de détection vocale du harcèlement.',
privacy_intro_p2:
  "Nous respectons le Règlement Général sur la Protection des Données (RGPD) ainsi que les autres lois applicables en matière de protection des données. En utilisant SafeAI, vous acceptez les pratiques décrites dans cette politique.",

privacy_controller_title: "2. Responsable du traitement",
privacy_controller_company:
  "SafeAI est une solution de détection vocale du harcèlement sexuel développée et exploitée par IJATECH.",
privacy_email: "Email",
privacy_data_collect_title: "3. Données que nous collectons",
privacy_legal_basis_title: "4. Base légale",
privacy_use_data_title: "5. Comment nous utilisons vos données",
privacy_retention_title: "6. Conservation des données",
privacy_rights_title: "7. Vos droits",
privacy_sharing_title: "8. Partage des données",
privacy_security_title: "9. Sécurité des données",
privacy_transfer_title: "10. Transferts internationaux de données",
privacy_cookies_title: "11. Cookies",
privacy_changes_title: "12. Modifications de cette politique",
privacy_contact_title: "13. Contactez-nous",
privacy_data_collect_audio_title: "3.1 Fichiers audio/vidéo",
privacy_data_collect_audio_p1:
  "Lorsque vous téléchargez un fichier pour analyse, nous traitons temporairement le contenu audio/vidéo.",
privacy_data_collect_audio_p2:
  "Les fichiers sont automatiquement supprimés immédiatement après la fin de l’analyse.",
privacy_data_collect_audio_p3:
  "Nous ne stockons, n’archivons ni ne conservons aucun contenu audio ou vidéo.",

privacy_data_collect_analysis_title: "3.2 Résultats de l’analyse",
privacy_data_collect_analysis_p:
  "Nous pouvons temporairement stocker les résultats de l’analyse (scores de risque, signalements, horodatages) afin de générer votre rapport. Ceux-ci sont supprimés dans un délai de 24 heures sauf si vous demandez le contraire.",

privacy_data_collect_contact_title: "3.3 Informations de contact",

privacy_data_collect_contact_firstname: "Prénom",
privacy_data_collect_contact_lastname: "Nom (optionnel)",
privacy_data_collect_contact_email: "Adresse email",
privacy_data_collect_contact_company: "Nom de l’entreprise (optionnel)",
privacy_data_collect_contact_role: "Rôle / poste",
privacy_data_collect_contact_industry: "Secteur",
privacy_data_collect_contact_company_size: "Taille de l’entreprise (optionnel)",
privacy_data_collect_contact_usecase: "Description du cas d’utilisation (optionnel)",
privacy_legal_basis_title: "4. Base légale du traitement",

privacy_legal_basis_intro:
"Nous traitons vos données sur la base de :",


privacy_legal_basis_consent: "Consentement",
privacy_legal_basis_consent_desc:
"Pour le traitement des fichiers audio/vidéo et l’envoi de communications marketing",

privacy_legal_basis_contract: "Contrat",
privacy_legal_basis_contract_desc:
"Pour fournir notre service d’analyse",

privacy_legal_basis_interest: "Intérêt légitime",
privacy_legal_basis_interest_desc:
"Pour l’amélioration du service, la sécurité et la prévention de la fraude",

privacy_legal_basis_obligation: "Obligation légale",
privacy_legal_basis_obligation_desc:
"Pour se conformer aux lois applicables",


privacy_use_data_title: "5. Comment nous utilisons vos données",

privacy_use_data_analysis:
"Analyser le contenu audio/vidéo pour détecter le harcèlement",

privacy_use_data_reports:
"Générer et envoyer des rapports d’analyse",

privacy_use_data_improve:
"Améliorer notre modèle d’IA et la qualité du service",

privacy_use_data_support:
"Répondre à vos demandes et fournir une assistance",

privacy_use_data_communication:
"Envoyer des communications liées au service",

privacy_use_data_fraud:
"Détecter et prévenir la fraude ou les abus",

privacy_use_data_legal:
"Se conformer aux obligations légales",
privacy_data_collect_feedback_title: "3.4 Données de feedback",
privacy_data_collect_feedback_p:
  "Si vous fournissez un retour, nous collectons vos évaluations et commentaires afin d’améliorer notre service.",

privacy_data_collect_technical_title: "3.5 Données techniques",
privacy_data_collect_technical_p:
  "Nous collectons automatiquement certaines informations techniques, notamment l’adresse IP, le type de navigateur, les informations sur l’appareil et les données d’utilisation à des fins de sécurité et d’analyse.",

  recommendation_message: "Voici des actions suggérées basées sur le niveau de gravité détecté par notre IA. En production, notre API retourne la gravité et les résultats — vous décidez comment les gérer dans votre propre système. Si notre IA ne détecte aucun contexte, nous ne pourrons pas vous proposer un tableau de recommandations.",

  terms_intro_title: "1. Introduction",
terms_company_title: "2. Informations sur l’entreprise",
terms_service_title: "3. Description du service",
terms_prototype_title: "4. Statut du prototype",
terms_obligations_title: "5. Obligations de l’utilisateur",
terms_rights_title: "6. Droits sur le contenu et consentement",
terms_processing_title: "7. Traitement des données",
terms_ip_title: "8. Propriété intellectuelle",
terms_disclaimers_title: "9. Avertissements",
terms_liability_title: "10. Limitation de responsabilité",
terms_indemnification_title: "11. Indemnisation",
terms_termination_title: "12. Résiliation",
terms_modifications_title: "13. Modifications des conditions",
terms_law_title: "14. Droit applicable",
terms_dispute_title: "15. Résolution des litiges",
terms_severability_title: "16. Divisibilité",
terms_contact_title: "17. Contactez-nous",
terms_contents: "SOMMAIRE",

terms_legal_agreement: "Accord juridique",
terms_page_title: "Conditions d’utilisation",
terms_last_updated: "Dernière mise à jour : février 2026",

terms_intro_title: "1. Introduction",

terms_intro_p1:
"Bienvenue sur SafeAI. Les présentes Conditions d’utilisation (« Conditions ») régissent votre accès et votre utilisation de SafeAI, une solution de détection du harcèlement sexuel vocal (« Service ») développée et exploitée par IJATECH.",

terms_intro_p2:
"En accédant ou en utilisant notre Service, vous acceptez d’être lié par ces Conditions. Si vous n’acceptez pas une partie des Conditions, vous ne pouvez pas accéder au Service.",

terms_company_title: "2. Informations sur l’entreprise",

terms_service_title: "3. Description du service",

terms_service_p1:
"SafeAI fournit un service de détection du harcèlement sexuel vocal basé sur l’IA qui analyse les enregistrements audio et vidéo.",

terms_feature_upload: "Téléversement et analyse de fichiers audio/vidéo",
terms_feature_detection: "Détection du harcèlement sexuel et évaluation du risque",
terms_feature_timestamp: "Résultats horodatés et génération de preuves",
terms_feature_reports: "Génération de rapports PDF et JSON",
terms_feature_multicontext:
"Détection multi-contexte (VTC, réunions, live streams, e-learning)",
terms_prototype_title: "4. Statut du prototype",

terms_prototype_notice: "⚠️ Avis important :",

terms_prototype_text:
"La version actuelle de SafeAI est un prototype destiné à des fins de test et d’évaluation. Les résultats peuvent ne pas être exacts à 100 % et ne doivent pas être utilisés comme seule base pour des décisions juridiques, professionnelles ou autres décisions importantes. Nous continuons à entraîner et améliorer notre modèle d’IA grâce aux retours des utilisateurs.",


terms_obligations_title: "5. Obligations de l’utilisateur",

terms_obligations_intro: "En utilisant notre Service, vous acceptez de :",

terms_obligation_accurate: "Fournir des informations exactes lorsque cela est demandé",
terms_obligation_lawful: "Utiliser le Service uniquement à des fins légales",
terms_obligation_rights:
"Ne pas téléverser de contenu qui viole les droits d’autrui",
terms_obligation_upload_right:
"Vous assurer que vous avez le droit légal de téléverser et d’analyser le contenu audio/vidéo",
terms_obligation_laws:
"Respecter toutes les lois et réglementations applicables, y compris les lois sur la protection des données",
terms_obligation_reverse:
"Ne pas tenter de rétro-concevoir, décompiler ou pirater le Service",
terms_obligation_harm:
"Ne pas utiliser le Service pour harceler, abuser ou nuire à autrui",

    },
  },

};

i18n
  .use(LanguageDetector) // 👈 detects + stores language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "EN",

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;