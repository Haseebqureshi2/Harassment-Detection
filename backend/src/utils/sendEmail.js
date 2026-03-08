import transporter from "../config/mailer.js";

export const sendEmail = async ({ to, subject, html, attachments}) => {
  try {
    await transporter.sendMail({
      from: `"SafeAI" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
        attachments,
    });

  } catch (error) {
    console.error("Email Error:", error);
  }
};