import Feedback from "../models/feedback.model.js";
import { sendEmail } from "../utils/sendEmail.js";
import { feedbackConfirmationTemplate } from "../utils/feedbackConfirmation.js";
import fs from "fs";
export const createFeedback = async (req, res) => {
  try {
    // ---------- Parse payload safely ----------
    const payload = JSON.parse(req.body.payload || "{}");

    const {
      firstName,
      email,
      riskScore,
      severity,
      context,
      findingsCount,
      ratings,
      improvement,
      analysisData,
      mode,
    } = payload;
console.log("BODY:", req.body);
console.log("FILE:", req.file);
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Remove empty optional fields
    if (!payload.companySize) delete payload.companySize;

    // ---------- Save feedback ----------
    const feedback = await Feedback.create({
      ...payload,
      user: req.user?._id,
    });

    // ---------- Email HTML ----------
    const html = feedbackConfirmationTemplate({
      firstName: firstName || "there",
      prototypeUrl: "https://safeai-tech.com/prototype",
      privacyUrl: "https://safeai-tech.com/privacy",
      termsUrl: "https://safeai-tech.com/terms",
      unsubscribeUrl: `https://safeai-tech.com/unsubscribe?email=${encodeURIComponent(email)}`,
      data: {
        includeAttachments: mode === "pdf" || mode === "json",
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

    // ---------- Build attachments ----------
    const attachments = [];

    // JSON attachment
    if (mode === "pdf" || mode === "json") {
      attachments.push({
        filename: "SafeAI_Analysis_Data.json",
        content: Buffer.from(
          JSON.stringify(analysisData, null, 2)
        ).toString("base64"),
        type: "application/json",
        disposition: "attachment",
      });
    }

    // PDF attachment
   // PDF attachment
if (req.file?.path) {
  const pdfBuffer = fs.readFileSync(req.file.path);

  attachments.push({
    filename: "SafeAI_Analysis_Report.pdf",
    content: pdfBuffer.toString("base64"),
    type: "application/pdf",
    disposition: "attachment",
  });
}
console.log("Attachments:", attachments);

    // ---------- Send Email ----------
    await sendEmail({
      to: email,
      subject: "Your SafeAI Analysis Report",
      html,
      attachments,
    });

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });

  } catch (error) {
    console.error("Feedback Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
    });
  }
};
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