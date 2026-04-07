import { useEffect, useState } from "react";
import { getDashboardData } from "../api/dashboardApi";

export default function useDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await getDashboardData();
      setData(res?.data || null); // ✅ FIX HERE
    } catch (err) {
      console.error("Dashboard API error:", err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading };
}