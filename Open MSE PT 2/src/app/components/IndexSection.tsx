import { useState } from "react";
import { Language } from "../lib/translations";
import { TrendingUp, TrendingDown } from "lucide-react";

interface IndexSectionProps {
  language: Language;
}

type IndexType = "top20" | "mseA" | "mseB";
type TimePeriod = "day" | "week" | "month" | "year";

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
    changePercent: -0.3,
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

const chartData = {
  top20: {
    day: [50820, 50750, 50680, 50730, 50650, 50710, 50690, 50672],
    week: [51200, 51050, 50900, 50750, 50672],
    month: [52100, 51500, 51200, 50672],
    year: [48500, 49200, 50100, 51300, 51800, 50672],
  },
  mseA: {
    day: [2860, 2855, 2850, 2852, 2848, 2850, 2849, 2847],
    week: [2890, 2875, 2865, 2855, 2847],
    month: [2920, 2900, 2880, 2847],
    year: [2750, 2800, 2850, 2900, 2920, 2847],
  },
  mseB: {
    day: [1528, 1530, 1532, 1531, 1533, 1535, 1536, 1534],
    week: [1520, 1525, 1528, 1532, 1534],
    month: [1500, 1515, 1525, 1534],
    year: [1450, 1480, 1500, 1520, 1530, 1534],
  },
};

const timeLabels = {
  day: { en: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"], mn: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  week: { en: ["Mon", "Tue", "Wed", "Thu", "Fri"], mn: ["Да", "Мя", "Лх", "Пү", "Ба"] },
  month: { en: ["Week 1", "Week 2", "Week 3", "Week 4"], mn: ["1-р 7х", "2-р 7х", "3-р 7х", "4-р 7х"] },
  year: { en: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"], mn: ["1-р", "3-р", "5-р", "7-р", "9-р", "11-р"] },
};

export function IndexSection({ language }: IndexSectionProps) {
  const [activeIndex, setActiveIndex] = useState<IndexType>("top20");
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("year");

  const currentIndex = indexData[activeIndex];
  const isPositive = currentIndex.changePercent >= 0;
  const labels = timeLabels[timePeriod][language];
  const dataPoints = chartData[activeIndex][timePeriod];

  const maxValue = Math.max(...dataPoints);
  const minValue = Math.min(...dataPoints);
  const valueRange = Math.max(maxValue - minValue, 1);
  const chartHeight = 150;
  const chartWidth = 330;
  const padding = 20;

  const yAxisLabels = Array.from({ length: 5 }, (_, i) =>
    Math.round(maxValue - (valueRange * i) / 4)
  );

  const points = dataPoints
    .map((value, index) => {
      const x = 50 + (index * chartWidth) / (dataPoints.length - 1);
      const y = padding + ((maxValue - value) / valueRange) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  const topTabClass = (active: boolean) =>
    `flex-1 px-6 py-3 text-sm font-medium transition-colors ${
      active
        ? "border-b-2 border-blue-600 bg-blue-50 text-blue-700"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
    }`;

  const periodTabClass = (active: boolean) =>
    `rounded px-3 py-1 text-xs font-medium transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
    }`;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium text-slate-900">
        {language === "en" ? "Index" : "Индекс"}
      </h2>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex border-b border-slate-200">
          <button onClick={() => setActiveIndex("top20")} className={topTabClass(activeIndex === "top20")}>
            TOP - 20
          </button>
          <button onClick={() => setActiveIndex("mseA")} className={topTabClass(activeIndex === "mseA")}>
            MSE - A
          </button>
          <button onClick={() => setActiveIndex("mseB")} className={topTabClass(activeIndex === "mseB")}>
            MSE - B
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-4xl font-semibold text-slate-900">
                {currentIndex.value.toLocaleString()}
              </div>
              <div className="flex items-center gap-2">
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-rose-600" />
                )}
                <span className={isPositive ? "text-emerald-600" : "text-rose-600"}>
                  {isPositive ? "+" : ""}
                  {currentIndex.change.toFixed(2)}
                </span>
                <span className={isPositive ? "text-emerald-600" : "text-rose-600"}>
                  {isPositive ? "+" : ""}
                  {currentIndex.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>

            <div className="flex gap-2 border-b border-slate-200 pb-2">
              <button onClick={() => setTimePeriod("day")} className={periodTabClass(timePeriod === "day")}>
                {language === "en" ? "Day" : "Өдөр"}
              </button>
              <button onClick={() => setTimePeriod("week")} className={periodTabClass(timePeriod === "week")}>
                {language === "en" ? "Week" : "7 хоног"}
              </button>
              <button onClick={() => setTimePeriod("month")} className={periodTabClass(timePeriod === "month")}>
                {language === "en" ? "Month" : "Сар"}
              </button>
              <button onClick={() => setTimePeriod("year")} className={periodTabClass(timePeriod === "year")}>
                {language === "en" ? "Year" : "Жил"}
              </button>
            </div>

            <div className="h-64 w-full rounded-lg border border-slate-200 bg-slate-50">
              <svg className="h-full w-full p-4" viewBox="0 0 400 200">
                {yAxisLabels.map((label, i) => (
                  <text key={i} x="5" y={padding + (i * (chartHeight / 4))} className="text-xs" fill="#64748b">
                    {label.toLocaleString()}
                  </text>
                ))}

                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="50"
                    y1={padding + (i * (chartHeight / 4))}
                    x2="380"
                    y2={padding + (i * (chartHeight / 4))}
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />
                ))}

                <polyline
                  points={points}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500 ease-in-out"
                />

                {dataPoints.map((value, index) => {
                  const x = 50 + (index * chartWidth) / (dataPoints.length - 1);
                  const y = padding + ((maxValue - value) / valueRange) * chartHeight;

                  return (
                    <g key={index}>
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#2563eb"
                        className="transition-all duration-500 ease-in-out"
                      />
                      <circle cx={x} cy={y} r="10" fill="transparent">
                        <title>{value.toLocaleString()}</title>
                      </circle>
                    </g>
                  );
                })}

                {labels.map((label, i) => (
                  <text
                    key={i}
                    x={50 + (i * chartWidth) / (labels.length - 1)}
                    y="195"
                    className="text-xs"
                    fill="#64748b"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200">
            <div className="max-h-96 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-slate-50">
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-3 text-left font-medium text-slate-500">№</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-500">
                      {language === "en" ? "Symbol" : "Тэмдэг"}
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-slate-500">
                      {language === "en" ? "Name" : "Нэр"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentIndex.constituents.map((constituent, idx) => (
                    <tr
                      key={constituent.symbol}
                      className={`transition-colors hover:bg-blue-50 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <td className="px-4 py-3 text-slate-700">{constituent.rank}</td>
                      <td className="px-4 py-3 font-semibold text-blue-700">{constituent.symbol}</td>
                      <td className="px-4 py-3 text-slate-900">{constituent.name[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexSection;
