import { useState } from "react";
import { uploadFile } from "../api/uploadApi";

export function useFileUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [report, setReport] = useState(null);

  const handleUpload = async (file) => {
    try {
      setLoading(true);
      setError(null);
      setReport(null);

      const result = await uploadFile(file);
      setReport(result);

    } catch (err) {
      setError(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpload, loading, error, report };
}
