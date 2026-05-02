import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/GeoFlag - Country Flags`}),`
`,(0,c.jsx)(n.h1,{id:`geoflag-class`,children:`GeoFlag Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for working with country flags and geographic information. It provides a convenient interface for retrieving flag icons, localized country names, and languages. It uses the `,(0,c.jsx)(n.code,{children:`Geo`}),` and `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` singletons to correctly resolve data based on the current locale.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flag Dictionary`}),` — built-in static `,(0,c.jsx)(n.code,{children:`flags`}),` list mapping ISO 3166-1 alpha-2 codes to icon names.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Localized Data`}),` — automatic translation of country and language names into the current interface language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`National Support`}),` — the ability to retrieve country names in their "native" language (e.g., "Japan" and "日本" simultaneously).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scalability`}),` — support for filtering and retrieving full lists for country selectors.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To create an instance, use the `,(0,c.jsx)(n.code,{children:`GeoFlag(code)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — country or locale code (e.g., `,(0,c.jsx)(n.code,{children:`'US'`}),`, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`). If not specified, the current locale from the `,(0,c.jsx)(n.code,{children:`Geo`}),` system is used.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// With current locale
const flag = new GeoFlag()

// For a specific country
const usFlag = new GeoFlag('en-US')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): GeoFlagItem | undefined`}),` — Returns a full data object about a country.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): string | undefined`}),` — Returns only the flag icon identifier (e.g., `,(0,c.jsx)(n.code,{children:`'f-us'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lists`,children:`Lists`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): GeoFlagItem[]`}),` — Returns an array of country data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): GeoFlagNational[]`}),` — Returns a list of countries with national names.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Changes the base locale for the current instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`list-methods`,children:`List Methods`}),`
`,(0,c.jsx)(n.p,{children:`The main difference between the methods lies in the language in which the country and language names are returned:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getList`})}),` — returns names only in the language set in the class instance (e.g., everything in English).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getNational`})}),` — returns names in your interface language + adds original names in the country's own language (e.g., "Japan" and "日本").`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`example-of-the-difference-in-result`,children:`Example of the difference in result:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const geo = new GeoFlag('en-US') // English language is set

// 1. getList returns only the translation
const list = geo.getList(['JP']) 
/* 
[{ country: 'Japan', ... }] 
*/

// 2. getNational returns the translation + original name
const national = geo.getNational(['JP']) 
/* 
[{ 
  country: 'Japan', 
  nationalCountry: '日本', 
  ... 
}] 
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`geoflagitem`,children:(0,c.jsx)(n.code,{children:`GeoFlagItem`})}),`
`,(0,c.jsx)(n.p,{children:`Basic flag information object.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country`}),`: string — Localized country name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language`}),`: string — Localized language name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard`}),`: string — Full locale standard (e.g., `,(0,c.jsx)(n.code,{children:`en-US`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icon`}),`: string — Flag icon name (prefix `,(0,c.jsx)(n.code,{children:`f-`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label`}),`: string — Display label (matches `,(0,c.jsx)(n.code,{children:`country`}),` by default).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value`}),`: string — Country code (ISO alpha-2).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geoflagnational`,children:(0,c.jsx)(n.code,{children:`GeoFlagNational`})}),`
`,(0,c.jsxs)(n.p,{children:[`Extends `,(0,c.jsx)(n.code,{children:`GeoFlagItem`}),` with additional fields:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalCountry`}),`: string — Country name in its native language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalLanguage`}),`: string — Language name in its native language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description`}),`: string — Brief description (duplicates `,(0,c.jsx)(n.code,{children:`nationalCountry`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`list-of-popular-countries-with-national-names`,children:`List of Popular Countries with National Names`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const geo = new GeoFlag('en-US')
const list = geo.getNational(['US', 'CN', 'JP'])

/* 
Result:
[
  { 
    country: 'United States', 
    nationalCountry: 'United States', 
    icon: 'f-us', 
    ... 
  },
  { 
    country: 'China', 
    nationalCountry: '中国', 
    icon: 'f-cn', 
    ... 
  },
  { 
    country: 'Japan', 
    nationalCountry: '日本', 
    icon: 'f-jp', 
    ... 
  }
]
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};