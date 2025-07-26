import { Navigate } from "react-router-dom";

// ✅ Dummy auth check (replace with real logic if needed)
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // true if token exists
};

const ProjectRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProjectRoute;
