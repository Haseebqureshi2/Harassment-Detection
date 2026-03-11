import axiosClient from "./axiosClient";

export const uploadFile = async (file, context = "VTC") => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("context", context);

    const response = await axiosClient.post(
      "/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
          timeout: 300000
      }
    );

    return response.data;

  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Upload failed";

    throw new Error(message);
  }
};