import { TopMenu } from "@/components/TopMenu";
import { Ribbon } from "@/components/Ribbon";
import { DataGrid } from "@/components/DataGrid";
import { BottomBar } from "@/components/BottomBar";
import { KPISection } from "@/components/KPISection";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <TopMenu />
      <Ribbon />
      
      {/* Main content area with 2px gap from ribbon and space for KPI cards and bottom bar */}
      <main className="flex-1 flex flex-col overflow-hidden pt-[100px] pb-[145px]">
        <DataGrid />
      </main>
      
      {/* KPI Cards - 5px above bottom bar */}
      <div className="fixed bottom-[45px] left-0 right-0 z-30">
        <KPISection />
      </div>
      
      <BottomBar />
    </div>
  );
};

export default Index;
