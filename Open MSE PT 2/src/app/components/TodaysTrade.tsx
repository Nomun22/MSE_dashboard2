import { useState } from "react";
import { Language } from "../lib/translations";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TodaysTradeProps {
  language: Language;
  onRowClick?: (symbol: string, name: string) => void;
}

type TradeCategory = "stocks" | "bonds" | "funds";

const stocksData = [
  { symbol: "MAHN", name: { en: "Mah-Impex JSC", mn: "Мах-Импекс ХК" }, price: 21838.00, change: 1.62, changePercent: 3.88, volume: 1250 },
  { symbol: "KHAN", name: { en: "Khan Bank JSC", mn: "Хаан банк ХК" }, price: 81.00, change: -1.12, changePercent: -1.39, volume: 45600 },
  { symbol: "APU", name: { en: "APU JSC", mn: "АПУ ХК" }, price: 2409.00, change: 0, changePercent: 0, volume: 890 },
  { symbol: "KHAS", name: { en: "Khasaat delger JSC", mn: "Хасаат дэлгэр ХК" }, price: 210.00, change: 2.03, changePercent: 0.98, volume: 3200 },
  { symbol: "SUU", name: { en: "Suu JSC", mn: "Сүү ХК" }, price: 164.00, change: -2.88, changePercent: -1.73, volume: 7800 },
  { symbol: "GOV", name: { en: "Gobi JSC", mn: "Говь ХК" }, price: 116.00, change: 0.87, changePercent: 0.75, volume: 12400 },
  { symbol: "ALTUN", name: { en: "Altun JSC", mn: "Алтун ХК" }, price: 80.00, change: -1.32, changePercent: -1.62, volume: 5600 },
  { symbol: "TAIL", name: { en: "Talkh chikher JSC", mn: "Талх чихэр ХК" }, price: 29800.00, change: 1.18, changePercent: 2.60, volume: 340 },
  { symbol: "AARD", name: { en: "Ard daatgal insurance JSC", mn: "Ард даатгалын нэгдсэн ХК" }, price: 409.00, change: 0.12, changePercent: 0.78, volume: 8900 },
  { symbol: "GLMT", name: { en: "Goloamt Suur JSC", mn: "Голомт Суур ХК" }, price: 203.00, change: -0.51, changePercent: -0.25, volume: 15200 },
];

const bondsData = [
  { symbol: "DBM2019A", name: { en: "Government Bond 2019A", mn: "Засгийн газрын бонд 2019А" }, price: 1000.00, yield: 12.5, maturity: "2026-12-01", volume: 500 },
  { symbol: "DBM2020B", name: { en: "Government Bond 2020B", mn: "Засгийн газрын бонд 2020Б" }, price: 980.00, yield: 13.2, maturity: "2027-06-15", volume: 1200 },
  { symbol: "CORP001", name: { en: "Corporate Bond 001", mn: "Корпорацийн бонд 001" }, price: 1050.00, yield: 14.8, maturity: "2026-09-30", volume: 350 },
];

const fundsData = [
  { symbol: "FUND01", name: { en: "Equity Fund A", mn: "Хөрөнгийн сан А" }, nav: 1245.67, change: 2.34, changePercent: 0.19, aum: "12.5B" },
  { symbol: "FUND02", name: { en: "Balanced Fund B", mn: "Тэнцвэржүүлсэн сан Б" }, nav: 987.45, change: -1.23, changePercent: -0.12, aum: "8.3B" },
];

export function TodaysTrade({ language, onRowClick }: TodaysTradeProps) {
  const [activeCategory, setActiveCategory] = useState<TradeCategory>("stocks");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">
        {language === "en" ? "Today's Trade" : "Өнөөдрийн арилжаа"}
      </h2>

      <div className="overflow-hidden rounded-lg border border-border bg-white">
        {/* Category Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveCategory("stocks")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeCategory === "stocks"
                ? "border-b-2 border-primary bg-blue-50 text-primary"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            {language === "en" ? "Stocks" : "ХУВЬЦАА"}
          </button>
          <button
            onClick={() => setActiveCategory("bonds")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeCategory === "bonds"
                ? "border-b-2 border-primary bg-blue-50 text-primary"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            {language === "en" ? "Bonds" : "БОНД"}
          </button>
          <button
            onClick={() => setActiveCategory("funds")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeCategory === "funds"
                ? "border-b-2 border-primary bg-blue-50 text-primary"
                : "text-muted-foreground hover:bg-gray-50"
            }`}
          >
            {language === "en" ? "Funds" : "ХӨРӨНГӨ"}
          </button>
        </div>

        {/* Stocks Table */}
        {activeCategory === "stocks" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Symbol" : "Тэмдэг"}
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Name" : "Нэр"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Price" : "Үнэ"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Change" : "Өөрчлөлт"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Change %" : "Өөрчлөлт %"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Volume" : "Эзлэхүүн"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {stocksData.map((stock) => {
                  const isPositive = stock.changePercent > 0;
                  const isNeutral = stock.changePercent === 0;
                  return (
                    <tr
                      key={stock.symbol}
                      onClick={() => onRowClick?.(stock.symbol, stock.name[language])}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-primary">{stock.symbol}</td>
                      <td className="px-4 py-3">{stock.name[language]}</td>
                      <td className="px-4 py-3 text-right font-medium">{stock.price.toLocaleString()}</td>
                      <td className={`px-4 py-3 text-right ${isNeutral ? "text-muted-foreground" : isPositive ? "text-green-600" : "text-red-600"}`}>
                        <div className="flex items-center justify-end gap-1">
                          {!isNeutral && (isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />)}
                          {isPositive ? "+" : ""}{stock.change.toFixed(2)}
                        </div>
                      </td>
                      <td className={`px-4 py-3 text-right ${isNeutral ? "text-muted-foreground" : isPositive ? "text-green-600" : "text-red-600"}`}>
                        {isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground">{stock.volume.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Bonds Table */}
        {activeCategory === "bonds" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Symbol" : "Тэмдэг"}
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Name" : "Нэр"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Price" : "Үнэ"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Yield %" : "Өгөөж %"}
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Maturity" : "Дуусах хугацаа"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Volume" : "Эзлэхүүн"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {bondsData.map((bond) => (
                  <tr
                    key={bond.symbol}
                    onClick={() => onRowClick?.(bond.symbol, bond.name[language])}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium text-primary">{bond.symbol}</td>
                    <td className="px-4 py-3">{bond.name[language]}</td>
                    <td className="px-4 py-3 text-right font-medium">{bond.price.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">{bond.yield.toFixed(1)}%</td>
                    <td className="px-4 py-3">{bond.maturity}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{bond.volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Funds Table */}
        {activeCategory === "funds" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Symbol" : "Тэмдэг"}
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {language === "en" ? "Name" : "Нэр"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "NAV" : "НАҮ"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Change" : "Өөрчлөлт"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "Change %" : "Өөрчлөлт %"}
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                    {language === "en" ? "AUM" : "Нийт хөрөнгө"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {fundsData.map((fund) => {
                  const isPositive = fund.changePercent > 0;
                  return (
                    <tr
                      key={fund.symbol}
                      onClick={() => onRowClick?.(fund.symbol, fund.name[language])}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-primary">{fund.symbol}</td>
                      <td className="px-4 py-3">{fund.name[language]}</td>
                      <td className="px-4 py-3 text-right font-medium">{fund.nav.toLocaleString()}</td>
                      <td className={`px-4 py-3 text-right ${isPositive ? "text-green-600" : "text-red-600"}`}>
                        <div className="flex items-center justify-end gap-1">
                          {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {isPositive ? "+" : ""}{fund.change.toFixed(2)}
                        </div>
                      </td>
                      <td className={`px-4 py-3 text-right ${isPositive ? "text-green-600" : "text-red-600"}`}>
                        {isPositive ? "+" : ""}{fund.changePercent.toFixed(2)}%
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground">{fund.aum}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
