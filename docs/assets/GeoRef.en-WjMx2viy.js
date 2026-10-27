import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/GeoRef - Reactive Geographic Manager`}),`
`,(0,c.jsx)(t.h1,{id:`georef-class`,children:`GeoRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Static reactive facade for the current geographic context. It caches a shallow ref to `,(0,c.jsx)(t.code,{children:`Geo.getItem()`}),` and computed projections through `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Shared refs`}),` — repeated getters reuse cached refs in the current context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Locale updates`}),` — `,(0,c.jsx)(t.code,{children:`set()`}),` replaces the geographic item and refreshes projections.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR context`}),` — cache ownership follows `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Country metadata and requested locale are distinct: `,(0,c.jsx)(t.code,{children:`en-VN`}),` has country language `,(0,c.jsx)(t.code,{children:`vi`}),` and location language `,(0,c.jsx)(t.code,{children:`en`}),`. `,(0,c.jsx)(t.code,{children:`getFirstDay()`}),` returns a weekday token such as `,(0,c.jsx)(t.code,{children:`Mo`}),` or `,(0,c.jsx)(t.code,{children:`Su`}),`, not a numeric code. `,(0,c.jsx)(t.code,{children:`setValueDefault()`}),` configures the fallback; an existing locale cookie can take precedence. Initialize request storage before SSR use and read refs within their owning request context.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoRef } from '@dxtmisha/functional'

const country = /*#__PURE__*/ GeoRef.getCountry()
const language = /*#__PURE__*/ GeoRef.getLocationLanguage()
GeoRef.set('en-VN')
country.value // 'VN'
language.value // 'en'
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`current-context`,children:`Current context`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get(): Ref<GeoItemFull>`}),` — Returns the cached geographic item ref.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getCountry(): ComputedRef<string>`}),` — Returns the country code.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): ComputedRef<string>`}),` — Returns the country metadata language.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStandard(): ComputedRef<string>`}),` — Returns the standard locale code.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): ComputedRef<string>`}),` — Returns the first-weekday token from country metadata.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocation(): ComputedRef<string>`}),` — Returns the current location locale.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocationCountry(): ComputedRef<string>`}),` — Returns the country segment of the requested location.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocationLanguage(): ComputedRef<string>`}),` — Returns the language segment of the requested location.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`locale-configuration`,children:`Locale configuration`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`set(code: string): void`})}),`
`,(0,c.jsx)(t.p,{children:`Sets the current Geo locale with persistence enabled and replaces the reactive item.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — No return value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`GeoRef.set('vi-VN')
`})}),`
`,(0,c.jsx)(t.h4,{id:`setvaluedefault`,children:(0,c.jsx)(t.code,{children:`setValueDefault`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`setValueDefault(code?: string | (() => string)): void`})}),`
`,(0,c.jsx)(t.p,{children:`Sets the Geo fallback code or factory and refreshes the reactive item from Geo.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: string | (() => string)`}),` — Fallback locale code or factory.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — No return value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`GeoRef.setValueDefault(() => 'vi-VN')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};