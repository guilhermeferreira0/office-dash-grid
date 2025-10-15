import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AIModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AIModal = ({ open, onOpenChange }: AIModalProps) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    console.log("Enviar à IA:", prompt);
    // Lógica para enviar prompt à IA (futura integração)
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Análise Inteligente do Grid</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="ai-prompt" className="text-sm font-medium">
              Digite sua pergunta para análise dos dados
            </Label>
            <Textarea
              id="ai-prompt"
              placeholder="Ex: Quais operações tiveram maior conversão de vendas hoje?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={6}
              className="resize-none"
            />
          </div>

          <Button 
            onClick={handleSubmit} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={!prompt.trim()}
          >
            Enviar à IA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
