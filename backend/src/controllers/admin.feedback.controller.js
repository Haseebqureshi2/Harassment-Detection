import {
  getFeedbackList,
  getFeedbackDetail,
  getFeedbackStats
} from "../services/admin.feedback.service.js";

export const listFeedback = async (req, res) => {
  try {

    const result = await getFeedbackList(req.query);

    res.json({
      success: true,
      ...result
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback"
    });
  }
};

export const feedbackDetail = async (req, res) => {
  try {

    const data = await getFeedbackDetail(req.params.id);

    res.json({
      success: true,
      data
    });

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};


export const feedbackStats = async (req, res) => {
  try {

    const stats = await getFeedbackStats();

    res.json({
      success: true,
      data: stats
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load stats"
    });
  }
};