import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as i}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Composables/useGeoIntlRef"}),`
`,e.jsx(n.h1,{id:"composable-usegeointlref",children:"Composable useGeoIntlRef"}),`
`,e.jsx(n.p,{children:"Composable for creating a reactive internationalization object. Provides methods for formatting numbers, currencies, dates and names with automatic locale detection. All methods return computed values that automatically update when input data changes."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Number formatting"})," — localized number representation with separators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Currency formatting"})," — displaying monetary amounts with currency symbols"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date formatting"})," — various date and time formats by regional standards"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Country and language names"})," — localized region names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Relative time"}),' — "2 days ago", "in 5 minutes", etc.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Percentages and units"})," — formatting percentages and measurement units"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactivity"})," — all methods return computed that update automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto locale detection"})," — uses user geolocation by default"]}),`
`]}),`
`,e.jsx(n.h2,{id:"function",children:"Function"}),`
`,e.jsx(n.h3,{id:"usegeointlref",children:e.jsx(n.code,{children:"useGeoIntlRef()"})}),`
`,e.jsxs(n.p,{children:["Creates and returns instance of ",e.jsx(n.code,{children:"GeoIntlRef"})," class for working with data formatting."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"GeoIntlRef"})," — object with formatting methods"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useGeoIntlRef } from '@dxtmisha/functional'

// Create instance
const intl = useGeoIntlRef()

// All methods return ComputedRef
const formatted = intl.number(1234.56)
`})}),`
`,e.jsx(n.h2,{id:"number-formatting-methods",children:"Number Formatting Methods"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.p,{children:"Format number according to locale."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = useGeoIntlRef()
const count = ref(1234567.89)

intl.number(count) // ComputedRef<'1,234,567.89'>
intl.number(1000, { minimumFractionDigits: 2 }) // ComputedRef<'1,000.00'>
`})}),`
`,e.jsx(n.h3,{id:"decimal",children:e.jsx(n.code,{children:"decimal"})}),`
`,e.jsx(n.p,{children:"Returns decimal separator symbol for current locale."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = useGeoIntlRef()
intl.decimal() // ComputedRef<'.'>  (for en-US)
               // ComputedRef<','>  (for ru-RU)
`})}),`
`,e.jsx(n.h3,{id:"percent",children:e.jsx(n.code,{children:"percent"})}),`
`,e.jsx(n.p,{children:"Format number as percentage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format (0.15 = 15%)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percent(0.15)  // ComputedRef<'15%'>
intl.percent(1.25)  // ComputedRef<'125%'>
`})}),`
`,e.jsx(n.h3,{id:"percentby100",children:e.jsx(n.code,{children:"percentBy100"})}),`
`,e.jsx(n.p,{children:"Format number as percentage (value already in percents)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format (15 = 15%)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percentBy100(15)   // ComputedRef<'15%'>
intl.percentBy100(125)  // ComputedRef<'125%'>
`})}),`
`,e.jsx(n.h2,{id:"currency-formatting-methods",children:"Currency Formatting Methods"}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Format monetary amount."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — amount to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — currency code or options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — don't show currency symbol (default ",e.jsx(n.code,{children:"false"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = useGeoIntlRef()
const price = ref(99.99)

intl.currency(price, 'USD')           // ComputedRef<'$99.99'>
intl.currency(1234.56, 'RUB')         // ComputedRef<'RUB 1,234.56'>
intl.currency(500, 'EUR', true)       // ComputedRef<'500.00'> (no symbol)
`})}),`
`,e.jsx(n.h3,{id:"unit",children:e.jsx(n.code,{children:"unit"})}),`
`,e.jsx(n.p,{children:"Format with measurement units."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — value to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — unit or options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.unit(100, 'kilometer')  // ComputedRef<'100 km'>
intl.unit(50, 'kilogram')    // ComputedRef<'50 kg'>
intl.unit(1.5, 'hour')       // ComputedRef<'1.5 hr'>
`})}),`
`,e.jsx(n.h2,{id:"date-formatting-methods",children:"Date Formatting Methods"}),`
`,e.jsx(n.h3,{id:"date",children:e.jsx(n.code,{children:"date"})}),`
`,e.jsx(n.p,{children:"Format date and time."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — format type ('date' | 'time' | 'datetime' | 'full' | 'long' | 'medium' | 'short')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — style or options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — use 24-hour format"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const date = ref(new Date('2024-10-15 14:30:00'))

intl.date(date)               // ComputedRef<'10/15/2024'>
intl.date(date, 'time')       // ComputedRef<'2:30 PM'>
intl.date(date, 'datetime')   // ComputedRef<'10/15/2024, 2:30 PM'>
intl.date(date, 'full')       // ComputedRef<'Tuesday, October 15, 2024'>
`})}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsx(n.p,{children:'Format relative time ("2 days ago", "in 1 hour").'}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — date to compare"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — style ('long' | 'short' | 'narrow')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — current date (default ",e.jsx(n.code,{children:"new Date()"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const twoDaysAgo = new Date()
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

intl.relative(twoDaysAgo)             // ComputedRef<'2 days ago'>
intl.relative(twoDaysAgo, 'short')    // ComputedRef<'2 days ago'>
`})}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsx(n.p,{children:"Format relative time with limit. If difference exceeds limit, outputs absolute date."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit: number"})," — limit in days"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — current date"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — relative format options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — date format options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — date format type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — 24-hour format"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const threeDaysAgo = new Date()
threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

intl.relativeLimit(threeDaysAgo, 7)   // ComputedRef<'3 days ago'>

const tenDaysAgo = new Date()
tenDaysAgo.setDate(tenDaysAgo.getDate() - 10)

intl.relativeLimit(tenDaysAgo, 7)     // ComputedRef<'10/05/2024'> (absolute date)
`})}),`
`,e.jsx(n.h2,{id:"name-methods",children:"Name Methods"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsx(n.p,{children:"Get localized name (language, region, script, etc.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — code to get name for"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — type ('language' | 'region' | 'script' | 'currency')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.display('US', 'region')    // ComputedRef<'United States'>
intl.display('en', 'language')  // ComputedRef<'English'>
intl.display('USD', 'currency') // ComputedRef<'US Dollar'>
`})}),`
`,e.jsx(n.h3,{id:"languagename",children:e.jsx(n.code,{children:"languageName"})}),`
`,e.jsx(n.p,{children:"Get language name."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — language code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — display style"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.languageName('en')  // ComputedRef<'English'>
intl.languageName('de')  // ComputedRef<'German'>
`})}),`
`,e.jsx(n.h3,{id:"countryname",children:e.jsx(n.code,{children:"countryName"})}),`
`,e.jsx(n.p,{children:"Get country name."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — country code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — display style"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.countryName('US')  // ComputedRef<'United States'>
intl.countryName('GB')  // ComputedRef<'United Kingdom'>
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'
import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()
const price = ref(1234.56)

// All methods return ComputedRef
const formatted = intl.currency(price, 'USD')
console.log(formatted.value) // '$1,234.56'

// Automatic update on change
price.value = 2000
console.log(formatted.value) // '$2,000.00'
`})}),`
`,e.jsx(n.h3,{id:"reactive-parameters",children:"Reactive Parameters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const price = ref(100)
const currency = ref('USD')

// Reactive currency and value
const formatted = intl.currency(price, currency)

currency.value = 'EUR'
// formatted.value automatically updates
`})})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{m as default};
