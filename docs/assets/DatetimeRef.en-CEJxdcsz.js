import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DatetimeRef - Reactive Datetime Management`}),`
`,(0,c.jsx)(t.h1,{id:`datetimeref-class`,children:`DatetimeRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive wrapper around `,(0,c.jsx)(t.code,{children:`Datetime`}),`. It synchronizes input date refs with a working `,(0,c.jsx)(t.code,{children:`Date`}),`, exposes computed calendar fields, and refreshes those fields after mutations through `,(0,c.jsx)(t.code,{children:`getDatetime()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Required date`}),` — accepts a date string, timestamp or `,(0,c.jsx)(t.code,{children:`Date`}),`, directly or as a ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Calendar fields`}),` — months are numbered from 1 to 12.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Formatting`}),` — localized and standard output are computed refs.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( date: RefOrNormal<NumberOrStringOrDate>, type: RefOrNormal<GeoDate> = 'date', code: RefOrNormal<string> = Geo.getLocation() )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — Required input date, timestamp or date string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — Date output format; the constructor defaults to date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`The default locale is captured from `,(0,c.jsx)(t.code,{children:`Geo.getLocation()`}),` at construction. Pass a locale ref to track later changes. Input/type/locale watchers follow Vue scheduling; await `,(0,c.jsx)(t.code,{children:`nextTick()`}),` after updating those refs. Mutations through `,(0,c.jsx)(t.code,{children:`getDatetime()`}),` notify synchronously. `,(0,c.jsx)(t.code,{children:`getItem()`}),` retains the original input ref and is not rewritten by base-class mutations. Use an effect scope to dispose watchers. Assign a new `,(0,c.jsx)(t.code,{children:`Date`}),` to `,(0,c.jsx)(t.code,{children:`getDate().value`}),` or mutate through `,(0,c.jsx)(t.code,{children:`getDatetime()`}),`; native in-place `,(0,c.jsx)(t.code,{children:`Date`}),` changes do not trigger Vue by themselves.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
import { effectScope, nextTick, ref } from 'vue'

const source = /*#__PURE__*/ ref('2024-02-29T12:00:00')
const code = /*#__PURE__*/ ref('en-US')
const scope = /*#__PURE__*/ effectScope()
const datetime = /*#__PURE__*/ scope.run(() => new DatetimeRef(source, 'date', code))
const formatted = /*#__PURE__*/ datetime?.locale()
source.value = '2025-01-01T00:00:00'
await nextTick()
code.value = 'vi-VN'
await nextTick()
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`underlying-state`,children:`Underlying state`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Returns the original input ref.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDate(): Ref<Date>`}),` — Returns the working Date ref synchronized with the base class.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDatetime(): Datetime`}),` — Returns the mutable base utility for calendar operations.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`calendar-fields`,children:`Calendar fields`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getYear(): ComputedRef<number>`}),` — Returns the full local year.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMonth(): ComputedRef<number>`}),` — Returns the local month, numbered 1–12.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDay(): ComputedRef<number>`}),` — Returns the local day of the month.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHour(): ComputedRef<number>`}),` — Returns the local hour, 0–23.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMinute(): ComputedRef<number>`}),` — Returns local minutes, 0–59.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSecond(): ComputedRef<number>`}),` — Returns local seconds, 0–59.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Returns the number of days in the current month, including leap years.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Returns the locale clock format, `,(0,c.jsx)(t.code,{children:`12`}),` or `,(0,c.jsx)(t.code,{children:`24`}),` as a string.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Returns the locale first weekday code: Sunday is 0.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`formatting`,children:`Formatting`}),`
`,(0,c.jsx)(t.h4,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`locale( type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Returns localized output using the current format type unless an explicit type is supplied.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Date output format; the constructor defaults to date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Intl style or formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = /*#__PURE__*/ datetime?.locale('date', 'long')
`})}),`
`,(0,c.jsx)(t.h4,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`standard(timeZone = true as boolean): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the base utility’s standard representation for the current type. `,(0,c.jsx)(t.code,{children:`timeZone`}),` controls timezone output where that format includes time.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone = true as boolean`}),` — Whether to include timezone information; defaults to true.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const standard = /*#__PURE__*/ datetime?.standard(false)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};