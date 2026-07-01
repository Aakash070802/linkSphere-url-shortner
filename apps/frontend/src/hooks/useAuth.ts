import { useQuery } from "@tanstack/react-query";

import { authApi } from "@/api/auth.api";
import { queryKeys } from "@/lib/queryKeys";

export function useAuth() {
  const query = useQuery({
    queryKey: queryKeys.auth.currentUser(),
    queryFn: authApi.getCurrentUser,

    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    user: query.data?.user ?? null,

    isAuthenticated: !!query.data?.user,

    isLoading: query.isPending,

    isError: query.isError,

    error: query.error,

    refetch: query.refetch,
  };
}
