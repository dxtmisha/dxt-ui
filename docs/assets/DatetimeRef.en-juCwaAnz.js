import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DatetimeRef - Reactive Datetime Management`}),`
`,(0,c.jsx)(t.h1,{id:`datetimeref-class`,children:`DatetimeRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A class for working with dates and times in a reactive way. It provides a high-level wrapper around the `,(0,c.jsx)(t.code,{children:`Datetime`}),` utility, ensuring automatic synchronization of date data with Vue reactive properties and locales.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactivity`}),` — integration with Vue `,(0,c.jsx)(t.code,{children:`ref`}),` and `,(0,c.jsx)(t.code,{children:`computed`}),`. Automatically tracks input data changes and updates all related date components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Synchronization`}),` — internal binding to the `,(0,c.jsx)(t.code,{children:`Datetime`}),` class. Any date manipulations via the base object (`,(0,c.jsx)(t.code,{children:`getDatetime()`}),`) are instantly reflected in reactive properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Localization`}),` — automatic support for international date and time formats via `,(0,c.jsx)(t.code,{children:`Geo`}),` and `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Convenient Accessors`}),` — quick access to date components (year, month, day, etc.) via computed properties.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a new `,(0,c.jsx)(t.code,{children:`DatetimeRef`}),` instance. The class automatically synchronizes with the provided reactive data. If no parameters are passed, default values (current date and locale) are used.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — date for initialization (ISO string, timestamp, `,(0,c.jsx)(t.code,{children:`Date`}),` object, or a `,(0,c.jsx)(t.code,{children:`ref`}),` to them).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — default output format (reactive or normal).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — locale code (reactive or normal, e.g., 'en-US').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`methods-and-parameters`,children:`Methods and Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Returns a reactive reference to the original date value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDate(): Ref<Date>`}),` — Returns a reactive reference to the internal `,(0,c.jsx)(t.code,{children:`Date`}),` object. Used for synchronization with the base class.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDatetime(): Datetime`}),` — Returns an instance of the `,(0,c.jsx)(t.code,{children:`Datetime`}),` utility. Allows using navigation methods (`,(0,c.jsx)(t.code,{children:`moveBy...`}),`, `,(0,c.jsx)(t.code,{children:`clone...`}),`) while maintaining reactivity.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Determines the time format (12 or 24-hour) based on current locale and settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Returns the code for the first day of the week (0 for Sunday, 1 for Monday) according to the locale.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Returns the number of days in the current month (considering leap years).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`date-components`,children:`Date Components`}),`
`,(0,c.jsxs)(t.p,{children:[`These methods return `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` properties that update automatically when the state changes:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getYear(): ComputedRef<number>`}),` — Returns the full year.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMonth(): ComputedRef<number>`}),` — Returns the month (1–12).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDay(): ComputedRef<number>`}),` — Returns the day of the month (1-31).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHour(): ComputedRef<number>`}),` — Returns the hours for the current date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMinute(): ComputedRef<number>`}),` — Returns the minutes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSecond(): ComputedRef<number>`}),` — Returns the seconds.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`formatting`,children:`Formatting`}),`
`,(0,c.jsx)(t.h3,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:`Returns a localized date string formatted according to the locale and settings.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: GeoDate`}),` — format type ('date', 'time', 'datetime', 'month', 'year', etc.). Defaults to the type from the constructor.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: object`}),` — additional `,(0,c.jsx)(t.code,{children:`Intl.DateTimeFormat`}),` formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:`Returns a standardized ISO date string.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone: boolean`}),` — whether to include time zone information. Default: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};