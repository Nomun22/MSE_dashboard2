import { Language } from "../lib/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-slate-200">
      <div className="container mx-auto px-6 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()}{" "}
          {language === "en"
            ? "Mongolian Stock Exchange Dashboard. All data sourced from official MSE platforms."
            : "Монголын Хөрөнгийн Биржийн хяналтын самбар. Бүх мэдээлэл нь МХБ-ийн албан ёсны эх сурвалжаас авсан."}
        </p>
      </div>
    </footer>
  );
}
