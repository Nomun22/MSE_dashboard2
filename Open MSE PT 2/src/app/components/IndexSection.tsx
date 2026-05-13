import { useState } from "react";
import { Language } from "../lib/translations";
import { TrendingUp, TrendingDown } from "lucide-react";

interface IndexSectionProps {
  language: Language;
}

type IndexType = "top20" | "mseA" | "mseB";

const indexData = {
  top20: {
    value: 50672.65,
    change: -163.29,
    changePercent: -0.32,
    constituents: [
      { rank: 1, symbol: "AARD", name: { en: "Ard daatgal insurance JSC", mn: "Ард даатгалын нэгдсэн ХК" } },
      { rank: 2, symbol: "APU", name: { en: "APU JSC", mn: "АПУ ХК" } },
      { rank: 3, symbol: "CHRMN", name: { en: "Premium Tavern JSC", mn: "Примиум Таверн ХК" } },
      { rank: 4, symbol: "GLMT", name: { en: "Goloamt Suur JSC", mn: "Голомт Суур ХК" } },
      { rank: 5, symbol: "GOV", name: { en: "Gobi JSC", mn: "Говь ХК" } },
      { rank: 6, symbol: "INV", name: { en: "Invescore IBDS JSC", mn: "Инвескор ИБДС ХК" } },
      { rank: 7, symbol: "KHAN", name: { en: "Khan Bank JSC", mn: "Хаан банк ХК" } },
      { rank: 8, symbol: "LEND", name: { en: "LendMN IBDS JSC", mn: "ЛендМН ИБДС ХК" } },
      { rank: 9, symbol: "MAHN", name: { en: "Mah-Impex JSC", mn: "Мах-Импекс ХК" } },
      { rank: 10, symbol: "MIK", name: { en: "Mobicom Corporation JSC", mn: "Мобиком корпораци ХК" } },
      { rank: 11, symbol: "NSIC", name: { en: "National Investment Corporation JSC", mn: "Үндэсний хөрөнгө оруулалтын корпораци ХК" } },
      { rank: 12, symbol: "STPL", name: { en: "State Department Store JSC", mn: "Улсын их дэлгүүр ХК" } },
      { rank: 13, symbol: "SUL", name: { en: "Suu JSC", mn: "Сүү ХК" } },
      { rank: 14, symbol: "TAIL", name: { en: "Talkh chikher JSC", mn: "Талх чихэр ХК" } },
      { rank: 15, symbol: "TAVN", name: { en: "Tavantolgoi JSC", mn: "Таван толгой ХК" } },
      { rank: 16, symbol: "TCHB", name: { en: "Trade and Development Bank JSC", mn: "Худалдаа хөгжлийн банк ХК" } },
      { rank: 17, symbol: "TMLC", name: { en: "Temuujin Livestock JSC", mn: "Тэмүүжин мал аж ахуй ХК" } },
      { rank: 18, symbol: "TTL", name: { en: "Transwest Mongol JSC", mn: "Трансвэст монгол ХК" } },
      { rank: 19, symbol: "UNDR", name: { en: "Ulaanbaatar city JSC", mn: "Улаанбаатар хот ХК" } },
      { rank: 20, symbol: "ZAAN", name: { en: "Zaan JSC", mn: "Заан ХК" } },
    ],
  },
  mseA: {
    value: 2847.32,
    change: -8.45,
    changePercent: -0.30,
    constituents: [
      { rank: 1, symbol: "AARD", name: { en: "Ard daatgal insurance JSC", mn: "Ард даатгалын нэгдсэн ХК" } },
      { rank: 2, symbol: "APU", name: { en: "APU JSC", mn: "АПУ ХК" } },
      { rank: 3, symbol: "CHRMN", name: { en: "Premium Tavern JSC", mn: "Примиум Таверн ХК" } },
      { rank: 4, symbol: "GLMT", name: { en: "Goloamt Suur JSC", mn: "Голомт Суур ХК" } },
      { rank: 5, symbol: "GOV", name: { en: "Gobi JSC", mn: "Говь ХК" } },
      { rank: 6, symbol: "KHAN", name: { en: "Khan Bank JSC", mn: "Хаан банк ХК" } },
      { rank: 7, symbol: "MIK", name: { en: "Mobicom Corporation JSC", mn: "Мобиком корпораци ХК" } },
      { rank: 8, symbol: "STPL", name: { en: "State Department Store JSC", mn: "Улсын их дэлгүүр ХК" } },
    ],
  },
  mseB: {
    value: 1534.18,
    change: 2.67,
    changePercent: 0.17,
    constituents: [
      { rank: 1, symbol: "BODI", name: { en: "Bodi International JSC", mn: "Боди интернэшнл ХК" } },
      { rank: 2, symbol: "EREL", name: { en: "Erel JSC", mn: "Эрэл ХК" } },
      { rank: 3, symbol: "HUH", name: { en: "Khukh gan JSC", mn: "Хөх ган ХК" } },
      { rank: 4, symbol: "MERG", name: { en: "Mergen JSC", mn: "Мэргэн ХК" } },
      { rank: 5, symbol: "SHNT", name: { en: "Shunhlai JSC", mn: "Шүнхлай ХК" } },
    ],
  },
};

export function IndexSection({ language }: IndexSectionProps) {
  const [activeIndex, setActiveIndex] = useState<IndexType>("top20");

  const currentIndex = indexData[activeIndex];
  const isPositive = currentIndex.changePercent >= 0;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">
        {language === "en" ? "Index" : "Индекс"}
      </h2>

      <div className="overflow-hidden rounded-lg border border-border bg-white">
        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveIndex("top20")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeIndex === "top20"
                ? "border-b-2 border-primary bg-blue-50 text-primary"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            TOP - 20
          </button>
          <button
            onClick={() => setActiveIndex("mseA")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeIndex === "mseA"
                ? "border-b-2 border-primary bg-blue-50 text-primary"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            MSE - A
          </button>
          <button
            onClick={() => setActiveIndex("mseB")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeIndex === "mseB"
                ? "border-b-2 border-primary bg-blue-50 text-primary"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            MSE - B
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2">
          {/* Left: Chart and Value */}
          <div className="space-y-4">
            {/* Index Value */}
            <div className="space-y-2">
              <div className="text-4xl font-semibold">{currentIndex.value.toLocaleString()}</div>
              <div className="flex items-center gap-2">
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={isPositive ? "text-green-600" : "text-red-600"}>
                  {isPositive ? "+" : ""}
                  {currentIndex.change.toFixed(2)}
                </span>
                <span className={isPositive ? "text-green-600" : "text-red-600"}>
                  {isPositive ? "+" : ""}
                  {currentIndex.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-64 w-full rounded border border-border bg-gray-50">
              <svg className="h-full w-full p-4" viewBox="0 0 400 200">
                {/* Y-axis labels */}
                <text x="5" y="20" className="text-xs fill-muted-foreground">60,000</text>
                <text x="5" y="70" className="text-xs fill-muted-foreground">47,500</text>
                <text x="5" y="120" className="text-xs fill-muted-foreground">35,000</text>
                <text x="5" y="170" className="text-xs fill-muted-foreground">22,500</text>
                <text x="5" y="195" className="text-xs fill-muted-foreground">10,000</text>

                {/* Grid lines */}
                <line x1="50" y1="20" x2="380" y2="20" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="50" y1="70" x2="380" y2="70" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="50" y1="120" x2="380" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="50" y1="170" x2="380" y2="170" stroke="#e5e7eb" strokeWidth="1" />

                {/* Sample chart line */}
                <polyline
                  points="50,180 80,170 110,150 140,140 170,80 200,90 230,100 260,95 290,110 320,105 350,115 380,120"
                  fill="none"
                  stroke="#004187"
                  strokeWidth="2"
                />

                {/* X-axis labels */}
                <text x="50" y="198" className="text-xs fill-muted-foreground">2017</text>
                <text x="120" y="198" className="text-xs fill-muted-foreground">2019</text>
                <text x="190" y="198" className="text-xs fill-muted-foreground">2021</text>
                <text x="260" y="198" className="text-xs fill-muted-foreground">2023</text>
                <text x="330" y="198" className="text-xs fill-muted-foreground">2025</text>
              </svg>
            </div>

          {/* Right: Constituents Table */}
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="max-h-96 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-50">
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">№</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      {language === "en" ? "Symbol" : "Тэмдэг"}
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      {language === "en" ? "Name" : "Нэр"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {currentIndex.constituents.map((constituent) => (
                    <tr key={constituent.symbol} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-muted-foreground">{constituent.rank}</td>
                      <td className="px-4 py-3 font-medium text-primary">{constituent.symbol}</td>
                      <td className="px-4 py-3">{constituent.name[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexSection;
