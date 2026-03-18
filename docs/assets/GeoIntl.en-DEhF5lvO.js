import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/en/functional-basic/Classes/GeoIntl - Internationalization (Intl)"}),`
`,e.jsx(n.h1,{id:"geointl-class",children:"GeoIntl Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"GeoIntl"})," class is a high-level, optimized wrapper over the native browser ",e.jsx(n.code,{children:"Intl"})," API, designed specifically for seamless integration with ",e.jsx(n.code,{children:"Geo"})," geolocation capabilities. It provides a unified, locale-aware interface for formatting numbers, currencies, units, dates, times, and geographic names, while automatically handling locale detection and instance management."]}),`
`,e.jsxs(n.p,{children:["The class implements a ",e.jsx(n.strong,{children:"Per-locale Singleton pattern"}),", ensuring that only one instance is created and cached for each unique locale code, significantly reducing the overhead of repetitive ",e.jsx(n.code,{children:"Intl"})," object construction."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Instance Caching"})," — Automatically manages and reuses instances based on the standard locale string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Formatting API"})," — Simplifies complex ",e.jsx(n.code,{children:"Intl"})," configurations into straightforward, high-level methods."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Adaptive Geolocation"})," — Automatically pulls defaults from the global ",e.jsx(n.code,{children:"Geo"})," state if no explicit locale is provided."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cultural Awareness"})," — Correctly handles diverse naming conventions, calendar start days, and pluralization rules across different cultures."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.h3,{id:"getinstance",children:e.jsx(n.code,{children:"getInstance"})}),`
`,e.jsx(n.p,{children:"Retrieves a cached instance or creates a new one for the specified locale code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: string"})," — Standardized locale string (e.g., ",e.jsx(n.code,{children:"'en-US'"}),", ",e.jsx(n.code,{children:"'ru-RU'"}),"). Defaults to ",e.jsx(n.code,{children:"Geo.getLocation()"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"GeoIntl"})," — The singleton instance for the requested locale."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('en-US')
const currentIntl = new GeoIntl() // Also uses the singleton cache internally
`})}),`
`,e.jsx(n.h2,{id:"geographic--localization-methods",children:"Geographic & Localization Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocation(): string"})," — Returns the normalized standard locale string (e.g., ",e.jsx(n.code,{children:"'en-US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDay(): string"})," — Returns the first day of the week specification for the locale (e.g., ",e.jsx(n.code,{children:"'Mon'"}),", ",e.jsx(n.code,{children:"'Sun'"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"names--regions",children:"Names & Regions"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsxs(n.p,{children:["Provides localized translations for languages, regions, and scripts using the ",e.jsx(n.code,{children:"Intl.DisplayNames"})," engine."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — The identifier code (e.g., ",e.jsx(n.code,{children:"'fr'"}),", ",e.jsx(n.code,{children:"'US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?"})," — A string representing the display type (",e.jsx(n.code,{children:"'language'"}),", ",e.jsx(n.code,{children:"'region'"}),", ",e.jsx(n.code,{children:"'script'"}),") or a full ",e.jsx(n.code,{children:"Intl.DisplayNamesOptions"})," object."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The localized display name."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.display('fr', 'language') // 'French'
intl.display('DE', 'region')   // 'Germany'
`})}),`
`,e.jsxs(n.h3,{id:"languagename--countryname",children:[e.jsx(n.code,{children:"languageName"})," / ",e.jsx(n.code,{children:"countryName"})]}),`
`,e.jsx(n.p,{children:"Shorthand methods for retrieving localized names for languages and countries."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — Language or country code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — Formatting style: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", or ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"fullname",children:e.jsx(n.code,{children:"fullName"})}),`
`,e.jsxs(n.p,{children:["Formats a person's full name according to the cultural conventions of the current locale. The component order (First-Middle-Last or Last-First-Middle) is determined by the ",e.jsx(n.code,{children:"nameFormat"})," within the geographic data."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"last: string"})," — Last name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first: string"})," — First name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"surname?: string"})," — Middle name or patronymic (optional)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"short?: boolean"})," — If ",e.jsx(n.code,{children:"true"}),", abbreviates names after the first to initials (e.g., ",e.jsx(n.code,{children:"Smith J. D."}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h2,{id:"numeric-formatting",children:"Numeric Formatting"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsxs(n.p,{children:["Formats a number using the ",e.jsx(n.code,{children:"Intl.NumberFormat"})," capabilities."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — The numeric value to format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — Configuration for decimal places, grouping, etc."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Specialized monetary formatter with automatic symbol placement."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — Amount. Also parses strings with currency suffixes (e.g., ",e.jsx(n.code,{children:"'100 USD'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — Currency code (",e.jsx(n.code,{children:"'USD'"}),") or detailed formatting options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — If ",e.jsx(n.code,{children:"true"}),", returns only the formatted digits without the currency symbol."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.currency(1500, 'USD') // '$1,500.00'
intl.currency('1500 EUR')  // '€1,500.00'
`})}),`
`,e.jsxs(n.h3,{id:"unit--sizefile",children:[e.jsx(n.code,{children:"unit"})," / ",e.jsx(n.code,{children:"sizeFile"})]}),`
`,e.jsxs(n.p,{children:["Formats numbers with units of measurement. ",e.jsx(n.code,{children:"sizeFile"})," provides recursive scaling for byte values (automatically switching to KB, MB, GB)."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Parameters (",e.jsx(n.code,{children:"sizeFile"}),"):"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — Size in bytes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?"})," — Starting unit (defaults to ",e.jsx(n.code,{children:"'byte'"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"plural",children:e.jsx(n.code,{children:"plural"})}),`
`,e.jsx(n.p,{children:"Applies locale-sensitive pluralization rules."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — The count."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"words: string"})," — Pipe-separated forms: ",e.jsx(n.code,{children:"one|two|few|many|other|zero"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?"})," — ",e.jsx(n.code,{children:"Intl.PluralRulesOptions"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — Formatted number followed by the correct word form."]}),`
`,e.jsx(n.h2,{id:"dates--time",children:"Dates & Time"}),`
`,e.jsxs(n.h3,{id:"date--time",children:[e.jsx(n.code,{children:"date"})," / ",e.jsx(n.code,{children:"time"})]}),`
`,e.jsxs(n.p,{children:["Main date formatting engine providing localized representations based on predefined ",e.jsx(n.code,{children:"GeoDate"})," presets."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — The date input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — Preset identifier: ",e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'full'"}),", etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — Custom ",e.jsx(n.code,{children:"Intl.DateTimeFormatOptions"})," or a month style string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — Forces 24-hour time representation."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.h3,{id:"months--weekdays",children:[e.jsx(n.code,{children:"months"})," / ",e.jsx(n.code,{children:"weekdays"})]}),`
`,e.jsx(n.p,{children:"Returns arrays of localized labels for months or days, ideal for populating UI selection components."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ItemValue<number>[]"})," — Array of objects with ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"value"})," fields."]}),`
`,e.jsx(n.h2,{id:"relative-time",children:"Relative Time"}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsx(n.p,{children:"Calculates and formats the relative time difference from a reference point (now), automatically selecting the most appropriate time unit."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — The past or future date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — Formatting style (e.g., ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — Explicit reference point (defaults to ",e.jsx(n.code,{children:"new Date()"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," (e.g., ",e.jsx(n.code,{children:"'2 hours ago'"}),", ",e.jsx(n.code,{children:"'in 3 days'"}),")"]}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsxs(n.p,{children:["Conditional formatter that bridge relative and absolute time. If the date is within a certain ",e.jsx(n.code,{children:"limit"})," of days, it returns relative time; otherwise, it switches to a standard absolute date format."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsx(n.h3,{id:"sort",children:e.jsx(n.code,{children:"sort"})}),`
`,e.jsxs(n.p,{children:["Sorts an array of elements using locale-sensitive comparison via ",e.jsx(n.code,{children:"Intl.Collator"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T[]"})," — The target array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compareFn?"})," — An optional transformation function to extract sort keys from complex objects."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T[]"})," — The sorted array."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.sort(['banana', 'apple', 'cherry'])
// ['apple', 'banana', 'cherry']
`})})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
