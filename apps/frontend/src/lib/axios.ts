import axios from "axios";

import { env } from "@/lib/env";

export const api = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  timeout: 10_000,
});

export const refreshApi = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  timeout: 10_000,
});

/**
 * Request Interceptor
 */

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor
 */

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Refresh token flow will be implemented in
    // feat/auth-foundation.

    return Promise.reject(error);
  },
);
