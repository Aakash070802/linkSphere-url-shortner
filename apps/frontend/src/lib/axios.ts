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

const refreshApi = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  timeout: 10_000,
});

let isRefreshing = false;

let pendingQueue: Array<{
  resolve: () => void;
  reject: (error: unknown) => void;
}> = [];

function processQueue(error?: unknown) {
  pendingQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
      return;
    }

    resolve();
  });

  pendingQueue = [];
}

/**
 * Request Interceptor
 */

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor
 */

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject,
          });
        });
      }

      isRefreshing = true;

      try {
        await refreshApi.post("/auth/refresh");

        processQueue();

        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
