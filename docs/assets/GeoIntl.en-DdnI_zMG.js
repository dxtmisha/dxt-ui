import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/GeoIntl - Internationalization (Intl)`}),`
`,(0,c.jsx)(n.h1,{id:`geointl-class`,children:`GeoIntl Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` class is a high-level, optimized wrapper over the native browser `,(0,c.jsx)(n.code,{children:`Intl`}),` API, designed specifically for seamless integration with `,(0,c.jsx)(n.code,{children:`Geo`}),` geolocation capabilities. It provides a unified, locale-aware interface for formatting numbers, currencies, units, dates, times, and geographic names, while automatically handling locale detection and instance management.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The class implements a `,(0,c.jsx)(n.strong,{children:`Per-locale Singleton pattern`}),`, ensuring that only one instance is created and cached for each unique locale code, significantly reducing the overhead of repetitive `,(0,c.jsx)(n.code,{children:`Intl`}),` object construction.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Instance Caching`}),` — Automatically manages and reuses instances based on the standard locale string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Formatting API`}),` — Simplifies complex `,(0,c.jsx)(n.code,{children:`Intl`}),` configurations into straightforward, high-level methods.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Adaptive Geolocation`}),` — Automatically pulls defaults from the global `,(0,c.jsx)(n.code,{children:`Geo`}),` state if no explicit locale is provided.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cultural Awareness`}),` — Correctly handles diverse naming conventions, calendar start days, and pluralization rules across different cultures.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.h3,{id:`getinstance`,children:(0,c.jsx)(n.code,{children:`getInstance`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves a cached instance or creates a new one for the specified locale code.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Standardized locale string (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`, `,(0,c.jsx)(n.code,{children:`'ru-RU'`}),`). Defaults to `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` — The singleton instance for the requested locale.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('en-US')
const currentIntl = new GeoIntl() // Also uses the singleton cache internally
`})}),`
`,(0,c.jsx)(n.h2,{id:`geographic--localization-methods`,children:`Geographic & Localization Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Returns the normalized standard locale string (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Returns the first day of the week specification for the locale (e.g., `,(0,c.jsx)(n.code,{children:`'Mon'`}),`, `,(0,c.jsx)(n.code,{children:`'Sun'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`names--regions`,children:`Names & Regions`}),`
`,(0,c.jsx)(n.h3,{id:`display`,children:(0,c.jsx)(n.code,{children:`display`})}),`
`,(0,c.jsxs)(n.p,{children:[`Provides localized translations for languages, regions, and scripts using the `,(0,c.jsx)(n.code,{children:`Intl.DisplayNames`}),` engine.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — The identifier code (e.g., `,(0,c.jsx)(n.code,{children:`'fr'`}),`, `,(0,c.jsx)(n.code,{children:`'US'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeOptions?`}),` — A string representing the display type (`,(0,c.jsx)(n.code,{children:`'language'`}),`, `,(0,c.jsx)(n.code,{children:`'region'`}),`, `,(0,c.jsx)(n.code,{children:`'script'`}),`) or a full `,(0,c.jsx)(n.code,{children:`Intl.DisplayNamesOptions`}),` object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The localized display name.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.display('fr', 'language') // 'French'
intl.display('DE', 'region')   // 'Germany'
`})}),`
`,(0,c.jsxs)(n.h3,{id:`languagename--countryname`,children:[(0,c.jsx)(n.code,{children:`languageName`}),` / `,(0,c.jsx)(n.code,{children:`countryName`})]}),`
`,(0,c.jsx)(n.p,{children:`Shorthand methods for retrieving localized names for languages and countries.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — Language or country code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?`}),` — Formatting style: `,(0,c.jsx)(n.code,{children:`'long'`}),`, `,(0,c.jsx)(n.code,{children:`'short'`}),`, or `,(0,c.jsx)(n.code,{children:`'narrow'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`fullname`,children:(0,c.jsx)(n.code,{children:`fullName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Formats a person's full name according to the cultural conventions of the current locale. The component order (First-Middle-Last or Last-First-Middle) is determined by the `,(0,c.jsx)(n.code,{children:`nameFormat`}),` within the geographic data.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`last: string`}),` — Last name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first: string`}),` — First name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Middle name or patronymic (optional).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, abbreviates names after the first to initials (e.g., `,(0,c.jsx)(n.code,{children:`Smith J. D.`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`numeric-formatting`,children:`Numeric Formatting`}),`
`,(0,c.jsx)(n.h3,{id:`number`,children:(0,c.jsx)(n.code,{children:`number`})}),`
`,(0,c.jsxs)(n.p,{children:[`Formats a number using the `,(0,c.jsx)(n.code,{children:`Intl.NumberFormat`}),` capabilities.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — The numeric value to format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Configuration for decimal places, grouping, etc.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`currency`,children:(0,c.jsx)(n.code,{children:`currency`})}),`
`,(0,c.jsx)(n.p,{children:`Specialized monetary formatter with automatic symbol placement.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Amount. Also parses strings with currency suffixes (e.g., `,(0,c.jsx)(n.code,{children:`'100 USD'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyOptions?: string | Intl.NumberFormatOptions`}),` — Currency code (`,(0,c.jsx)(n.code,{children:`'USD'`}),`) or detailed formatting options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, returns only the formatted digits without the currency symbol.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.currency(1500, 'USD') // '$1,500.00'
intl.currency('1500 EUR')  // '€1,500.00'
`})}),`
`,(0,c.jsxs)(n.h3,{id:`unit--sizefile`,children:[(0,c.jsx)(n.code,{children:`unit`}),` / `,(0,c.jsx)(n.code,{children:`sizeFile`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Formats numbers with units of measurement. `,(0,c.jsx)(n.code,{children:`sizeFile`}),` provides recursive scaling for byte values (automatically switching to KB, MB, GB).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Parameters (`,(0,c.jsx)(n.code,{children:`sizeFile`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Size in bytes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?`}),` — Starting unit (defaults to `,(0,c.jsx)(n.code,{children:`'byte'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`plural`,children:(0,c.jsx)(n.code,{children:`plural`})}),`
`,(0,c.jsx)(n.p,{children:`Applies locale-sensitive pluralization rules.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — The count.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Pipe-separated forms: `,(0,c.jsx)(n.code,{children:`one|two|few|many|other|zero`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?`}),` — `,(0,c.jsx)(n.code,{children:`Intl.PluralRulesOptions`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Formatted number followed by the correct word form.`]}),`
`,(0,c.jsx)(n.h2,{id:`dates--time`,children:`Dates & Time`}),`
`,(0,c.jsxs)(n.h3,{id:`date--time`,children:[(0,c.jsx)(n.code,{children:`date`}),` / `,(0,c.jsx)(n.code,{children:`time`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Main date formatting engine providing localized representations based on predefined `,(0,c.jsx)(n.code,{children:`GeoDate`}),` presets.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrStringOrDate`}),` — The date input.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Preset identifier: `,(0,c.jsx)(n.code,{children:`'date'`}),`, `,(0,c.jsx)(n.code,{children:`'time'`}),`, `,(0,c.jsx)(n.code,{children:`'datetime'`}),`, `,(0,c.jsx)(n.code,{children:`'full'`}),`, etc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?`}),` — Custom `,(0,c.jsx)(n.code,{children:`Intl.DateTimeFormatOptions`}),` or a month style string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Forces 24-hour time representation.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsxs)(n.h3,{id:`months--weekdays`,children:[(0,c.jsx)(n.code,{children:`months`}),` / `,(0,c.jsx)(n.code,{children:`weekdays`})]}),`
`,(0,c.jsx)(n.p,{children:`Returns arrays of localized labels for months or days, ideal for populating UI selection components.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ItemValue<number>[]`}),` — Array of objects with `,(0,c.jsx)(n.code,{children:`label`}),` and `,(0,c.jsx)(n.code,{children:`value`}),` fields.`]}),`
`,(0,c.jsx)(n.h2,{id:`relative-time`,children:`Relative Time`}),`
`,(0,c.jsx)(n.h3,{id:`relative`,children:(0,c.jsx)(n.code,{children:`relative`})}),`
`,(0,c.jsx)(n.p,{children:`Calculates and formats the relative time difference from a reference point (now), automatically selecting the most appropriate time unit.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrStringOrDate`}),` — The past or future date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?`}),` — Formatting style (e.g., `,(0,c.jsx)(n.code,{children:`'long'`}),`, `,(0,c.jsx)(n.code,{children:`'short'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — Explicit reference point (defaults to `,(0,c.jsx)(n.code,{children:`new Date()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` (e.g., `,(0,c.jsx)(n.code,{children:`'2 hours ago'`}),`, `,(0,c.jsx)(n.code,{children:`'in 3 days'`}),`)`]}),`
`,(0,c.jsx)(n.h3,{id:`relativelimit`,children:(0,c.jsx)(n.code,{children:`relativeLimit`})}),`
`,(0,c.jsxs)(n.p,{children:[`Conditional formatter that bridge relative and absolute time. If the date is within a certain `,(0,c.jsx)(n.code,{children:`limit`}),` of days, it returns relative time; otherwise, it switches to a standard absolute date format.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`sorting`,children:`Sorting`}),`
`,(0,c.jsx)(n.h3,{id:`sort`,children:(0,c.jsx)(n.code,{children:`sort`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sorts an array of elements using locale-sensitive comparison via `,(0,c.jsx)(n.code,{children:`Intl.Collator`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T[]`}),` — The target array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compareFn?`}),` — An optional transformation function to extract sort keys from complex objects.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T[]`}),` — The sorted array.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.sort(['banana', 'apple', 'cherry'])
// ['apple', 'banana', 'cherry']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};