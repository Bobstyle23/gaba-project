import { useQuery } from "@tanstack/react-query";
import type { User } from "../entities/User";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<User>("/users");

function useUserDetail(userId: number) {
  return useQuery({
    queryKey: ["userDetail", userId],
    queryFn: () => apiClient.getUserById(userId),
    enabled: !!userId,
    staleTime: ms("24h"),
  });
}

export default useUserDetail;
