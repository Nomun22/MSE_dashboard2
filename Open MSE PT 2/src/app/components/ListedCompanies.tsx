import { useState } from "react";
import { Card, CardContent } from "./ui/card";
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
        <h2 className="text-2xl font-medium text-slate-900">
          {t(language, "listedCompanies.title")}
        </h2>
        <div className="text-sm text-slate-500">
          {filteredCompanies.length} {t(language, "listedCompanies.results")}
        </div>
      </div>

      <Card className="border-slate-200 bg-white shadow-sm">
        <CardContent className="p-5">
          <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder={t(language, "listedCompanies.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-slate-200 pl-9"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="mr-1 h-4 w-4" />
                {t(language, "listedCompanies.resetFilters")}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-1 h-4 w-4" />
                {t(language, "listedCompanies.export")}
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead className="border-b border-slate-200">
                <tr className="text-left text-sm text-slate-500">
                  <th className="w-16 pb-3 font-medium">{t(language, "listedCompanies.no")}</th>
                  <th className="w-28 pb-3 font-medium">{t(language, "listedCompanies.symbol")}</th>
                  <th className="pb-3 font-medium">{t(language, "listedCompanies.companyName")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredCompanies.map((company, idx) => (
                  <tr
                    key={company.symbol}
                    className="cursor-pointer border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50"
                    onClick={() => onRowClick?.(company.symbol, company.name)}
                  >
                    <td className="py-3 text-slate-500">{idx + 1}</td>
                    <td className="py-3 font-semibold text-[#1a56a3]">{company.symbol}</td>
                    <td className="py-3 text-slate-800">{company.name}</td>
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
