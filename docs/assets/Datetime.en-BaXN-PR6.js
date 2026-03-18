import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Classes/Datetime - Date and Time Utility"}),`
`,e.jsx(n.h1,{id:"datetime-class",children:"Datetime Class"}),`
`,e.jsxs(n.p,{children:["A versatile wrapper around the native JavaScript ",e.jsx(n.code,{children:"Date"})," object, designed to simplify working with dates and times. It combines formatting capabilities, calculations (date navigation), and cloning, relying on ",e.jsx(n.code,{children:"Geo"})," and ",e.jsx(n.code,{children:"GeoIntl"})," localization settings."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simplified Management"})," — intuitive methods for date navigation (moving to the start of the month, incrementing days, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Localization Out of the Box"})," — automatic handling of time zones and formats based on ",e.jsx(n.code,{children:"Geo"})," settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chaining"})," — most methods return ",e.jsx(n.code,{children:"this"}),", allowing for complex manipulations in a single line."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Support for Various Types"})," — the constructor and methods accept strings (ISO), numbers (timestamp), or ",e.jsx(n.code,{children:"Date"})," objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Cloning"})," — easily create new instances based on current ones with time shifts."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"Datetime(date, type, code)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date?: NumberOrStringOrDate"})," — date for initialization (ISO string, timestamp, or ",e.jsx(n.code,{children:"Date"})," object)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: GeoDate = 'date'"})," — default output format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: string = Geo.getLocation()"})," — locale code (e.g., 'en-US')."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Current time
const now = new Datetime()

// 2. Specific date
const dt = new Datetime('2024-03-15', 'datetime', 'en-US')

// 3. From timestamp
const fromTs = new Datetime(1710460800000)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"general-information",children:"General Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getIntl(): GeoIntl"})," — Returns a ",e.jsx(n.code,{children:"GeoIntl"})," object for working with formatting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDate(): Date"})," — Returns the original native ",e.jsx(n.code,{children:"Date"})," object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getType(): string"})," — Returns the set output type (",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"datetime"}),", etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHoursType(): GeoHours"})," — Determines the hour format (12 or 24) for the current locale."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHour24(): boolean"})," — Returns the current setting for displaying the 24-hour format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimeZoneOffset(): number"})," — Returns the time zone offset in minutes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimeZone(style?: GeoTimeZoneStyle): string"})," — Returns the time zone (supports ",e.jsx(n.code,{children:"minute"}),", ",e.jsx(n.code,{children:"hour"}),", ",e.jsx(n.code,{children:"RFC"})," styles)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDayCode(): GeoFirstDay"})," — Returns the code for the first day of the week (0 for Sunday, 1 for Monday, 6 for Saturday)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"value-retrieval",children:"Value Retrieval"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getYear(): number"})," — Returns the full year."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMonth(): number"})," — Returns the month (human-readable, from 1 to 12)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDay(): number"})," — Returns the day of the month (1-31)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHour(): number"})," — Returns the hours."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMinute(): number"})," — Returns the minutes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSecond(): number"})," — Returns the seconds."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMaxDay(): number"})," — Returns the number of days in the current month."]}),`
`]}),`
`,e.jsx(n.h3,{id:"value-setting",children:"Value Setting"}),`
`,e.jsxs(n.p,{children:["Allow for precise changes to date components. Methods (except ",e.jsx(n.code,{children:"setCode"})," and ",e.jsx(n.code,{children:"setWatch"}),") trigger the ",e.jsx(n.code,{children:"watch"})," callback."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDate(value: NumberOrStringOrDate): this"})," — Completely overwrites the date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(value: GeoDate): this"})," — Sets the output type."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setHour24(value: boolean): this"})," — Enables/disables the 24-hour format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setCode(code: string): this"})," — Changes the locale code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setWatch(watch: Function): this"})," — Sets a callback function for data changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setYear(value: number): this"})," — Sets the year."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMonth(value: number): this"})," — Sets the month (1-12)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDay(value: number): this"})," — Sets the day of the month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setHour(value: number): this"})," — Sets the hours."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMinute(value: number): this"})," — Sets the minutes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSecond(value: number): this"})," — Sets the seconds."]}),`
`]}),`
`,e.jsx(n.h3,{id:"navigation-moving",children:"Navigation (Moving)"}),`
`,e.jsxs(n.p,{children:["Modify the current ",e.jsx(n.code,{children:"Datetime"})," object."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByYear(value: number): this"})," — Shift by the specified number of years."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByMonth(value: number): this"})," — Shift by the number of months."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByDay(value: number): this"})," — Shift by the number of days."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByHour(value: number): this"})," — Shift by the number of hours."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByMinute(value: number): this"})," — Shift by the number of minutes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveBySecond(value: number): this"})," — Shift by the number of seconds."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthFirst(): this"})," — Move to January of the current year."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthLast(): this"})," — Move to December of the current year."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthNext(): this"})," — Move to the first day of the next month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthPrevious(): this"})," — Move to the first day of the previous month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayFirst(): this"})," — Move to the first day of the current week."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayLast(): this"})," — Move to the last day of the current week."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayFirstByMonth(): this"})," — Move to the first day of the first week of the month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayLastByMonth(): this"})," — Move to the first day of the first full week of the next month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayNext(): this"})," — Shift one week forward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayPrevious(): this"})," — Shift one week backward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayFirst(): this"})," — Move to the first day of the current month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayLast(): this"})," — Move to the last day of the current month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayNext(): this"})," — Shift one day forward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayPrevious(): this"})," — Shift one day backward."]}),`
`]}),`
`,e.jsx(n.h3,{id:"cloning",children:"Cloning"}),`
`,e.jsx(n.p,{children:"Create copies of the data."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"clone(): Date"})," — Creates an independent copy of the native ",e.jsx(n.code,{children:"Date"})," object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneClass(): Datetime"})," — Creates a copy of the current ",e.jsx(n.code,{children:"Datetime"})," instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthFirst(): Datetime"})," — Copy with a move to January."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthLast(): Datetime"})," — Copy with a move to December."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthNext(): Datetime"})," — Copy with a move to the next month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthPrevious(): Datetime"})," — Copy with a move to the previous month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayFirst(): Datetime"})," — Copy set to the beginning of the current week."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayLast(): Datetime"})," — Copy set to the end of the current week."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayFirstByMonth(): Datetime"})," — Copy to the beginning of the first week of the month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayLastByMonth(): Datetime"})," — Copy to the beginning of the last week of the month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayNext(): Datetime"})," — Copy with a shift of one week forward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayPrevious(): Datetime"})," — Copy with a shift of one week backward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayFirst(): Datetime"})," — Copy to the first day of the current month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayLast(): Datetime"})," — Copy to the last day of the current month."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayNext(): Datetime"})," — Copy with a shift of one day forward."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayPrevious(): Datetime"})," — Copy with a shift of one day backward."]}),`
`]}),`
`,e.jsx(n.h2,{id:"formatting-and-output",children:"Formatting and Output"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Main method for obtaining a localized string."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — output format (taken from the instance settings by default)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions"})," — override display settings (e.g., month style)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — text representation of the date."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dt = new Datetime('2024-03-15')
dt.locale('full') // e.g., "March 15, 2024"
dt.locale('date', { month: 'short' }) // e.g., "Mar 15, 2024"
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Additional formatting methods:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeYear(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeMonth(style?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeDay(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeHour(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeMinute(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeSecond(style?: 'numeric' | '2-digit'): string"})}),`
`]}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Returns the date in ISO 8601 format (YYYY-MM-DDTHH:mm:ss±HH:mm)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timeZone: boolean = true"})," — whether to add time zone information."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`dt.standard() // "2024-03-15T00:00:00+03:00"
dt.standard(false) // "2024-03-15T00:00:00"
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"working-with-intervals-and-navigation",children:"Working with Intervals and Navigation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Datetime } from '@dxtmisha/functional-basic'

// Get the last day of the current month
const lastDay = new Datetime().moveDayLast().getDay()

// Create a calendar grid (find the Monday of the first week of the month)
const startOfCalendar = new Datetime().moveWeekdayFirstByMonth()

// Calculate a date in a week at the same time
const nextWeek = new Datetime().moveByDay(7).locale('datetime')
`})}),`
`,e.jsx(n.h3,{id:"formatting-and-locales",children:"Formatting and Locales"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new Datetime('2024-12-31T23:59:59')

// English locale
event.setCode('en-US')
console.log(event.locale('full')) // "Tuesday, December 31, 2024"

// Vietnamese locale
event.setCode('vi-VN')
console.log(event.locale('full')) // "Thứ Ba, 31 tháng 12, 2024"

// Output only time
console.log(event.locale('time')) // "23:59:59"
`})})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{x as default};
