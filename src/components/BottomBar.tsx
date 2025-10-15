import { useState } from "react";
import { BarChart3, FlaskConical, GitCompare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChartModal } from "./modals/ChartModal";
import { SimulationModal } from "./modals/SimulationModal";
import { ComparativeModal } from "./modals/ComparativeModal";
import { AIModal } from "./modals/AIModal";

export const BottomBar = () => {
  const [chartOpen, setChartOpen] = useState(false);
  const [simulationOpen, setSimulationOpen] = useState(false);
  const [comparativeOpen, setComparativeOpen] = useState(false);
  const [aiOpen, setAIOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-background/95 backdrop-blur-sm border-t-2 border-primary/20 shadow-lg z-20 flex items-center justify-center gap-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setChartOpen(true)}
          className="flex flex-col h-9 px-3 hover:bg-accent gap-0.5"
          title="Gráfico"
        >
          <BarChart3 className="h-4 w-4 text-primary" />
          <span className="text-[9px] text-foreground">Gráfico</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSimulationOpen(true)}
          className="flex flex-col h-9 px-3 hover:bg-accent gap-0.5"
          title="Simulação"
        >
          <FlaskConical className="h-4 w-4 text-primary" />
          <span className="text-[9px] text-foreground">Simulação</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setComparativeOpen(true)}
          className="flex flex-col h-9 px-3 hover:bg-accent gap-0.5"
          title="Comparativos"
        >
          <GitCompare className="h-4 w-4 text-primary" />
          <span className="text-[9px] text-foreground">Comparativos</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setAIOpen(true)}
          className="flex flex-col h-9 px-3 hover:bg-accent gap-0.5"
          title="IA"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-[9px] text-foreground">IA</span>
        </Button>
      </div>

      <ChartModal open={chartOpen} onOpenChange={setChartOpen} />
      <SimulationModal open={simulationOpen} onOpenChange={setSimulationOpen} />
      <ComparativeModal open={comparativeOpen} onOpenChange={setComparativeOpen} />
      <AIModal open={aiOpen} onOpenChange={setAIOpen} />
    </>
  );
};
