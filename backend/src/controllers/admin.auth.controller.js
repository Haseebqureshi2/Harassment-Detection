import {
  loginAdmin,
  changePassword,
  forgotPassword,
  resetPassword,
} from "../services/admin.auth.service.js";

// LOGIN
export const login = async (req, res) => {
  try {
    const result = await loginAdmin(req.body);

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

// CHANGE PASSWORD
export const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    await changePassword(req.admin.id, oldPassword, newPassword);

    res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const forgot = async (req, res) => {
  try {
    const { email } = req.body;

    await forgotPassword(email);

    res.json({
      success: true,
      message: "OTP sent to email",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// VERIFY OTP + RESET PASSWORD
export const reset = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    await resetPassword(email, otp, password);

    res.json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};