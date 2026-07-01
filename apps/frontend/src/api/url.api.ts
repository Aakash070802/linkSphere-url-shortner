import { api } from "@/lib/axios";

export const urlApi = {
  // TODO: Add proper types for payload and response data
  /**
   * Create Short URL API
   */
  createShortUrl: async (payload: unknown) => {
    const { data } = await api.post("/url/create", payload);

    return data;
  },

  /**
   * Get My URLs API
   */
  redirectToUrl: async (shortCode: string) => {
    const { data } = await api.get(`/url/${shortCode}`);

    return data;
  },

  /**
   * Update URL API
   */
  updateUrl: async (urlId: string, payload: unknown) => {
    const { data } = await api.patch(`/url/update/${urlId}`, payload);

    return data;
  },

  /**
   * Delete URL API
   */
  deleteUrl: async (urlId: string) => {
    const { data } = await api.delete(`/url/delete/${urlId}`);

    return data;
  },
};
