import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Language, t } from "../lib/translations";

interface SecurityDetailProps {
  language: Language;
  symbol: string | null;
  name: string | null;
  category?: string;
  maturityDate?: string;
  onClose: () => void;
}

export function SecurityDetail({
  language,
  symbol,
  name,
  category = "Listed Company",
  maturityDate,
  onClose,
}: SecurityDetailProps) {
  if (!symbol || !name) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="flex min-h-[200px] items-center justify-center p-8">
          <p className="text-center text-muted-foreground">
            {t(language, "securityDetail.noSelection")}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl">{symbol}</CardTitle>
            <p className="text-base text-muted-foreground">{name}</p>
            <div className="flex gap-2">
              <Badge variant="default">{category}</Badge>
              {maturityDate && <Badge variant="neutral">Maturity: {maturityDate}</Badge>}
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-1">
            <div className="text-sm font-medium">{t(language, "listedCompanies.symbol")}</div>
            <div className="text-sm text-muted-foreground">{symbol}</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium">{t(language, "listedCompanies.companyName")}</div>
            <div className="text-sm text-muted-foreground">{name}</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium">{t(language, "securityDetail.category")}</div>
            <div className="text-sm text-muted-foreground">{category}</div>
          </div>

          {maturityDate && (
            <div className="space-y-1">
              <div className="text-sm font-medium">{t(language, "otherSecurities.maturityDate")}</div>
              <div className="text-sm text-muted-foreground">{maturityDate}</div>
            </div>
          )}

          <div className="space-y-1">
            <div className="text-sm font-medium">{t(language, "securityDetail.source")}</div>
            <div className="text-sm text-muted-foreground">
              {category === "Listed Company" ? "mse.mn" : "open.mse.mn/securities"}
            </div>
          </div>
        </div>

        <div className="space-y-2 rounded-md border border-border p-4">
          <div className="text-sm font-medium">{t(language, "securityDetail.relatedDisclosures")}</div>
          <div className="text-sm text-muted-foreground">
            Related disclosures, financial reports, governance documents, and meeting notices will be displayed here.
          </div>
        </div>

        <div className="rounded-md bg-muted/50 p-3 text-xs text-muted-foreground">
          Future enhancements will include links to governance information, financial reports, board meetings, and detailed security information.
        </div>
      </CardContent>
    </Card>
  );
}
