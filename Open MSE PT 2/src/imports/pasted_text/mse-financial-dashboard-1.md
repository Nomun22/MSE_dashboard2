Design a clean, modern, professional financial dashboard UI for the Mongolian Stock Exchange (MSE). The dashboard should feel similar in quality and density to a broker datalab interface such as trader.tdbsecurities.mn/datalab, but it must NOT copy that product. It should be original, more editorial and institutional, and tailored to MSE and open.mse.mn.

PROJECT GOAL
Create UI only, not code, for a listed companies and market data dashboard for MSE using:
1. mse.mn homepage and related market/index content
2. open.mse.mn/securities content

IMPORTANT REDESIGN REQUIREMENTS
- Remove the entire sidebar
- Use a full-width layout
- Put all sections on one vertically stacked, scrollable dashboard page
- Add one global language toggle in the top header
- Language toggle switches all interface labels between English and Mongolian
- Remove individual page headers inside each section
- Keep a single master page header only
- This is a full redesign of layout, navigation, internationalization, and visual structure

MAIN PAGE STRUCTURE
Create one long dashboard page with these stacked sections in this order:

1. Master Header
2. Market Overview
3. Securities Overview
4. Listed Companies
5. Other Securities
6. Security Detail / Insight Panel
7. Footer / Methodology

MASTER HEADER
Full-width sticky top header with:
- MSE Dashboard title
- subtitle: Listed Companies / Үнэт цаас
- global search bar
- language toggle: EN / MN
- theme toggle placeholder
- last updated date placeholder

No sidebar. No left navigation. No individual page headers repeated below.

VISUAL STYLE
- modern financial dashboard
- compact and clean
- professional, institutional, data-first
- full-width desktop layout
- light neutral background
- white cards
- dark blue primary accent
- muted gray secondary text
- green for positive values
- red for negative values
- soft borders
- minimal shadows
- compact spacing
- sans-serif typography
- bold ticker symbols
- regular company/security names
- no marketing hero section
- no flashy gradients
- no unnecessary decoration

SECTION 1: MARKET OVERVIEW
Purpose:
Show the overall market situation at a glance using mse.mn style content.

Include:
- KPI card: TOP-20 Index
- KPI card: MSE ALL
- KPI card: Market Capitalization / Зах зээлийн үнэлгээ
- KPI card: Daily Trading Value / Арилжааны үнийн дүн

Below KPI cards:
- Market summary card with short text and highlights
- Latest Disclosures table
- Latest Financial Reports table
- Board Decisions / Meeting Notices table
- Market News / Announcements block

For the tables, use columns:
- Symbol
- Date
- Company Name
- Type

SECTION 2: SECURITIES OVERVIEW
Purpose:
Give a structured overview of all securities categories from open.mse.mn/securities.

Include 4 KPI/category cards:
- Listed Companies: 261
- Debt Instruments: 42
- Asset-backed Securities: 16
- Investment Funds: 3

Below the cards:
- preview table for Listed Companies
- preview table for Debt Instruments
- preview table for Asset-backed Securities
- preview table for Investment Funds

Preview table columns:
Listed Companies:
- Symbol
- Company Name

Debt Instruments:
- Symbol
- Security Name
- Maturity Date

Asset-backed Securities:
- Symbol
- Security Name
- Maturity Date

Investment Funds:
- Symbol
- Fund Name

SECTION 3: LISTED COMPANIES
Purpose:
Directory-style table section for all listed companies.

Include:
- compact filter/search row
- search by symbol
- search by company name
- sort dropdown
- reset filters action
- result count
- export button placeholder

Main table columns:
- No.
- Symbol
- Company Name

Behavior to represent visually:
- sticky table header
- row hover state
- clicking a row opens a detail drawer or side detail panel

SECTION 4: OTHER SECURITIES
Purpose:
Combine non-equity securities into one section to reduce complexity.

Use 3 tabs or segmented controls inside this section:
- Debt Instruments
- Asset-backed Securities
- Investment Funds

Debt Instruments table:
- No.
- Symbol
- Security Name
- Maturity Date

ABS table:
- No.
- Symbol
- Security Name
- Maturity Date

Investment Funds table:
- No.
- Symbol
- Fund Name

Debt and ABS should show:
- search
- sort by maturity date
- sort by symbol
- reset filters

Investment Funds should show:
- search by symbol
- search by fund name
- sort by symbol

Also visually include a small data note area:
- suspicious rows flagged for review
- blank maturity dates allowed for ABS when unavailable
- keep tranche entries separate if symbols differ

SECTION 5: SECURITY DETAIL / INSIGHT PANEL
Purpose:
Reusable detail area for a selected row from any section.

Can appear as:
- right-side slide-out panel on desktop, or
- embedded detail card below selected table

Fields:
- Symbol
- Name
- Category
- Source section
- Maturity Date if available
- Related disclosures
- Future placeholder links for governance, reports, meetings, financial information

SECTION 6: FOOTER / METHODOLOGY
Include:
- source references
- data methodology note
- bilingual note
- collection/update note

LANGUAGE / INTERNATIONALIZATION REQUIREMENTS
Must support two languages:
- English
- Mongolian

Global language toggle in the master header should switch:
- section titles
- KPI labels
- table headings
- filter labels
- buttons
- notes
- badges
- helper text

Data values may remain in Mongolian where they come from the source, but the UI labels themselves must switch language.

Suggested bilingual labels:
- Market Overview / Зах зээлийн тойм
- Securities Overview / Үнэт цаасны тойм
- Listed Companies / Хувьцаат компани
- Debt Instruments / Өрийн хэрэгсэл
- Asset-backed Securities / Хөрөнгөөр баталгаажсан үнэт цаас
- Investment Funds / Хөрөнгө оруулалтын сан
- Security Detail / Үнэт цаасны дэлгэрэнгүй
- Market Capitalization / Зах зээлийн үнэлгээ
- Daily Trading Value / Арилжааны үнийн дүн

LAYOUT RULES
- One long vertically scrolling dashboard page
- Full-width layout
- 12-column grid feel
- Large content area, no left nav
- Cards aligned in rows
- Tables stacked in organized sections
- Enough spacing between sections for readability
- Section anchors can exist visually, but not as a visible sidebar

COMPONENTS TO DESIGN
- Sticky top header
- Search bar
- Language toggle
- KPI cards
- Summary card
- Category cards
- Data tables
- Tabs / segmented controls
- Detail drawer / detail card
- Badges / tags
- Empty state
- Note box / methodology box
- Footer source block

TABLE UI RULES
- left aligned text
- symbol column visually strongest
- dates formatted YYYY-MM-DD
- empty values left blank
- compact rows
- sticky headers
- clean financial-table feel

DESIGN TONE
The interface should look like:
- credible
- institutional
- modern
- analytical
- investor-facing
- not flashy
- not startup-marketing
- not copied from TDB, only inspired by dense financial dashboard patterns

DELIVERABLE
Produce one full-width desktop dashboard UI mockup showing all sections stacked on one page:
- Master Header
- Market Overview
- Securities Overview
- Listed Companies
- Other Securities
- Security Detail
- Footer / Methodology

Also show how the EN/MN language toggle changes the interface labels.