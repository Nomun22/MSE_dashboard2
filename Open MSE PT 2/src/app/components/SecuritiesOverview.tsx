import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, FileText, Shield, TrendingUp } from "lucide-react";
import { Language, t } from "../lib/translations";

interface SecuritiesOverviewProps {
  language: Language;
  onCategoryClick?: (category: string) => void;
}

export function SecuritiesOverview({ language, onCategoryClick }: SecuritiesOverviewProps) {
  const categories = [
    {
      label: t(language, "securitiesOverview.listedCompanies"),
      count: 261,
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: t(language, "securitiesOverview.debtInstruments"),
      count: 42,
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      label: t(language, "securitiesOverview.abs"),
      count: 16,
      icon: Shield,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      label: t(language, "securitiesOverview.investmentFunds"),
      count: 3,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const listedCompaniesPreview = [
    { symbol: "APU", name: "АПУ ХК" },
    { symbol: "MCS", name: "Эм Си Эс Холдинг ХК" },
    { symbol: "SUU", name: "Сүү ХК" },
    { symbol: "TDB", name: "Төрийн банк ХК" },
    { symbol: "HAS", name: "Хас банк ХК" },
  ];

  const debtPreview = [
    { symbol: "GB2024-01", name: "Government Bond 2024", maturityDate: "2034-12-31" },
    { symbol: "CB2023-05", name: "Corporate Bond 2023", maturityDate: "2028-06-30" },
    { symbol: "TB2025-02", name: "Treasury Bond 2025", maturityDate: "2030-03-15" },
  ];

  const absPreview = [
    { symbol: "ABS2024-01", name: "Asset-backed Security A", maturityDate: "2029-12-31" },
    { symbol: "ABS2023-03", name: "Asset-backed Security B", maturityDate: "2027-06-30" },
  ];

  const fundsPreview = [
    { symbol: "IF001", name: "Mongolia Growth Fund" },
    { symbol: "IF002", name: "Blue Chip Equity Fund" },
    { symbol: "IF003", name: "Balanced Fund" },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">{t(language, "securitiesOverview.title")}</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card
              key={category.label}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => onCategoryClick?.(category.label)}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className={`rounded-lg p-3 ${category.bgColor}`}>
                  <Icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-medium">{category.count}</div>
                  <div className="text-sm text-muted-foreground">{category.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{t(language, "securitiesOverview.listedCompanies")}</span>
              <Badge variant="neutral">261</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "listedCompanies.companyName")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {listedCompaniesPreview.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3">{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{t(language, "securitiesOverview.debtInstruments")}</span>
              <Badge variant="neutral">42</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "otherSecurities.securityName")}</th>
                    <th className="pb-3 font-medium">{t(language, "otherSecurities.maturityDate")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {debtPreview.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3">{item.name}</td>
                      <td className="py-3 text-muted-foreground">{item.maturityDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{t(language, "securitiesOverview.abs")}</span>
              <Badge variant="neutral">16</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "otherSecurities.securityName")}</th>
                    <th className="pb-3 font-medium">{t(language, "otherSecurities.maturityDate")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {absPreview.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3">{item.name}</td>
                      <td className="py-3 text-muted-foreground">{item.maturityDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{t(language, "securitiesOverview.investmentFunds")}</span>
              <Badge variant="neutral">3</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                    <th className="pb-3 font-medium">{t(language, "otherSecurities.fundName")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {fundsPreview.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium">{item.symbol}</td>
                      <td className="py-3">{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
