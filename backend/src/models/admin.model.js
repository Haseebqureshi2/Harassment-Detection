import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // 🔒 don't return by default
    },
    role: {
      type: String,
      default: "admin",
    },
otpCode: String,
otpExpire: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);