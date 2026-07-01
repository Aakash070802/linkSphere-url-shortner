export const queryKeys = {
  auth: {
    all: ["auth"] as const,

    currentUser: () => [...queryKeys.auth.all, "current-user"] as const,
  },

  url: {
    all: ["url"] as const,

    list: () => [...queryKeys.url.all, "list"] as const,

    detail: (urlId: string) => [...queryKeys.url.all, "detail", urlId] as const,
  },

  analytics: {
    all: ["analytics"] as const,

    dashboard: () => [...queryKeys.analytics.all, "dashboard"] as const,

    url: (urlId: string) => [...queryKeys.analytics.all, "url", urlId] as const,
  },
} as const;
