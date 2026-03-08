import axiosClient from "./axiosClient";


// CREATE FEEDBACK
export const createFeedback = async (feedbackData) => {
  const response = await axiosClient.post("/api/feedback", feedbackData);
  return response.data;
};


// ADMIN — GET ALL FEEDBACK (for dashboard later)
export const getAllFeedback = async () => {
  const response = await axiosClient.get("/api/feedback");
  return response.data;
};