import { useEffect, useState } from "react";
import { getFeedbackList } from "../api/feedbackApi";

export default function useFeedback() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
    search: "",
  });

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    const res = await getFeedbackList(query);

    if (res) {
      setData(res.data);
      setPagination(res.pagination);
    } else {
      setData([]);
    }

    setLoading(false);
  };

  return {
    data,
    pagination,
    loading,
    query,
    setQuery,
  };
}