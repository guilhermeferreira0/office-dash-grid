import { KPICard } from "./KPICard";
import { Phone, ShoppingCart, Target, Heart, Clock, TrendingUp } from "lucide-react";

export const KPISection = () => {
  return (
    <div className="w-full px-4 pb-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        <KPICard
          title="Lig/HC"
          value="150,3"
          subtitle="Scatter: -15%"
          icon={Phone}
          trend="negative"
        />
        <KPICard
          title="Vendas/HC"
          value="8,5"
          subtitle="vs. Ontem: +12%"
          icon={ShoppingCart}
          trend="positive"
        />
        <KPICard
          title="Conversão"
          value="5,3%"
          subtitle="vs. Semana passada: -2%"
          icon={Target}
          trend="negative"
        />
        <KPICard
          title="Pesquisa Satisfação"
          value="92%"
          subtitle="Meta: 90%"
          icon={Heart}
          trend="positive"
        />
        <KPICard
          title="Intervalo entre ligações"
          value="6s"
          subtitle="Objetivo: 9s"
          icon={Clock}
          trend="positive"
        />
        <KPICard
          title="Venda Total"
          value="3.200"
          subtitle="Objetivo: 3.500"
          icon={TrendingUp}
          trend="neutral"
        />
      </div>
    </div>
  );
};
