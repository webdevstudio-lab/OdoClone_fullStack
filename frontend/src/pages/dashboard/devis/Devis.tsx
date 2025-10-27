import Pagetitle from "@/components/Pagetitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilePlus2, UserPlus } from "lucide-react";

const Devis = () => {
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col space-y-6 ">
          <div className="flex flex-row items-center justify-between py-2 px-6 bg-orange-300/20 rounded-2xl @container/card mx-6 ">
            <Pagetitle title="Devis" subtitle="Gestion des devis" />
            <Button className="pr-10 cursor-pointer">
              <FilePlus2 className="mr-2 h-4 w-4" />
              <p>Crée un devis</p>
            </Button>
          </div>
          {/* <SectionCards /> */}
          <Card className="@container/card mx-6">
            <CardHeader>
              <CardTitle className="font-bold text-foreground text-2xl">
                LISTE DE VOS DEVIS
              </CardTitle>
              <CardDescription className="text-muted-foreground tex-sm ">
                La liste de l'ensemble de vos devis vous pouvez ajouter,
                modifier ou supprimer
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Devis;
