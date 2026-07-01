import { api } from "@/lib/axios";

export const analyticsApi = {
  // TODO: Add proper response types

  /**
   * Get Analytics Dashboard
   */
  getDashboard: async () => {
    const { data } = await api.get("/analytics/dashboard");

    return data;
  },

  /**
   * Get URL Analytics
   */
  getUrlAnalytics: async (urlId: string) => {
    const { data } = await api.get(`/analytics/url/${urlId}`);

    return data;
  },
};
