import Feedback from "../models/feedback.model.js";

export const getFeedbackList = async (query) => {

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const filter = {};

  // -------------------------
  // Filters
  // -------------------------
  if (query.context)
    filter.context = query.context;

  if (query.minRisk || query.maxRisk) {
    filter.riskScore = {};
    if (query.minRisk)
      filter.riskScore.$gte = Number(query.minRisk);
    if (query.maxRisk)
      filter.riskScore.$lte = Number(query.maxRisk);
  }

  // search email or name
  if (query.search) {
    filter.$or = [
      { email: { $regex: query.search, $options: "i" } },
      { firstName: { $regex: query.search, $options: "i" } }
    ];
  }

  // -------------------------
  // Query
  // -------------------------
  const [data, total] = await Promise.all([

    Feedback.find(filter)
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select(`
        firstName
        email
        riskScore
        context
        ratings
        createdAt
        user
      `),

    Feedback.countDocuments(filter)
  ]);

  return {
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit),
      limit
    },
    data
  };
};

export const getFeedbackDetail = async (id) => {

  const feedback = await Feedback.findById(id)
    .populate("user", "name email");

  if (!feedback)
    throw new Error("Feedback not found");

  return feedback;
};

export const getFeedbackStats = async () => {

  // Average ratings
  const averages = await Feedback.aggregate([
    {
      $group: {
        _id: null,
        avgAccuracy: { $avg: "$ratings.accuracy" },
        avgUsefulness: { $avg: "$ratings.usefulness" },
        avgRecommend: { $avg: "$ratings.recommend" }
      }
    }
  ]);

  // Context distribution
  const contextStats = await Feedback.aggregate([
    {
      $group: {
        _id: "$context",
        count: { $sum: 1 }
      }
    }
  ]);

  // Daily submissions
  const trend = await Feedback.aggregate([
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$createdAt"
          }
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { "_id": 1 } }
  ]);

  return {
    averages: averages[0] || {},
    contextStats,
    trend
  };
};