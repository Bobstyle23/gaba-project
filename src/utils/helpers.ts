import type { User } from "../entities/User";

export const isUsersEmpty = (users: User[]) => users.length === 0;
