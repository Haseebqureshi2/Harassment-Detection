import Feedback from "../models/feedback.model.js";
import { sendEmail } from "../utils/sendEmail.js";
import { feedbackConfirmationTemplate } from "../utils/feedbackConfirmation.js";

export const createFeedback = async (req, res) => {
  try {
    const payload = JSON.parse(req.body.payload);

    const {
      firstName,
      email,
      sessionId,
      riskScore,
      severity,
      context,
      findingsCount,
      ratings,
      improvement,
      analysisData,
      mode,
    } = payload;

    const feedback = await Feedback.create({
      ...payload,
      user: req.user?._id,
    });

    const includeAttachments = mode === "pdf" || mode === "json";

const html = feedbackConfirmationTemplate({
  firstName: firstName || "there",
  prototypeUrl: "https://safeai-tech.com/prototype",
  privacyUrl: "https://safeai-tech.com/privacy",
  termsUrl: "https://safeai-tech.com/terms",
  unsubscribeUrl: `https://safeai-tech.com/unsubscribe?email=${encodeURIComponent(email)}`,
  data: {
        includeAttachments,
        riskScore,
        severity,
        context,
        findingsCount,
        accuracyRating: ratings?.accuracy,
        usefulnessRating: ratings?.usefulness,
        recommendRating: ratings?.recommend,
        feedbackComment: improvement,
      },
    });

    const attachments = [];

    // ---------- JSON ----------
    if (mode === "pdf" || mode === "json") {
      const jsonBuffer = Buffer.from(
        JSON.stringify(analysisData, null, 2)
      );

      attachments.push({
        filename: "SafeAI_Analysis_Data.json",
        content: jsonBuffer,
        contentType: "application/json",
      });
    }

    // ---------- PDF (FROM FRONTEND) ----------
    if (req.file) {
      attachments.push({
        filename: "SafeAI_Analysis_Report.pdf",
        content: req.file.buffer,
        contentType: "application/pdf",
      });
    }

    await sendEmail({
      to: email,
      subject: "Your SafeAI Analysis Report",
      html,
      attachments,
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error) {
    console.error("Feedback Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
    });
  }
};
// ADMIN — GET ALL FEEDBACK
export const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find()
      .sort({ createdAt: -1 })
      .populate("user", "name email");

    res.json({
      success: true,
      count: feedback.length,
      data: feedback,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
    });
  }
};



// ADMIN — GET SINGLE FEEDBACK
export const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }

    res.json({
      success: true,
      data: feedback,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
    });
  }
};