import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Admin from "../models/admin.model.js";
import { sendEmail } from "../utils/sendEmail.js";
const JWT_SECRET = process.env.JWT_SECRET;

export const loginAdmin = async ({ email, password }) => {
  const admin = await Admin.findOne({ email }).select("+password");

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: admin._id,
      role: admin.role,
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    admin: {
      id: admin._id,
      email: admin.email,
      role: admin.role,
    },
  };
};

export const changePassword = async (adminId, oldPassword, newPassword) => {
  const admin = await Admin.findById(adminId).select("+password");

  if (!admin) {
    throw new Error("Admin not found");
  }

  const isMatch = await bcrypt.compare(oldPassword, admin.password);

  if (!isMatch) {
    throw new Error("Old password is incorrect");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  admin.password = hashedPassword;
  await admin.save();

  return true;
};



// Generate 6 digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// ---------------- FORGOT PASSWORD (SEND OTP) ----------------
export const forgotPassword = async (email) => {
  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new Error("Admin not found");
  }

  const otp = generateOTP();

  // Hash OTP
  const hashedOTP = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");

  admin.otpCode = hashedOTP;
  admin.otpExpire = Date.now() + 10 * 60 * 1000; // 10 min

  await admin.save();

  await sendEmail({
    to: admin.email,
    subject: "Admin Password Reset OTP",
    html: `
      <h3>Your OTP Code</h3>
      <p style="font-size:20px;font-weight:bold;">${otp}</p>
      <p>This OTP will expire in 10 minutes.</p>
    `,
  });

  return true;
};
export const resetPassword = async (email, otp, newPassword) => {
  const hashedOTP = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");

  const admin = await Admin.findOne({
    email,
    otpCode: hashedOTP,
    otpExpire: { $gt: Date.now() },
  });

  if (!admin) {
    throw new Error("Invalid or expired OTP");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  admin.password = hashedPassword;
  admin.otpCode = undefined;
  admin.otpExpire = undefined;

  await admin.save();

  return true;
};