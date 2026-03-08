import axiosClient from "./axiosClient";

export const uploadFile = async (file, context = "VTC") => {
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
    }
  );

  return response.data;
};
