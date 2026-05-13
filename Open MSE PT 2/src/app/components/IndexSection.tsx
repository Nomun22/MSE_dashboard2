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

// Different data points for each time period and index type
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

  // Calculate chart scaling
  const maxValue = Math.max(...dataPoints);
  const minValue = Math.min(...dataPoints);
  const valueRange = maxValue - minValue;
  const chartHeight = 150;
  const chartWidth = 330;
  const padding = 20;

  // Generate Y-axis labels (5 evenly spaced values)
  const yAxisLabels = Array.from({ length: 5 }, (_, i) => {
    return Math.round(maxValue - (valueRange * i / 4));
  });

  // Convert data points to SVG coordinates
  const points = dataPoints.map((value, index) => {
    const x = 50 + (index * (chartWidth / (dataPoints.length - 1)));
    const y = padding + ((maxValue - value) / valueRange * chartHeight);
    return `${x},${y}`;
  }).join(' ');

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

            {/* Time Period Filters */}
            <div className="flex gap-2 border-b border-border pb-2">
              <button
                onClick={() => setTimePeriod("day")}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  timePeriod === "day"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-gray-100"
                }`}
              >
                {language === "en" ? "Day" : "Өдөр"}
              </button>
              <button
                onClick={() => setTimePeriod("week")}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  timePeriod === "week"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-gray-100"
                }`}
              >
                {language === "en" ? "Week" : "7 хоног"}
              </button>
              <button
                onClick={() => setTimePeriod("month")}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  timePeriod === "month"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-gray-100"
                }`}
              >
                {language === "en" ? "Month" : "Сар"}
              </button>
              <button
                onClick={() => setTimePeriod("year")}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  timePeriod === "year"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-gray-100"
                }`}
              >
                {language === "en" ? "Year" : "Жил"}
              </button>
            </div>

            {/* Interactive Chart */}
            <div className="h-64 w-full rounded border border-border bg-gray-50">
              <svg className="h-full w-full p-4" viewBox="0 0 400 200">
                {/* Y-axis labels - dynamic based on data */}
                {yAxisLabels.map((label, i) => (
                  <text key={i} x="5" y={padding + (i * (chartHeight / 4))} className="text-xs fill-muted-foreground">
                    {label.toLocaleString()}
                  </text>
                ))}

                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="50"
                    y1={padding + (i * (chartHeight / 4))}
                    x2="380"
                    y2={padding + (i * (chartHeight / 4))}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Data line with animation */}
                <polyline
                  points={points}
                  fill="none"
                  stroke="#004187"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500 ease-in-out"
                />

                {/* Data points (circles) */}
                {dataPoints.map((value, index) => {
                  const x = 50 + (index * (chartWidth / (dataPoints.length - 1)));
                  const y = padding + ((maxValue - value) / valueRange * chartHeight);
                  return (
                    <g key={index}>
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#004187"
                        className="transition-all duration-500 ease-in-out"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="transparent"
                        className="hover:fill-blue-100 cursor-pointer transition-all"
                      >
                        <title>{value.toLocaleString()}</title>
                      </circle>
                    </g>
                  );
                })}

                {/* X-axis labels - dynamic based on time period */}
                {labels.map((label, i) => (
                  <text
                    key={i}
                    x={50 + (i * (chartWidth / (labels.length - 1)))}
                    y="195"
                    className="text-xs fill-muted-foreground"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </div>
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
    </section>
  );
}

export default IndexSection;
