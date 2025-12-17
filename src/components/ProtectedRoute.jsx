import { Navigate } from "react-router";
import { getCurrentUser } from "../auth/auth";

export default function ProtectedRoute({ children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
