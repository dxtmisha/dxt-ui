import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/GeoIntlRef - Reactive Number and Date Formatting`}),`
`,(0,c.jsx)(t.h1,{id:`geointlref-class`,children:`GeoIntlRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` facade for numbers, money, dates, names and locale-aware sorting. Methods return computed refs that track supported value refs and the explicit locale or `,(0,c.jsx)(t.code,{children:`GeoRef`}),` fallback. Use the nonreactive GeoIntl class when computed updates are unnecessary.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Saved computations`}),` — read results through `,(0,c.jsx)(t.code,{children:`.value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intl integration`}),` — number, date, display-name and relative-time options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Immutable sorting`}),` — input arrays are copied.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(code?: RefOrNormal<string>)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Use plain `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` when reactivity is unnecessary. `,(0,c.jsx)(t.code,{children:`RefOrNormal<T>`}),` accepts a value or Vue ref/computed, not a getter function. Options are ordinary objects unless their signature explicitly uses `,(0,c.jsx)(t.code,{children:`RefOrNormal`}),`. Relative results are computed when dependencies change; they do not run a timer. Supply `,(0,c.jsx)(t.code,{children:`todayValue`}),` for a fixed reference date. Month and weekday lists start with `,(0,c.jsx)(t.code,{children:`{ label: "", value: undefined }`}),`; months then use 1–12 and weekdays use native day codes in locale order. File-size unit promotion occurs above 1024, not at 1024. Numeric formatting delegates coercion and fallback behavior to `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = /*#__PURE__*/ ref('en-US')
const amount = /*#__PURE__*/ ref(0)
const formatter = /*#__PURE__*/ new GeoIntlRef(locale)
const formatted = /*#__PURE__*/ formatter.currency(amount, ref('USD'))
amount.value = 1234.5
locale.value = 'vi-VN'
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`display-names`,children:`Display names`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`display( value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions ): ComputedRef<string>`}),` — Returns a localized display name for the requested Intl type.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`languageName( value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle ): ComputedRef<string>`}),` — Returns the localized language name.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`countryName( value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle ): ComputedRef<string>`}),` — Returns the localized region name.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`numbers`,children:`Numbers`}),`
`,(0,c.jsx)(t.h4,{id:`number`,children:(0,c.jsx)(t.code,{children:`number`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`number( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats a numeric value or numeric string using locale rules and number options.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Configuration options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const number = /*#__PURE__*/ formatter.number(amount, { maximumFractionDigits: 2 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`percent`,children:(0,c.jsx)(t.code,{children:`percent`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`percent( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats a ratio as a percentage: 0.25 becomes 25%.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Configuration options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const percent = /*#__PURE__*/ formatter.percent(0.25)
`})}),`
`,(0,c.jsx)(t.h4,{id:`percentby100`,children:(0,c.jsx)(t.code,{children:`percentBy100`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`percentBy100( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Divides by 100 before percentage formatting: 25 becomes 25%.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Configuration options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const percent = /*#__PURE__*/ formatter.percentBy100(25)
`})}),`
`,(0,c.jsx)(t.h4,{id:`plural`,children:(0,c.jsx)(t.code,{children:`plural`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`plural( value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Selects a plural word form and formats its count. Pass pipe-separated word variants supported by `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`words: string`}),` — Pipe-separated plural word forms.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.PluralRulesOptions`}),` — Configuration options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Number formatting options for the count.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const label = /*#__PURE__*/ formatter.plural(amount, 'item|items')
`})}),`
`,(0,c.jsx)(t.h3,{id:`decimal-separator`,children:`Decimal separator`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`decimal(): ComputedRef<string>`}),` — Returns the locale decimal separator.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`money-and-units`,children:`Money and units`}),`
`,(0,c.jsx)(t.h4,{id:`currency`,children:(0,c.jsx)(t.code,{children:`currency`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`currency( value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly = false ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Formats money with a currency code or reactive option object. `,(0,c.jsx)(t.code,{children:`numberOnly`}),` omits the currency representation.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>`}),` — Currency code or Intl number options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`numberOnly = false`}),` — Omit the currency representation; defaults to false.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const money = /*#__PURE__*/ formatter.currency(amount, ref('USD'), false)
`})}),`
`,(0,c.jsx)(t.h4,{id:`unit`,children:(0,c.jsx)(t.code,{children:`unit`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`unit( value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats a numeric value with an Intl unit; it does not perform regional unit conversion.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — Unit identifier or Intl number options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const distance = /*#__PURE__*/ formatter.unit(amount, 'meter')
`})}),`
`,(0,c.jsx)(t.h4,{id:`sizefile`,children:(0,c.jsx)(t.code,{children:`sizeFile`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`sizeFile( value: RefOrNormal<NumberOrString>, unitOptions: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions = 'byte' ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats a file size starting with the supplied unit. String units are promoted when the value exceeds 1024; an options object is passed to unit formatting.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions: 'byte'     | 'kilobyte'     | 'megabyte'     | 'gigabyte'     | 'terabyte'     | 'petabyte'     | Intl.NumberFormatOptions = 'byte'`}),` — Unit identifier or Intl number options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const size = /*#__PURE__*/ formatter.sizeFile(2048, 'byte')
`})}),`
`,(0,c.jsx)(t.h3,{id:`currency-symbols`,children:`Currency symbols`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencySymbol( currency: RefOrNormal<string>, currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol' ): ComputedRef<string>`}),` — Returns the requested currency representation, falling back to its code.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`date-formatting`,children:`Date formatting`}),`
`,(0,c.jsx)(t.h4,{id:`date`,children:(0,c.jsx)(t.code,{children:`date`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`date( value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats a date with a Geo format type, date options and an optional 24-hour clock override.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Output format or event type(s), according to the signature.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Intl style or formatting options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Whether to use a 24-hour clock.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const date = /*#__PURE__*/ formatter.date(ref('2025-01-01'), 'date', 'long')
`})}),`
`,(0,c.jsx)(t.h3,{id:`calendar-names-and-time`,children:`Calendar names and time`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`month( value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month'] ): ComputedRef<string>`}),` — Returns the month name for the supplied date.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`months( style?: Intl.DateTimeFormatOptions['month'] ): ComputedRef<ItemValue<number | undefined>[]>`}),` — Returns the placeholder followed by 12 month entries numbered 1–12.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`weekday( value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday'] ): ComputedRef<string>`}),` — Returns the weekday name for the supplied date.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`weekdays( style?: Intl.DateTimeFormatOptions['weekday'] ): ComputedRef<ItemValue<number | undefined>[]>`}),` — Returns the placeholder followed by seven weekday entries in locale order.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>`}),` — Formats the supplied date as local time.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`relative-time`,children:`Relative time`}),`
`,(0,c.jsx)(t.h4,{id:`relative`,children:(0,c.jsx)(t.code,{children:`relative`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relative( value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats a date relative to the reference date using GeoIntl’s unit selection.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Intl style or formatting options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Reference date; omitted values use the current date when evaluated.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const relative = /*#__PURE__*/ formatter.relative('2025-01-03', 'long', new Date(2025, 0, 1))
`})}),`
`,(0,c.jsx)(t.h4,{id:`relativelimit`,children:(0,c.jsx)(t.code,{children:`relativeLimit`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relativeLimit( value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Uses relative formatting inside the inclusive ±limit-day interval. Outside that interval, delegates to date formatting with all supplied date options.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — Inclusive relative-time limit in days.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Reference date; omitted values use the current date when evaluated.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Relative-time style or Intl options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Date style or Intl date options for values outside the limit.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Output format or event type(s), according to the signature.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Whether to use a 24-hour clock.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const label = /*#__PURE__*/ formatter.relativeLimit('2025-01-05', 2, new Date(2025, 0, 1), 'long', 'long', 'date', true)
`})}),`
`,(0,c.jsx)(t.h4,{id:`relativebyvalue`,children:(0,c.jsx)(t.code,{children:`relativeByValue`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relativeByValue( value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Formats an explicit signed interval using the supplied relative-time unit.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: Intl.RelativeTimeFormatUnit`}),` — Unit identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Intl style or formatting options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const relative = /*#__PURE__*/ formatter.relativeByValue(-5, 'minute')
`})}),`
`,(0,c.jsx)(t.h3,{id:`locale-sorting`,children:`Locale sorting`}),`
`,(0,c.jsx)(t.h4,{id:`sort`,children:(0,c.jsx)(t.code,{children:`sort`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`sort<T>( data: RefOrNormal<T[]>, compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string] ): ComputedRef<T[]>`})}),`
`,(0,c.jsx)(t.p,{children:`Returns a sorted copy using locale collation. For object arrays, provide a mapper returning the two comparison strings.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormal<T[]>`}),` — Input array; it is not mutated.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]`}),` — Maps two entries to the two strings compared by Intl.Collator.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<T[]>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const sorted = /*#__PURE__*/ formatter.sort(ref([{ label: 'café' }, { label: 'apple' }]), (first, second) => [first.label, second.label])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};