import { useState } from "react";
import { TopMenu } from "@/components/TopMenu";
import { Ribbon } from "@/components/Ribbon";
import { DataGrid } from "@/components/DataGrid";

const Index = () => {
  const [isRibbonExpanded, setIsRibbonExpanded] = useState(true);

  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <TopMenu />
      <Ribbon isExpanded={isRibbonExpanded} setIsExpanded={setIsRibbonExpanded} />
      
      {/* Main content area with 5px gap from ribbon */}
      <main className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isRibbonExpanded ? 'pt-[130px]' : 'pt-[69px]'}`}>
        <DataGrid />
      </main>
    </div>
  );
};

export default Index;
