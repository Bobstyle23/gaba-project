import APIClient, { type FetchResponse } from "../services/api-client";
import type { User } from "../entities/User";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<User>("/users");

export const LIMIT = 10;

function useUsers(page: number) {
  return useQuery<FetchResponse<User>, Error>({
    queryKey: ["users", page],
    queryFn: () =>
      apiClient.getAllUsers({
        params: {
          limit: LIMIT,
          skip: (page - 1) * LIMIT,
        },
      }),
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
}

export default useUsers;
