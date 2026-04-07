import axiosClient from "./axiosClient";

export const getDashboardData = async () => {
  try {
    const res = await axiosClient.get("/admin/dashboard");

    // ✅ correct check
    if (!res.data.success) {
      throw new Error("Failed to fetch dashboard");
    }
 console.log("FULL RESPONSE:", res);
    console.log("DATA:", res.data);
    return res.data; // { success: true, data: {...} }

  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};