import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/GeoUnitRef`}),`
`,(0,c.jsx)(t.h1,{id:`geounitref-class`,children:`GeoUnitRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive wrapper for `,(0,c.jsx)(t.code,{children:`GeoUnit`}),` that formats metric source values using regional units. Locale and numeric refs update saved computed results without recreating the wrapper.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Regional conversion`}),` — source units convert according to country settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactive inputs`}),` — values, locale and the general `,(0,c.jsx)(t.code,{children:`format()`}),` unit can be refs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Formatting options`}),` — accepts `,(0,c.jsx)(t.code,{children:`Intl.NumberFormatOptions`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(code?: RefOrNormal<string>)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Without an explicit locale, follows `,(0,c.jsx)(t.code,{children:`GeoRef.getLocation()`}),`. Explicit locale refs replace that fallback. Numeric strings are accepted. `,(0,c.jsx)(t.code,{children:`format()`}),` uses identifiers such as `,(0,c.jsx)(t.code,{children:`square-meter`}),` and `,(0,c.jsx)(t.code,{children:`kilometer-per-hour`}),`; unknown identifiers return the input as text. Options are ordinary objects rather than ref parameters.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoUnitRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = /*#__PURE__*/ ref('vi-VN')
const value = /*#__PURE__*/ ref(0)
const units = /*#__PURE__*/ new GeoUnitRef(locale)
const temperature = /*#__PURE__*/ units.celsius(value)
locale.value = 'en-US'
const generic = /*#__PURE__*/ units.format(value, ref('celsius'))
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`location`,children:`Location`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): ComputedRef<string>`}),` — Returns the resolved standard locale as a computed ref.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`general-conversion`,children:`General conversion`}),`
`,(0,c.jsx)(t.h4,{id:`format`,children:(0,c.jsx)(t.code,{children:`format`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`format( value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Selects the metric source unit reactively and delegates conversion and formatting to `,(0,c.jsx)(t.code,{children:`GeoUnit`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Value to format; a ref is supported where declared.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: RefOrNormal<string>`}),` — Unit identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Configuration options.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = /*#__PURE__*/ units.format(value, ref('meter'), { maximumFractionDigits: 2 })
`})}),`
`,(0,c.jsx)(t.h3,{id:`unit-shortcuts`,children:`Unit shortcuts`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`millimeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats millimeters; converts to `,(0,c.jsx)(t.code,{children:`inch`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`centimeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats centimeters; converts to `,(0,c.jsx)(t.code,{children:`inch`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`meter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats meters; converts to `,(0,c.jsx)(t.code,{children:`foot`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilometer( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats kilometers; converts to `,(0,c.jsx)(t.code,{children:`mile`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`squareMeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats square meters; converts to `,(0,c.jsx)(t.code,{children:`square-foot`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`hectare( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats hectares; converts to `,(0,c.jsx)(t.code,{children:`acre`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`gram( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats grams; converts to `,(0,c.jsx)(t.code,{children:`ounce`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilogram( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats kilograms; converts to `,(0,c.jsx)(t.code,{children:`pound`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`tonne( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats tonnes; converts to `,(0,c.jsx)(t.code,{children:`ton`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`milliliter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats milliliters; converts to `,(0,c.jsx)(t.code,{children:`fluid-ounce`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`liter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats liters; converts to `,(0,c.jsx)(t.code,{children:`gallon`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`celsius( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats degrees Celsius; converts to `,(0,c.jsx)(t.code,{children:`fahrenheit`}),` where regional settings require it.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilometerPerHour( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Formats kilometers per hour; converts to `,(0,c.jsx)(t.code,{children:`mile-per-hour`}),` where regional settings require it.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};