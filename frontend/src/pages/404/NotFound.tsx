import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Retourne à la page précédente
  };
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-[5rem]">😴</p>
        <p className="text-[3rem] font-semibold text-primary">404</p>
        <p className="text-[3.5rem] font-bold text-secondary">
          Ooups, la ressource est introuvable !
        </p>
        <Button className="p-6 cursor-pointer" onClick={handleGoBack}>
          <ArrowBigLeft className="mr-2 h-4 w-4" />
          <p>Retour à la page précédente</p>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
