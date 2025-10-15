import { TopMenu } from "@/components/TopMenu";
import { Ribbon } from "@/components/Ribbon";
import { DataGrid } from "@/components/DataGrid";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <TopMenu />
      <Ribbon />
      
      {/* Main content area with proper spacing for fixed headers */}
      <main className="flex-1 flex flex-col pt-[125px] overflow-hidden">
        <DataGrid />
      </main>
    </div>
  );
};

export default Index;
