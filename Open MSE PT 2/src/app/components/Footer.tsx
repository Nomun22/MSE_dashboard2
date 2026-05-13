import { Card, CardContent } from "./ui/card";
import { Language, t } from "../lib/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">{t(language, "footer.sources")}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    <strong>mse.mn</strong> - Market overview, indices, disclosures, financial reports, and board decisions
                  </p>
                  <p>
                    <strong>open.mse.mn/securities</strong> - Listed companies, debt instruments, asset-backed securities, and investment funds
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">{t(language, "footer.methodology")}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{t(language, "footer.note")}</p>
                  <p>{t(language, "footer.bilingualNote")}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Mongolian Stock Exchange Dashboard. All data sourced from official MSE platforms.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}
