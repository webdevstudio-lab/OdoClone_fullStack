import { API } from "@/lib/axiosClient";
import type { UserType } from "@/types/authType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  currentUser: UserType | null;
  isCheckingAuth: boolean;

  getUser: () => void;
}

export const useUser = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,
      isCheckingAuth: false,

      getUser: async () => {
        set({ isCheckingAuth: true });
        try {
          const res = await API.get("/user/me");
          set({ currentUser: res.user, isCheckingAuth: false });
        } catch (error: any) {
          set({ currentUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
      },
    }),

    {
      name: "whop:root",
    }
  )
);
