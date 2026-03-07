import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Classes/GeoIntl - Internationalization (Intl)"}),`
`,e.jsx(n.h1,{id:"geointl-class",children:"GeoIntl Class"}),`
`,e.jsxs(n.p,{children:["A powerful wrapper over the native browser ",e.jsx(n.code,{children:"Intl"})," API, adapted to ",e.jsx(n.code,{children:"Geo"})," geolocation capabilities. Provides locale-aware formatting of numbers, currencies, units, dates, times, names, and string sorting — with automatic locale detection."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Instance Cache"})," — only one instance is created per locale (per-locale Singleton pattern)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Interface"})," — all formatting through one class instead of direct ",e.jsx(n.code,{children:"new Intl.*"})," calls."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Formatting"})," — flexible system with preset types (",e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'full'"}),", etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Relative Time"})," — ",e.jsx(n.code,{children:"relative"}),", ",e.jsx(n.code,{children:"relativeByValue"}),", and ",e.jsx(n.code,{children:"relativeLimit"})," for humanized date display."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Names & Regions"})," — culturally-aware full name formatting (",e.jsx(n.code,{children:"fullName"}),") and localized language/country names."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: string"})," — locale code (e.g. ",e.jsx(n.code,{children:"'en-US'"}),", ",e.jsx(n.code,{children:"'fr-FR'"}),"). Defaults to the current ",e.jsx(n.code,{children:"Geo"})," locale."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = new GeoIntl()           // current locale
const intl2 = new GeoIntl('fr-FR')   // French locale
const intl3 = GeoIntl.getInstance('de-DE') // via factory method
`})}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsx(n.h3,{id:"getlocation",children:e.jsx(n.code,{children:"getLocation"})}),`
`,e.jsxs(n.p,{children:["Returns the standard locale string (e.g. ",e.jsx(n.code,{children:"'en-US'"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.getLocation() // 'en-US'
`})}),`
`,e.jsx(n.h3,{id:"getfirstday",children:e.jsx(n.code,{children:"getFirstDay"})}),`
`,e.jsxs(n.p,{children:["Returns the first day of the week for the locale (",e.jsx(n.code,{children:"'Mon'"}),", ",e.jsx(n.code,{children:"'Sun'"}),", etc.) — useful for building calendars."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`new GeoIntl('en-US').getFirstDay() // 'Sun'
new GeoIntl('de-DE').getFirstDay() // 'Mon'
`})}),`
`,e.jsx(n.h2,{id:"names--regions",children:"Names & Regions"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsxs(n.p,{children:["Formats a display name for a language, region, or script using ",e.jsx(n.code,{children:"Intl.DisplayNames"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — language, country, or script code (e.g. ",e.jsx(n.code,{children:"'en'"}),", ",e.jsx(n.code,{children:"'US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?"})," — display type: ",e.jsx(n.code,{children:"'language'"}),", ",e.jsx(n.code,{children:"'region'"}),", ",e.jsx(n.code,{children:"'script'"}),", or ",e.jsx(n.code,{children:"Intl.DisplayNamesOptions"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.display('fr', 'language') // 'French'
intl.display('DE', 'region')   // 'Germany'
intl.display()                 // name of the current language
`})}),`
`,e.jsx(n.h3,{id:"languagename",children:e.jsx(n.code,{children:"languageName"})}),`
`,e.jsx(n.p,{children:"Returns the localized name of a language."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — language or country code. Defaults to the current locale."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — formatting style: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.languageName('fr')          // 'French'
intl.languageName('de', 'long')  // 'German'
`})}),`
`,e.jsx(n.h3,{id:"countryname",children:e.jsx(n.code,{children:"countryName"})}),`
`,e.jsx(n.p,{children:"Returns the localized name of a country."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — country code (ISO 3166, e.g. ",e.jsx(n.code,{children:"'DE'"}),", ",e.jsx(n.code,{children:"'US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — formatting style: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.countryName('DE')   // 'Germany'
intl.countryName('FR')   // 'France'
`})}),`
`,e.jsx(n.h3,{id:"fullname",children:e.jsx(n.code,{children:"fullName"})}),`
`,e.jsxs(n.p,{children:["Formats a full name according to the cultural norms of the locale. The order of the components (first/last) is determined by the ",e.jsx(n.code,{children:"nameFormat"})," field in the locale's geo-data."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"last: string"})," — last name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first: string"})," — first name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"surname?: string"})," — middle name / patronymic (optional)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"short?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", all parts after the first are abbreviated to initials (",e.jsx(n.code,{children:"Smith J. D."}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.fullName('Smith', 'John', 'David')        // 'John David Smith'
intl.fullName('Smith', 'John', 'David', true)  // 'Smith J. D.'
intl.fullName('Smith', 'John')                 // 'John Smith'
`})}),`
`,e.jsx(n.h2,{id:"numbers--currencies",children:"Numbers & Currencies"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsxs(n.p,{children:["Formats a number using the locale via ",e.jsx(n.code,{children:"Intl.NumberFormat"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — number to format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — additional ",e.jsx(n.code,{children:"Intl.NumberFormat"})," options."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.number(1234567.89)                                // '1,234,567.89'
intl.number(0.005, { minimumFractionDigits: 2 })       // '0.01'
`})}),`
`,e.jsx(n.h3,{id:"decimal",children:e.jsx(n.code,{children:"decimal"})}),`
`,e.jsx(n.p,{children:"Returns the decimal separator symbol for the current locale."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`new GeoIntl('en-US').decimal() // '.'
new GeoIntl('ru-RU').decimal() // ','
`})}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Formats a number as a monetary amount in a given currency."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — amount. Also accepts a string with a trailing currency code (",e.jsx(n.code,{children:"'1500 USD'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — currency code (",e.jsx(n.code,{children:"'USD'"}),") or ",e.jsx(n.code,{children:"Intl.NumberFormatOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", outputs only the number without the currency symbol. Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.currency(1500, 'USD')           // '$1,500.00'
intl.currency(1500, 'EUR')           // '€1,500.00'
intl.currency('1500 GBP')            // '£1,500.00'
intl.currency(1500, 'USD', true)     // '1,500.00' (no symbol)
`})}),`
`,e.jsx(n.h3,{id:"currencysymbol",children:e.jsx(n.code,{children:"currencySymbol"})}),`
`,e.jsx(n.p,{children:"Returns the symbol or code for a currency."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currency: string"})," — currency code (ISO 4217, e.g. ",e.jsx(n.code,{children:"'USD'"}),", ",e.jsx(n.code,{children:"'EUR'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyDisplay?"})," — display mode: ",e.jsx(n.code,{children:"'symbol'"})," (default), ",e.jsx(n.code,{children:"'code'"}),", ",e.jsx(n.code,{children:"'name'"}),", ",e.jsx(n.code,{children:"'narrowSymbol'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.currencySymbol('EUR')             // '€'
intl.currencySymbol('USD', 'code')     // 'USD'
intl.currencySymbol('USD', 'name')     // 'US dollar'
`})}),`
`,e.jsx(n.h3,{id:"unit",children:e.jsx(n.code,{children:"unit"})}),`
`,e.jsxs(n.p,{children:["Formats a number with a unit of measurement using ",e.jsx(n.code,{children:"Intl.NumberFormat"})," with ",e.jsx(n.code,{children:"style: 'unit'"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — number. Also accepts a string with a trailing unit abbreviation (",e.jsx(n.code,{children:"'100 km'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — unit name (",e.jsx(n.code,{children:"'kilometer'"}),", ",e.jsx(n.code,{children:"'liter'"}),") or full options."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.unit(100, 'kilometer')   // '100 km'
intl.unit(5, 'liter')         // '5 L'
intl.unit('100 km')           // '100 km'
`})}),`
`,e.jsx(n.h3,{id:"sizefile",children:e.jsx(n.code,{children:"sizeFile"})}),`
`,e.jsx(n.p,{children:"Automatically converts and formats a file size, starting from bytes and recursively scaling the unit when a value exceeds 1024."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — size in bytes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?"})," — starting unit: ",e.jsx(n.code,{children:"'byte'"})," (default), ",e.jsx(n.code,{children:"'kilobyte'"}),", ",e.jsx(n.code,{children:"'megabyte'"}),", ",e.jsx(n.code,{children:"'gigabyte'"}),", ",e.jsx(n.code,{children:"'terabyte'"}),", ",e.jsx(n.code,{children:"'petabyte'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.sizeFile(500)              // '500 bytes'
intl.sizeFile(1536)             // '1.5 kB'
intl.sizeFile(1536 * 1024)      // '1.5 MB'
intl.sizeFile(2 * 1024 ** 3)    // '2 GB'
`})}),`
`,e.jsx(n.h3,{id:"percent",children:e.jsx(n.code,{children:"percent"})}),`
`,e.jsx(n.p,{children:"Formats a number as a percentage. Expects a decimal fraction (0–1)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percent(0.5)    // '50%'
intl.percent(0.007)  // '1%'
`})}),`
`,e.jsx(n.h3,{id:"percentby100",children:e.jsx(n.code,{children:"percentBy100"})}),`
`,e.jsxs(n.p,{children:["Formats a number as a percentage, dividing by 100 first. Useful when the value is already stored as ",e.jsx(n.code,{children:"50"})," instead of ",e.jsx(n.code,{children:"0.5"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percentBy100(50)   // '50%'
intl.percentBy100(7.5)  // '8%'
`})}),`
`,e.jsx(n.h3,{id:"plural",children:e.jsx(n.code,{children:"plural"})}),`
`,e.jsxs(n.p,{children:["Formats a number with locale-aware plural rules using ",e.jsx(n.code,{children:"Intl.PluralRules"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — number."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"words: string"})," — pipe-separated word forms: ",e.jsx(n.code,{children:"one|two|few|many|other"}),". Number of forms depends on the locale."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.PluralRulesOptions"})," — options for ",e.jsx(n.code,{children:"Intl.PluralRules"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — number formatting options."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.plural(1, 'apple|apples')     // '1 apple'
intl.plural(2, 'apple|apples')     // '2 apples'
intl.plural(100, 'apple|apples')   // '100 apples'
`})}),`
`,e.jsx(n.h2,{id:"dates--time",children:"Dates & Time"}),`
`,e.jsx(n.h3,{id:"date",children:e.jsx(n.code,{children:"date"})}),`
`,e.jsxs(n.p,{children:["Formats a date using ",e.jsx(n.code,{children:"toLocaleString"})," with preset format types."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — date (",e.jsx(n.code,{children:"Date"})," object, timestamp, or string)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — preset type: ",e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'full'"}),", ",e.jsx(n.code,{children:"'month'"}),", etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — month style (",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'narrow'"}),") or custom ",e.jsx(n.code,{children:"Intl.DateTimeFormatOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", forces 24-hour time format."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const d = new Date('2024-03-07T08:15:00')
intl.date(d, 'date')      // 'Mar 7, 2024'
intl.date(d, 'time')      // '8:15 AM'
intl.date(d, 'datetime')  // 'Mar 7, 2024, 8:15 AM'
intl.date(d, 'date', 'long')         // 'March 7, 2024'
intl.date(d, 'time', undefined, true) // '08:15' (force 24h)
`})}),`
`,e.jsx(n.h3,{id:"time",children:e.jsx(n.code,{children:"time"})}),`
`,e.jsxs(n.p,{children:["Shorthand wrapper for ",e.jsx(n.code,{children:"date"})," with type ",e.jsx(n.code,{children:"'time'"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.time(new Date()) // '8:15 AM'
`})}),`
`,e.jsx(n.h3,{id:"month",children:e.jsx(n.code,{children:"month"})}),`
`,e.jsx(n.p,{children:"Returns the month name for a given date."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?"})," — date. Defaults to current date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — ",e.jsx(n.code,{children:"'long'"})," (default), ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.month(new Date('2024-03-01'), 'long')   // 'March'
intl.month(new Date('2024-03-01'), 'short')  // 'Mar'
`})}),`
`,e.jsx(n.h3,{id:"months",children:e.jsx(n.code,{children:"months"})}),`
`,e.jsxs(n.p,{children:["Returns an array of all 12 months as ",e.jsx(n.code,{children:"{ label, value }"})," objects — useful for ",e.jsx(n.code,{children:"<select>"})," inputs."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.months('long')
// [{ label: '', value: undefined }, { label: 'January', value: 1 }, ...]
`})}),`
`,e.jsx(n.h3,{id:"weekday",children:e.jsx(n.code,{children:"weekday"})}),`
`,e.jsx(n.p,{children:"Returns the weekday name for a given date."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?"})," — date. Defaults to current date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — ",e.jsx(n.code,{children:"'long'"})," (default), ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.weekday(new Date('2024-03-07'), 'long')   // 'Thursday'
intl.weekday(new Date('2024-03-07'), 'short')  // 'Thu'
`})}),`
`,e.jsx(n.h3,{id:"weekdays",children:e.jsx(n.code,{children:"weekdays"})}),`
`,e.jsxs(n.p,{children:["Returns an array of 7 weekday names as ",e.jsx(n.code,{children:"{ label, value }"})," objects, ordered by the locale's first day of the week."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.weekdays('short')
// [{ label: 'Sun', value: 0 }, { label: 'Mon', value: 1 }, ...]
`})}),`
`,e.jsx(n.h2,{id:"relative-time",children:"Relative Time"}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsxs(n.p,{children:["Formats a date as relative time from now (or from ",e.jsx(n.code,{children:"todayValue"}),"). Automatically selects the best unit (seconds → minutes → hours → days → months → years)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — date to compare."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — style: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),", or ",e.jsx(n.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — reference point. Defaults to ",e.jsx(n.code,{children:"new Date()"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.relative(new Date(Date.now() - 60000))     // '1 minute ago'
intl.relative(new Date(Date.now() - 3600000))   // '1 hour ago'
intl.relative(new Date(Date.now() + 86400000))  // 'in 1 day'
intl.relative(new Date(Date.now() - 60000), 'short') // '1 min. ago'
`})}),`
`,e.jsx(n.h3,{id:"relativebyvalue",children:e.jsx(n.code,{children:"relativeByValue"})}),`
`,e.jsx(n.p,{children:"Formats relative time using an explicit numeric value and time unit."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — number (negative = past, positive = future)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — unit: ",e.jsx(n.code,{children:"'second'"}),", ",e.jsx(n.code,{children:"'minute'"}),", ",e.jsx(n.code,{children:"'hour'"}),", ",e.jsx(n.code,{children:"'day'"}),", ",e.jsx(n.code,{children:"'month'"}),", ",e.jsx(n.code,{children:"'year'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — style or ",e.jsx(n.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.relativeByValue(-5, 'minute')   // '5 minutes ago'
intl.relativeByValue(2, 'day')       // 'in 2 days'
intl.relativeByValue(-1, 'year')     // 'last year'
`})}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsxs(n.p,{children:["If the date is within ",e.jsx(n.code,{children:"limit"})," days of ",e.jsx(n.code,{children:"todayValue"})," — outputs relative time. Otherwise — outputs the absolute date."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit: number"})," — threshold in days (e.g. ",e.jsx(n.code,{children:"7"})," = relative for dates within a week)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — reference point. Defaults to ",e.jsx(n.code,{children:"new Date()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relativeOptions?"})," — options for relative time formatting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateOptions?"})," — options for absolute date formatting (when limit is exceeded)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — format type for the absolute date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — 24-hour format."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Yesterday → relative
intl.relativeLimit(new Date(Date.now() - 86400000), 7)      // 'yesterday'

// 2 weeks ago → absolute date
intl.relativeLimit(new Date(Date.now() - 86400000 * 14), 7) // 'Feb 22, 2025'
`})}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsx(n.h3,{id:"sort",children:e.jsx(n.code,{children:"sort"})}),`
`,e.jsxs(n.p,{children:["Sorts an array of strings according to locale-specific rules using ",e.jsx(n.code,{children:"Intl.Collator"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T[]"})," — array to sort."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compareFn?"})," — comparator function to extract a string from each element (when array is not string-based)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.sort(['banana', 'apple', 'cherry'])
// ['apple', 'banana', 'cherry']

intl.sort([{ name: 'Banana' }, { name: 'Apple' }], item => item.name)
// [{ name: 'Apple' }, { name: 'Banana' }]
`})})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{j as default};
