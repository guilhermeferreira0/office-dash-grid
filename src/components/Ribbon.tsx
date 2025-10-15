import { useState } from "react";
import { ChevronDown, ChevronUp, FileSpreadsheet } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const columns = [
  { id: "operacao", label: "Operação" },
  { id: "acao", label: "Ação" },
  {
    id: "trafego",
    label: "Tráfego",
    children: [
      { id: "trafego_desvio", label: "% Desvio" },
      { id: "trafego_aband", label: "% Aband." },
    ],
  },
  {
    id: "pca",
    label: "PCA",
    children: [
      { id: "pca_forecast", label: "Forecast" },
      { id: "pca_real", label: "Real" },
    ],
  },
  {
    id: "tempo",
    label: "Tempo",
    children: [
      { id: "tempo_tma", label: "TMA" },
      { id: "tempo_desvio", label: "% Desvio" },
    ],
  },
  {
    id: "sla",
    label: "SLA",
    children: [
      { id: "sla_prev60", label: "Prev. 60s" },
      { id: "sla_ate60", label: "Até 60s" },
    ],
  },
  {
    id: "hc",
    label: "HC",
    children: [
      { id: "hc_escal", label: "Escal." },
      { id: "hc_prod", label: "Prod." },
      { id: "hc_trab", label: "Trab." },
    ],
  },
  { id: "abs", label: "ABS %" },
];

interface RibbonProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

export const Ribbon = ({ isExpanded, setIsExpanded }: RibbonProps) => {
  const [selectedColumns, setSelectedColumns] = useState<string[]>(
    columns.flatMap((col) => [col.id, ...(col.children?.map((c) => c.id) || [])])
  );
  const [reportType, setReportType] = useState("geral");
  const [periodFilters, setPeriodFilters] = useState<string[]>(["manha", "tarde", "7h12"]);

  const toggleColumn = (columnId: string) => {
    setSelectedColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const togglePeriod = (period: string) => {
    setPeriodFilters((prev) =>
      prev.includes(period)
        ? prev.filter((p) => p !== period)
        : [...prev, period]
    );
  };

  if (!isExpanded) {
    return (
      <div className="fixed top-8 left-0 right-0 z-40 bg-ribbon border-b border-ribbon-border">
        <div className="px-4 py-1 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Ribbon oculta</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 bg-white hover:bg-gray-50"
              onClick={() => console.log('Exportar para Excel')}
              title="Exportar para Excel"
            >
              <FileSpreadsheet className="h-4 w-4 text-black" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="h-6 px-2 text-xs"
            >
              <ChevronDown className="h-3 w-3 mr-1" />
              Mostrar Ribbon
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-8 left-0 right-0 z-40 bg-ribbon border-b border-ribbon-border shadow-sm">
      <div className="px-4 py-3 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Columns Selector */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-foreground">Colunas</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="w-48 justify-between text-xs h-8">
                    {selectedColumns.length} colunas selecionadas
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-3 bg-popover" align="start">
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {columns.map((column) => (
                      <div key={column.id} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={column.id}
                            checked={selectedColumns.includes(column.id)}
                            onCheckedChange={() => toggleColumn(column.id)}
                          />
                          <label
                            htmlFor={column.id}
                            className="text-xs font-medium cursor-pointer"
                          >
                            {column.label}
                          </label>
                        </div>
                        {column.children && (
                          <div className="ml-6 space-y-1">
                            {column.children.map((child) => (
                              <div key={child.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={child.id}
                                  checked={selectedColumns.includes(child.id)}
                                  onCheckedChange={() => toggleColumn(child.id)}
                                />
                                <label
                                  htmlFor={child.id}
                                  className="text-xs cursor-pointer"
                                >
                                  {child.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Report Type */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-foreground">Tipo do Relatório</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-44 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="geral">Geral</SelectItem>
                  <SelectItem value="targes">Targes</SelectItem>
                  <SelectItem value="home-interno">Home vs Interno</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Period Filter */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-foreground">Filtro de Período</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="w-44 justify-between text-xs h-8">
                    {periodFilters.length} períodos
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3 bg-popover" align="start">
                  <div className="space-y-2">
                    {["manha", "tarde", "7h12"].map((period) => (
                      <div key={period} className="flex items-center space-x-2">
                        <Checkbox
                          id={period}
                          checked={periodFilters.includes(period)}
                          onCheckedChange={() => togglePeriod(period)}
                        />
                        <label htmlFor={period} className="text-xs cursor-pointer capitalize">
                          {period === "7h12" ? "7h às 12h" : period}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 bg-white hover:bg-gray-50"
              onClick={() => console.log('Exportar para Excel')}
              title="Exportar para Excel"
            >
              <FileSpreadsheet className="h-4 w-4 text-black" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 px-2 text-xs"
            >
              <ChevronUp className="h-3 w-3 mr-1" />
              Ocultar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
