import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/functional/Classes/GeoIntlRef - Reactive Number and Date Formatting"}),`
`,e.jsx(n.h1,{id:"geointlref-class",children:"GeoIntlRef Class"}),`
`,e.jsx(n.p,{children:"A reactive class for managing the formatting of numbers, dates, currencies, and relative time. Ensures formatted strings automatically update when the locale changes."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactivity"})," — automatic formatted string updates when the locale ",e.jsx(n.code,{children:"Ref"})," changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Internationalization"})," — full support for ",e.jsx(n.code,{children:"Intl"})," standards for numbers, dates, currencies, and units."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Relative Time"}),' — convenient methods for displaying time as "2 days ago" with limit support.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lists and Sorting"})," — built-in methods for retrieving month names, weekdays, and locale-aware sorting."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsxs(n.p,{children:["Creates a new ",e.jsx(n.code,{children:"GeoIntlRef"})," instance for reactive formatting management. The class acts as a wrapper around ",e.jsx(n.code,{children:"GeoIntl"})," and ensures all computed values automatically update when the locale code changes."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: RefOrNormal<string>"})," — locale code (e.g., ",e.jsx(n.code,{children:"'en-US'"}),", ",e.jsx(n.code,{children:"'fr-FR'"}),"). Can be a regular string or a reactive ",e.jsx(n.code,{children:"ref"})," object. If not provided, the current language from ",e.jsx(n.code,{children:"GeoRef"})," is used."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Initialization with a reactive locale
const code = ref('en-US')
const geoIntl = new GeoIntlRef(code)

// 2. Using reactive formatting
const price = geoIntl.currency(1000, 'USD') // ComputedRef: '$1,000.00'

// 3. Automatic update
code.value = 'de-DE' // price will update automatically
`})}),`
`,e.jsx(n.h2,{id:"display-names",children:"Display Names"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsx(n.p,{children:"Returns the translated name of a language, region, or script."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — the code to translate (e.g., 'fr-FR')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — display type options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"languagename",children:e.jsx(n.code,{children:"languageName"})}),`
`,e.jsx(n.p,{children:"Returns the display name of a language."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — language code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — formatting style."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"countryname",children:e.jsx(n.code,{children:"countryName"})}),`
`,e.jsx(n.p,{children:"Returns the display name of a region (country)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — country code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — formatting style."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h2,{id:"number-formatting",children:"Number Formatting"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.p,{children:"Formats a number according to locale rules."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — value to format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"decimal",children:e.jsx(n.code,{children:"decimal"})}),`
`,e.jsx(n.p,{children:"Returns the decimal separator symbol for the current locale."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"percent",children:e.jsx(n.code,{children:"percent"})}),`
`,e.jsx(n.p,{children:"Formats a value as a percentage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — input value (0.25 -> 25%)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"percentby100",children:e.jsx(n.code,{children:"percentBy100"})}),`
`,e.jsx(n.p,{children:"Formats a value as a percentage after dividing it by 100."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — input value (25 -> 25%)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"plural",children:e.jsx(n.code,{children:"plural"})}),`
`,e.jsx(n.p,{children:"Selects the correct plural form for a word based on a numeric value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — numeric value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"words: string"})," — pipes-separated list of words (e.g., 'apple|apples')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.PluralRulesOptions"})," — plural rules options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — numeric formatting options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h2,{id:"currencies-and-units",children:"Currencies and Units"}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Formats a numeric value as a currency string."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — amount."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — currency code or options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", returns only the number without the currency symbol."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"currencysymbol",children:e.jsx(n.code,{children:"currencySymbol"})}),`
`,e.jsx(n.p,{children:"Returns the currency symbol for a given currency code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currency: RefOrNormal<string>"})," — currency code (e.g., 'EUR')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry"})," — how to display the currency."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"unit",children:e.jsx(n.code,{children:"unit"})}),`
`,e.jsx(n.p,{children:"Formats a number with a specific unit."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — numeric value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — unit name or options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"sizefile",children:e.jsx(n.code,{children:"sizeFile"})}),`
`,e.jsx(n.p,{children:"Formats a file size into a human-readable format (bytes, KB, MB, etc.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — size in bytes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — starting unit or options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h2,{id:"dates-and-time",children:"Dates and Time"}),`
`,e.jsx(n.h3,{id:"date",children:e.jsx(n.code,{children:"date"})}),`
`,e.jsx(n.p,{children:"Formats a date according to the locale."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — input date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — format type ('date', 'time', 'datetime', etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — display style."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — whether to use a 24-hour clock."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"time",children:e.jsx(n.code,{children:"time"})}),`
`,e.jsx(n.p,{children:"Formats a time value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — input date/time."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"month",children:e.jsx(n.code,{children:"month"})}),`
`,e.jsx(n.p,{children:"Returns the name of a specific month."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — input date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — formatting style (long, short, narrow)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"months",children:e.jsx(n.code,{children:"months"})}),`
`,e.jsx(n.p,{children:"Returns a list of all month names."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — formatting style."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})]}),`
`,e.jsx(n.h3,{id:"weekday",children:e.jsx(n.code,{children:"weekday"})}),`
`,e.jsx(n.p,{children:"Returns the name of a specific weekday."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — input date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — formatting style."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"weekdays",children:e.jsx(n.code,{children:"weekdays"})}),`
`,e.jsx(n.p,{children:"Returns a list of all weekday names."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — formatting style."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})]}),`
`,e.jsx(n.h2,{id:"relative-time",children:"Relative Time"}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsx(n.p,{children:'Formats a date as relative time (e.g., "2 days ago").'}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — input date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — formatting style."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"}),' — reference date for "today".']}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsx(n.p,{children:"Formats relative time with an automatic switch to standard date formatting if a limit is reached."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — input date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit: number"})," — limit in days."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"}),' — reference date for "today".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — relative formatting options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateOptions?: Intl.DateTimeFormatOptions"})," — standard date options."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"relativebyvalue",children:e.jsx(n.code,{children:"relativeByValue"})}),`
`,e.jsx(n.p,{children:"Formats a numeric interval as relative time."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — quantity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — time unit (day, month, hour, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — formatting style."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h2,{id:"lists-and-sorting",children:"Lists and Sorting"}),`
`,e.jsx(n.h3,{id:"sort",children:e.jsx(n.code,{children:"sort"})}),`
`,e.jsx(n.p,{children:"Sorts an array of strings or objects based on locale rules."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: RefOrNormal<T[]>"})," — data array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compareFn?: (a: T, b: T) => [string, string]"})," — mapper function to extract sortable strings."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<T[]>"})]})]})}function x(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
