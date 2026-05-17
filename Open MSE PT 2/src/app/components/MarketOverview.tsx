import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Language, t } from "../lib/translations";

interface MarketOverviewProps {
  language: Language;
}

export function MarketOverview({ language }: MarketOverviewProps) {
  const kpiData = [
    {
      label: t(language, "marketOverview.top20Index"),
      value: "23,456.78",
      change: "+2.34%",
      positive: true,
    },
    {
      label: t(language, "marketOverview.mseAll"),
      value: "1,234.56",
      change: "-0.45%",
      positive: false,
    },
    {
      label: t(language, "marketOverview.marketCap"),
      value: "₮2.5T",
      change: "+1.23%",
      positive: true,
    },
    {
      label: t(language, "marketOverview.dailyTradingValue"),
      value: "₮45.6B",
      change: "+5.67%",
      positive: true,
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium text-slate-900">
        {t(language, "marketOverview.title")}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.label} className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-slate-500">
                {kpi.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-slate-900">{kpi.value}</div>
              <div className="mt-1 flex items-center gap-1 text-sm">
                {kpi.positive ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={kpi.positive ? "text-green-600" : "text-red-600"}>
                  {kpi.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
