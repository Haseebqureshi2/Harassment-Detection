import {
  getAnalysesList,
  getAnalysisDetail
} from "../services/admin.analysis.service.js";

export const listAnalyses = async (req, res) => {
  try {

    const result = await getAnalysesList(req.query);

    res.json({
      success: true,
      ...result
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch analyses"
    });
  }
};


export const analysisDetail = async (req, res) => {
  try {

    const data = await getAnalysisDetail(
      req.params.sessionId
    );

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