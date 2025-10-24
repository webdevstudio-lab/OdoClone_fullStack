import { API } from "@/lib/axiosClient";
import type { LoginType, RegisterType, UserType } from "@/types/authType";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: UserType | null;
  isLoggingIn: boolean;
  isSigningUp: boolean;
  isAuthStatusLoading: boolean;

  register: (data: RegisterType) => void;
  login: (data: LoginType) => void;
  logout: () => void;
  isAuthStatus: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggingIn: false,
      isSigningUp: false,
      isAuthStatusLoading: false,

      register: async (data: RegisterType) => {
        set({ isSigningUp: true });
        try {
          const response = await API.post("/auth/sign-up", data);
          set({ user: response.data.user, isSigningUp: false });
          toast.success("votre compte a été crée avec success");
        } catch (error: any) {
          console.log(error);
          toast.error(
            error.response.data.message || "Le processus d'inscription a echoué"
          );
        } finally {
          set({ isSigningUp: false });
        }
      },

      login: async (data: LoginType) => {
        set({ isLoggingIn: true });
        try {
          const response = await API.post("/auth/sign-in", data);
          set({ user: response.data.user, isLoggingIn: false });
          toast.success("vous vous etes connecté avec success");
        } catch (error: any) {
          toast.error(
            error.response.data.message || "Le processus de connexion a echoué"
          );
        } finally {
          set({ isLoggingIn: false });
        }
      },

      logout: async () => {
        try {
          await API.post("/auth/sign-out");
          set({ user: null });
          toast.success("vous vous etes deconnecté avec success");
        } catch (error: any) {
          toast.error(
            error.response.data.message ||
              "Le processus de deconnexion a echoué"
          );
        }
      },

      isAuthStatus: async () => {
        set({ isAuthStatusLoading: true });
        try {
          const response = await API.get("/user/me");
          set({ user: response.data.user.user, isAuthStatusLoading: false });
        } catch (error: any) {
          toast.error(
            error.response.data.message ||
              "Le processus de verification de la connexion a echoué"
          );
          console.log(error);
          //   set({ user: null, isAuthStatusLoading: false });
        } finally {
          set({ isAuthStatusLoading: false });
        }
      },
    }),

    {
      name: "whop:root",
    }
  )
);
