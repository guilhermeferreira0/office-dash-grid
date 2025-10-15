import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ChartModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const chartTypes = ["Pizza", "Barra", "Linha"];
const columns = [
  "Operação",
  "Ação",
  "Tráfego % Desvio",
  "Tráfego % Aband.",
  "PCA Forecast",
  "PCA Real",
  "Tempo TMA",
  "Tempo % Desvio",
  "SLA Prev. 60s",
  "SLA Até 60s",
  "HC Escal.",
  "HC Prod.",
  "HC Trab.",
  "ABS %"
];

export const ChartModal = ({ open, onOpenChange }: ChartModalProps) => {
  const [chartType, setChartType] = useState("");
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");

  const handleGenerate = () => {
    console.log("Gerar gráfico:", { chartType, xAxis, yAxis });
    // Lógica para gerar gráfico
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Inserir Gráfico</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="chart-type" className="text-sm font-medium">
              Tipo de Gráfico
            </Label>
            <Select value={chartType} onValueChange={setChartType}>
              <SelectTrigger id="chart-type">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                {chartTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="x-axis" className="text-sm font-medium">
              Eixo X
            </Label>
            <Select value={xAxis} onValueChange={setXAxis}>
              <SelectTrigger id="x-axis">
                <SelectValue placeholder="Selecione a coluna" />
              </SelectTrigger>
              <SelectContent>
                {columns.map((col) => (
                  <SelectItem key={col} value={col}>
                    {col}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="y-axis" className="text-sm font-medium">
              Eixo Y
            </Label>
            <Select value={yAxis} onValueChange={setYAxis}>
              <SelectTrigger id="y-axis">
                <SelectValue placeholder="Selecione a coluna" />
              </SelectTrigger>
              <SelectContent>
                {columns.map((col) => (
                  <SelectItem key={col} value={col}>
                    {col}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleGenerate} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={!chartType || !xAxis || !yAxis}
          >
            Gerar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
