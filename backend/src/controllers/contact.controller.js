import transporter from "../config/mailer.js";

export const sendContactEmail = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required",
      });
    }

    // Send email to YOU
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Contact Us Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>First Name:</strong> ${firstName || "N/A"}</p>
        <p><strong>Last Name:</strong> ${lastName || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Optional: Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <h3>Thank you for contacting us!</h3>
        <p>We will get back to you shortly.</p>
      `,
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