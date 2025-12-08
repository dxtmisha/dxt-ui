import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as t}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/functional/en/Classes/GeoIntl"}),`
`,n.jsx(e.h1,{id:"geointl-class",children:"GeoIntl Class"}),`
`,n.jsx(e.p,{children:"Class for working with internationalization based on browser Intl API. Provides methods for localized formatting of numbers, dates, currencies, measurement units and other data considering geographic locale."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Localized number formatting"})," — displays numbers according to regional standards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Currency handling"})," — formats monetary amounts with currency symbols"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Date and time formatting"})," — various date display formats"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Relative time"}),' — displays time in "2 days ago", "in 1 hour" format']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Measurement units"})," — formatting with units (km, kg, °C etc.)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"File sizes"})," — automatic conversion of bytes to appropriate units"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Plural forms"})," — correct endings for different languages"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Sorting"})," — string sorting considering language features"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton pattern"})," — instance caching for each locale"]}),`
`]}),`
`,n.jsx(e.h2,{id:"instance-creation",children:"Instance Creation"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Creates GeoIntl instance for specified locale. Uses singleton pattern."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — locale code (optional)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional'

// Create with auto-detected locale from Geo
const intl = new GeoIntl()

// Create for specific locale
const intlRU = new GeoIntl('ru-RU')
const intlUS = new GeoIntl('en-US')

// Repeated creation returns same instance
const sameIntl = new GeoIntl('ru-RU') // same object as intlRU
`})}),`
`,n.jsx(e.h3,{id:"static-getinstance",children:n.jsx(e.code,{children:"static getInstance"})}),`
`,n.jsx(e.p,{children:"Static method to get instance (alias for constructor)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — locale code (optional)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = GeoIntl.getInstance('en-US')
`})}),`
`,n.jsx(e.h2,{id:"locale-information",children:"Locale Information"}),`
`,n.jsx(e.h3,{id:"getlocation",children:n.jsx(e.code,{children:"getLocation"})}),`
`,n.jsx(e.p,{children:"Returns locale code in language-country format."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — locale code in standard format"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')
intl.getLocation() // 'en-US'
`})}),`
`,n.jsx(e.h3,{id:"getfirstday",children:n.jsx(e.code,{children:"getFirstDay"})}),`
`,n.jsx(e.p,{children:"Returns first day of week for current locale."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — first day code ('Su' for Sunday, 'Mo' for Monday)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')
intl.getFirstDay() // 'Su' (Sunday)

const intlRU = new GeoIntl('ru-RU')
intlRU.getFirstDay() // 'Mo' (Monday)
`})}),`
`,n.jsx(e.h2,{id:"display-names",children:"Display Names"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsx(e.p,{children:"Returns localized names of languages, countries and other elements."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — code to display (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?: string | Intl.DisplayNamesOptions"})," — type or options object"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — localized name"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')

// Language names
intl.display('ru', 'language') // 'Russian'
intl.display('fr', 'language') // 'French'

// Country names
intl.display('RU', 'region') // 'Russia'
intl.display('DE', 'region') // 'Germany'

// With options object
intl.display('ru', { type: 'language', style: 'short' })
`})}),`
`,n.jsx(e.h3,{id:"languagename",children:n.jsx(e.code,{children:"languageName"})}),`
`,n.jsx(e.p,{children:"Returns language name for specified code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — language code (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — display style (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — language name"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.languageName('ru') // 'Russian'
intl.languageName('de') // 'German'
intl.languageName('en') // 'English'
`})}),`
`,n.jsx(e.h3,{id:"countryname",children:n.jsx(e.code,{children:"countryName"})}),`
`,n.jsx(e.p,{children:"Returns country name for specified code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — country code (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — display style (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — country name"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.countryName('RU') // 'Russia'
intl.countryName('GB') // 'United Kingdom'
intl.countryName('DE') // 'Germany'
`})}),`
`,n.jsx(e.h2,{id:"name-formatting",children:"Name Formatting"}),`
`,n.jsx(e.h3,{id:"fullname",children:n.jsx(e.code,{children:"fullName"})}),`
`,n.jsx(e.p,{children:"Formats full name according to regional cultural features."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"last: string"})," — last name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first: string"})," — first name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"surname?: string"})," — middle name (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"short?: boolean"})," — shortened format (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted full name"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')

// Full names
intl.fullName('Smith', 'John', 'William') // 'John William Smith' (fsl format)
intl.fullName('Doe', 'Jane') // 'Jane Doe'

// Shortened names
intl.fullName('Smith', 'John', 'William', true) // 'J. W. Smith'

// For other locales format may differ
const intlRU = new GeoIntl('ru-RU')
intlRU.fullName('Иванов', 'Иван') // 'Иван Иванов' (fl format)
`})}),`
`,n.jsx(e.h2,{id:"number-formatting",children:"Number Formatting"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsx(e.p,{children:"Formats numbers according to local standards."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — number to format"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted number"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')

intl.number(1234.56) // '1,234.56'
intl.number(1000000) // '1,000,000'
intl.number(0.123, { minimumFractionDigits: 3 }) // '0.123'

const intlRU = new GeoIntl('ru-RU')
intlRU.number(1234.56) // '1 234,56'
`})}),`
`,n.jsx(e.h3,{id:"decimal",children:n.jsx(e.code,{children:"decimal"})}),`
`,n.jsx(e.p,{children:"Returns decimal point symbol for current locale."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — decimal separator symbol"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')
intl.decimal() // '.'

const intlRU = new GeoIntl('ru-RU')
intlRU.decimal() // ','
`})}),`
`,n.jsx(e.h2,{id:"currency-handling",children:"Currency Handling"}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Formats currency amounts. Supports automatic currency code extraction from string."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — amount to format"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — currency code or formatting options (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — show only number without currency symbol (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted currency amount"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')

// Simple formatting
intl.currency(1234.56, 'USD') // '$1,234.56'
intl.currency(1000, 'EUR') // '€1,000.00'

// Automatic currency extraction from string
intl.currency('1234.56 USD') // '$1,234.56'

// Number only without currency symbol
intl.currency(1234.56, 'USD', true) // '1,234.56'

// With additional options
intl.currency(1234.56, {
  currency: 'EUR',
  currencyDisplay: 'code'
}) // '1,234.56 EUR'
`})}),`
`,n.jsx(e.h3,{id:"currencysymbol",children:n.jsx(e.code,{children:"currencySymbol"})}),`
`,n.jsx(e.p,{children:"Returns currency symbol for current locale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currency: string"})," — currency code"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry"})," — currency display type (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — currency symbol or code"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.currencySymbol('USD') // '$'
intl.currencySymbol('EUR') // '€'
intl.currencySymbol('EUR', 'code') // 'EUR'
`})}),`
`,n.jsx(e.h2,{id:"units-of-measurement",children:"Units of Measurement"}),`
`,n.jsx(e.h3,{id:"unit",children:n.jsx(e.code,{children:"unit"})}),`
`,n.jsx(e.p,{children:"Formats numbers with units of measurement. Supports automatic unit extraction from string."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — value to format"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — unit of measurement or formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted value with unit"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')

intl.unit(25, 'celsius') // '25°C'
intl.unit(100, 'kilometer') // '100 km'
intl.unit(2.5, 'kilogram') // '2.5 kg'

// Automatic unit extraction
intl.unit('100 meter') // '100 m'
intl.unit('25 celsius') // '25°C'
`})}),`
`,n.jsx(e.h3,{id:"sizefile",children:n.jsx(e.code,{children:"sizeFile"})}),`
`,n.jsx(e.p,{children:"Formats file sizes with automatic selection of appropriate units."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — size in bytes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions"})," — unit of measurement or formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted file size"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.sizeFile(1024) // '1 kB' (automatically converts to kilobytes)
intl.sizeFile(1048576) // '1 MB' (automatically to megabytes)
intl.sizeFile(500, 'byte') // '500 B'
intl.sizeFile(1500, 'kilobyte') // '1.46 MB' (automatic conversion)
`})}),`
`,n.jsx(e.h2,{id:"percentages",children:"Percentages"}),`
`,n.jsx(e.h3,{id:"percent",children:n.jsx(e.code,{children:"percent"})}),`
`,n.jsx(e.p,{children:"Formats percentages (value from 0 to 1)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — value from 0 to 1"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted percentage"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.percent(0.1234) // '12.34%'
intl.percent(0.5) // '50%'
intl.percent(1.25) // '125%'
`})}),`
`,n.jsx(e.h3,{id:"percentby100",children:n.jsx(e.code,{children:"percentBy100"})}),`
`,n.jsx(e.p,{children:"Formats percentages for values from 0 to 100."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — value from 0 to 100"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted percentage"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.percentBy100(12.34) // '12.34%'
intl.percentBy100(50) // '50%'
intl.percentBy100(125) // '125%'
`})}),`
`,n.jsx(e.h2,{id:"plural-forms",children:"Plural Forms"}),`
`,n.jsx(e.h3,{id:"plural",children:n.jsx(e.code,{children:"plural"})}),`
`,n.jsx(e.p,{children:"Applies plural rules for different languages."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — number to determine form for"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — word variants in format ",n.jsx(e.code,{children:"one|two|few|many|other|zero"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.PluralRulesOptions"})," — plural rules options (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — number formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Word format:"})," ",n.jsx(e.code,{children:"one|two|few|many|other|zero"})," (order matters!)"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted number with appropriate plural form"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')

// English plural forms
intl.plural(1, 'item|items') // '1 item'
intl.plural(5, 'item|items') // '5 items'

// Full format with zero
intl.plural(0, 'day|days|days|days|days|no days') // '0 no days'

const intlRU = new GeoIntl('ru-RU')
intlRU.plural(1, 'товар|товара|товаров') // '1 товар'
intlRU.plural(5, 'товар|товара|товаров') // '5 товаров'
`})}),`
`,n.jsx(e.h2,{id:"date-and-time",children:"Date and Time"}),`
`,n.jsx(e.h3,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsx(e.p,{children:"Formats date and time according to type and style."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — date to format"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — date formatting type (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: string | Intl.DateTimeFormatOptions"})," — style or formatting options (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — use 24-hour format (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Date types:"})," ",n.jsx(e.code,{children:"'full'"}),", ",n.jsx(e.code,{children:"'datetime'"}),", ",n.jsx(e.code,{children:"'date'"}),", ",n.jsx(e.code,{children:"'time'"}),", ",n.jsx(e.code,{children:"'year-month'"}),", ",n.jsx(e.code,{children:"'year'"}),", ",n.jsx(e.code,{children:"'month'"}),", ",n.jsx(e.code,{children:"'day-month'"}),", ",n.jsx(e.code,{children:"'day'"}),", ",n.jsx(e.code,{children:"'hour-minute'"}),", ",n.jsx(e.code,{children:"'hour'"}),", ",n.jsx(e.code,{children:"'minute'"}),", ",n.jsx(e.code,{children:"'second'"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted date or time"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('en-US')
const date = new Date('2024-03-15T14:30:45')

intl.date(date) // '3/15/2024' (default)
intl.date(date, 'full') // '3/15/2024, 2:30:45 PM'
intl.date(date, 'time') // '2:30:45 PM'
intl.date(date, 'year-month') // 'Mar 2024'
intl.date(date, 'day-month') // 'Mar 15'

// With 24-hour format
intl.date(date, 'time', undefined, true) // '14:30:45'

// With custom options
intl.date(date, 'date', { weekday: 'long' }) // 'Friday, 3/15/2024'
`})}),`
`,n.jsx(e.h3,{id:"month",children:n.jsx(e.code,{children:"month"})}),`
`,n.jsx(e.p,{children:"Returns month name."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: NumberOrStringOrDate"})," — date (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — display style (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — month name"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.month(new Date('2024-03-15')) // 'March'
intl.month(new Date('2024-03-15'), 'short') // 'Mar'
intl.month(new Date('2024-03-15'), 'narrow') // 'M'
`})}),`
`,n.jsx(e.h3,{id:"months",children:n.jsx(e.code,{children:"months"})}),`
`,n.jsx(e.p,{children:"Returns list of all months in format for dropdown lists."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — display style (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"{ label: string, value: number }[]"})," — array of objects with month labels and values"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const monthsList = intl.months()
// [
//   { label: '', value: undefined },
//   { label: 'January', value: 1 },
//   { label: 'February', value: 2 },
//   ...
//   { label: 'December', value: 12 }
// ]

const monthsShort = intl.months('short')
// [{ label: '', value: undefined }, { label: 'Jan', value: 1 }, ...]
`})}),`
`,n.jsx(e.h3,{id:"weekday",children:n.jsx(e.code,{children:"weekday"})}),`
`,n.jsx(e.p,{children:"Returns weekday name."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: NumberOrStringOrDate"})," — date (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — display style (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — weekday name"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.weekday(new Date('2024-03-15')) // 'Friday'
intl.weekday(new Date('2024-03-15'), 'short') // 'Fri'
intl.weekday(new Date('2024-03-15'), 'narrow') // 'F'
`})}),`
`,n.jsx(e.h3,{id:"weekdays",children:n.jsx(e.code,{children:"weekdays"})}),`
`,n.jsx(e.p,{children:"Returns list of weekdays considering first day of week for locale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — display style (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"{ label: string, value: number }[]"})," — array of objects with weekday labels and values"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const weekdaysList = intl.weekdays()
// For en-US (first day — Sunday):
// [
//   { label: '', value: undefined },
//   { label: 'Sunday', value: 0 },
//   { label: 'Monday', value: 1 },
//   ...
//   { label: 'Saturday', value: 6 }
// ]
`})}),`
`,n.jsx(e.h3,{id:"time",children:n.jsx(e.code,{children:"time"})}),`
`,n.jsx(e.p,{children:"Formats time only."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — date/time to format"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted time"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.time(new Date('2024-03-15T14:30:45')) // '2:30:45 PM'
`})}),`
`,n.jsx(e.h2,{id:"relative-time",children:"Relative Time"}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsx(e.p,{children:"Automatically calculates and formats relative time."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — date to compare"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: string | Intl.RelativeTimeFormatOptions"})," — style or formatting options (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — base date for comparison (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted relative time"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const now = new Date()
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)

intl.relative(yesterday) // 'yesterday'
intl.relative(tomorrow) // 'tomorrow'
intl.relative(new Date(now.getTime() - 2 * 60 * 60 * 1000)) // '2 hours ago'

// With style options
intl.relative(yesterday, 'short') // 'yesterday'
intl.relative(yesterday, { numeric: 'always' }) // '1 day ago'
`})}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsx(e.p,{children:"Formats relative time with limit. If difference exceeds limit days, shows regular date."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — date to compare"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit: number"})," — day limit for relative time"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — base date for comparison (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"relativeOptions?: string | Intl.RelativeTimeFormatOptions"})," — relative time options (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dateOptions?: string | Intl.DateTimeFormatOptions"})," — regular date options (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — date formatting type (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — use 24-hour format (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted relative time or date"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

// 10 day limit
intl.relativeLimit(weekAgo, 10) // 'last week'
intl.relativeLimit(monthAgo, 10) // '2/15/2024' (regular date)
`})}),`
`,n.jsx(e.h3,{id:"relativebyvalue",children:n.jsx(e.code,{children:"relativeByValue"})}),`
`,n.jsx(e.p,{children:"Formats relative time for specified value and unit."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — value (number of units)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — time unit (",n.jsx(e.code,{children:"'day'"}),", ",n.jsx(e.code,{children:"'hour'"}),", ",n.jsx(e.code,{children:"'month'"}),", etc.)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: string | Intl.RelativeTimeFormatOptions"})," — style or formatting options (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — formatted relative time"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.relativeByValue(-2, 'day') // '2 days ago'
intl.relativeByValue(3, 'hour') // 'in 3 hours'
intl.relativeByValue(-1, 'month') // 'last month'
`})}),`
`,n.jsx(e.h2,{id:"sorting",children:"Sorting"}),`
`,n.jsx(e.h3,{id:"sort",children:n.jsx(e.code,{children:"sort"})}),`
`,n.jsx(e.p,{children:"Sorts array considering locale language features."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T[]"})," — array to sort"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compareFn?: (a: T, b: T) => [string, string]"})," — comparison function (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"T[]"})," — sorted array"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const names = ['Zoe', 'Anna', 'Bob', 'Charlie']
intl.sort(names) // ['Anna', 'Bob', 'Charlie', 'Zoe'] (correct order for English)

// With custom comparison function
const users = [{ name: 'Zoe' }, { name: 'Anna' }]
intl.sort(users, (a, b) => [a.name, b.name])
`})}),`
`,n.jsx(e.h2,{id:"practical-usage-examples",children:"Practical Usage Examples"}),`
`,n.jsx(e.h3,{id:"calendar-component",children:"Calendar Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class Calendar {
  constructor(locale = 'en-US') {
    this.intl = new GeoIntl(locale)
  }

  getCalendarData() {
    return {
      months: this.intl.months('long'), // for dropdown
      weekdays: this.intl.weekdays('short'), // for day headers
      firstDay: this.intl.getFirstDay() // for week start
    }
  }

  formatDate(date) {
    return this.intl.date(date, 'date', { weekday: 'long' })
  }
}
`})}),`
`,n.jsx(e.h3,{id:"financial-application",children:"Financial Application"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class FinanceFormatter {
  constructor(locale) {
    this.intl = new GeoIntl(locale)
  }

  formatBalance(amount, currency) {
    return this.intl.currency(amount, currency)
  }

  formatChange(change, currency) {
    const formatted = this.intl.currency(Math.abs(change), currency, true)
    return change >= 0 ? \`+\${formatted}\` : \`-\${formatted}\`
  }

  formatPercent(value) {
    return this.intl.percentBy100(value)
  }
}

const finance = new FinanceFormatter('en-US')
finance.formatBalance(1234567.89, 'USD') // '$1,234,567.89'
finance.formatChange(-123.45, 'USD') // '-123.45'
finance.formatPercent(12.34) // '12.34%'
`})}),`
`,n.jsx(e.h3,{id:"notification-system",children:"Notification System"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class NotificationSystem {
  constructor(locale) {
    this.intl = new GeoIntl(locale)
  }

  formatNotificationTime(date) {
    return this.intl.relativeLimit(date, 7) // show relative time for last week
  }

  formatFileSize(bytes) {
    return this.intl.sizeFile(bytes)
  }

  formatItemCount(count, itemType) {
    const words = {
      message: 'message|messages',
      file: 'file|files',
      user: 'user|users'
    }

    return this.intl.plural(count, words[itemType] || 'item|items')
  }
}

const notifications = new NotificationSystem('en-US')
notifications.formatNotificationTime(yesterday) // 'yesterday'
notifications.formatFileSize(1048576) // '1 MB'
notifications.formatItemCount(5, 'message') // '5 messages'
`})}),`
`,n.jsx(e.h2,{id:"system-integration",children:"System Integration"}),`
`,n.jsx(e.p,{children:"The GeoIntl class integrates with:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Geo"})," — automatic retrieval of current locale and geographic settings"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Browser Intl API"})," — using native capabilities for formatting"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton pattern"})," — instance caching for performance optimization"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vue components"})," — providing localized data for interface"]}),`
`]}),`
`,n.jsx(e.p,{children:"This makes it the main tool for creating localized interfaces with proper display of all data types according to cultural and linguistic features of the region."})]})}function j(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
