export type Language = "en" | "mn";

export const translations = {
  en: {
    header: {
      title: "MSE Dashboard",
      subtitle: "Listed Companies / Securities",
      search: "Search securities...",
      lastUpdated: "Last Updated",
    },
    marketOverview: {
      title: "Market Overview",
      top20Index: "TOP-20 Index",
      mseAll: "MSE ALL",
      marketCap: "Market Capitalization",
      dailyTradingValue: "Daily Trading Value",
      latestDisclosures: "Latest Disclosures",
      latestReports: "Latest Financial Reports",
      boardDecisions: "Board Decisions",
      marketNews: "Market News",
      symbol: "Symbol",
      date: "Date",
      companyName: "Company Name",
      type: "Type",
    },
    securitiesOverview: {
      title: "Securities Overview",
      listedCompanies: "Listed Companies",
      debtInstruments: "Debt Instruments",
      abs: "Asset-backed Securities",
      investmentFunds: "Investment Funds",
    },
    listedCompanies: {
      title: "Listed Companies",
      search: "Search by symbol or company name",
      sortBy: "Sort by",
      resetFilters: "Reset",
      export: "Export",
      results: "results",
      no: "No.",
      symbol: "Symbol",
      companyName: "Company Name",
    },
    otherSecurities: {
      title: "Other Securities",
      debt: "Debt Instruments",
      abs: "Asset-backed Securities",
      funds: "Investment Funds",
      securityName: "Security Name",
      maturityDate: "Maturity Date",
      fundName: "Fund Name",
    },
    securityDetail: {
      title: "Security Detail",
      category: "Category",
      source: "Source",
      relatedDisclosures: "Related Disclosures",
      noSelection: "Select a security to view details",
    },
    footer: {
      sources: "Data Sources",
      methodology: "Methodology",
      note: "Data collected from mse.mn and open.mse.mn/securities",
      bilingualNote: "Bilingual interface with data from official sources",
    },
  },
  mn: {
    header: {
      title: "МҮЕХ Хяналтын Самбар",
      subtitle: "Хувьцаат компани / Үнэт цаас",
      search: "Үнэт цаас хайх...",
      lastUpdated: "Сүүлд шинэчлэгдсэн",
    },
    marketOverview: {
      title: "Зах зээлийн тойм",
      top20Index: "ТОП-20 Индекс",
      mseAll: "МҮЕХ БҮГД",
      marketCap: "Зах зээлийн үнэлгээ",
      dailyTradingValue: "Арилжааны үнийн дүн",
      latestDisclosures: "Сүүлийн мэдээлэл",
      latestReports: "Сүүлийн санхүүгийн тайлан",
      boardDecisions: "Удирдах зөвлөлийн шийдвэр",
      marketNews: "Зах зээлийн мэдээ",
      symbol: "Код",
      date: "Огноо",
      companyName: "Компанийн нэр",
      type: "Төрөл",
    },
    securitiesOverview: {
      title: "Үнэт цаасны тойм",
      listedCompanies: "Хувьцаат компани",
      debtInstruments: "Өрийн хэрэгсэл",
      abs: "Хөрөнгөөр баталгаажсан үнэт цаас",
      investmentFunds: "Хөрөнгө оруулалтын сан",
    },
    listedCompanies: {
      title: "Хувьцаат компани",
      search: "Код эсвэл компанийн нэрээр хайх",
      sortBy: "Эрэмбэлэх",
      resetFilters: "Цэвэрлэх",
      export: "Татах",
      results: "үр дүн",
      no: "№",
      symbol: "Код",
      companyName: "Компанийн нэр",
    },
    otherSecurities: {
      title: "Бусад үнэт цаас",
      debt: "Өрийн хэрэгсэл",
      abs: "Хөрөнгөөр баталгаажсан үнэт цаас",
      funds: "Хөрөнгө оруулалтын сан",
      securityName: "Үнэт цаасны нэр",
      maturityDate: "Дуусах хугацаа",
      fundName: "Сангийн нэр",
    },
    securityDetail: {
      title: "Үнэт цаасны дэлгэрэнгүй",
      category: "Ангилал",
      source: "Эх сурвалж",
      relatedDisclosures: "Холбогдох мэдээлэл",
      noSelection: "Дэлгэрэнгүй мэдээлэл харахын тулд үнэт цаас сонгоно уу",
    },
    footer: {
      sources: "Мэдээллийн эх сурвалж",
      methodology: "Арга зүй",
      note: "mse.mn болон open.mse.mn/securities-с цуглуулсан мэдээлэл",
      bilingualNote: "Албан ёсны эх сурвалжаас авсан мэдээлэлтэй хоёр хэлний интерфейс",
    },
  },
};

export function t(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value[k];
    if (value === undefined) return key;
  }

  return value;
}
