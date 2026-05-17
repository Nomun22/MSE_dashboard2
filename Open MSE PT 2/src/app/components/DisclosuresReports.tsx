import { useState } from "react";
import { Language } from "../lib/translations";
import { FileText, Calendar } from "lucide-react";

interface DisclosuresReportsProps {
  language: Language;
}

const disclosuresData = [
  {
    date: "2026-05-13 14:00:00",
    type: { en: "Price sensitive disclosure", mn: "Үнэт цаасны мэдээлэл" },
    company: { en: "Tavantolgoi JSC", mn: "Таван толгой ХК" },
    title: { en: "Q1 2026 Financial Results", mn: "2026 оны 1-р улирлын санхүүгийн үр дүн" },
    amount: "88.90 USD",
  },
  {
    date: "2026-05-13 11:00:00",
    type: { en: "Trading disclosure", mn: "Арилжааны мэдээлэл" },
    company: { en: "Khan Bank JSC", mn: "Хаан банк ХК" },
    title: { en: "Dividend announcement", mn: "Ногдол ашгийн зарлал" },
    amount: "61.00 USD",
  },
  {
    date: "2026-05-12 16:00:00",
    type: { en: "Board decision", mn: "Удирдах зөвлөлийн шийдвэр" },
    company: { en: "Mobicom Corporation JSC", mn: "Мобиком корпораци ХК" },
    title: { en: "Shareholder meeting notice", mn: "Хувьцаа эзэмшигчдийн хурлын мэдэгдэл" },
    amount: "",
  },
  {
    date: "2026-05-12 10:00:00",
    type: { en: "Financial report", mn: "Санхүүгийн тайлан" },
    company: { en: "Gobi JSC", mn: "Говь ХК" },
    title: { en: "Annual Report 2025", mn: "2025 оны жилийн тайлан" },
    amount: "77.20 USD",
  },
];

const meetingsData = [
  {
    date: "2026-05-15 10:00:00",
    type: { en: "Board meeting", mn: "Удирдах зөвлөлийн хурал" },
    company: { en: "State Department Store JSC", mn: "Улсын их дэлгүүр ХК" },
    topic: { en: "2025 Annual Report Approval", mn: "2025 оны жилийн тайлан батлах" },
  },
  {
    date: "2026-05-16 14:00:00",
    type: { en: "Shareholder meeting", mn: "Хувьцаа эзэмшигчдийн хурал" },
    company: { en: "Ard daatgal insurance JSC", mn: "Ард даатгалын нэгдсэн ХК" },
    topic: { en: "Dividend distribution decision", mn: "Ногдол ашиг хуваарилах шийдвэр" },
  },
];

const reportTypes = {
  en: [
    "All",
    "Price sensitive disclosure",
    "Trading disclosure",
    "Board decision",
    "Financial report",
  ],
  mn: [
    "Бүгд",
    "Үнэт цаасны мэдээлэл",
    "Арилжааны мэдээлэл",
    "Удирдах зөвлөлийн шийдвэр",
    "Санхүүгийн тайлан",
  ],
};

export function DisclosuresReports({ language }: DisclosuresReportsProps) {
  const [activeFilter, setActiveFilter] = useState(
    language === "en" ? "All" : "Бүгд"
  );

  const labels = language === "en" ? reportTypes.en : reportTypes.mn;

  const filteredDisclosures =
    activeFilter === (language === "en" ? "All" : "Бүгд")
      ? disclosuresData
      : disclosuresData.filter((item) => item.type[language] === activeFilter);

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-medium text-slate-900">
          {language === "en" ? "Disclosures & Reports" : "Мэдээлэл ба тайлан"}
        </h2>

        <div className="flex flex-wrap gap-2">
          {labels.map((label) => {
            const active = activeFilter === label;

            return (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={
                  active
                    ? "rounded-full border border-[#1a56a3] bg-[#1a56a3] px-4 py-2 text-sm font-medium text-white"
                    : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#1a56a3] hover:text-[#1a56a3]"
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h3 className="flex items-center gap-2 font-medium text-slate-900">
              <FileText className="h-5 w-5 text-blue-600" />
              {language === "en" ? "Latest Disclosures" : "Сүүлийн мэдээллүүд"}
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredDisclosures.map((item, index) => (
              <div key={index} className="bg-white p-4 transition-colors hover:bg-slate-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-1 text-sm font-semibold text-[#1a56a3]">
                      {item.company[language]}
                    </div>
                    <div className="mb-2 text-sm text-slate-900">
                      {item.title[language]}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-700">
                        {item.type[language]}
                      </span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {item.amount && (
                    <div className="text-sm font-semibold text-emerald-600">
                      {item.amount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h3 className="flex items-center gap-2 font-medium text-slate-900">
              <Calendar className="h-5 w-5 text-orange-500" />
              {language === "en" ? "Upcoming Meetings" : "Удирдах зөвлөлийн хурлууд"}
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            {meetingsData.map((item, index) => (
              <div key={index} className="bg-white p-4 transition-colors hover:bg-slate-50">
                <div>
                  <div className="mb-1 text-sm font-semibold text-orange-600">
                    {item.company[language]}
                  </div>
                  <div className="mb-2 text-sm text-slate-900">
                    {item.topic[language]}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-violet-700">
                      {item.type[language]}
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
