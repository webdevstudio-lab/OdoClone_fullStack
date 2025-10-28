import { API } from "@/lib/axiosClient";
import { navigate } from "@/lib/navigation";
import type { LoginType, RegisterType, UserType } from "@/types/authType";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: UserType | null;
  isLoggingIn: boolean;
  isConnected: boolean;
  isLoggout: boolean;
  isSigningUp: boolean;

  register: (data: RegisterType) => void;
  login: (data: LoginType) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggingIn: false,
      isSigningUp: false,
      isLoggout: false,
      isConnected: true,

      register: async (data: RegisterType) => {
        set({ isSigningUp: false });
        try {
          const res = await API.post("/auth/sign-up", data);
          set({ user: res.user, isSigningUp: false });
          toast.success("votre compte a été crée avec success");
        } catch (error: any) {
          console.log(error);
          toast.error(error.message || "Le processus d'inscription a echoué");
        } finally {
          set({ isSigningUp: false });
        }
      },

      login: async (data: LoginType) => {
        set({ isLoggingIn: true });
        try {
          const res = await API.post("/auth/sign-in", data);
          set({ user: res.user, isLoggingIn: false });
          navigate("/", { replace: true });
          toast.success(res.message);
        } catch (error: any) {
          toast.error(error.message || "Le processus de connexion a echoué");
        } finally {
          set({ isLoggingIn: false });
        }
      },

      logout: async () => {
        set({ isLoggout: true });
        try {
          const res = await API.get("/auth/logout");
          set({ user: null });
          toast.success(res.message);
        } catch (error: any) {
          toast.error(error.message || "Le processus de deconnexion a echoué");
        } finally {
          set({ isLoggout: false });
        }
      },
    }),

    {
      name: "whop:root",
    }
  )
);
