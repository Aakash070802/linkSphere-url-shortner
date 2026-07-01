export const ROUTES = {
  HOME: "/",

  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
  },

  DASHBOARD: {
    ROOT: "/dashboard",
    LINKS: "/dashboard/links",
    ANALYTICS: "/dashboard/analytics",
    SETTINGS: "/dashboard/settings",
  },
} as const;
