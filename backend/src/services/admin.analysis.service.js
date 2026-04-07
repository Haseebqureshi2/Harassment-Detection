import AnalysisSession from "../models/AnalysisSession.js";

export const getAnalysesList = async (query) => {

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const filter = {};


  if (query.context)
    filter.context = query.context;

  if (query.language)
    filter.language = query.language;

  if (query.escalation)
    filter.escalation_detected =
      query.escalation === "true";

  if (query.minRisk || query.maxRisk) {
    filter.risk_score = {};
    if (query.minRisk)
      filter.risk_score.$gte = Number(query.minRisk);
    if (query.maxRisk)
      filter.risk_score.$lte = Number(query.maxRisk);
  }

  if (query.search) {
    filter.session_id = {
      $regex: query.search,
      $options: "i"
    };
  }

  const sort = {};
  const sortBy = query.sortBy || "createdAt";
  const order = query.order === "asc" ? 1 : -1;
  sort[sortBy] = order;

 
  const [data, total] = await Promise.all([
    AnalysisSession.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .select(`
        session_id
        context
        risk_score
        max_severity
        action_level
        escalation_detected
        language
        audio_duration_seconds
        createdAt
      `),

    AnalysisSession.countDocuments(filter)
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

export const getAnalysisDetail = async (sessionId) => {

  const analysis = await AnalysisSession.findOne({
    session_id: sessionId
  });

  if (!analysis) {
    throw new Error("Analysis not found");
  }

  const severityBreakdown = {};

  analysis.findings?.forEach(f => {
    severityBreakdown[f.severity] =
      (severityBreakdown[f.severity] || 0) + 1;
  });

  return {
    session_id: analysis.session_id,
    date: analysis.createdAt,
    context: analysis.context,
    risk_score: analysis.risk_score,
    max_severity: analysis.max_severity,
    action_level: analysis.action_level,
    escalation_detected: analysis.escalation_detected,
    language: analysis.language,
    duration: analysis.audio_duration_seconds,

    // summary: analysis.summary,
    // context_analysis: analysis.context_analysis,
    // pattern_description: analysis.pattern_description,
    action_hint: analysis.action_hint,
    // findings: analysis.findings || [],
    severity_breakdown: severityBreakdown
  };
};