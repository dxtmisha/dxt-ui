import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Classes/DatetimeRef - Reactive Datetime Management"}),`
`,e.jsx(t.h1,{id:"datetimeref-class",children:"DatetimeRef Class"}),`
`,e.jsxs(t.p,{children:["A class for working with dates and times in a reactive way. It provides a high-level wrapper around the ",e.jsx(t.code,{children:"Datetime"})," utility, ensuring automatic synchronization of date data with Vue reactive properties and locales."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Reactivity"})," — integration with Vue ",e.jsx(t.code,{children:"ref"})," and ",e.jsx(t.code,{children:"computed"}),". Automatically tracks input data changes and updates all related date components."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Synchronization"})," — internal binding to the ",e.jsx(t.code,{children:"Datetime"})," class. Any date manipulations via the base object (",e.jsx(t.code,{children:"getDatetime()"}),") are instantly reflected in reactive properties."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Localization"})," — automatic support for international date and time formats via ",e.jsx(t.code,{children:"Geo"})," and ",e.jsx(t.code,{children:"GeoIntl"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Convenient Accessors"})," — quick access to date components (year, month, day, etc.) via computed properties."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["Creates a new ",e.jsx(t.code,{children:"DatetimeRef"})," instance. The class automatically synchronizes with the provided reactive data. If no parameters are passed, default values (current date and locale) are used."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"date: RefOrNormal<NumberOrStringOrDate>"})," — date for initialization (ISO string, timestamp, ",e.jsx(t.code,{children:"Date"})," object, or a ",e.jsx(t.code,{children:"ref"})," to them)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"type: RefOrNormal<GeoDate> = 'date'"})," — default output format (reactive or normal)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"code: RefOrNormal<string> = Geo.getLocation()"})," — locale code (reactive or normal, e.g., 'en-US')."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { DatetimeRef } from '@dxtmisha/functional'
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
`,e.jsx(t.h2,{id:"methods-and-parameters",children:"Methods and Parameters"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getItem(): Ref<NumberOrStringOrDate>"})," — Returns a reactive reference to the original date value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDate(): Ref<Date>"})," — Returns a reactive reference to the internal ",e.jsx(t.code,{children:"Date"})," object. Used for synchronization with the base class."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDatetime(): Datetime"})," — Returns an instance of the ",e.jsx(t.code,{children:"Datetime"})," utility. Allows using navigation methods (",e.jsx(t.code,{children:"moveBy..."}),", ",e.jsx(t.code,{children:"clone..."}),") while maintaining reactivity."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getHoursType(): ComputedRef<GeoHours>"})," — Determines the time format (12 or 24-hour) based on current locale and settings."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getFirstDayCode(): ComputedRef<GeoFirstDay>"})," — Returns the code for the first day of the week (0 for Sunday, 1 for Monday) according to the locale."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getMaxDay(): ComputedRef<number>"})," — Returns the number of days in the current month (considering leap years)."]}),`
`]}),`
`,e.jsx(t.h2,{id:"date-components",children:"Date Components"}),`
`,e.jsxs(t.p,{children:["These methods return ",e.jsx(t.code,{children:"ComputedRef"})," properties that update automatically when the state changes:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getYear(): ComputedRef<number>"})," — Returns the full year."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getMonth(): ComputedRef<number>"})," — Returns the month (1–12)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDay(): ComputedRef<number>"})," — Returns the day of the month (1-31)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getHour(): ComputedRef<number>"})," — Returns the hours for the current date."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getMinute(): ComputedRef<number>"})," — Returns the minutes."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getSecond(): ComputedRef<number>"})," — Returns the seconds."]}),`
`]}),`
`,e.jsx(t.h2,{id:"formatting",children:"Formatting"}),`
`,e.jsx(t.h3,{id:"locale",children:e.jsx(t.code,{children:"locale"})}),`
`,e.jsx(t.p,{children:"Returns a localized date string formatted according to the locale and settings."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"type: GeoDate"})," — format type ('date', 'time', 'datetime', 'month', 'year', etc.). Defaults to the type from the constructor."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"styleOptions?: object"})," — additional ",e.jsx(t.code,{children:"Intl.DateTimeFormat"})," formatting options."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(t.h3,{id:"standard",children:e.jsx(t.code,{children:"standard"})}),`
`,e.jsx(t.p,{children:"Returns a standardized ISO date string."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"timeZone: boolean"})," — whether to include time zone information. Default: ",e.jsx(t.code,{children:"true"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"ComputedRef<string>"})]})]})}function m(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{m as default};
