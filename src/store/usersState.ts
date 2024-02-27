import { create } from "zustand";
import { User } from "../types/user";

interface UsersStoreType {
  users: User[] | null;
  setUser: (user: User) => void;
  setUsers: (users: User[]) => void;
}

const usersStore = create<UsersStoreType>((set) => ({
  users: null,
  setUser: (user: User) =>
    set((state) => ({
      ...state,
      users: state.users ? [...state.users, user] : [user],
    })),
  setUsers: (users: User[]) =>
    set({
      users,
    }),
}));

export default usersStore;
