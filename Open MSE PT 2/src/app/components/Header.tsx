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

export function Header({ language, onLanguageToggle, searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center gap-4 px-6">
        <div className="flex flex-col">
          <h1 className="text-lg font-medium leading-tight">{t(language, "header.title")}</h1>
          <p className="text-xs text-muted-foreground">{t(language, "header.subtitle")}</p>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t(language, "header.search")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onLanguageToggle}
            className="gap-1.5"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "MN" : "EN"}
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{t(language, "header.lastUpdated")}:</span>
            <span className="font-medium">2026-05-05</span>
          </div>
        </div>
      </div>
    </header>
  );
}
