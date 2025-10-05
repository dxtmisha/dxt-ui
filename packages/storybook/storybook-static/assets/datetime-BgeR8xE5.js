import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DB_maGql.js";import{M as o}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/functional/en/Classes/Datetime"}),`
`,e.jsx(n.h1,{id:"datetime-class",children:"Datetime Class"}),`
`,e.jsx(n.p,{children:"A class for working with dates that provides powerful formatting, manipulation, and localization capabilities. Integrates with geographic settings and supports various output formats with timezone and regional considerations."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Localized formatting"})," — automatic date formatting according to regional settings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date manipulation"})," — convenient methods for changing and moving dates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timezone support"})," — working with timezones and their offsets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Object cloning"})," — safe creation of date copies for operations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible output formats"})," — support for various date representation types"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Geo integration"})," — uses geographic settings for localization"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standard formats"})," — output in ISO and other standard formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Change observation"})," — callback system for tracking changes"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a Datetime instance with specified date, output type, and locale code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date?: NumberOrStringOrDate"})," — date for processing (optional, defaults to current date)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — date format type for output (defaults to 'date')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: string"})," — country and language code (defaults to Geo.getLocation())"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Datetime } from '@dxtmisha/functional'

// Create with current date
const now = new Datetime()

// Create with specific date
const birthday = new Datetime('1990-05-15')
const timestamp = new Datetime(1234567890000)

// With formatting settings
const fullDate = new Datetime('2023-12-25', 'full', 'en-US')
const timeOnly = new Datetime(new Date(), 'time', 'ru-RU')
`})}),`
`,e.jsx(n.h2,{id:"getting-date-information",children:"Getting Date Information"}),`
`,e.jsx(n.h3,{id:"getintl",children:e.jsx(n.code,{children:"getIntl"})}),`
`,e.jsx(n.p,{children:"Returns an object for working with formatting."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'date', 'en-US')
const intl = datetime.getIntl()
// Returns GeoIntl instance for working with localization
`})}),`
`,e.jsx(n.h3,{id:"getdate",children:e.jsx(n.code,{children:"getDate"})}),`
`,e.jsx(n.p,{children:"Returns the Date object."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')
const dateObj = datetime.getDate()
console.log(dateObj) // Date object with 2023-10-15
`})}),`
`,e.jsx(n.h3,{id:"gettype",children:e.jsx(n.code,{children:"getType"})}),`
`,e.jsx(n.p,{children:"Returns the data output type."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'datetime')
console.log(datetime.getType()) // 'datetime'
`})}),`
`,e.jsx(n.h3,{id:"gethourstype",children:e.jsx(n.code,{children:"getHoursType"})}),`
`,e.jsx(n.p,{children:"Returns the hour format (12 or 24-hour)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()
console.log(datetime.getHoursType()) // '24' or '12'
`})}),`
`,e.jsx(n.h3,{id:"gethour24",children:e.jsx(n.code,{children:"getHour24"})}),`
`,e.jsx(n.p,{children:"Checks if 24-hour time format is used."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()
console.log(datetime.getHour24()) // false by default
`})}),`
`,e.jsx(n.h3,{id:"getfirstdaycode",children:e.jsx(n.code,{children:"getFirstDayCode"})}),`
`,e.jsx(n.p,{children:"Returns the first day of the week code."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'date', 'en-US')
console.log(datetime.getFirstDayCode()) // 0 (Sunday) for US locale
// 0 - Sunday, 1 - Monday, 6 - Saturday
`})}),`
`,e.jsx(n.h3,{id:"getmaxday",children:e.jsx(n.code,{children:"getMaxDay"})}),`
`,e.jsx(n.p,{children:"Returns the last day of the month."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-02-15') // February
console.log(datetime.getMaxDay()) // 28 for February 2023

const datetime2 = new Datetime('2023-01-15') // January
console.log(datetime2.getMaxDay()) // 31 for January
`})}),`
`,e.jsx(n.h2,{id:"working-with-date-components",children:"Working with Date Components"}),`
`,e.jsx(n.h3,{id:"getting-components",children:"Getting Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15 14:30:45')

console.log(datetime.getYear())    // 2023
console.log(datetime.getMonth())   // 10 (months from 1)
console.log(datetime.getDay())     // 15
console.log(datetime.getHour())    // 14
console.log(datetime.getMinute())  // 30
console.log(datetime.getSecond())  // 45
`})}),`
`,e.jsx(n.h3,{id:"setting-components",children:"Setting Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime
  .setYear(2025)
  .setMonth(3)
  .setDay(20)
  .setHour(15)
  .setMinute(45)
  .setSecond(30)

console.log(datetime.locale()) // Formatted date
`})}),`
`,e.jsx(n.h2,{id:"timezones",children:"Timezones"}),`
`,e.jsx(n.h3,{id:"gettimezoneoffset",children:e.jsx(n.code,{children:"getTimeZoneOffset"})}),`
`,e.jsx(n.p,{children:"Returns the timezone offset in minutes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()
const offset = datetime.getTimeZoneOffset()
console.log(offset) // e.g., -180 for UTC+3
`})}),`
`,e.jsx(n.h3,{id:"gettimezone",children:e.jsx(n.code,{children:"getTimeZone"})}),`
`,e.jsx(n.p,{children:"Returns the timezone in various formats."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

console.log(datetime.getTimeZone())        // '+03:00'
console.log(datetime.getTimeZone('hour'))  // '+3'
console.log(datetime.getTimeZone('minute')) // '180'
console.log(datetime.getTimeZone('RFC'))   // '+0300'
`})}),`
`,e.jsx(n.h2,{id:"localized-formatting",children:"Localized Formatting"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Main method for formatting dates with locale consideration."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25 15:30:00', 'full', 'en-US')

console.log(datetime.locale())                    // Full date and time
console.log(datetime.locale('date'))              // Date only
console.log(datetime.locale('time'))              // Time only
console.log(datetime.locale('year'))              // Year only
console.log(datetime.locale('month', 'short'))    // Short month name
`})}),`
`,e.jsx(n.h3,{id:"specialized-formatting-methods",children:"Specialized Formatting Methods"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25', 'date', 'en-US')

console.log(datetime.localeYear())              // '2023'
console.log(datetime.localeMonth())             // 'December'
console.log(datetime.localeMonth('short'))      // 'Dec'
console.log(datetime.localeDay())               // '25'
console.log(datetime.localeHour())              // current hour
console.log(datetime.localeMinute())            // current minute
console.log(datetime.localeSecond())            // current second
`})}),`
`,e.jsx(n.h2,{id:"standard-formatting",children:"Standard Formatting"}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Returns date in standard format (ISO-like)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25 15:30:45')

console.log(datetime.standard())        // '2023-12-25T15:30:45+03:00'
console.log(datetime.standard(false))   // '2023-12-25T15:30:45' (without timezone)

// Different types
const timeOnly = new Datetime('2023-12-25 15:30:45', 'time')
console.log(timeOnly.standard())        // 'T15:30:45+03:00'

const dateOnly = new Datetime('2023-12-25', 'date')
console.log(dateOnly.standard())        // '2023-12-25'
`})}),`
`,e.jsx(n.h2,{id:"date-movement",children:"Date Movement"}),`
`,e.jsx(n.h3,{id:"movement-by-time-units",children:"Movement by Time Units"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')

// Move by specified number of units
datetime.moveByYear(1)     // +1 year
datetime.moveByMonth(-2)   // -2 months
datetime.moveByDay(10)     // +10 days
datetime.moveByHour(5)     // +5 hours
datetime.moveByMinute(30)  // +30 minutes
datetime.moveBySecond(45)  // +45 seconds

console.log(datetime.locale()) // Resulting date
`})}),`
`,e.jsx(n.h3,{id:"movement-to-period-boundaries",children:"Movement to Period Boundaries"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-07-15')

// Months
datetime.moveMonthFirst()    // January 1st
datetime.moveMonthLast()     // December 31st
datetime.moveMonthNext()     // 1st of next month
datetime.moveMonthPrevious() // 1st of previous month

// Days of month
datetime.moveDayFirst()      // 1st of current month
datetime.moveDayLast()       // last day of current month
datetime.moveDayNext()       // next day
datetime.moveDayPrevious()   // previous day
`})}),`
`,e.jsx(n.h3,{id:"working-with-weeks",children:"Working with Weeks"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-07-15') // Saturday

// Movement within week
datetime.moveWeekdayFirst()  // Monday of current week
datetime.moveWeekdayLast()   // Sunday of current week

// Movement by weeks
datetime.moveWeekdayNext()     // Monday of next week
datetime.moveWeekdayPrevious() // Monday of previous week

// Weeks in month context
datetime.moveWeekdayFirstByMonth() // first day of first week of month
datetime.moveWeekdayLastByMonth()  // last day of last week of month
`})}),`
`,e.jsx(n.h2,{id:"cloning-and-creating-variants",children:"Cloning and Creating Variants"}),`
`,e.jsx(n.h3,{id:"basic-cloning",children:"Basic Cloning"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const original = new Datetime('2023-10-15')

const dateClone = original.clone()        // Date object
const classClone = original.cloneClass()  // Datetime object
`})}),`
`,e.jsx(n.h3,{id:"cloning-with-movement",children:"Cloning with Movement"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-07-15')

// Month cloning
const january = datetime.cloneMonthFirst()    // January of current year
const december = datetime.cloneMonthLast()    // December of current year
const nextMonth = datetime.cloneMonthNext()   // next month
const prevMonth = datetime.cloneMonthPrevious() // previous month

// Day cloning
const firstDay = datetime.cloneDayFirst()     // 1st of month
const lastDay = datetime.cloneDayLast()       // last day of month
const tomorrow = datetime.cloneDayNext()      // tomorrow
const yesterday = datetime.cloneDayPrevious() // yesterday

// Week cloning
const weekStart = datetime.cloneWeekdayFirst()    // start of week
const weekEnd = datetime.cloneWeekdayLast()       // end of week
const nextWeek = datetime.cloneWeekdayNext()      // next week
const prevWeek = datetime.cloneWeekdayPrevious()  // previous week
`})}),`
`,e.jsx(n.h2,{id:"settings-and-configuration",children:"Settings and Configuration"}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Changes the data output type."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')

datetime.setType('full')     // full date and time
datetime.setType('date')     // date only
datetime.setType('time')     // time only
datetime.setType('year')     // year only
`})}),`
`,e.jsx(n.h3,{id:"sethour24",children:e.jsx(n.code,{children:"setHour24"})}),`
`,e.jsx(n.p,{children:"Sets time format (12 or 24 hours)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime.setHour24(true)   // 24-hour format
datetime.setHour24(false)  // 12-hour format
`})}),`
`,e.jsx(n.h3,{id:"setcode",children:e.jsx(n.code,{children:"setCode"})}),`
`,e.jsx(n.p,{children:"Changes locale."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime.setCode('en-US')  // American locale
datetime.setCode('ru-RU')  // Russian locale
datetime.setCode('de-DE')  // German locale
`})}),`
`,e.jsx(n.h3,{id:"setwatch",children:e.jsx(n.code,{children:"setWatch"})}),`
`,e.jsx(n.p,{children:"Sets a function to watch for changes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime.setWatch((date, type, hour24) => {
  console.log('Date changed:', date)
  console.log('Type:', type)
  console.log('24-hour format:', hour24)
})

datetime.setYear(2025) // Will trigger the watch function
`})}),`
`,e.jsx(n.h3,{id:"setdate",children:e.jsx(n.code,{children:"setDate"})}),`
`,e.jsx(n.p,{children:"Completely changes the date."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')

// Set new date
datetime.setDate('2025-12-25')
datetime.setDate(new Date('2024-06-01'))
datetime.setDate(1672531200000) // timestamp

console.log(datetime.locale()) // New set date
`})}),`
`,e.jsx(n.h2,{id:"data-types",children:"Data Types"}),`
`,e.jsx(n.h3,{id:"geodate",children:e.jsx(n.code,{children:"GeoDate"})}),`
`,e.jsx(n.p,{children:"Type that defines the date and time display format. Supports various levels of detail from full format to individual components."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'full'"})," — full date and time (date + time)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'datetime'"})," — date and time"]}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Examples of using different types
const datetime = new Datetime('2023-12-25 15:30:45')

datetime.setType('full')        // 'December 25, 2023 at 3:30:45 PM'
datetime.setType('date')        // 'December 25, 2023'
datetime.setType('time')        // '3:30:45 PM'
datetime.setType('year')        // '2023'
datetime.setType('month')       // 'December'
datetime.setType('day')         // '25'
`})}),`
`,e.jsx(n.h3,{id:"geofirstday",children:e.jsx(n.code,{children:"GeoFirstDay"})}),`
`,e.jsx(n.p,{children:"Type that defines the first day of the week in the calendar according to regional settings."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"})," — Sunday (USA, Canada, Japan, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1"})," — Monday (most European countries, Russia)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"6"})," — Saturday (some Middle Eastern countries)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'date', 'en-US')
console.log(datetime.getFirstDayCode()) // 0 (Sunday for USA)

const datetimeRU = new Datetime('2023-10-15', 'date', 'ru-RU')
console.log(datetimeRU.getFirstDayCode()) // 1 (Monday for Russia)
`})}),`
`,e.jsx(n.h3,{id:"geohours",children:e.jsx(n.code,{children:"GeoHours"})}),`
`,e.jsx(n.p,{children:"Type that defines the time display format — 12-hour or 24-hour."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'12'"})," — 12-hour format with AM/PM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'24'"})," — 24-hour format"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25 15:30:00')

datetime.setHour24(true)   // 24-hour format
console.log(datetime.getHoursType()) // '24'
console.log(datetime.locale('time')) // '15:30'

datetime.setHour24(false)  // 12-hour format
console.log(datetime.getHoursType()) // '12'
console.log(datetime.locale('time')) // '3:30 PM'
`})}),`
`,e.jsx(n.h3,{id:"geotimezonestyle",children:e.jsx(n.code,{children:"GeoTimeZoneStyle"})}),`
`,e.jsx(n.p,{children:"Type that defines the style for displaying timezone information."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Possible values:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'minute'"})," — offset in minutes (number)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour'"})," — offset in hours with sign"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'ISO8601'"})," — ISO 8601 standard (±HH:MM)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'RFC'"})," — RFC format (±HHMM)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

console.log(datetime.getTimeZone())          // '+03:00' (ISO8601 by default)
console.log(datetime.getTimeZone('hour'))    // '+3'
console.log(datetime.getTimeZone('minute'))  // '180'
console.log(datetime.getTimeZone('RFC'))     // '+0300'
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"calendar-operations",children:"Calendar Operations"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class Calendar {
  constructor(date = new Date()) {
    this.current = new Datetime(date, 'date', 'en-US')
  }

  getCurrentMonth() {
    return {
      year: this.current.getYear(),
      month: this.current.getMonth(),
      monthName: this.current.localeMonth(),
      firstDay: this.current.cloneDayFirst().locale(),
      lastDay: this.current.cloneDayLast().locale()
    }
  }

  nextMonth() {
    this.current.moveMonthNext()
    return this.getCurrentMonth()
  }

  previousMonth() {
    this.current.moveMonthPrevious()
    return this.getCurrentMonth()
  }
}

// Usage
const calendar = new Calendar()
console.log(calendar.getCurrentMonth())
`})}),`
`,e.jsx(n.h3,{id:"date-formatting",children:"Date Formatting"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formatDates = {
  formatForLocales(date, locales) {
    return locales.map(locale => {
      const datetime = new Datetime(date, 'full', locale)
      return {
        locale,
        formatted: datetime.locale(),
        standard: datetime.standard()
      }
    })
  }
}

// Usage
const formatted = formatDates.formatForLocales('2023-12-25', ['en-US', 'ru-RU'])
console.log(formatted)
`})}),`
`,e.jsx(n.h3,{id:"business-days",children:"Business Days"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class BusinessDays {
  constructor(startDate, locale = 'en-US') {
    this.start = new Datetime(startDate, 'date', locale)
  }

  isWeekend(date) {
    const dayOfWeek = date.getDate().getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
  }

  addBusinessDays(days) {
    const result = this.start.cloneClass()
    let addedDays = 0

    while (addedDays < days) {
      result.moveDayNext()
      if (!this.isWeekend(result)) {
        addedDays++
      }
    }

    return result
  }
}

// Usage
const businessDays = new BusinessDays('2023-10-01')
const futureDate = businessDays.addBusinessDays(10)
console.log('10 business days later:', futureDate.locale())
`})}),`
`,e.jsx(n.p,{children:"The Datetime class provides a powerful and flexible tool for working with dates in JavaScript applications, supporting localization, manipulation, and formatting according to regional settings and application requirements."}),`
`,e.jsx(n.h2,{id:"internal-methods",children:"Internal Methods"}),`
`,e.jsxs(n.h3,{id:"update-protected-method",children:[e.jsx(n.code,{children:"update"})," (protected method)"]}),`
`,e.jsx(n.p,{children:"Internal method for updating all values and calling the watch function."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// This method is called automatically when the date changes
// It's not available for direct use as it's a protected method
// Calls the watch function if it was set via setWatch()
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This method is automatically called by all date modification methods (",e.jsx(n.code,{children:"setYear"}),", ",e.jsx(n.code,{children:"setMonth"}),", ",e.jsx(n.code,{children:"setDay"}),", ",e.jsx(n.code,{children:"setHour"}),", ",e.jsx(n.code,{children:"setMinute"}),", ",e.jsx(n.code,{children:"setSecond"}),", ",e.jsx(n.code,{children:"setDate"}),", ",e.jsx(n.code,{children:"setType"}),", ",e.jsx(n.code,{children:"setHour24"}),") to ensure state consistency and notify observers about changes."]})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{m as default};
