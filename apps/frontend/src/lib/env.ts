const API_URL =
  import.meta.env.VITE_API_URL || import.meta.env.VITE_LOCAL_API_URL;

if (!API_URL) {
  throw new Error(
    "Missing API URL. Configure VITE_API_URL or VITE_LOCAL_API_URL.",
  );
}

export const env = {
  apiUrl: API_URL,
} as const;
