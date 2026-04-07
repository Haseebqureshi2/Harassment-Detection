import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  loginApi,
  forgotPasswordApi,
  resetPasswordApi,
} from "../api/authApi";
export default function LoginPage() {
  const [step, setStep] = useState("login"); // login | forgot | reset

  const [form, setForm] = useState({
    email: "",
    password: "",
    otp: "",
    newPassword: "",
  });

  const navigate = useNavigate();     // ✅ ADD THIS
  const { login } = useAuth(); 
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const data = await loginApi({
      email: form.email,
      password: form.password,
    });

    login(data.token);
    navigate("/");
  } catch (err) {
    setMessage(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

const handleForgot = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    await forgotPasswordApi(form.email);

    setStep("reset");
    setMessage("OTP sent to your email");
  } catch (err) {
    setMessage(err.response?.data?.message || "Failed to send OTP");
  } finally {
    setLoading(false);
  }
};
const handleReset = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    await resetPasswordApi({
      email: form.email,
      otp: form.otp,
      password: form.newPassword,
    });

    setStep("login");
    setMessage("Password reset successful. Please login.");
  } catch (err) {
    setMessage(err.response?.data?.message || "Reset failed");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
<div className="text-center space-y-3">
  
  {/* Logo */}
  <img
    src="/safeailogo.png"   // 👈 from public folder
    alt="Logo"
    className="mx-auto w-20 h-20 object-contain"
  />

  {/* Title */}
  <h1 className="text-2xl font-bold text-gray-800">
    {step === "login" && "Admin Login"}
    {step === "forgot" && "Forgot Password"}
    {step === "reset" && "Reset Password"}
  </h1>

  {/* Subtitle */}
  <p className="text-sm text-gray-500">
    {step === "login" && "Enter your credentials"}
    {step === "forgot" && "Enter your email to receive OTP"}
    {step === "reset" && "Enter OTP and new password"}
  </p>
</div>

        {/* MESSAGE */}
        {message && (
          <div className="text-sm text-center text-red-500">{message}</div>
        )}

        {/* ---------------- LOGIN FORM ---------------- */}
        {step === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              disabled={loading}
              className="w-full bg-[rgb(63,177,181)] text-white py-2 rounded-xl flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Login
            </button>

            {/* FORGOT */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => setStep("forgot")}
                className="text-sm text-[rgb(63,177,181)] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        )}

        {/* ---------------- FORGOT FORM ---------------- */}
        {step === "forgot" && (
          <form onSubmit={handleForgot} className="space-y-4">

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-[rgb(63,177,181)] text-white py-2 rounded-xl flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Send OTP
            </button>

            <button
              type="button"
              onClick={() => setStep("login")}
              className="text-sm text-gray-500 w-full text-center"
            >
              Back to login
            </button>
          </form>
        )}

        {/* ---------------- RESET FORM ---------------- */}
        {step === "reset" && (
          <form onSubmit={handleReset} className="space-y-4">

            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={form.otp}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
            />

            <button
              disabled={loading}
              className="w-full bg-[rgb(63,177,181)] text-white py-2 rounded-xl flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Reset Password
            </button>

            <button
              type="button"
              onClick={() => setStep("login")}
              className="text-sm text-gray-500 w-full text-center"
            >
              Back to login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}