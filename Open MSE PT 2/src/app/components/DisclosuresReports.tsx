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

export function DisclosuresReports({ language }: DisclosuresReportsProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium text-white">
        {language === "en" ? "Disclosures & Reports" : "Мэдээлэл ба тайлан"}
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Latest Disclosures */}
        <div className="overflow-hidden rounded-lg border border-border" style={{ backgroundColor: '#003166' }}>
          <div className="border-b border-border px-6 py-4" style={{ backgroundColor: '#003166' }}>
            <h3 className="flex items-center gap-2 font-medium text-white">
              <FileText className="h-5 w-5" style={{ color: '#60a5fa' }} />
              {language === "en" ? "Latest Disclosures" : "Сүүлийн мэдээллүүд"}
            </h3>
          </div>
          <div className="divide-y divide-border">
            {disclosuresData.map((item, index) => (
              <div key={index} className="p-4 transition-colors" style={{ backgroundColor: index % 2 === 0 ? '#003166' : '#002952' }}>
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-1 text-sm font-medium" style={{ color: '#60a5fa' }}>{item.company[language]}</div>
                    <div className="mb-2 text-sm text-white">{item.title[language]}</div>
                    <div className="flex items-center gap-4 text-xs text-white/70">
                      <span className="rounded px-2 py-1" style={{ backgroundColor: '#004187', color: '#60a5fa' }}>{item.type[language]}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  {item.amount && (
                    <div className="text-sm font-semibold" style={{ color: '#10b981' }}>{item.amount}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="overflow-hidden rounded-lg border border-border" style={{ backgroundColor: '#003166' }}>
          <div className="border-b border-border px-6 py-4" style={{ backgroundColor: '#003166' }}>
            <h3 className="flex items-center gap-2 font-medium text-white">
              <Calendar className="h-5 w-5" style={{ color: '#f97316' }} />
              {language === "en" ? "Upcoming Meetings" : "Удирдах зөвлөлийн хурлууд"}
            </h3>
          </div>
          <div className="divide-y divide-border">
            {meetingsData.map((item, index) => (
              <div key={index} className="p-4 transition-colors" style={{ backgroundColor: index % 2 === 0 ? '#003166' : '#002952' }}>
                <div className="mb-2">
                  <div className="mb-1 text-sm font-medium" style={{ color: '#f97316' }}>{item.company[language]}</div>
                  <div className="mb-2 text-sm text-white">{item.topic[language]}</div>
                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <span className="rounded px-2 py-1" style={{ backgroundColor: '#7c3aed', color: '#e9d5ff' }}>{item.type[language]}</span>
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
