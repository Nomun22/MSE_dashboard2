import { useMemo, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronsUpDown, ChevronUp, ChevronDown, SlidersHorizontal, Search } from "lucide-react";
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
  classificationEn: string;
  classificationMn: string;
  marketCap: number;
  mseWeight: number;
  dividendDist: number | null;
  sharesOutstanding: number;
  minorityPct: number;
  majorPct: number;
  stateLocalPct: number | null;
}

const data: CompanyRow[] = [
  {
    no: 1,
    ticker: "KHAN",
    nameEn: "KHAN Bank JSC",
    nameMn: "ХААН Банк ХК",
    sectorEn: "Bank",
    sectorMn: "Банк",
    classificationEn: "Blue chip",
    classificationMn: "Тэргүүн",
    marketCap: 2638833.24,
    mseWeight: 19.05,
    dividendDist: 373547.88,
    sharesOutstanding: 1912.2,
    minorityPct: 14.23,
    majorPct: 85.77,
    stateLocalPct: 0.0,
  },
  {
    no: 2,
    ticker: "TTL",
    nameEn: "Tavan Tolgoi JSC",
    nameMn: "Тавантолгой ХК",
    sectorEn: "Mining",
    sectorMn: "Уул уурхай",
    classificationEn: "Class I",
    classificationMn: "I ангилал",
    marketCap: 1656847.19,
    mseWeight: 11.96,
    dividendDist: 366549.79,
    sharesOutstanding: 52.67,
    minorityPct: 12.96,
    majorPct: 87.04,
    stateLocalPct: 0.0,
  },
  {
    no: 3,
    ticker: "ERDN",
    nameEn: "Erdenes Resource Development Corp.",
    nameMn: "Эрдэнэс Нөөц Хөгжил ХК",
    sectorEn: "Mining",
    sectorMn: "Уул уурхай",
    classificationEn: "Class II",
    classificationMn: "II ангилал",
    marketCap: 1243253.86,
    mseWeight: 8.97,
    dividendDist: null,
    sharesOutstanding: 61.06,
    minorityPct: 3.03,
    majorPct: 96.96,
    stateLocalPct: null,
  },
  {
    no: 4,
    ticker: "GLMT",
    nameEn: "Golomt Bank JSC",
    nameMn: "Голомт Банк ХК",
    sectorEn: "Bank",
    sectorMn: "Банк",
    classificationEn: "Blue chip",
    classificationMn: "Тэргүүн",
    marketCap: 1077131.53,
    mseWeight: 7.78,
    dividendDist: 80865.73,
    sharesOutstanding: 808.66,
    minorityPct: 17.5,
    majorPct: 82.4,
    stateLocalPct: 0.0,
  },
  {
    no: 5,
    ticker: "APU",
    nameEn: "APU JSC",
    nameMn: "АПУ ХК",
    sectorEn: "Manufacturing",
    sectorMn: "Үйлдвэрлэл",
    classificationEn: "Blue chip",
    classificationMn: "Тэргүүн",
    marketCap: 1039694.74,
    mseWeight: 7.5,
    dividendDist: 69171.8,
    sharesOutstanding: 1064.18,
    minorityPct: 13.44,
    majorPct: 86.56,
    stateLocalPct: 0.0,
  },
  {
    no: 6,
    ticker: "XAC",
    nameEn: "XacBank JSC",
    nameMn: "ХасБанк ХК",
    sectorEn: "Bank",
    sectorMn: "Банк",
    classificationEn: "Class I",
    classificationMn: "I ангилал",
    marketCap: 1014655.42,
    mseWeight: 7.32,
    dividendDist: 28422.9,
    sharesOutstanding: 1052.7,
    minorityPct: 5.01,
    majorPct: 94.99,
    stateLocalPct: 0.0,
  },
  {
    no: 7,
    ticker: "TDB",
    nameEn: "Trade and Development Bank",
    nameMn: "Худалдаа Хөгжлийн Банк ХК",
    sectorEn: "Bank",
    sectorMn: "Банк",
    classificationEn: "Class I",
    classificationMn: "I ангилал",
    marketCap: 972549.82,
    mseWeight: 7.02,
    dividendDist: 101201.85,
    sharesOutstanding: 50.6,
    minorityPct: 9.51,
    majorPct: 90.49,
    stateLocalPct: 0.0,
  },
  {
    no: 8,
    ticker: "INV",
    nameEn: "InvesCore NBFI JSC",
    nameMn: "Инвескор ББСБ ХК",
    sectorEn: "Non-bank Financial Services",
    sectorMn: "Банк бус санхүүгийн үйлчилгээ",
    classificationEn: "Class II",
    classificationMn: "II ангилал",
    marketCap: 681698.53,
    mseWeight: 4.92,
    dividendDist: 4544.66,
    sharesOutstanding: 75.74,
    minorityPct: 19.51,
    majorPct: 80.49,
    stateLocalPct: 0.0,
  },
  {
    no: 9,
    ticker: "SBM",
    nameEn: "State Bank JSC",
    nameMn: "Төрийн Банк ХК",
    sectorEn: "Bank",
    sectorMn: "Банк",
    classificationEn: "Class II",
    classificationMn: "II ангилал",
    marketCap: 369974.51,
    mseWeight: 2.67,
    dividendDist: 48099.63,
    sharesOutstanding: 755.1,
    minorityPct: 5.71,
    majorPct: 94.29,
    stateLocalPct: 0.0,
  },
  {
    no: 10,
    ticker: "GOV",
    nameEn: "Gobi JSC",
    nameMn: "Говь ХК",
    sectorEn: "Manufacturing",
    sectorMn: "Үйлдвэрлэл",
    classificationEn: "Class II",
    classificationMn: "II ангилал",
    marketCap: 174924.63,
    mseWeight: 1.26,
    dividendDist: null,
    sharesOutstanding: 780.11,
    minorityPct: 12.56,
    majorPct: 87.44,
    stateLocalPct: 0.0,
  },
];

type SortKey = keyof CompanyRow;
type SortDir = "asc" | "desc";

const en = {
  title: "Financial Ratios & Ownership Structure",
  no: "No.",
  ticker: "Ticker",
  companyName: "Company Name",
  sector: "Sector",
  classification: "Classification",
  marketCap: "Market Cap",
  mseWeight: "MSE Weight %",
  dividendDist: "Dividend Distribution",
  sharesOutstanding: "Shares Outstanding",
  minorityPct: "Minority Shareholder %",
  majorPct: "Major Shareholder %",
  stateLocalPct: "State / Local Ownership %",
  note: "Market cap and dividend distribution in MNT millions. Shares outstanding in millions.",
  filters: "Filters",
  filterSector: "Sector",
  filterMarketCap: "Market Cap",
  filterClassification: "Classification",
  filterWeight: "MSE Weight %",
  search: "Search",
  all: "All",
  min: "Min",
  max: "Max",
  searchPlaceholder: "Ticker or company",
  empty: "No rows match the selected filters.",
};

const mn = {
  title: "Санхүүгийн харьцаа ба өмчлөлийн бүтэц",
  no: "№",
  ticker: "Үнэт цаасны код",
  companyName: "Компанийн нэр",
  sector: "Салбар",
  classification: "Ангилал",
  marketCap: "ЗЗҮ",
  mseWeight: "ЗЗҮ-д эзлэх хувь",
  dividendDist: "Ногдол ашиг хуваарилалт",
  sharesOutstanding: "Эргэлтэнд гаргасан хувьцаа",
  minorityPct: "Жижиг хувьцаа эзэмшигчдийн хувь",
  majorPct: "Нөлөө бүхий хувьцаа эзэмшигчдийн хувь",
  stateLocalPct: "Төрийн болон орон нутгийн өмчийн оролцоо",
  note: "Зах зээлийн үнэлгээ болон ногдол ашиг сая төгрөгөөр. Хувьцаа сая ширхэгээр.",
  filters: "Шүүлтүүр",
  filterSector: "Салбар",
  filterMarketCap: "ЗЗҮ",
  filterClassification: "Ангилал",
  filterWeight: "ЗЗҮ-д эзлэх хувь",
  search: "Хайх",
  all: "Бүгд",
  min: "Доод",
  max: "Дээд",
  searchPlaceholder: "Код эсвэл компани",
  empty: "Сонгосон шүүлтүүрт тохирох мөр олдсонгүй.",
};

function fmt(n: number, decimals = 2) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function pct(n: number | null) {
  if (n === null) return "N/A";
  return `${fmt(n)}%`;
}

const SECTOR_COLORS: Record<string, string> = {
  Bank: "bg-blue-50 text-blue-700 border-blue-100",
  Mining: "bg-amber-50 text-amber-700 border-amber-100",
  Manufacturing: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Non-bank Financial Services": "bg-violet-50 text-violet-700 border-violet-100",
};

function SortIcon({
  col,
  sortKey,
  dir,
}: {
  col: SortKey;
  sortKey: SortKey | null;
  dir: SortDir;
}) {
  if (sortKey !== col) {
    return <ChevronsUpDown className="ml-1 inline-block h-3 w-3 opacity-30" />;
  }

  return dir === "asc" ? (
    <ChevronUp className="ml-1 inline-block h-3 w-3 text-[#1a3a5c]" />
  ) : (
    <ChevronDown className="ml-1 inline-block h-3 w-3 text-[#1a3a5c]" />
  );
}

export function CompanyMetrics({ language }: CompanyMetricsProps) {
  const L = language === "en" ? en : mn;

  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const [sectorFilter, setSectorFilter] = useState("all");
  const [classificationFilter, setClassificationFilter] = useState("all");
  const [marketCapMin, setMarketCapMin] = useState("");
  const [marketCapMax, setMarketCapMax] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [search, setSearch] = useState("");

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const sectors = useMemo(() => {
    const values = data.map((row) => (language === "en" ? row.sectorEn : row.sectorMn));
    return ["all", ...Array.from(new Set(values))];
  }, [language]);

  const classifications = useMemo(() => {
    const values = data.map((row) =>
      language === "en" ? row.classificationEn : row.classificationMn
    );
    return ["all", ...Array.from(new Set(values))];
  }, [language]);

  const filtered = useMemo(() => {
    return data.filter((row) => {
      const sectorValue = language === "en" ? row.sectorEn : row.sectorMn;
      const classificationValue =
        language === "en" ? row.classificationEn : row.classificationMn;
      const companyValue = language === "en" ? row.nameEn : row.nameMn;

      const matchesSector = sectorFilter === "all" || sectorValue === sectorFilter;
      const matchesClassification =
        classificationFilter === "all" || classificationValue === classificationFilter;

      const minCap = marketCapMin ? Number(marketCapMin) : -Infinity;
      const maxCap = marketCapMax ? Number(marketCapMax) : Infinity;
      const minWeight = weightMin ? Number(weightMin) : -Infinity;
      const maxWeight = weightMax ? Number(weightMax) : Infinity;

      const matchesCap = row.marketCap >= minCap && row.marketCap <= maxCap;
      const matchesWeight = row.mseWeight >= minWeight && row.mseWeight <= maxWeight;

      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        row.ticker.toLowerCase().includes(q) ||
        companyValue.toLowerCase().includes(q);

      return (
        matchesSector &&
        matchesClassification &&
        matchesCap &&
        matchesWeight &&
        matchesSearch
      );
    });
  }, [
    language,
    sectorFilter,
    classificationFilter,
    marketCapMin,
    marketCapMax,
    weightMin,
    weightMax,
    search,
  ]);

  const sorted = [...filtered].sort((a, b) => {
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
    { key: "no", label: L.no, align: "left", minW: "w-10" },
    { key: "ticker", label: L.ticker, align: "left", minW: "w-20" },
    {
      key: language === "en" ? "nameEn" : "nameMn",
      label: L.companyName,
      align: "left",
      minW: "min-w-[180px]",
    },
    {
      key: language === "en" ? "sectorEn" : "sectorMn",
      label: L.sector,
      align: "left",
      minW: "min-w-[140px]",
    },
    {
      key: language === "en" ? "classificationEn" : "classificationMn",
      label: L.classification,
      align: "left",
      minW: "min-w-[120px]",
    },
    { key: "marketCap", label: L.marketCap, align: "right", minW: "min-w-[120px]" },
    { key: "mseWeight", label: L.mseWeight, align: "right", minW: "min-w-[110px]" },
    {
      key: "dividendDist",
      label: L.dividendDist,
      align: "right",
      minW: "min-w-[130px]",
    },
    {
      key: "sharesOutstanding",
      label: L.sharesOutstanding,
      align: "right",
      minW: "min-w-[130px]",
    },
    { key: "minorityPct", label: L.minorityPct, align: "right", minW: "min-w-[140px]" },
    { key: "majorPct", label: L.majorPct, align: "right", minW: "min-w-[140px]" },
    {
      key: "stateLocalPct",
      label: L.stateLocalPct,
      align: "right",
      minW: "min-w-[150px]",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-medium text-slate-900">{L.title}</h2>
          <p className="text-sm text-slate-600">{L.note}</p>
        </div>
      </div>

      <Card className="overflow-hidden border-white/10 bg-white shadow-xl">
        <CardContent className="p-0">
          <div className="border-b border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center gap-2 text-slate-700">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="text-sm font-medium">{L.filters}</span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">{L.filterSector}</label>
                <select
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none"
                >
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector === "all" ? L.all : sector}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">{L.filterMarketCap}</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={marketCapMin}
                    onChange={(e) => setMarketCapMin(e.target.value)}
                    placeholder={L.min}
                    className="h-10 rounded-lg border border-slate-200 px-3 text-sm text-slate-900"
                  />
                  <input
                    type="number"
                    value={marketCapMax}
                    onChange={(e) => setMarketCapMax(e.target.value)}
                    placeholder={L.max}
                    className="h-10 rounded-lg border border-slate-200 px-3 text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">
                  {L.filterClassification}
                </label>
                <select
                  value={classificationFilter}
                  onChange={(e) => setClassificationFilter(e.target.value)}
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none"
                >
                  {classifications.map((classification) => (
                    <option key={classification} value={classification}>
                      {classification === "all" ? L.all : classification}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">{L.filterWeight}</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={weightMin}
                    onChange={(e) => setWeightMin(e.target.value)}
                    placeholder={L.min}
                    className="h-10 rounded-lg border border-slate-200 px-3 text-sm text-slate-900"
                  />
                  <input
                    type="number"
                    value={weightMax}
                    onChange={(e) => setWeightMax(e.target.value)}
                    placeholder={L.max}
                    className="h-10 rounded-lg border border-slate-200 px-3 text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">{L.search}</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={L.searchPlaceholder}
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto [scrollbar-width:thin] [scrollbar-color:theme(colors.border)_transparent] hover:[scrollbar-color:theme(colors.muted-foreground/40)_transparent]">
            <table className="w-full min-w-[1180px] border-collapse text-sm">
              <thead>
                <tr className="sticky top-0 z-10 border-b border-slate-200 bg-[#f8f9fb] text-xs text-slate-500">
                  {columns.map((col) => (
                    <th
                      key={String(col.key)}
                      onClick={() => handleSort(col.key)}
                      className={[
                        "select-none cursor-pointer whitespace-nowrap px-4 py-3 font-medium transition-colors hover:text-slate-900",
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
                  const sectorKey = row.sectorEn;
                  const classification =
                    language === "en" ? row.classificationEn : row.classificationMn;

                  return (
                    <tr
                      key={row.ticker}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                    >
                      <td className="px-4 py-4 text-slate-500">{row.no}</td>
                      <td className="px-4 py-4 font-semibold text-[#1a56a3]">{row.ticker}</td>
                      <td className="px-4 py-4 font-medium text-slate-900">{name}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${
                            SECTOR_COLORS[sectorKey] ?? "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {sector}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-700">{classification}</td>
                      <td className="px-4 py-4 text-right font-medium text-slate-900">
                        {fmt(row.marketCap)}
                      </td>
                      <td className="px-4 py-4 text-right font-medium text-slate-900">
                        {fmt(row.mseWeight)}%
                      </td>
                      <td className="px-4 py-4 text-right text-slate-700">
                        {row.dividendDist === null ? "N/A" : fmt(row.dividendDist)}
                      </td>
                      <td className="px-4 py-4 text-right text-slate-700">
                        {fmt(row.sharesOutstanding)}
                      </td>
                      <td className="px-4 py-4 text-right text-slate-700">
                        {pct(row.minorityPct)}
                      </td>
                      <td className="px-4 py-4 text-right text-slate-700">
                        {pct(row.majorPct)}
                      </td>
                      <td className="px-4 py-4 text-right text-slate-700">
                        {pct(row.stateLocalPct)}
                      </td>
                    </tr>
                  );
                })}

                {sorted.length === 0 && (
                  <tr>
                    <td colSpan={12} className="px-4 py-10 text-center text-sm text-slate-500">
                      {L.empty}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CompanyMetrics;
