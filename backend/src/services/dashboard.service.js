import AnalysisSession from "../models/AnalysisSession.js";

export const getDashboardData = async () => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const last7Days = new Date();
  last7Days.setDate(last7Days.getDate() - 6);

  // -------------------------------
  // KPI METRICS
  // -------------------------------


  const [
    totalAnalyses,
    todayAnalyses,
    avgRisk,
    escalationStats,
    avgDuration
  ] = await Promise.all([
    // Total
    AnalysisSession.countDocuments(),

    // Today count
    AnalysisSession.countDocuments({
      createdAt: { $gte: todayStart }
    }),

    // Avg Risk Score (FIXED)
AnalysisSession.aggregate([
  {
    $match: {
      risk_score: {
        $type: "number",
        $nin: [Infinity, -Infinity]
      }
    }
  },
  {
    $group: {
      _id: null,
      avg: { $avg: "$risk_score" }
    }
  }
]),
    // Escalation Rate
    AnalysisSession.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          escalations: {
            $sum: {
              $cond: ["$escalation_detected", 1, 0]
            }
          }
        }
      }
    ]),

    // Avg Duration (FIXED)
    AnalysisSession.aggregate([
      {
        $match: {
          audio_duration_seconds: { $exists: true, $ne: null }
        }
      },
      {
        $group: {
          _id: null,
          avg: { $avg: { $toDouble: "$audio_duration_seconds" } }
        }
      }
    ])
  ]);

  // -------------------------------
  // ANALYSIS TREND (Last 7 Days)
  // -------------------------------
const analysisGrowth = await AnalysisSession.aggregate([
  {
    $group: {
      _id: {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" }
      },
      count: { $sum: 1 }
    }
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1
    }
  }
]);
  // -------------------------------
  // RISK DISTRIBUTION (FIXED)
  // -------------------------------

  // -------------------------------
  // SEVERITY DISTRIBUTION
  // -------------------------------
  const severityDistribution = await AnalysisSession.aggregate([
    {
      $match: {
        max_severity: { $exists: true, $ne: null }
      }
    },
    {
      $group: {
        _id: "$max_severity",
        count: { $sum: 1 }
      }
    }
  ]);

  // -------------------------------
  // LANGUAGE DISTRIBUTION
  // -------------------------------
  const languageDistribution = await AnalysisSession.aggregate([
    {
      $match: {
        language: { $exists: true, $ne: null }
      }
    },
    {
      $group: {
        _id: "$language",
        count: { $sum: 1 }
      }
    }
  ]);

  // -------------------------------
  // TOP CONTEXTS
  // -------------------------------
  const topContexts = await AnalysisSession.aggregate([
    {
      $match: {
        context: { $exists: true, $ne: null }
      }
    },
    {
      $group: {
        _id: "$context",
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } },
    { $limit: 5 }
  ]);

  // -------------------------------
  // RECENT HIGH RISK
  // -------------------------------
const recentHighRisk = await AnalysisSession.find({
  max_severity: { $in: ["critical", "high"] }
})
  .sort({ createdAt: -1 })
  .limit(5)
  .select(
    "session_id risk_score max_severity action_level context createdAt"
  );
  // -------------------------------
  // RESPONSE FORMAT
  // -------------------------------
const formattedGrowth = analysisGrowth.map(item => {
  const monthNames = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  return {
    month: `${monthNames[item._id.month - 1]} ${item._id.year}`,
    count: item.count
  };
});
  console.log(recentHighRisk);

  return {
    kpis: {
      totalAnalyses,
      todayAnalyses,
    avgRiskScore: avgRisk[0]?.avg ?? 0,
      escalationRate: escalationStats.length
        ? (escalationStats[0].escalations /
            escalationStats[0].total) * 100
        : 0,
      avgDuration: avgDuration.length ? avgDuration[0].avg : 0
    },

    charts: {
       analysisGrowth: formattedGrowth,
     
      severityDistribution,
      languageDistribution
    },

    insights: {
      topContexts,
      recentHighRisk
    }
  };
};