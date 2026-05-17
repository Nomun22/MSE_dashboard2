import { Search, Globe } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Language, t } from "../lib/translations";
import mseLogo from "../../assets/mse-logo.jpg";

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ language, onLanguageToggle, searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container mx-auto flex h-20 items-center gap-4 px-6">
        <div className="flex items-center gap-3">
          <img
            src={mseLogo}
            alt="Mongolian Stock Exchange logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold leading-tight text-slate-900">
              {language === "en" ? "MSE Dashboard" : "МҮХБ Хяналтын Самбар"}
            </h1>
            <p className="text-xs text-slate-500">
              {t(language, "header.subtitle")}
            </p>
          </div>
        </div>

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
