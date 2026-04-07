// src/api/analysisApi.js
import axiosClient from "./axiosClient";

export const getAnalysesList = async (params) => {
  try {
    const res = await axiosClient.get("/admin/analyses", {
      params,
    });

    if (!res.data.success) {
      throw new Error("Failed to fetch analyses");
    }

    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};