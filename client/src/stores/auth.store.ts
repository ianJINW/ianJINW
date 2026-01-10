import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import api from "../api/axios";

export interface User {
  username: string;
  email: string;
  _id: string;
  id: string;
  image: string;
}

export interface LoginRes {
  user: User;
  token: number;
}

export interface userStore {
  user: User | null;
  isAuth: boolean;

  login: (res: LoginRes) => void;
  logout: () => void;
  verifySession: () => Promise<void>;
}

const useAuthStore = create<userStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuth: false,

      login: (res: LoginRes) => {
        const { user } = res

        set({ user, isAuth: true })
      },

      logout: () => {
        set({
          user: null,
          isAuth: false
        })
      },

      verifySession: async () => {
        const res = await api.get('') 

        get().login(res.data)
      }
    }), {
    name: 'auth_store',
    storage: createJSONStorage(() => localStorage)
  })
)

export default useAuthStore