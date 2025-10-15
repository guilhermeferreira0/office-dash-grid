import { TopMenu } from "@/components/TopMenu";
import { Ribbon } from "@/components/Ribbon";
import { DataGrid } from "@/components/DataGrid";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <TopMenu />
      <Ribbon />
      
      {/* Main content area with proper spacing for fixed headers */}
      <main className="flex-1 flex flex-col mt-32 overflow-hidden">
        <div className="px-4 py-2 border-b border-border">
          <h1 className="text-lg font-semibold text-foreground">
            SGI RECEPTIVO - Outubro 2024
          </h1>
        </div>
        <DataGrid />
      </main>
    </div>
  );
};

export default Index;
