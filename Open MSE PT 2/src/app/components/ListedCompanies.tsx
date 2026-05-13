import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Download, RotateCcw } from "lucide-react";
import { Language, t } from "../lib/translations";

interface ListedCompaniesProps {
  language: Language;
  onRowClick?: (symbol: string, name: string) => void;
}

const companiesData = [
  { symbol: "APU", name: "АПУ ХК" },
  { symbol: "MCS", name: "Эм Си Эс Холдинг ХК" },
  { symbol: "SUU", name: "Сүү ХК" },
  { symbol: "TDB", name: "Төрийн банк ХК" },
  { symbol: "HAS", name: "Хас банк ХК" },
  { symbol: "GOV", name: "Говь ХК" },
  { symbol: "ARD", name: "Ард санхүү ХК" },
  { symbol: "STL", name: "Монгол шуудан ХК" },
  { symbol: "RMC", name: "Ремикон ХК" },
  { symbol: "TTL", name: "Тээвэр Түгээлт ХК" },
];

export function ListedCompanies({ language, onRowClick }: ListedCompaniesProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companiesData.filter(
    (company) =>
      company.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">{t(language, "listedCompanies.title")}</h2>
        <div className="text-sm text-muted-foreground">
          {filteredCompanies.length} {t(language, "listedCompanies.results")}
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t(language, "listedCompanies.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" />
              {t(language, "listedCompanies.resetFilters")}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
              {t(language, "listedCompanies.export")}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 border-b border-border bg-background">
                <tr className="text-left text-sm text-muted-foreground">
                  <th className="w-20 pb-3 font-medium">{t(language, "listedCompanies.no")}</th>
                  <th className="w-32 pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                  <th className="pb-3 font-medium">{t(language, "listedCompanies.companyName")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredCompanies.map((company, idx) => (
                  <tr
                    key={company.symbol}
                    className="cursor-pointer border-b border-border last:border-0 transition-colors hover:bg-muted/50"
                    onClick={() => onRowClick?.(company.symbol, company.name)}
                  >
                    <td className="py-3 text-muted-foreground">{idx + 1}</td>
                    <td className="py-3 font-medium">{company.symbol}</td>
                    <td className="py-3">{company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
