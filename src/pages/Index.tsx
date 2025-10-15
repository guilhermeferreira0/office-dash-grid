import { useState } from "react";
import { TopMenu } from "@/components/TopMenu";
import { Ribbon } from "@/components/Ribbon";
import { DataGrid } from "@/components/DataGrid";
import { BottomBar } from "@/components/BottomBar";

const Index = () => {
  const [isRibbonExpanded, setIsRibbonExpanded] = useState(true);

  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <TopMenu />
      <Ribbon isExpanded={isRibbonExpanded} setIsExpanded={setIsRibbonExpanded} />
      
      {/* Main content area with 5px gap from ribbon and 40px from bottom */}
      <main className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isRibbonExpanded ? 'pt-[130px]' : 'pt-[69px]'} pb-[40px]`}>
        <DataGrid />
      </main>
      
      <BottomBar />
    </div>
  );
};

export default Index;
