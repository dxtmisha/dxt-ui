import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as a}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/functional/en/Classes/Ref/DatetimeRef"}),`
`,e.jsx(n.h1,{id:"datetimeref-class",children:"DatetimeRef Class"}),`
`,e.jsx(n.p,{children:"Vue-oriented class for working with dates with reactive computed properties. Provides automatic tracking of date, output format, and locale changes with full integration into Vue's reactive system."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — uses computed properties and ref/watch for reactivity"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Updates"})," — automatically recalculates values when input data changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Input"})," — accepts Date objects, strings, numbers, or reactive refs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Locale Support"})," — automatic formatting based on country and language codes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Formats"})," — supports various date/time output formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Components"})," — reactive computed properties for all date components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timezone Handling"})," — proper timezone support with locale-aware formatting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Watch Integration"})," — automatically tracks changes in all input parameters"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a DatetimeRef instance with reactive parameters."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date: RefOrNormal<NumberOrStringOrDate>"})," — date for processing (ref or normal value)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: RefOrNormal<GeoDate>"})," — type of date format for output (default: 'date')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: RefOrNormal<string>"})," — country and language code (default: current location)"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"GeoDate Types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'full'"})," — full date and time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'datetime'"})," — date with time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'date'"})," — date only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'year-month'"})," — year and month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'year'"})," — year only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'month'"})," — month only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'day'"})," — day only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'day-month'"})," — day and month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'time'"})," — time only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour-minute'"})," — hours and minutes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour'"})," — hours only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'minute'"})," — minutes only"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'second'"})," — seconds only"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// With ref data
const dateRef = ref(new Date())
const formatRef = ref('datetime')
const localeRef = ref('en-US')

const datetime = new DatetimeRef(dateRef, formatRef, localeRef)

// With static data
const staticDatetime = new DatetimeRef('2024-01-15', 'date', 'en-US')
`})}),`
`,e.jsx(n.h2,{id:"reactive-computed-properties",children:"Reactive Computed Properties"}),`
`,e.jsx(n.h3,{id:"getyear",children:e.jsx(n.code,{children:"getYear"})}),`
`,e.jsx(n.p,{children:"Returns the year of the specified date."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive year value"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const yearValue = datetime.getYear()
// Automatically updates when date changes
`})}),`
`,e.jsx(n.h3,{id:"getmonth",children:e.jsx(n.code,{children:"getMonth"})}),`
`,e.jsx(n.p,{children:"Returns the month as a zero-based value (0 = January, 11 = December)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive month value (0-11)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const monthValue = datetime.getMonth()
`})}),`
`,e.jsx(n.h3,{id:"getday",children:e.jsx(n.code,{children:"getDay"})}),`
`,e.jsx(n.p,{children:"Returns the day of the month."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive day value (1-31)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dayValue = datetime.getDay()
`})}),`
`,e.jsx(n.h3,{id:"gethour",children:e.jsx(n.code,{children:"getHour"})}),`
`,e.jsx(n.p,{children:"Returns the hour according to local time."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive hour value (0-23)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hourValue = datetime.getHour()
`})}),`
`,e.jsx(n.h3,{id:"getminute",children:e.jsx(n.code,{children:"getMinute"})}),`
`,e.jsx(n.p,{children:"Returns the minutes according to local time."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive minute value (0-59)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const minuteValue = datetime.getMinute()
`})}),`
`,e.jsx(n.h3,{id:"getsecond",children:e.jsx(n.code,{children:"getSecond"})}),`
`,e.jsx(n.p,{children:"Returns the seconds according to local time."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive second value (0-59)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const secondValue = datetime.getSecond()
`})}),`
`,e.jsx(n.h3,{id:"getmaxday",children:e.jsx(n.code,{children:"getMaxDay"})}),`
`,e.jsx(n.p,{children:"Returns the last day of the month for the current date."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — reactive maximum day in month (28-31)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const maxDayValue = datetime.getMaxDay()
`})}),`
`,e.jsx(n.h3,{id:"gethourstype",children:e.jsx(n.code,{children:"getHoursType"})}),`
`,e.jsx(n.p,{children:"Returns the format of hours (12-hour or 24-hour format)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<GeoHours>"})," — reactive hours format ('12' | '24')"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hoursFormat = datetime.getHoursType()
`})}),`
`,e.jsx(n.h3,{id:"getfirstdaycode",children:e.jsx(n.code,{children:"getFirstDayCode"})}),`
`,e.jsx(n.p,{children:"Returns the code of the first day of the week for the current locale."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<GeoFirstDay>"})," — reactive first day code (0 = Sunday, 1 = Monday, 6 = Saturday)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const firstDayCode = datetime.getFirstDayCode()
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"getitem",children:e.jsx(n.code,{children:"getItem"})}),`
`,e.jsx(n.p,{children:"Returns the original input data for the date."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"RefOrNormal<NumberOrStringOrDate>"})," — original input data"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const originalInput = datetime.getItem()
`})}),`
`,e.jsx(n.h3,{id:"getdate",children:e.jsx(n.code,{children:"getDate"})}),`
`,e.jsx(n.p,{children:"Returns the reactive Date object."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Ref<Date>"})," — reactive Date object"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const reactiveDate = datetime.getDate()
`})}),`
`,e.jsx(n.h3,{id:"getdatetime",children:e.jsx(n.code,{children:"getDatetime"})}),`
`,e.jsx(n.p,{children:"Returns the base Datetime class instance."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Datetime"})," — base Datetime class object"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const baseDateTime = datetime.getDatetime()
`})}),`
`,e.jsx(n.h2,{id:"formatting-methods",children:"Formatting Methods"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Enables language-sensitive date and time formatting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — type of date format (default: current type)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — formatting options"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive formatted date string"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Basic formatting
const formatted = datetime.locale()

// Custom formatting
const monthName = datetime.locale('month', 'long')
const fullFormat = datetime.locale('full', {
  weekday: 'long',
  month: 'long'
})
`})}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Returns date in standard format with optional timezone information."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timeZone?: boolean"})," — add timezone information (default: true)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive standard formatted date"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// With timezone
const withTz = datetime.standard()

// Without timezone
const withoutTz = datetime.standard(false)
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"vue-component-with-reactive-date",children:"Vue Component with Reactive Date"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div>
    <span>{{ datetime.getYear() }}/{{ datetime.getMonth() + 1 }}/{{ datetime.getDay() }}</span>
    <span>{{ datetime.locale() }}</span>
  </div>
</template>

<script setup>
import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const currentDate = ref(new Date())
const datetime = new DatetimeRef(currentDate, 'datetime', 'en-US')
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"composable-for-date-management",children:"Composable for Date Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function useDatetime(initialDate) {
  const date = ref(initialDate || new Date())
  const datetime = new DatetimeRef(date, 'date', 'en-US')

  return {
    datetime,
    year: datetime.getYear(),
    formatted: datetime.locale()
  }
}
`})}),`
`,e.jsx(n.h3,{id:"reactive-format-changes",children:"Reactive Format Changes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dateValue = ref(new Date())
const formatType = ref('date')
const datetime = new DatetimeRef(dateValue, formatType, 'en-US')

// All computed properties will automatically update
formatType.value = 'datetime'
`})}),`
`,e.jsx(n.p,{children:"The DatetimeRef class provides a powerful reactive date management system for Vue applications with automatic change tracking and formatting."})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
