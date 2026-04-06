import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Datetime - Date and Time Utility`}),`
`,(0,c.jsx)(n.h1,{id:`datetime-class`,children:`Datetime Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A versatile wrapper around the native JavaScript `,(0,c.jsx)(n.code,{children:`Date`}),` object, designed to simplify working with dates and times. It combines formatting capabilities, calculations (date navigation), and cloning, relying on `,(0,c.jsx)(n.code,{children:`Geo`}),` and `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` localization settings.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Simplified Management`}),` — intuitive methods for date navigation (moving to the start of the month, incrementing days, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Localization Out of the Box`}),` — automatic handling of time zones and formats based on `,(0,c.jsx)(n.code,{children:`Geo`}),` settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chaining`}),` — most methods return `,(0,c.jsx)(n.code,{children:`this`}),`, allowing for complex manipulations in a single line.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Support for Various Types`}),` — the constructor and methods accept strings (ISO), numbers (timestamp), or `,(0,c.jsx)(n.code,{children:`Date`}),` objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Cloning`}),` — easily create new instances based on current ones with time shifts.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`Datetime(date, type, code)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date?: NumberOrStringOrDate`}),` — date for initialization (ISO string, timestamp, or `,(0,c.jsx)(n.code,{children:`Date`}),` object).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: GeoDate = 'date'`}),` — default output format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string = Geo.getLocation()`}),` — locale code (e.g., 'en-US').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Current time
const now = new Datetime()

// 2. Specific date
const dt = new Datetime('2024-03-15', 'datetime', 'en-US')

// 3. From timestamp
const fromTs = new Datetime(1710460800000)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`general-information`,children:`General Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIntl(): GeoIntl`}),` — Returns a `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` object for working with formatting.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDate(): Date`}),` — Returns the original native `,(0,c.jsx)(n.code,{children:`Date`}),` object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string`}),` — Returns the set output type (`,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`datetime`}),`, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHoursType(): GeoHours`}),` — Determines the hour format (12 or 24) for the current locale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHour24(): boolean`}),` — Returns the current setting for displaying the 24-hour format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimeZoneOffset(): number`}),` — Returns the time zone offset in minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimeZone(style?: GeoTimeZoneStyle): string`}),` — Returns the time zone (supports `,(0,c.jsx)(n.code,{children:`minute`}),`, `,(0,c.jsx)(n.code,{children:`hour`}),`, `,(0,c.jsx)(n.code,{children:`RFC`}),` styles).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDayCode(): GeoFirstDay`}),` — Returns the code for the first day of the week (0 for Sunday, 1 for Monday, 6 for Saturday).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`value-retrieval`,children:`Value Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getYear(): number`}),` — Returns the full year.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMonth(): number`}),` — Returns the month (human-readable, from 1 to 12).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDay(): number`}),` — Returns the day of the month (1-31).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHour(): number`}),` — Returns the hours.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMinute(): number`}),` — Returns the minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSecond(): number`}),` — Returns the seconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMaxDay(): number`}),` — Returns the number of days in the current month.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`value-setting`,children:`Value Setting`}),`
`,(0,c.jsxs)(n.p,{children:[`Allow for precise changes to date components. Methods (except `,(0,c.jsx)(n.code,{children:`setCode`}),` and `,(0,c.jsx)(n.code,{children:`setWatch`}),`) trigger the `,(0,c.jsx)(n.code,{children:`watch`}),` callback.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDate(value: NumberOrStringOrDate): this`}),` — Completely overwrites the date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(value: GeoDate): this`}),` — Sets the output type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHour24(value: boolean): this`}),` — Enables/disables the 24-hour format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Changes the locale code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setWatch(watch: Function): this`}),` — Sets a callback function for data changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setYear(value: number): this`}),` — Sets the year.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setMonth(value: number): this`}),` — Sets the month (1-12).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDay(value: number): this`}),` — Sets the day of the month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHour(value: number): this`}),` — Sets the hours.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setMinute(value: number): this`}),` — Sets the minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSecond(value: number): this`}),` — Sets the seconds.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`navigation-moving`,children:`Navigation (Moving)`}),`
`,(0,c.jsxs)(n.p,{children:[`Modify the current `,(0,c.jsx)(n.code,{children:`Datetime`}),` object.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveByYear(value: number): this`}),` — Shift by the specified number of years.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveByMonth(value: number): this`}),` — Shift by the number of months.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveByDay(value: number): this`}),` — Shift by the number of days.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveByHour(value: number): this`}),` — Shift by the number of hours.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveByMinute(value: number): this`}),` — Shift by the number of minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveBySecond(value: number): this`}),` — Shift by the number of seconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveMonthFirst(): this`}),` — Move to January of the current year.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveMonthLast(): this`}),` — Move to December of the current year.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveMonthNext(): this`}),` — Move to the first day of the next month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveMonthPrevious(): this`}),` — Move to the first day of the previous month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveWeekdayFirst(): this`}),` — Move to the first day of the current week.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveWeekdayLast(): this`}),` — Move to the last day of the current week.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveWeekdayFirstByMonth(): this`}),` — Move to the first day of the first week of the month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveWeekdayLastByMonth(): this`}),` — Move to the first day of the first full week of the next month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveWeekdayNext(): this`}),` — Shift one week forward.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveWeekdayPrevious(): this`}),` — Shift one week backward.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveDayFirst(): this`}),` — Move to the first day of the current month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveDayLast(): this`}),` — Move to the last day of the current month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveDayNext(): this`}),` — Shift one day forward.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`moveDayPrevious(): this`}),` — Shift one day backward.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cloning`,children:`Cloning`}),`
`,(0,c.jsx)(n.p,{children:`Create copies of the data.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`clone(): Date`}),` — Creates an independent copy of the native `,(0,c.jsx)(n.code,{children:`Date`}),` object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneClass(): Datetime`}),` — Creates a copy of the current `,(0,c.jsx)(n.code,{children:`Datetime`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneMonthFirst(): Datetime`}),` — Copy with a move to January.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneMonthLast(): Datetime`}),` — Copy with a move to December.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneMonthNext(): Datetime`}),` — Copy with a move to the next month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneMonthPrevious(): Datetime`}),` — Copy with a move to the previous month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneWeekdayFirst(): Datetime`}),` — Copy set to the beginning of the current week.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneWeekdayLast(): Datetime`}),` — Copy set to the end of the current week.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneWeekdayFirstByMonth(): Datetime`}),` — Copy to the beginning of the first week of the month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneWeekdayLastByMonth(): Datetime`}),` — Copy to the beginning of the last week of the month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneWeekdayNext(): Datetime`}),` — Copy with a shift of one week forward.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneWeekdayPrevious(): Datetime`}),` — Copy with a shift of one week backward.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneDayFirst(): Datetime`}),` — Copy to the first day of the current month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneDayLast(): Datetime`}),` — Copy to the last day of the current month.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneDayNext(): Datetime`}),` — Copy with a shift of one day forward.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cloneDayPrevious(): Datetime`}),` — Copy with a shift of one day backward.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`formatting-and-output`,children:`Formatting and Output`}),`
`,(0,c.jsx)(n.h3,{id:`locale`,children:(0,c.jsx)(n.code,{children:`locale`})}),`
`,(0,c.jsx)(n.p,{children:`Main method for obtaining a localized string.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — output format (taken from the instance settings by default).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.DateTimeFormatOptions`}),` — override display settings (e.g., month style).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — text representation of the date.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const dt = new Datetime('2024-03-15')
dt.locale('full') // e.g., "March 15, 2024"
dt.locale('date', { month: 'short' }) // e.g., "Mar 15, 2024"
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Additional formatting methods:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`localeYear(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`localeMonth(style?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`localeDay(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`localeHour(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`localeMinute(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`localeSecond(style?: 'numeric' | '2-digit'): string`})}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`standard`,children:(0,c.jsx)(n.code,{children:`standard`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the date in ISO 8601 format (YYYY-MM-DDTHH:mm:ss±HH:mm).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeZone: boolean = true`}),` — whether to add time zone information.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`dt.standard() // "2024-03-15T00:00:00+03:00"
dt.standard(false) // "2024-03-15T00:00:00"
`})}),`
`,(0,c.jsx)(n.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsx)(n.h3,{id:`working-with-intervals-and-navigation`,children:`Working with Intervals and Navigation`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// Get the last day of the current month
const lastDay = new Datetime().moveDayLast().getDay()

// Create a calendar grid (find the Monday of the first week of the month)
const startOfCalendar = new Datetime().moveWeekdayFirstByMonth()

// Calculate a date in a week at the same time
const nextWeek = new Datetime().moveByDay(7).locale('datetime')
`})}),`
`,(0,c.jsx)(n.h3,{id:`formatting-and-locales`,children:`Formatting and Locales`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const event = new Datetime('2024-12-31T23:59:59')

// English locale
event.setCode('en-US')
console.log(event.locale('full')) // "Tuesday, December 31, 2024"

// Vietnamese locale
event.setCode('vi-VN')
console.log(event.locale('full')) // "Thứ Ba, 31 tháng 12, 2024"

// Output only time
console.log(event.locale('time')) // "23:59:59"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};