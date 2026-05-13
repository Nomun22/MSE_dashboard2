# Asset-backed Securities Page Wireframe

## Page purpose
Let the user browse and inspect all asset-backed securities listed on MSE.

## Main sections
1. Top header
2. Filter and sort bar
3. Main ABS table
4. Detail drawer / side panel
5. Data note area

## 1. Top header
Contains:
- page title: Asset-backed Securities
- result count
- language toggle
- search field
- export button (UI only for now)

## 2. Filter and sort bar
Contains:
- search by symbol
- search by ABS name
- sort by maturity date
- sort by symbol
- reset filters action

## 3. Main ABS table
Columns:
- No.
- Symbol
- Security Name
- Maturity Date

Behavior:
- sticky header
- sort by maturity date
- sort by symbol
- click row to open detail drawer
- search updates results
- blank maturity values remain blank in the clean version

## 4. Detail drawer / side panel
Shows:
- selected symbol
- selected ABS name
- category: Asset-backed Security
- maturity date if available
- source section: open.mse.mn/securities
- future related links

## 5. Data note area
Shows:
- missing maturity-date note
- methodology note