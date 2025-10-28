import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { useUser } from "../hooks/useUser";

interface Props {
  children?: ReactNode;
}
const ProtectedRoute = ({ children }: Props) => {
  const { isLoading, userConnected, curentUser } = useUser();
  console.log(userConnected, isLoading);

  if (!isLoading)
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <Loader2 className="animate-spin text-2xl text-primary" />
          <p className="font-bold text-slate-500">Chargement des données...</p>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default ProtectedRoute;
