import { Navigate, Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const AppLayout = () => {
  const { isCheckingAuth, currentUser, getUser } = useUser();
  useEffect(() => {
    getUser();
  }, [getUser]);
  return isCheckingAuth ? (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-2">
        <Loader2 className="animate-spin text-2xl text-primary" />
        <p className="font-bold text-slate-500">Chargement des données...</p>
      </div>
    </div>
  ) : currentUser ? (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ) : (
    <Navigate to="/connexion" />
  );
};

export default AppLayout;
