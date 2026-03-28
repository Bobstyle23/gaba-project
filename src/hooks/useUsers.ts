import APIClient, { type FetchResponse } from "../services/api-client";
import type { User } from "../entities/User";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<User>("/users");

function useUsers(page: number) {
  return useQuery<FetchResponse<User>, Error>({
    queryKey: ["users", page],
    queryFn: () =>
      apiClient.getAllUsers({
        params: {
          limit: 10,
          skip: (page - 1) * 10,
        },
      }),
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
}

export default useUsers;
