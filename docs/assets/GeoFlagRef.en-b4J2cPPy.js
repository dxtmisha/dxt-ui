import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/GeoFlagRef - Reactive Country Flag Management`}),`
`,(0,c.jsx)(t.h1,{id:`geoflagref-class`,children:`GeoFlagRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive wrapper around `,(0,c.jsx)(t.code,{children:`GeoFlag`}),` for country and language metadata and flag icon identifiers. The internal base instance follows the supplied code ref or the current `,(0,c.jsx)(t.code,{children:`GeoRef`}),` location.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactive code`}),` — saved computed results follow code changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Explicit lookup`}),` — method code arguments override the constructor’s lookup code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Catalogs`}),` — filtered lists and national-language lists are available.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( code?: RefOrNormal<string | undefined> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string | undefined>`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getCode()`}),` returns a plain string snapshot. Other getters return computed refs. `,(0,c.jsx)(t.code,{children:`getFlag()`}),` returns an icon identifier such as `,(0,c.jsx)(t.code,{children:`f-vn`}),`, not an image URL. An omitted codes array requests the base catalog; an empty array returns an empty list. Catalog ordering and unknown-code handling are delegated to `,(0,c.jsx)(t.code,{children:`GeoFlag`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const code = /*#__PURE__*/ ref('vi-VN')
const flags = /*#__PURE__*/ new GeoFlagRef(code)
const icon = /*#__PURE__*/ flags.getFlag()
const countries = /*#__PURE__*/ flags.getList(ref(['VN', 'US']))
code.value = 'en-US'
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`current-code`,children:`Current code`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCode(): string`}),` — Returns the current base code as a string.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`single-lookup`,children:`Single lookup`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the country metadata for the explicit code or current base code.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<GeoFlagItem | undefined>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.get(code)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getlanguage`,children:(0,c.jsx)(t.code,{children:`getLanguage`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Returns language metadata for the explicit code or current base code.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<GeoFlagItem | undefined>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.getLanguage(code)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getflag`,children:(0,c.jsx)(t.code,{children:`getFlag`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the flag icon identifier for the explicit code or current base code.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Locale, country or language code; a ref is supported where declared.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string | undefined>`}),` — Computed result; read it through .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.getFlag(code)
`})}),`
`,(0,c.jsx)(t.h3,{id:`catalogs`,children:`Catalogs`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>`}),` — Returns country flag items, optionally filtered by reactive codes.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>`}),` — Returns language flag items, optionally filtered by reactive codes.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>`}),` — Returns country names in national languages.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>`}),` — Returns language names in national languages.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};