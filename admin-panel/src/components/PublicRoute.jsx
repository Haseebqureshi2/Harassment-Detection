import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // ✅ If already logged in → redirect to dashboard
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}