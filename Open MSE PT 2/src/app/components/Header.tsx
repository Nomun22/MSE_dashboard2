import { Search, Globe } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Language, t } from "../lib/translations";

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({
  language,
  onLanguageToggle,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#004a99] text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/src/assets/mse-logo.jpg"
            alt="MSE logo"
            className="h-11 w-11 rounded-md object-cover"
          />
          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold sm:text-xl">
              МҮХБ Хяналтын Самбар
            </h1>
            <p className="truncate text-xs text-blue-100">
              {language === "en"
                ? "Listed companies / Securities"
                : "Хувьцаат компани / Үнэт цаас"}
            </p>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden w-72 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200" />
            <Input
              type="search"
              placeholder={t(language, "header.search")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border-white/10 bg-[#003166] pl-9 text-white placeholder:text-blue-200"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onLanguageToggle}
            className="border-white/15 bg-[#003166] text-white hover:bg-[#0a3f7a]"
          >
            <Globe className="mr-1.5 h-4 w-4" />
            {language === "en" ? "MN" : "EN"}
          </Button>

          <div className="hidden text-xs text-blue-100 sm:block">
            {t(language, "header.lastUpdated")} <span className="font-semibold">2026-05-05</span>
          </div>
        </div>
      </div>
    </header>
  );
}
