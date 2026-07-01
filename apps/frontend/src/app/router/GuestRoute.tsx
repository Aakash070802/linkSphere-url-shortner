import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@/app/router/routePaths";
import { useAuth } from "@/hooks/useAuth";

const GuestRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD.ROOT} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
