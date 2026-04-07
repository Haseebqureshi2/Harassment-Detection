import { useState } from "react";
import { changePasswordApi } from "../api/authApi";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const [show, setShow] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  if (form.newPassword !== form.confirmPassword) {
    setMessage("Passwords do not match");
    setMessageType("error");
    return;
  }

  setLoading(true);

  try {
    await changePasswordApi({
      oldPassword: form.oldPassword,
      newPassword: form.newPassword,
    });

    setMessage("Password changed successfully");
    setMessageType("success");

    setForm({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  } catch (err) {
    setMessage(err.response?.data?.message || "Failed to change password");
    setMessageType("error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6 space-y-6">

        {/* Title */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Change Password
          </h2>
          <p className="text-sm text-gray-500">
            Update your account password
          </p>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`text-sm ${
              messageType === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Old Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type={show.old ? "text" : "password"}
              name="oldPassword"
              placeholder="Old Password"
              value={form.oldPassword}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
            />
            <button
              type="button"
              onClick={() => setShow({ ...show, old: !show.old })}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {show.old ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* New Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type={show.new ? "text" : "password"}
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
            />
            <button
              type="button"
              onClick={() => setShow({ ...show, new: !show.new })}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {show.new ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type={show.confirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:ring-[rgb(63,177,181)] outline-none"
            />
            <button
              type="button"
              onClick={() =>
                setShow({ ...show, confirm: !show.confirm })
              }
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {show.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-[rgb(63,177,181)] text-white py-2 rounded-xl flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}