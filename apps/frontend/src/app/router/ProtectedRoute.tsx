import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@/app/router/routePaths";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.SIGN_IN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
