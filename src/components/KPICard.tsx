import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: "positive" | "negative" | "neutral";
}

export const KPICard = ({ title, value, subtitle, icon: Icon, trend = "neutral" }: KPICardProps) => {
  const getTrendColor = () => {
    if (trend === "positive") return "text-green-600";
    if (trend === "negative") return "text-red-600";
    return "text-muted-foreground";
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer h-[90px]">
      <CardContent className="p-4 flex items-center justify-between h-full">
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] text-muted-foreground">{title}</span>
          <span className="text-xl font-bold text-foreground">{value}</span>
          <span className={`text-[10px] ${getTrendColor()}`}>{subtitle}</span>
        </div>
        <Icon className="h-6 w-6 text-muted-foreground/40" />
      </CardContent>
    </Card>
  );
};
