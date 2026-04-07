import axiosClient from "./axiosClient";

export const loginApi = async (data) => {
  const res = await axiosClient.post("/admin/auth/login", data);
  return res.data;
};

export const forgotPasswordApi = async (email) => {
  const res = await axiosClient.post("/admin/auth/forgot-password", {
    email,
  });
  return res.data;
};

export const resetPasswordApi = async (data) => {
  const res = await axiosClient.post("/admin/auth/reset-password", data);
  return res.data;
};

export const changePasswordApi = async (data) => {
  const res = await axiosClient.post(
    "/admin/auth/change-password",
    data
  );
  return res.data;
};