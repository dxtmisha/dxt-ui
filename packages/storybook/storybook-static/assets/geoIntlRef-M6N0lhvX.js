import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DB_maGql.js";import{M as i}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Classes/Ref/GeoIntlRef"}),`
`,e.jsx(n.h1,{id:"geointlref-class",children:"GeoIntlRef Class"}),`
`,e.jsx(n.p,{children:"Reactive Vue class for managing number, date formatting and localized names. Provides automatic data formatting according to international standards with full integration into Vue's reactive system."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — uses computed properties for reactive formatting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Internationalization"})," — supports all Intl API standards"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Number Formatting"})," — numbers, currencies, percentages, units"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Formatting"})," — dates, time, relative time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Localized Names"})," — countries, languages, months, weekdays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Locale"})," — uses current geolocation or specified locale"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Input"})," — accepts ref or normal values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configurable Options"})," — full support for Intl API options"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a GeoIntlRef instance with reactive parameters."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: RefOrNormal<string>"})," — country code, full form language-country or one of them"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// With automatic locale
const intl = new GeoIntlRef()

// With specific locale
const intlUS = new GeoIntlRef('en-US')

// With reactive locale
const locale = ref('en-US')
const intlReactive = new GeoIntlRef(locale)
`})}),`
`,e.jsx(n.h2,{id:"display-name-methods",children:"Display Name Methods"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsx(n.p,{children:"The consistent translation of language, region and script display names."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — the code to provide depends on the type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — display options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive display name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = new GeoIntlRef('en-US')

// Language name
const langName = intl.display('ru', 'language') // "Russian"

// Country name
const countryName = intl.display('RU', 'region') // "Russia"
`})}),`
`,e.jsx(n.h3,{id:"languagename",children:e.jsx(n.code,{children:"languageName"})}),`
`,e.jsx(n.p,{children:"Get display names of language."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — language code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — formatting style"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive language name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const langName = intl.languageName('ru') // "Russian"
`})}),`
`,e.jsx(n.h3,{id:"countryname",children:e.jsx(n.code,{children:"countryName"})}),`
`,e.jsx(n.p,{children:"Get display names of region."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — country code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — formatting style"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive country name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const countryName = intl.countryName('RU') // "Russia"
`})}),`
`,e.jsx(n.h2,{id:"number-formatting-methods",children:"Number Formatting Methods"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.p,{children:"Number formatting according to locale."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive formatted string"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formatted = intl.number(1234.56) // "1,234.56"
const withDecimals = intl.number(1234.56, { minimumFractionDigits: 2 })
`})}),`
`,e.jsx(n.h3,{id:"decimal",children:e.jsx(n.code,{children:"decimal"})}),`
`,e.jsx(n.p,{children:"Decimal point symbol."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive decimal point symbol"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const decimalSymbol = intl.decimal() // "." for en-US, "," for ru-RU
`})}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Currency formatting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — currency or options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — do not display the currency symbol"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive formatted currency"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const price = intl.currency(1234.56, 'USD') // "$1,234.56"
const priceOnly = intl.currency(1234.56, 'USD', true) // "1,234.56"
`})}),`
`,e.jsx(n.h3,{id:"unit",children:e.jsx(n.code,{children:"unit"})}),`
`,e.jsx(n.p,{children:"Unit formatting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — unit or options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive formatted unit"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const length = intl.unit(5, 'meter') // "5 m"
const weight = intl.unit(2.5, 'kilogram') // "2.5 kg"
`})}),`
`,e.jsx(n.h3,{id:"percent",children:e.jsx(n.code,{children:"percent"})}),`
`,e.jsx(n.p,{children:"Number as a percentage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive percentage"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const percentage = intl.percent(0.75) // "75%"
`})}),`
`,e.jsx(n.h3,{id:"percentby100",children:e.jsx(n.code,{children:"percentBy100"})}),`
`,e.jsx(n.p,{children:"Number as a percentage (unit)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — number to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive percentage"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const percentage = intl.percentBy100(75) // "75%"
`})}),`
`,e.jsx(n.h2,{id:"date-formatting-methods",children:"Date Formatting Methods"}),`
`,e.jsx(n.h3,{id:"date",children:e.jsx(n.code,{children:"date"})}),`
`,e.jsx(n.p,{children:"Language-sensitive date and time formatting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — type of date format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — style options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — whether to use 24-hour time"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive formatted date"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const date = intl.date(new Date()) // "1/15/2024"
const dateTime = intl.date(new Date(), 'datetime') // "1/15/2024, 2:30 PM"
`})}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsx(n.p,{children:"Relative time formatting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — style options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — current day"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive relative time"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
const relative = intl.relative(yesterday) // "yesterday"
`})}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsx(n.p,{children:"Relative time with limit."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit: number"})," — limit in days"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — current day"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — relative time options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — date options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — type of date format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — 24-hour time"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive formatted time"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const limitedRelative = intl.relativeLimit(yesterday, 7) // "yesterday" or full date if > 7 days
`})}),`
`,e.jsx(n.h3,{id:"month",children:e.jsx(n.code,{children:"month"})}),`
`,e.jsx(n.p,{children:"Names of months."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — representation of the month"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive month name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const monthName = intl.month(new Date(), 'long') // "January"
`})}),`
`,e.jsx(n.h3,{id:"months",children:e.jsx(n.code,{children:"months"})}),`
`,e.jsx(n.p,{children:"Array of month names."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — representation of the month"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})," — reactive list of months"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const monthsList = intl.months('long')
// [{ label: "January", value: 0 }, { label: "February", value: 1 }, ...]
`})}),`
`,e.jsx(n.h3,{id:"weekday",children:e.jsx(n.code,{children:"weekday"})}),`
`,e.jsx(n.p,{children:"Names of weekdays."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — date to format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — representation of the weekday"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive weekday name"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dayName = intl.weekday(new Date(), 'long') // "Monday"
`})}),`
`,e.jsx(n.h3,{id:"weekdays",children:e.jsx(n.code,{children:"weekdays"})}),`
`,e.jsx(n.p,{children:"Array of weekday names."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — representation of the weekday"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})," — reactive list of weekdays"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const daysList = intl.weekdays('long')
// [{ label: "Sunday", value: 0 }, { label: "Monday", value: 1 }, ...]
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"vue-component-with-localization",children:"Vue Component with Localization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div class="localized-content">
    <h2>{{ intl.countryName('US') }}</h2>
    <p>Price: {{ intl.currency(1299, 'USD') }}</p>
    <p>Date: {{ intl.date(new Date()) }}</p>
    <p>Updated: {{ intl.relative(lastUpdate) }}</p>
  </div>
</template>

<script setup>
import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = ref('en-US')
const intl = new GeoIntlRef(locale)
const lastUpdate = ref(new Date(Date.now() - 2 * 60 * 60 * 1000)) // 2 hours ago
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"composable-for-internationalization",children:"Composable for Internationalization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function useIntl(locale = 'en-US') {
  const intl = new GeoIntlRef(locale)

  return {
    formatNumber: intl.number,
    formatCurrency: intl.currency,
    formatDate: intl.date,
    formatRelative: intl.relative,
    getCountryName: intl.countryName,
    getMonths: intl.months,
    getWeekdays: intl.weekdays
  }
}
`})}),`
`,e.jsx(n.h3,{id:"dynamic-locale-change",children:"Dynamic Locale Change"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const currentLocale = ref('en-US')
const intl = new GeoIntlRef(currentLocale)

// Changing locale will update all formatting
function changeLocale(newLocale) {
  currentLocale.value = newLocale
}
`})}),`
`,e.jsx(n.p,{children:"The GeoIntlRef class provides a powerful reactive internationalization system for Vue applications with automatic data formatting according to international standards."})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{m as default};
