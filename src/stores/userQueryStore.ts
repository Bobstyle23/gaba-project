import { create } from "zustand";

interface UsersState {
  page: number;
  search: string;

  setPage: (page: number) => void;
  setSearch: (search: string) => void;

  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;
}

const useUsersStore = create<UsersState>((set) => ({
  page: 1,
  search: "",
  setPage: (page) => set({ page }),
  setSearch: (search) =>
    set({
      search,
      page: 1,
    }),
  nextPage: () => {
    set((state) => ({
      page: state.page + 1,
    }));
  },
  prevPage: () =>
    set((state) => ({
      page: Math.max(state.page - 1, 1),
    })),
  resetPage: () => set({ page: 1 }),
}));

export default useUsersStore;
