# MSE Dashboard UI Plan

## Project goal
Create a UI concept for an MSE dashboard that combines:
- market overview information from mse.mn
- securities directory information from open.mse.mn/securities

This is UI planning only, not website development yet.

## Main source blocks

### Source 1: mse.mn
Used for:
- TOP-20 index
- MSE ALL
- Market capitalization / Зах зээлийн үнэлгээ
- Daily trading value / Арилжааны үнийн дүн
- Latest disclosures
- Latest financial reports
- Board decisions / meeting notices
- Market news / announcement text

### Source 2: open.mse.mn/securities
Used for:
- Listed Companies
- Debt Instruments
- Asset-backed Securities
- Investment Funds

Confirmed counts:
- Listed Companies: 261
- Debt Instruments: 42
- Asset-backed Securities: 16
- Investment Funds: 3

## UI screens

### 1. Market Overview
Purpose:
Show the overall market situation at a glance.

Main content:
- TOP-20 index card
- MSE ALL card
- Market capitalization card
- Daily trading value card
- Market summary text block
- Latest disclosures table
- Latest financial reports table
- Board decisions / meeting notices table
- News / announcement highlights

### 2. Securities Overview
Purpose:
Show the full securities universe by category.

Main content:
- Total Listed Companies
- Total Debt Instruments
- Total ABS
- Total Investment Funds
- 4 category cards
- small preview tables for each category
- links to detail pages

### 3. Listed Companies
Purpose:
Browse all listed companies.

Main content:
- search bar
- result count
- table with:
  - No.
  - Symbol
  - Company Name
- detail drawer on row click

### 4. Other Securities
Purpose:
Group non-equity securities into one screen to reduce complexity.

Subsections:
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

### 5. Security Detail
Purpose:
Show one selected security in a clean side panel or detail screen.

Fields:
- Symbol
- Name
- Category
- Source section
- Maturity Date if available
- Related disclosures
- Future placeholders for governance, reports, meetings, and financial info

## Screen hierarchy

### Market Overview
Top:
- page title
- date
- language toggle
- search

Middle:
- 4 KPI cards
- market summary box

Bottom:
- disclosures table
- reports table
- board decisions table
- news highlights

### Securities Overview
Top:
- page title
- search
- quick link to Market Overview

Middle:
- 4 KPI cards
- 4 category cards

Bottom:
- preview tables
- methodology note

### Listed Companies
Top:
- title
- count
- search
- export placeholder

Middle:
- filter / search bar
- main table

Right side or drawer:
- detail panel for selected company

### Other Securities
Top:
- title
- shared search bar
- section tabs:
  - Debt
  - ABS
  - Funds

Main content:
- table changes by tab
- detail drawer for selected row
- maturity date sorting for Debt and ABS

### Security Detail
Top:
- symbol
- name
- category badge

Main content:
- profile information
- core fields
- related filing links
- future linked modules

## Core UI components
- Sidebar navigation
- Top header
- Search bar
- KPI card
- Category card
- Data table
- Badge / tag
- Detail drawer
- Note block
- Empty state

## Table rules

### Listed Companies
Columns:
- No.
- Symbol
- Company Name

### Debt Instruments
Columns:
- No.
- Symbol
- Security Name
- Maturity Date

### Asset-backed Securities
Columns:
- No.
- Symbol
- Security Name
- Maturity Date

### Investment Funds
Columns:
- No.
- Symbol
- Fund Name

## UI design style
- modern financial dashboard
- compact and clean
- professional and data-first
- no marketing hero section
- no large decorative gradients
- light neutral background
- white cards
- dark blue primary accent
- muted gray text
- green for positive values
- red for negative values
- soft borders
- minimal shadows
- sans-serif type
- bold ticker symbols
- regular company names

## Simplification rules
- keep only 5 main screens
- disclosures and reports stay inside Market Overview
- debt, ABS, and funds are grouped into one screen called Other Securities
- use one detail pattern across all tables
- keep UI planning simple before moving to Figma or code

## Data notes
- keep bond tranches as separate rows if symbols differ
- keep ABS rows separate if symbols differ
- blank maturity date is acceptable for ABS when source shows N/A
- suspicious debt rows should be flagged for review, not silently deleted in raw notes
- listed companies page is a directory screen, not a trading screen

## Next design step
Convert this document into:
1. low-fidelity wireframes
2. one clean Figma board or one HTML mockup
3. final visual system after wireframes are approved

# MSE Dashboard UI Plan

## Goal
Create a UI concept for an MSE dashboard using:
- market overview content from mse.mn
- securities listing content from open.mse.mn/securities

This is for UI planning only, not coding yet.

## Main data sources

### mse.mn
Use for:
- Market Overview
- Daily trading value text
- Latest disclosures
- Latest financial reports
- Board decisions / meeting notices
- Market news / announcements

### open.mse.mn/securities
Use for:
- Listed Companies
- Debt Instruments
- Asset-backed Securities
- Investment Funds

Confirmed source counts:
- Listed Companies: 261
- Debt Instruments: 42
- Asset-backed Securities: 16
- Investment Funds: 3

## Main screens

### 1. Market Overview
Purpose:
Show the overall market situation in one screen.

Main content:
- 4 KPI cards
- market summary text block
- latest disclosures table
- latest financial reports table
- board decisions / meeting notices table
- market news / announcement block

Suggested KPI cards:
- TOP-20 Index
- MSE ALL
- Market Capitalization / Зах зээлийн үнэлгээ
- Daily Trading Value / Арилжааны үнийн дүн

### 2. Securities Overview
Purpose:
Show the full securities universe by category.

Main content:
- Total Listed Companies
- Total Debt Instruments
- Total ABS
- Total Investment Funds
- 4 category cards
- preview tables for each category

### 3. Listed Companies
Purpose:
Browse all listed companies.

Main content:
- search bar
- result count
- table with:
  - No.
  - Symbol
  - Company Name
- row click opens detail drawer

### 4. Other Securities
Purpose:
Keep non-equity securities in one screen to reduce complexity.

Subsections:
- Debt Instruments
- Asset-backed Securities
- Investment Funds

Debt table:
- No.
- Symbol
- Security Name
- Maturity Date

ABS table:
- No.
- Symbol
- Security Name
- Maturity Date

Fund table:
- No.
- Symbol
- Fund Name

### 5. Security Detail
Purpose:
Show one selected security in a side panel or detail page.

Fields:
- Symbol
- Name
- Category
- Source section
- Maturity Date if available
- Related disclosures
- Placeholder for reports, governance, meetings, and financial information

## Screen structure

### Market Overview
Top:
- page title
- date
- language toggle
- search

Middle:
- KPI cards
- market summary box

Bottom:
- disclosures table
- reports table
- board decisions table
- news / highlights block

### Securities Overview
Top:
- page title
- search
- quick link to Market Overview

Middle:
- 4 KPI cards
- 4 category cards

Bottom:
- preview tables
- source / methodology note

### Listed Companies
Top:
- title
- count
- search
- export button placeholder

Middle:
- company table

Side panel:
- selected company detail

### Other Securities
Top:
- title
- shared search bar
- tabs:
  - Debt
  - ABS
  - Funds

Main:
- table changes by tab
- detail drawer for selected row
- maturity-date sorting for Debt and ABS

### Security Detail
Top:
- symbol
- name
- category badge

Main:
- core profile fields
- related filing links
- future modules

## Core UI components
- Sidebar navigation
- Top header
- Search bar
- KPI card
- Category card
- Data table
- Badge / tag
- Detail drawer
- Note block
- Empty state

## Table structures

### Listed Companies
- No.
- Symbol
- Company Name

### Debt Instruments
- No.
- Symbol
- Security Name
- Maturity Date

### Asset-backed Securities
- No.
- Symbol
- Security Name
- Maturity Date

### Investment Funds
- No.
- Symbol
- Fund Name

## Visual style
- modern financial dashboard
- compact and clean
- professional and data-first
- light neutral background
- white cards
- dark blue accent
- muted gray text
- green for positive values
- red for negative values
- soft borders
- minimal shadows
- sans-serif font
- bold ticker symbols
- regular company names

## Simplification rules
- keep only 5 main screens
- disclosures and reports stay inside Market Overview
- debt, ABS, and funds stay inside one screen called Other Securities
- use one reusable detail drawer pattern
- do wireframes first before any visual polish

## Data notes
- keep bond tranches separate if symbols differ
- keep ABS rows separate if symbols differ
- blank maturity date is acceptable when source shows N/A
- suspicious rows should be flagged for review in planning
- Listed Companies is a directory screen, not a trading screen

## Next step
Turn this into low-fidelity wireframes for:
1. Market Overview
2. Securities Overview
3. Listed Companies
4. Other Securities
5. Security Detail
