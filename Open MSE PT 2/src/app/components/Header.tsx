// src/app/components/Header.tsx
import { Search, Globe, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Language, t } from "../lib/translations";

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function MseLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A4A8A] text-white shadow-sm">
        <TrendingUp className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0A4A8A]">
          MSE
        </span>
        <span className="text-xs text-slate-500">
          {language === "en" ? "Market Dashboard" : "Зах зээлийн хяналтын самбар"}
        </span>
      </div>
    </div>
  );
}

export function Header({
  language,
  onLanguageToggle,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container mx-auto flex h-16 items-center gap-4 px-6">
        <MseLogo />

        <div className="ml-auto flex items-center gap-3">
          <div className="relative w-80 max-w-[42vw]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder={t(language, "header.search")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border-slate-200 bg-white pl-9 text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onLanguageToggle}
            className="gap-1.5 border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "MN" : "EN"}
          </Button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{t(language, "header.lastUpdated")}:</span>
            <span className="font-medium text-slate-700">2026-05-05</span>
          </div>
        </div>
      </div>
    </header>
  );
}
