import APIClient, { type FetchResponse } from "../services/api-client";
import type { User } from "../entities/User";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<User>("/users");

function useUsers() {
  return useInfiniteQuery<FetchResponse<User>, Error>({
    queryKey: ["users"],
    queryFn: ({ pageParam = 0 }) =>
      apiClient.getAllUsers({
        params: {
          limit: 10,
          skip: pageParam,
        },
      }),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
}

export default useUsers;
