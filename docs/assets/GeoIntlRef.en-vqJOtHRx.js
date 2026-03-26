import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/GeoIntlRef - Reactive Number and Date Formatting`}),`
`,(0,c.jsx)(n.h1,{id:`geointlref-class`,children:`GeoIntlRef Class`}),`
`,(0,c.jsx)(n.p,{children:`A reactive class for managing the formatting of numbers, dates, currencies, and relative time. Ensures formatted strings automatically update when the locale changes.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity`}),` — automatic formatted string updates when the locale `,(0,c.jsx)(n.code,{children:`Ref`}),` changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Internationalization`}),` — full support for `,(0,c.jsx)(n.code,{children:`Intl`}),` standards for numbers, dates, currencies, and units.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Relative Time`}),` — convenient methods for displaying time as "2 days ago" with limit support.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lists and Sorting`}),` — built-in methods for retrieving month names, weekdays, and locale-aware sorting.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.h3,{id:`constructor`,children:(0,c.jsx)(n.code,{children:`constructor`})}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` instance for reactive formatting management. The class acts as a wrapper around `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` and ensures all computed values automatically update when the locale code changes.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: RefOrNormal<string>`}),` — locale code (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`, `,(0,c.jsx)(n.code,{children:`'fr-FR'`}),`). Can be a regular string or a reactive `,(0,c.jsx)(n.code,{children:`ref`}),` object. If not provided, the current language from `,(0,c.jsx)(n.code,{children:`GeoRef`}),` is used.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Initialization with a reactive locale
const code = ref('en-US')
const geoIntl = new GeoIntlRef(code)

// 2. Using reactive formatting
const price = geoIntl.currency(1000, 'USD') // ComputedRef: '$1,000.00'

// 3. Automatic update
code.value = 'de-DE' // price will update automatically
`})}),`
`,(0,c.jsx)(n.h2,{id:`display-names`,children:`Display Names`}),`
`,(0,c.jsx)(n.h3,{id:`display`,children:(0,c.jsx)(n.code,{children:`display`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the translated name of a language, region, or script.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<string>`}),` — the code to translate (e.g., 'fr-FR').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions`}),` — display type options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`languagename`,children:(0,c.jsx)(n.code,{children:`languageName`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the display name of a language.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<string>`}),` — language code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.RelativeTimeFormatStyle`}),` — formatting style.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`countryname`,children:(0,c.jsx)(n.code,{children:`countryName`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the display name of a region (country).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<string>`}),` — country code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.RelativeTimeFormatStyle`}),` — formatting style.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`number-formatting`,children:`Number Formatting`}),`
`,(0,c.jsx)(n.h3,{id:`number`,children:(0,c.jsx)(n.code,{children:`number`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a number according to locale rules.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — value to format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`decimal`,children:(0,c.jsx)(n.code,{children:`decimal`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the decimal separator symbol for the current locale.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`percent`,children:(0,c.jsx)(n.code,{children:`percent`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a value as a percentage.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — input value (0.25 -> 25%).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`percentby100`,children:(0,c.jsx)(n.code,{children:`percentBy100`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a value as a percentage after dividing it by 100.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — input value (25 -> 25%).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`plural`,children:(0,c.jsx)(n.code,{children:`plural`})}),`
`,(0,c.jsx)(n.p,{children:`Selects the correct plural form for a word based on a numeric value.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — numeric value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — pipes-separated list of words (e.g., 'apple|apples').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — plural rules options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — numeric formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`currencies-and-units`,children:`Currencies and Units`}),`
`,(0,c.jsx)(n.h3,{id:`currency`,children:(0,c.jsx)(n.code,{children:`currency`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a numeric value as a currency string.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — amount.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>`}),` — currency code or options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, returns only the number without the currency symbol.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`currencysymbol`,children:(0,c.jsx)(n.code,{children:`currencySymbol`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the currency symbol for a given currency code.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currency: RefOrNormal<string>`}),` — currency code (e.g., 'EUR').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry`}),` — how to display the currency.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`unit`,children:(0,c.jsx)(n.code,{children:`unit`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a number with a specific unit.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — numeric value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — unit name or options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`sizefile`,children:(0,c.jsx)(n.code,{children:`sizeFile`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a file size into a human-readable format (bytes, KB, MB, etc.).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — size in bytes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — starting unit or options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`dates-and-time`,children:`Dates and Time`}),`
`,(0,c.jsx)(n.h3,{id:`date`,children:(0,c.jsx)(n.code,{children:`date`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a date according to the locale.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — input date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — format type ('date', 'time', 'datetime', etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — display style.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — whether to use a 24-hour clock.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`time`,children:(0,c.jsx)(n.code,{children:`time`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a time value.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — input date/time.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`month`,children:(0,c.jsx)(n.code,{children:`month`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the name of a specific month.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<NumberOrStringOrDate>`}),` — input date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['month']`}),` — formatting style (long, short, narrow).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`months`,children:(0,c.jsx)(n.code,{children:`months`})}),`
`,(0,c.jsx)(n.p,{children:`Returns a list of all month names.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['month']`}),` — formatting style.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<ItemValue<number | undefined>[]>`})]}),`
`,(0,c.jsx)(n.h3,{id:`weekday`,children:(0,c.jsx)(n.code,{children:`weekday`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the name of a specific weekday.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<NumberOrStringOrDate>`}),` — input date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['weekday']`}),` — formatting style.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`weekdays`,children:(0,c.jsx)(n.code,{children:`weekdays`})}),`
`,(0,c.jsx)(n.p,{children:`Returns a list of all weekday names.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['weekday']`}),` — formatting style.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<ItemValue<number | undefined>[]>`})]}),`
`,(0,c.jsx)(n.h2,{id:`relative-time`,children:`Relative Time`}),`
`,(0,c.jsx)(n.h3,{id:`relative`,children:(0,c.jsx)(n.code,{children:`relative`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a date as relative time (e.g., "2 days ago").`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — input date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — formatting style.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — reference date for "today".`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`relativelimit`,children:(0,c.jsx)(n.code,{children:`relativeLimit`})}),`
`,(0,c.jsx)(n.p,{children:`Formats relative time with an automatic switch to standard date formatting if a limit is reached.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — input date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` — limit in days.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — reference date for "today".`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — relative formatting options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dateOptions?: Intl.DateTimeFormatOptions`}),` — standard date options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`relativebyvalue`,children:(0,c.jsx)(n.code,{children:`relativeByValue`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a numeric interval as relative time.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — quantity.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: Intl.RelativeTimeFormatUnit`}),` — time unit (day, month, hour, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — formatting style.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`lists-and-sorting`,children:`Lists and Sorting`}),`
`,(0,c.jsx)(n.h3,{id:`sort`,children:(0,c.jsx)(n.code,{children:`sort`})}),`
`,(0,c.jsx)(n.p,{children:`Sorts an array of strings or objects based on locale rules.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: RefOrNormal<T[]>`}),` — data array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compareFn?: (a: T, b: T) => [string, string]`}),` — mapper function to extract sortable strings.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<T[]>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};