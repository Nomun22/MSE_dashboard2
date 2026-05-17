import { useState } from "react";
import { Header } from "./components/Header";
import { MarketOverview } from "./components/MarketOverview";
import { IndexSection } from "./components/IndexSection";
import { TodaysTrade } from "./components/TodaysTrade";
import { SecuritiesOverview } from "./components/SecuritiesOverview";
import { ListedCompanies } from "./components/ListedCompanies";
import { CompanyMetrics } from "./components/CompanyMetrics";
import { DisclosuresReports } from "./components/DisclosuresReports";
import { Footer } from "./components/Footer";
import { Language } from "./lib/translations";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "mn" : "en"));
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
        <TodaysTrade language={language} />
        <SecuritiesOverview language={language} />
        <ListedCompanies language={language} />
        <CompanyMetrics language={language} />
        <DisclosuresReports language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
