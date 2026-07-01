import { api } from "@/lib/axios";

export const authApi = {
  // TODO: Add proper types for payload and response data
  /**
   * Sign Up API
   */
  signUp: async (payload: unknown) => {
    const { data } = await api.post("/auth/signup", payload);

    return data;
  },

  /**
   * Sign In API
   */
  signIn: async (payload: unknown) => {
    const { data } = await api.post("/auth/signin", payload);

    return data;
  },

  /**
   * Sign Out API
   */
  signOut: async () => {
    const { data } = await api.post("/auth/signout");

    return data;
  },

  /**
   * Refresh Token API
   */
  refreshToken: async () => {
    const { data } = await api.post("/auth/refresh");

    return data;
  },

  /**
   * Get Current User API
   */
  getCurrentUser: async () => {
    const { data } = await api.get("/auth/me");

    return data;
  },
};
