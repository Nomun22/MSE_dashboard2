import { useState } from "react";
import { Header } from "./components/Header";
import { MarketOverview } from "./components/MarketOverview";
import { IndexSection } from "./components/IndexSection";
import { TodaysTrade } from "./components/TodaysTrade";
import { SecuritiesOverview } from "./components/SecuritiesOverview";
import { ListedCompanies } from "./components/ListedCompanies";
import { CompanyMetrics } from "./components/CompanyMetrics";
import { OtherSecurities } from "./components/OtherSecurities";
import { DisclosuresReports } from "./components/DisclosuresReports";
import { SecurityDetail } from "./components/SecurityDetail";
import { Footer } from "./components/Footer";
import { Language } from "./lib/translations";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  const [selectedSecurity, setSelectedSecurity] = useState<{
    symbol: string;
    name: string;
    category?: string;
    maturityDate?: string;
  } | null>(null);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mn" : "en"));
  };

  const handleSecuritySelect = (symbol: string, name: string, category?: string, maturityDate?: string) => {
    setSelectedSecurity({ symbol, name, category, maturityDate });
    const detailSection = document.getElementById("security-detail");
    detailSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Header
        language={language}
        onLanguageToggle={handleLanguageToggle}
        searchQuery={globalSearchQuery}
        onSearchChange={setGlobalSearchQuery}
      />

      <main className="container mx-auto space-y-6 px-4 py-6">
        <MarketOverview language={language} />

        <IndexSection language={language} />

        <TodaysTrade
          language={language}
          onRowClick={(symbol, name) => handleSecuritySelect(symbol, name, "Stock")}
        />

        <SecuritiesOverview language={language} />

        <ListedCompanies
          language={language}
          onRowClick={(symbol, name) => handleSecuritySelect(symbol, name, "Listed Company")}
        />

        <CompanyMetrics language={language} />

        <OtherSecurities
          language={language}
          onRowClick={(symbol, name, category) => handleSecuritySelect(symbol, name, category)}
        />

        <DisclosuresReports language={language} />

        <section id="security-detail" className="scroll-mt-20">
          <h2 className="mb-6 text-2xl font-medium">
            {language === "en" ? "Security Detail" : "Үнэт цаасны дэлгэрэнгүй"}
          </h2>
          <SecurityDetail
            language={language}
            symbol={selectedSecurity?.symbol || null}
            name={selectedSecurity?.name || null}
            category={selectedSecurity?.category}
            maturityDate={selectedSecurity?.maturityDate}
            onClose={() => setSelectedSecurity(null)}
          />
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}