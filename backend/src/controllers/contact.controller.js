import { sendEmail } from "../utils/sendEmail.js";
import { contactAutoReplyTemplate } 
from "../utils/contactAutoReplyTemplate.js";
export const sendContactEmail = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required",
      });
    }

    // Email to ADMIN
    const adminHtml = `
      <h2>📩 New Contact Message</h2>

      <p><strong>First Name:</strong> ${firstName || "N/A"}</p>
      <p><strong>Last Name:</strong> ${lastName || "N/A"}</p>
      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await sendEmail({
      to: process.env.EMAIL_FROM,
      subject: "New Contact Us Message",
      html: adminHtml,
    });

    // Auto reply to USER
  const userHtml = contactAutoReplyTemplate({
  firstName,
  email,
  prototypeUrl: "https://safeai-tech.com/prototype",
  privacyUrl: "https://safeai-tech.com/privacy",
  termsUrl: "https://safeai-tech.com/terms",
  unsubscribeUrl: `https://safeai-tech.com/unsubscribe?email=${encodeURIComponent(email)}`
});

    await sendEmail({
      to: email,
      subject: "We received your message",
      html: userHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Contact Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};