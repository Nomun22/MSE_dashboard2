import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
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

  const disclosuresData = [
    { symbol: "APU", date: "2026-05-05", company: "АПУ ХК", type: "Quarterly Report" },
    { symbol: "MCS", date: "2026-05-04", company: "Эм Си Эс Холдинг ХК", type: "Disclosure" },
    { symbol: "SUU", date: "2026-05-03", company: "Сүү ХК", type: "Board Decision" },
  ];

  const reportsData = [
    { symbol: "TDB", date: "2026-05-02", company: "Төрийн банк ХК", type: "Annual Report" },
    { symbol: "HAS", date: "2026-05-01", company: "Хас банк ХК", type: "Q1 2026" },
  ];

  const boardData = [
    { symbol: "APU", date: "2026-05-05", company: "АПУ ХК", type: "Annual Meeting" },
    { symbol: "MCS", date: "2026-05-03", company: "Эм Си Эс Холдинг ХК", type: "Special Meeting" },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">{t(language, "marketOverview.title")}</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-muted-foreground">
                {kpi.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium">{kpi.value}</div>
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t(language, "marketOverview.latestDisclosures")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "marketOverview.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.date")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.companyName")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.type")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {disclosuresData.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3 text-muted-foreground">{item.date}</td>
                      <td className="py-3">{item.company}</td>
                      <td className="py-3">
                        <Badge variant="neutral">{item.type}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t(language, "marketOverview.latestReports")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "marketOverview.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.date")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.companyName")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.type")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {reportsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3 text-muted-foreground">{item.date}</td>
                      <td className="py-3">{item.company}</td>
                      <td className="py-3">
                        <Badge variant="neutral">{item.type}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t(language, "marketOverview.boardDecisions")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "marketOverview.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.date")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.companyName")}</th>
                    <th className="pb-3 font-medium">{t(language, "marketOverview.type")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {boardData.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3 text-muted-foreground">{item.date}</td>
                      <td className="py-3">{item.company}</td>
                      <td className="py-3">
                        <Badge variant="neutral">{item.type}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t(language, "marketOverview.marketNews")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p className="leading-relaxed text-muted-foreground">
                Market capitalization increased by 1.23% today following positive trading activity in the mining and banking sectors.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The TOP-20 Index reached a new monthly high driven by strong performance from blue-chip stocks.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
