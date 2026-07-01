import type { RouteObject } from "react-router-dom";

import RootLayout from "@/app/layouts/RootLayout";
import AuthLayout from "@/app/layouts/AuthLayout";

import { ROUTES } from "./routePaths";

import LandingPage from "@/pages/landing/LandingPage";

import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import LinksPage from "@/pages/dashboard/LinksPage";
import AnalyticsPage from "@/pages/dashboard/AnalyticsPage";
import SettingsPage from "@/pages/dashboard/SettingsPage";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,

    children: [
      {
        path: ROUTES.HOME,
        element: <LandingPage />,
      },

      {
        element: <AuthLayout />,

        children: [
          {
            path: ROUTES.AUTH.SIGN_IN,
            element: <SignInPage />,
          },
          {
            path: ROUTES.AUTH.SIGN_UP,
            element: <SignUpPage />,
          },
        ],
      },

      {
        path: ROUTES.DASHBOARD.ROOT,
        element: <DashboardPage />,
      },
      {
        path: ROUTES.DASHBOARD.LINKS,
        element: <LinksPage />,
      },
      {
        path: ROUTES.DASHBOARD.ANALYTICS,
        element: <AnalyticsPage />,
      },
      {
        path: ROUTES.DASHBOARD.SETTINGS,
        element: <SettingsPage />,
      },
    ],
  },
];
