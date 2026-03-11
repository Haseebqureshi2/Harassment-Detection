import sgMail from "../config/sendgrid.js";

export const sendEmail = async ({ to, subject, html, attachments }) => {
  try {
    const msg = {
      to,
      from: `"SafeAI" <${process.env.EMAIL_FROM}>`,
      subject,
      html,
      attachments
    };

    await sgMail.send(msg);

  } catch (error) {
    console.error("SendGrid Email Error:", error.response?.body || error);
  }
};