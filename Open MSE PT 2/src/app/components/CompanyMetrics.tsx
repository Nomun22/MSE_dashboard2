import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";
import { Language } from "../lib/translations";

interface CompanyMetricsProps {
  language: Language;
}

interface CompanyRow {
  no: number;
  ticker: string;
  nameEn: string;
  nameMn: string;
  sectorEn: string;
  sectorMn: string;
  marketCap: number;
  mseWeight: number;
  dividendDist: number | null;
  sharesOutstanding: number;
  minorityPct: number;
  majorPct: number;
  stateLocalPct: number | null;
}

const data: CompanyRow[] = [
  { no: 1,  ticker: "KHAN", nameEn: "KHAN Bank JSC",                       nameMn: "ХААН Банк ХК",            sectorEn: "Bank",                        sectorMn: "Банк",                              marketCap: 2638833.24, mseWeight: 19.05, dividendDist: 373547.88, sharesOutstanding: 1912.20, minorityPct: 14.23, majorPct: 85.77, stateLocalPct: 0.00 },
  { no: 2,  ticker: "TTL",  nameEn: "Tavan Tolgoi JSC",                    nameMn: "Тавантолгой ХК",          sectorEn: "Mining",                      sectorMn: "Уул уурхай",                        marketCap: 1656847.19, mseWeight: 11.96, dividendDist: 366549.79, sharesOutstanding: 52.67,   minorityPct: 12.96, majorPct: 87.04, stateLocalPct: 0.00 },
  { no: 3,  ticker: "ERDN", nameEn: "Erdenes Resource Development Corp.",  nameMn: "Эрдэнэс Нөөц Хөгжил ХК", sectorEn: "Mining",                      sectorMn: "Уул уурхай",                        marketCap: 1243253.86, mseWeight: 8.97,  dividendDist: null,      sharesOutstanding: 61.06,   minorityPct: 3.03,  majorPct: 96.96, stateLocalPct: null },
  { no: 4,  ticker: "GLMT", nameEn: "Golomt Bank JSC",                     nameMn: "Голомт Банк ХК",          sectorEn: "Bank",                        sectorMn: "Банк",                              marketCap: 1077131.53, mseWeight: 7.78,  dividendDist: 80865.73,  sharesOutstanding: 808.66,  minorityPct: 17.50, majorPct: 82.40, stateLocalPct: 0.00 },
  { no: 5,  ticker: "APU",  nameEn: "APU JSC",                             nameMn: "АПУ ХК",                  sectorEn: "Manufacturing",               sectorMn: "Үйлдвэрлэл",                        marketCap: 1039694.74, mseWeight: 7.50,  dividendDist: 69171.80,  sharesOutstanding: 1064.18, minorityPct: 13.44, majorPct: 86.56, stateLocalPct: 0.00 },
  { no: 6,  ticker: "XAC",  nameEn: "XacBank JSC",                         nameMn: "Хасбанк ХК",              sectorEn: "Bank",                        sectorMn: "Банк",                              marketCap: 1014655.42, mseWeight: 7.32,  dividendDist: 28422.90,  sharesOutstanding: 1052.70, minorityPct: 5.01,  majorPct: 94.99, stateLocalPct: 0.00 },
  { no: 7,  ticker: "TDB",  nameEn: "Trade and Development Bank",          nameMn: "Худалдаа Хөгжлийн Банк ХК", sectorEn: "Bank",                     sectorMn: "Банк",                              marketCap: 972549.82,  mseWeight: 7.02,  dividendDist: 101201.85, sharesOutstanding: 50.60,   minorityPct: 9.51,  majorPct: 90.49, stateLocalPct: 0.00 },
  { no: 8,  ticker: "INV",  nameEn: "InvesCore NBFI JSC",                  nameMn: "Инвескор ББСБ ХК",        sectorEn: "Non-bank Financial Services", sectorMn: "Банк бус санхүүгийн үйлчилгээ",    marketCap: 681698.53,  mseWeight: 4.92,  dividendDist: 4544.66,   sharesOutstanding: 75.74,   minorityPct: 19.51, majorPct: 80.49, stateLocalPct: 0.00 },
  { no: 9,  ticker: "SBM",  nameEn: "State Bank JSC",                      nameMn: "Төрийн Банк ХК",          sectorEn: "Bank",                        sectorMn: "Банк",                              marketCap: 369974.51,  mseWeight: 2.67,  dividendDist: 48099.63,  sharesOutstanding: 755.10,  minorityPct: 5.71,  majorPct: 94.29, stateLocalPct: 0.00 },
  { no: 10, ticker: "GOV",  nameEn: "Gobi JSC",                            nameMn: "Говь ХК",                 sectorEn: "Manufacturing",               sectorMn: "Үйлдвэрлэл",                        marketCap: 174924.63,  mseWeight: 1.26,  dividendDist: null,      sharesOutstanding: 780.11,  minorityPct: 12.56, majorPct: 87.44, stateLocalPct: 0.00 },
];

type SortKey = keyof CompanyRow;
type SortDir = "asc" | "desc";

const en = {
  title: "Company Metrics & Ownership",
  no: "No.",
  ticker: "Ticker",
  companyName: "Company Name",
  sector: "Sector",
  marketCap: "Market Cap",
  mseWeight: "MSE Weight %",
  dividendDist: "Dividend Distribution",
  sharesOutstanding: "Shares Outstanding",
  minorityPct: "Minority Shareholder %",
  majorPct: "Major Shareholder %",
  stateLocalPct: "State / Local Ownership %",
  note: "Market cap and dividend distribution in MNT millions. Shares outstanding in millions.",
};

const mn = {
  title: "Санхүүгийн харьцаа ба өмчлөлийн бүтэц",
  no: "№",
  ticker: "Үнэт цаасны код",
  companyName: "Компанийн нэр",
  sector: "Салбар",
  marketCap: "Зах зээлийн үнэлгээ",
  mseWeight: "ЗЗҮ-д эзлэх хувь",
  dividendDist: "Ногдол ашиг хуваарилалт",
  sharesOutstanding: "Эргэлтэнд гаргасан хувьцаа",
  minorityPct: "Жижиг хувьцаа эзэмшигчдийн хувь",
  majorPct: "Нөлөө бүхий хувьцаа эзэмшигчдийн хувь",
  stateLocalPct: "Төрийн болон орон нутгийн өмчийн оролцоо",
  note: "Зах зээлийн үнэлгээ болон ногдол ашиг сая төгрөгөөр. Хувьцаа сая ширхэгээр.",
};

function fmt(n: number, decimals = 2) {
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function pct(n: number | null) {
  if (n === null) return null;
  return fmt(n) + "%";
}

const SECTOR_COLORS: Record<string, string> = {
  Bank: "bg-blue-50 text-blue-700 border-blue-100",
  Mining: "bg-amber-50 text-amber-700 border-amber-100",
  Manufacturing: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Non-bank Financial Services": "bg-violet-50 text-violet-700 border-violet-100",
};

function SortIcon({ col, sortKey, dir }: { col: SortKey; sortKey: SortKey | null; dir: SortDir }) {
  if (sortKey !== col) return <ChevronsUpDown className="ml-1 inline-block h-3 w-3 opacity-30" />;
  return dir === "asc"
    ? <ChevronUp className="ml-1 inline-block h-3 w-3 text-[#1a3a5c]" />
    : <ChevronDown className="ml-1 inline-block h-3 w-3 text-[#1a3a5c]" />;
}

export function CompanyMetrics({ language }: CompanyMetricsProps) {
  const L = language === "en" ? en : mn;
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return a.no - b.no;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === null && bv === null) return 0;
    if (av === null) return 1;
    if (bv === null) return -1;
    if (typeof av === "number" && typeof bv === "number") {
      return sortDir === "asc" ? av - bv : bv - av;
    }
    const as = String(av);
    const bs = String(bv);
    return sortDir === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
  });

  type Col = { key: SortKey; label: string; align: "left" | "right"; minW?: string };
  const columns: Col[] = [
    { key: "no",              label: L.no,              align: "left",  minW: "w-10" },
    { key: "ticker",          label: L.ticker,          align: "left",  minW: "w-20" },
    { key: language === "en" ? "nameEn" : "nameMn", label: L.companyName, align: "left", minW: "min-w-[180px]" },
    { key: language === "en" ? "sectorEn" : "sectorMn", label: L.sector, align: "left", minW: "min-w-[120px]" },
    { key: "marketCap",       label: L.marketCap,       align: "right", minW: "min-w-[120px]" },
    { key: "mseWeight",       label: L.mseWeight,       align: "right", minW: "min-w-[100px]" },
    { key: "dividendDist",    label: L.dividendDist,    align: "right", minW: "min-w-[130px]" },
    { key: "sharesOutstanding", label: L.sharesOutstanding, align: "right", minW: "min-w-[120px]" },
    { key: "minorityPct",     label: L.minorityPct,     align: "right", minW: "min-w-[120px]" },
    { key: "majorPct",        label: L.majorPct,        align: "right", minW: "min-w-[120px]" },
    { key: "stateLocalPct",   label: L.stateLocalPct,   align: "right", minW: "min-w-[130px]" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">{L.title}</h2>
        <span className="text-xs text-muted-foreground">{L.note}</span>
      </div>

      <Card>
        <CardContent className="pt-0 px-0 pb-0">
          <div className="overflow-x-auto [scrollbar-width:thin] [scrollbar-color:theme(colors.border)_transparent] hover:[scrollbar-color:theme(colors.muted-foreground/40)_transparent]">
            <table className="w-full min-w-[1100px] border-collapse text-sm">
              <thead>
                <tr className="sticky top-0 z-10 border-b border-border bg-[#f8f9fb] text-xs text-muted-foreground">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      onClick={() => handleSort(col.key)}
                      className={[
                        "select-none cursor-pointer whitespace-nowrap px-4 py-3 font-medium transition-colors hover:text-foreground",
                        col.align === "right" ? "text-right" : "text-left",
                        col.minW ?? "",
                        sortKey === col.key ? "text-[#1a3a5c]" : "",
                      ].join(" ")}
                    >
                      {col.label}
                      <SortIcon col={col.key} sortKey={sortKey} dir={sortDir} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((row, idx) => {
                  const name = language === "en" ? row.nameEn : row.nameMn;
                  const sector = language === "en" ? row.sectorEn : row.sectorMn;
                  const sectorColor = SECTOR_COLORS[row.sectorEn] ?? "bg-gray-50 text-gray-600 border-gray-100";

                  return (
                    <tr
                      key={row.ticker}
                      className={[
                        "border-b border-border last:border-0 transition-colors hover:bg-muted/40",
                        idx % 2 === 0 ? "bg-card" : "bg-[#fafbfc]",
                      ].join(" ")}
                    >
                      {/* No. */}
                      <td className="px-4 py-2.5 text-left text-muted-foreground tabular-nums">{row.no}</td>

                      {/* Ticker */}
                      <td className="px-4 py-2.5 text-left">
                        <span className="font-semibold tracking-wide text-[#1a3a5c]">{row.ticker}</span>
                      </td>

                      {/* Company Name */}
                      <td className="px-4 py-2.5 text-left font-medium text-foreground">{name}</td>

                      {/* Sector badge */}
                      <td className="px-4 py-2.5 text-left">
                        <span className={`inline-block rounded border px-2 py-0.5 text-xs font-medium ${sectorColor}`}>
                          {sector}
                        </span>
                      </td>

                      {/* Market Cap */}
                      <td className="px-4 py-2.5 text-right tabular-nums font-medium text-foreground">
                        {fmt(row.marketCap)}
                      </td>

                      {/* MSE Weight */}
                      <td className="px-4 py-2.5 text-right">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="inline-block h-1.5 w-10 overflow-hidden rounded-full bg-border">
                            <span
                              className="block h-full rounded-full bg-[#1a3a5c]/60"
                              style={{ width: `${Math.min(row.mseWeight / 20, 1) * 100}%` }}
                            />
                          </span>
                          <span className="tabular-nums text-foreground">{fmt(row.mseWeight)}%</span>
                        </span>
                      </td>

                      {/* Dividend Distribution */}
                      <td className="px-4 py-2.5 text-right tabular-nums">
                        {row.dividendDist !== null
                          ? <span className="text-foreground">{fmt(row.dividendDist)}</span>
                          : <span className="text-muted-foreground/60">N/A</span>}
                      </td>

                      {/* Shares Outstanding */}
                      <td className="px-4 py-2.5 text-right tabular-nums text-foreground">
                        {fmt(row.sharesOutstanding)}
                      </td>

                      {/* Minority % */}
                      <td className="px-4 py-2.5 text-right tabular-nums text-muted-foreground">
                        {pct(row.minorityPct)}
                      </td>

                      {/* Major % */}
                      <td className="px-4 py-2.5 text-right tabular-nums font-medium text-foreground">
                        {pct(row.majorPct)}
                      </td>

                      {/* State/Local % */}
                      <td className="px-4 py-2.5 text-right tabular-nums">
                        {row.stateLocalPct !== null
                          ? <span className="text-muted-foreground">{pct(row.stateLocalPct)}</span>
                          : <span className="text-muted-foreground/60">N/A</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
