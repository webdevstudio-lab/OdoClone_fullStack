import Pagetitle from "@/components/Pagetitle";
import { SectionCards } from "@/components/section-cards";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const Clients = () => {
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col space-y-6 ">
          <div className="flex flex-row items-center justify-between py-2 px-6 bg-orange-300/20 rounded-2xl @container/card mx-6 ">
            <Pagetitle title="Clients" subtitle="Gestion des clients" />
            <Button className="pr-10">
              <UserPlus className="mr-2 h-4 w-4" />
              <p>Ajouter un client</p>
            </Button>
          </div>
          {/* <SectionCards /> */}
          <Card className="@container/card mx-6">
            <CardHeader>
              <CardTitle className="font-bold text-foreground text-2xl">
                LISTE DE VOS CLIENTS
              </CardTitle>
              <CardDescription className="text-muted-foreground tex-sm ">
                La liste de l'ensemble de vos clients vous pouvez ajouter,
                modifier ou supprimer
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Clients;
