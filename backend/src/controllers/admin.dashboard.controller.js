import { getDashboardData } from "../services/dashboard.service.js";

export const dashboardHome = async (req, res) => {
  try {

    const data = await getDashboardData();

    return res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard"
    });
  }
};