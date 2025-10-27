import Pagetitle from "@/components/Pagetitle";
import { SectionCards } from "@/components/section-cards";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="m-4">
      <div className="flex flex-col space-y-6 ">
        <div className="flex flex-row items-center justify-between py-2 bg-green-300/20 rounded-2xl @container/card mx-6 ">
          <Pagetitle
            title="Dashboard"
            subtitle="Bienvenue sur votre dashboard"
          />
          <p className="pr-6"></p>
        </div>
        <SectionCards />
        <Card className="@container/card mx-6">
          <CardHeader>
            <CardTitle className="font-bold text-foreground text-2xl">
              FACTURES RECENTE
            </CardTitle>
            <CardDescription className="text-muted-foreground tex-sm ">
              Liste des factures recentes de votre entreprise
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
