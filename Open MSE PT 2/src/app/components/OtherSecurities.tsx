import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, RotateCcw } from "lucide-react";
import { Language, t } from "../lib/translations";

interface OtherSecuritiesProps {
  language: Language;
  onRowClick?: (symbol: string, name: string, category: string) => void;
}

const debtData = [
  { symbol: "GB2024-01", name: "Government Bond 2024", maturityDate: "2034-12-31" },
  { symbol: "CB2023-05", name: "Corporate Bond 2023", maturityDate: "2028-06-30" },
  { symbol: "TB2025-02", name: "Treasury Bond 2025", maturityDate: "2030-03-15" },
  { symbol: "MB2024-08", name: "Municipal Bond 2024", maturityDate: "2029-09-30" },
  { symbol: "CB2025-01", name: "Corporate Bond Series A", maturityDate: "2035-01-15" },
];

const absData = [
  { symbol: "ABS2024-01", name: "Asset-backed Security A", maturityDate: "2029-12-31" },
  { symbol: "ABS2023-03", name: "Asset-backed Security B", maturityDate: "2027-06-30" },
  { symbol: "ABS2025-05", name: "Mortgage-backed Security", maturityDate: "2033-03-15" },
  { symbol: "ABS2024-07", name: "Auto Loan ABS", maturityDate: "" },
];

const fundsData = [
  { symbol: "IF001", name: "Mongolia Growth Fund" },
  { symbol: "IF002", name: "Blue Chip Equity Fund" },
  { symbol: "IF003", name: "Balanced Fund" },
];

export function OtherSecurities({ language, onRowClick }: OtherSecuritiesProps) {
  const [debtSearch, setDebtSearch] = useState("");
  const [absSearch, setAbsSearch] = useState("");
  const [fundsSearch, setFundsSearch] = useState("");

  const filteredDebt = debtData.filter(
    (item) =>
      item.symbol.toLowerCase().includes(debtSearch.toLowerCase()) ||
      item.name.toLowerCase().includes(debtSearch.toLowerCase())
  );

  const filteredAbs = absData.filter(
    (item) =>
      item.symbol.toLowerCase().includes(absSearch.toLowerCase()) ||
      item.name.toLowerCase().includes(absSearch.toLowerCase())
  );

  const filteredFunds = fundsData.filter(
    (item) =>
      item.symbol.toLowerCase().includes(fundsSearch.toLowerCase()) ||
      item.name.toLowerCase().includes(fundsSearch.toLowerCase())
  );

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">{t(language, "otherSecurities.title")}</h2>

      <Tabs defaultValue="debt" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="debt">{t(language, "otherSecurities.debt")}</TabsTrigger>
          <TabsTrigger value="abs">{t(language, "otherSecurities.abs")}</TabsTrigger>
          <TabsTrigger value="funds">{t(language, "otherSecurities.funds")}</TabsTrigger>
        </TabsList>

        <TabsContent value="debt" className="mt-6">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t(language, "listedCompanies.search")}
                    value={debtSearch}
                    onChange={(e) => setDebtSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setDebtSearch("")} 
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{t(language, "listedCompanies.resetFilters")}</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr className="text-left text-sm text-muted-foreground">
                      <th className="w-16 pb-3 font-medium">{t(language, "listedCompanies.no")}</th>
                      <th className="min-w-[120px] pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                      <th className="min-w-[200px] pb-3 font-medium">{t(language, "otherSecurities.securityName")}</th>
                      <th className="min-w-[120px] pb-3 font-medium">{t(language, "otherSecurities.maturityDate")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {filteredDebt.map((item, idx) => (
                      <tr
                        key={item.symbol}
                        className="cursor-pointer border-b border-border last:border-0 transition-colors hover:bg-muted/50"
                        onClick={() => onRowClick?.(item.symbol, item.name, "Debt")}
                      >
                        <td className="py-3 text-muted-foreground">{idx + 1}</td>
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
        </TabsContent>

        <TabsContent value="abs" className="mt-6">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t(language, "listedCompanies.search")}
                    value={absSearch}
                    onChange={(e) => setAbsSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setAbsSearch("")} 
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{t(language, "listedCompanies.resetFilters")}</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr className="text-left text-sm text-muted-foreground">
                      <th className="w-16 pb-3 font-medium">{t(language, "listedCompanies.no")}</th>
                      <th className="min-w-[120px] pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                      <th className="min-w-[200px] pb-3 font-medium">{t(language, "otherSecurities.securityName")}</th>
                      <th className="min-w-[120px] pb-3 font-medium">{t(language, "otherSecurities.maturityDate")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {filteredAbs.map((item, idx) => (
                      <tr
                        key={item.symbol}
                        className="cursor-pointer border-b border-border last:border-0 transition-colors hover:bg-muted/50"
                        onClick={() => onRowClick?.(item.symbol, item.name, "ABS")}
                      >
                        <td className="py-3 text-muted-foreground">{idx + 1}</td>
                        <td className="py-3 font-medium">{item.symbol}</td>
                        <td className="py-3">{item.name}</td>
                        <td className="py-3 text-muted-foreground">{item.maturityDate || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded-md bg-muted/50 p-3 text-xs text-muted-foreground">
                Note: Blank maturity dates are allowed for ABS when unavailable from source data.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="funds" className="mt-6">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t(language, "listedCompanies.search")}
                    value={fundsSearch}
                    onChange={(e) => setFundsSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setFundsSearch("")} 
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{t(language, "listedCompanies.resetFilters")}</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr className="text-left text-sm text-muted-foreground">
                      <th className="w-16 pb-3 font-medium">{t(language, "listedCompanies.no")}</th>
                      <th className="min-w-[120px] pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                      <th className="min-w-[200px] pb-3 font-medium">{t(language, "otherSecurities.fundName")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {filteredFunds.map((item, idx) => (
                      <tr
                        key={item.symbol}
                        className="cursor-pointer border-b border-border last:border-0 transition-colors hover:bg-muted/50"
                        onClick={() => onRowClick?.(item.symbol, item.name, "Fund")}
                      >
                        <td className="py-3 text-muted-foreground">{idx + 1}</td>
                        <td className="py-3 font-medium">{item.symbol}</td>
                        <td className="py-3">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
