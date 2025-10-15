import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ComparativeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const periods = ["Dia Anterior", "Semana Anterior", "Mês Anterior"];
const operations = ["TIM Fiber SAC", "Tim Movel"];

export const ComparativeModal = ({ open, onOpenChange }: ComparativeModalProps) => {
  const [period, setPeriod] = useState("");
  const [operation, setOperation] = useState("");

  const handleCompare = () => {
    console.log("Comparar:", { period, operation });
    // Lógica para comparar períodos
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Comparação de Períodos</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="period" className="text-sm font-medium">
              Período
            </Label>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger id="period">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                {periods.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="operation" className="text-sm font-medium">
              Operação
            </Label>
            <Select value={operation} onValueChange={setOperation}>
              <SelectTrigger id="operation">
                <SelectValue placeholder="Selecione a operação" />
              </SelectTrigger>
              <SelectContent>
                {operations.map((op) => (
                  <SelectItem key={op} value={op}>
                    {op}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleCompare} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={!period || !operation}
          >
            Comparar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
