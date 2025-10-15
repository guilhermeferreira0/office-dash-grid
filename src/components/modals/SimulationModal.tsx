import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SimulationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SimulationModal = ({ open, onOpenChange }: SimulationModalProps) => {
  const [hcChange, setHcChange] = useState("");
  const [ligVenda, setLigVenda] = useState("");
  const [ligHc, setLigHc] = useState("");

  const handleApply = () => {
    console.log("Aplicar simulação:", { hcChange, ligVenda, ligHc });
    // Lógica para aplicar simulação
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Simulação de Cenários</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="hc-change" className="text-sm font-medium">
              Crescimento/Diminuição de HC (%)
            </Label>
            <Input
              id="hc-change"
              type="number"
              placeholder="Ex: 10 ou -5"
              value={hcChange}
              onChange={(e) => setHcChange(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lig-venda" className="text-sm font-medium">
              Lig/Venda
            </Label>
            <Input
              id="lig-venda"
              type="number"
              placeholder="Digite o valor"
              value={ligVenda}
              onChange={(e) => setLigVenda(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lig-hc" className="text-sm font-medium">
              Lig/HC
            </Label>
            <Input
              id="lig-hc"
              type="number"
              placeholder="Digite o valor"
              value={ligHc}
              onChange={(e) => setLigHc(e.target.value)}
            />
          </div>

          <Button 
            onClick={handleApply} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Aplicar Simulação
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
