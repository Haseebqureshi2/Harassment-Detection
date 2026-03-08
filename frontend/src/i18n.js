
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  EN: {
    translation: {
      earlyPrototype: "Early Prototype",
      earlyPrototypeDesc:
        "This is not a final product. Results may not be 100% accurate as we continue to train our model. Your feedback is essential to help us improve — please share your thoughts after testing!",

      title: "Sexual Harassment Voice Detection",

      description:
        "Upload an audio or video file to analyze conversations for potential sexual harassment. Our AI-powered solution uses advanced speech recognition and natural language processing to identify concerning patterns.",

      contextDetected:
        "Context auto-detected: VTC, Meeting, Education / E-learning or Live Stream",

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

      timestampTitle: "Timestamped Evidence",
      timestampDesc:
        "Every incident is precisely located in the recording for easy review and documentation",

      multiLanguageTitle: "Multi-Language",
      multiLanguageDesc:
        "Analyzes conversations in English and French with native understanding",
      uploadClick: "Click to upload",
      orDragDrop: "or drag & drop",
      fileFormats: "MP3, WAV, MP4, MOV up to 100MB",

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
      company: "Company",
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

      rec_vtc_critical:
        "Contact passenger immediately, offer to end trip, temporary driver suspension, document with audio evidence",
      rec_vtc_high:
        "Moderator review within 1 hour, flag driver account, follow-up with passenger post-trip",
      rec_vtc_medium:
        "Add to driver monitoring list, review if pattern repeats",
      rec_vtc_low:
        "Log for analytics, no immediate action",

      rec_corporate_critical:
        "Alert HR immediately, suspend meeting access for alleged harasser, notify legal/compliance team, secure evidence for formal investigation, inform victim of their rights",
      rec_corporate_high:
        "HR notification within 2h, formal written warning, mandatory sensitivity training, document for personnel file, offer victim support resources",
      rec_corporate_medium:
        "Manager alert, verbal warning documented, schedule HR review meeting, log in compliance system",
      rec_corporate_low:
        "Note for HR awareness, monitor future meetings, no immediate action required",
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
    backToResults: "Back to Results",
    industry_transport: "Transport",
industry_healthcare: "Healthcare",
industry_education: "Education",
industry_technology: "Technology",

companySize_1_10: "1–10 employees",
companySize_11_50: "11–50 employees",
companySize_51_200: "51–200 employees",
companySize_200_plus: "200+ employees",
    },
  },

  FR: {
    translation: {
      industry_transport: "Transport",
industry_healthcare: "Santé",
industry_education: "Éducation",
industry_technology: "Technologie",

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
    giveFeedback: "Feedback geben",
    feedbackHint: "Hilf uns, besser zu werden – kein Download nötig",
    downloadPdf: "Bericht herunterladen (PDF)",
    exportJson: "JSON exportieren",
    reportOnWay: "Bericht ist unterwegs!",
    reportDescription: "Überprüfe deinen Posteingang. Dein PDF-Bericht und die JSON-Datei werden in Kürze eintreffen.",
    backToResults: "Zurück zu den Ergebnissen",

      earlyPrototypeDesc:
        "Ce n'est pas un produit final. Les résultats peuvent ne pas être précis à 100 % car nous continuons à entraîner notre modèle. Vos commentaires sont essentiels pour nous aider à améliorer — veuillez partager vos impressions après le test.",

      title: "Détection vocale du harcèlement sexuel",

      description:
        "Téléchargez un fichier audio ou vidéo pour analyser les conversations et détecter un éventuel harcèlement sexuel. Notre solution alimentée par l'IA utilise la reconnaissance vocale avancée et le traitement du langage naturel.",

      contextDetected:
        "Contexte détecté automatiquement : VTC, Réunion, Éducation / E-learning ou Diffusion en direct",

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
      fileFormats: "MP3, WAV, MP4, MOV jusqu'à 100MB",

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
      company: "Entreprise",
      roleRequired: "Rôle *",
      industryRequired: "Secteur *",
      companySize: "Taille de l'entreprise",
      select: "Sélectionner",

      useCaseQuestion: "Quel est votre cas d'utilisation ?",

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

      rec_vtc_critical:
        "Contacter immédiatement le passager, proposer d'arrêter le trajet, suspension temporaire du chauffeur, documenter avec preuve audio",
      rec_vtc_high:
        "Examen par un modérateur sous 1 heure, signaler le compte du chauffeur, suivi avec le passager après le trajet",
      rec_vtc_medium:
        "Ajouter à la liste de surveillance des chauffeurs, examiner si le comportement se répète",
      rec_vtc_low:
        "Enregistrer pour analyse, aucune action immédiate",

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