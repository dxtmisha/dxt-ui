import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/DatetimeRef - Reactive Datetime Management`}),`
`,(0,c.jsx)(n.h1,{id:`datetimeref-class`,children:`DatetimeRef Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for working with dates and times in a reactive way. It provides a high-level wrapper around the `,(0,c.jsx)(n.code,{children:`Datetime`}),` utility, ensuring automatic synchronization of date data with Vue reactive properties and locales.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity`}),` — integration with Vue `,(0,c.jsx)(n.code,{children:`ref`}),` and `,(0,c.jsx)(n.code,{children:`computed`}),`. Automatically tracks input data changes and updates all related date components.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Synchronization`}),` — internal binding to the `,(0,c.jsx)(n.code,{children:`Datetime`}),` class. Any date manipulations via the base object (`,(0,c.jsx)(n.code,{children:`getDatetime()`}),`) are instantly reflected in reactive properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Localization`}),` — automatic support for international date and time formats via `,(0,c.jsx)(n.code,{children:`Geo`}),` and `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Convenient Accessors`}),` — quick access to date components (year, month, day, etc.) via computed properties.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`DatetimeRef`}),` instance. The class automatically synchronizes with the provided reactive data. If no parameters are passed, default values (current date and locale) are used.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — date for initialization (ISO string, timestamp, `,(0,c.jsx)(n.code,{children:`Date`}),` object, or a `,(0,c.jsx)(n.code,{children:`ref`}),` to them).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — default output format (reactive or normal).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — locale code (reactive or normal, e.g., 'en-US').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Initialization with a reactive string
const date = ref('2023-10-27')
const dt = new DatetimeRef(date, 'date', 'en-US')

// 2. Current time (default)
const now = new DatetimeRef()

// 3. Using a reactive locale
const locale = ref('fr-FR')
const dtLocale = new DatetimeRef(new Date(), 'datetime', locale)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods-and-parameters`,children:`Methods and Parameters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Returns a reactive reference to the original date value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDate(): Ref<Date>`}),` — Returns a reactive reference to the internal `,(0,c.jsx)(n.code,{children:`Date`}),` object. Used for synchronization with the base class.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDatetime(): Datetime`}),` — Returns an instance of the `,(0,c.jsx)(n.code,{children:`Datetime`}),` utility. Allows using navigation methods (`,(0,c.jsx)(n.code,{children:`moveBy...`}),`, `,(0,c.jsx)(n.code,{children:`clone...`}),`) while maintaining reactivity.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Determines the time format (12 or 24-hour) based on current locale and settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Returns the code for the first day of the week (0 for Sunday, 1 for Monday) according to the locale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Returns the number of days in the current month (considering leap years).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`date-components`,children:`Date Components`}),`
`,(0,c.jsxs)(n.p,{children:[`These methods return `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` properties that update automatically when the state changes:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getYear(): ComputedRef<number>`}),` — Returns the full year.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMonth(): ComputedRef<number>`}),` — Returns the month (1–12).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDay(): ComputedRef<number>`}),` — Returns the day of the month (1-31).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHour(): ComputedRef<number>`}),` — Returns the hours for the current date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMinute(): ComputedRef<number>`}),` — Returns the minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSecond(): ComputedRef<number>`}),` — Returns the seconds.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,c.jsx)(n.h3,{id:`locale`,children:(0,c.jsx)(n.code,{children:`locale`})}),`
`,(0,c.jsx)(n.p,{children:`Returns a localized date string formatted according to the locale and settings.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: GeoDate`}),` — format type ('date', 'time', 'datetime', 'month', 'year', etc.). Defaults to the type from the constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: object`}),` — additional `,(0,c.jsx)(n.code,{children:`Intl.DateTimeFormat`}),` formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`standard`,children:(0,c.jsx)(n.code,{children:`standard`})}),`
`,(0,c.jsx)(n.p,{children:`Returns a standardized ISO date string.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeZone: boolean`}),` — whether to include time zone information. Default: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};