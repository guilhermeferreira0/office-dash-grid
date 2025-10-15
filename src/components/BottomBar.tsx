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
          className="h-8 w-8 p-0 hover:bg-accent"
          title="Gráfico"
        >
          <BarChart3 className="h-5 w-5 text-black" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSimulationOpen(true)}
          className="h-8 w-8 p-0 hover:bg-accent"
          title="Simulação"
        >
          <FlaskConical className="h-5 w-5 text-black" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setComparativeOpen(true)}
          className="h-8 w-8 p-0 hover:bg-accent"
          title="Comparativos"
        >
          <GitCompare className="h-5 w-5 text-black" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setAIOpen(true)}
          className="h-8 w-8 p-0 hover:bg-accent"
          title="IA"
        >
          <Sparkles className="h-5 w-5 text-black" />
        </Button>
      </div>

      <ChartModal open={chartOpen} onOpenChange={setChartOpen} />
      <SimulationModal open={simulationOpen} onOpenChange={setSimulationOpen} />
      <ComparativeModal open={comparativeOpen} onOpenChange={setComparativeOpen} />
      <AIModal open={aiOpen} onOpenChange={setAIOpen} />
    </>
  );
};
