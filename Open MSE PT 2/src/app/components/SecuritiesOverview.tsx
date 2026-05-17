import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Language, t } from "../lib/translations";

interface SecuritiesOverviewProps {
  language: Language;
  onCategoryClick?: (category: string) => void;
}

export function SecuritiesOverview({ language, onCategoryClick }: SecuritiesOverviewProps) {
  const sections = [
    {
      key: "listed",
      title: t(language, "securitiesOverview.listedCompanies"),
      count: 261,
      columns: [
        t(language, "listedCompanies.symbol"),
        t(language, "listedCompanies.companyName"),
      ],
      rows: [
        ["APU", "АПУ ХК"],
        ["MCS", "Эм Си Эс Холдинг ХК"],
        ["SUU", "Сүү ХК"],
        ["TDB", "Төрийн банк ХК"],
        ["HAS", "Хас банк ХК"],
      ],
    },
    {
      key: "debt",
      title: t(language, "securitiesOverview.debtInstruments"),
      count: 42,
      columns: [
        t(language, "listedCompanies.symbol"),
        t(language, "otherSecurities.securityName"),
        t(language, "otherSecurities.maturityDate"),
      ],
      rows: [
        ["GB2024-01", "Government Bond 2024", "2034-12-31"],
        ["CB2023-05", "Corporate Bond 2023", "2028-06-30"],
        ["TB2025-02", "Treasury Bond 2025", "2030-03-15"],
      ],
    },
    {
      key: "abs",
      title: t(language, "securitiesOverview.abs"),
      count: 16,
      columns: [
        t(language, "listedCompanies.symbol"),
        t(language, "otherSecurities.securityName"),
        t(language, "otherSecurities.maturityDate"),
      ],
      rows: [
        ["ABS2024-01", "Asset-backed Security A", "2029-12-31"],
        ["ABS2023-03", "Asset-backed Security B", "2027-06-30"],
      ],
    },
    {
      key: "funds",
      title: t(language, "securitiesOverview.investmentFunds"),
      count: 3,
      columns: [
        t(language, "listedCompanies.symbol"),
        t(language, "otherSecurities.fundName"),
      ],
      rows: [
        ["IF001", "Mongolia Growth Fund"],
        ["IF002", "Blue Chip Equity Fund"],
        ["IF003", "Balanced Fund"],
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium text-slate-900">
        {t(language, "securitiesOverview.title")}
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {sections.map((section) => (
          <Card
            key={section.key}
            className="overflow-hidden border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <CardHeader
              className="cursor-pointer border-b border-slate-200 pb-4"
              onClick={() => onCategoryClick?.(section.title)}
            >
              <CardTitle className="flex items-center justify-between text-slate-900">
                <span>{section.title}</span>
                <Badge variant="neutral">{section.count}</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px]">
                  <thead className="border-b border-slate-200">
                    <tr className="text-left text-sm text-slate-500">
                      {section.columns.map((column) => (
                        <th key={column} className="pb-3 font-medium">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {section.rows.map((row, idx) => (
                      <tr
                        key={`${section.key}-${idx}`}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                      >
                        {row.map((cell, cellIdx) => (
                          <td
                            key={`${section.key}-${idx}-${cellIdx}`}
                            className={
                              cellIdx === 0
                                ? "py-3 font-medium text-[#1a56a3]"
                                : "py-3 text-slate-700"
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
