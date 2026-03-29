import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/GeoFlag - Country Flags`}),`
`,(0,c.jsx)(n.h1,{id:`geoflag-class`,children:`GeoFlag Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for working with country flags. Provides a convenient interface for retrieving flag icons, localized country and language names based on a country code or locale. It uses `,(0,c.jsx)(n.code,{children:`Geo`}),` and `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` to resolve localized names.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flag Dictionary`}),` — A built-in static `,(0,c.jsx)(n.code,{children:`flags`}),` dictionary mapping ISO 3166-1 alpha-2 country codes to icon names.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Localized Names`}),` — Returns country and language names according to the current UI locale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`National Names`}),` — A dedicated `,(0,c.jsx)(n.code,{children:`getNational`}),` method returns country names in their own language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Filtering`}),` — List methods support filtering by an array of codes.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`GeoFlag`}),` instance with an optional country or locale code.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Country or locale code (e.g., `,(0,c.jsx)(n.code,{children:`'US'`}),`, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`). Defaults to the current locale from `,(0,c.jsx)(n.code,{children:`Geo`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Create with the current locale
const flag = new GeoFlag()

// Create for a specific country
const usFlag = new GeoFlag('en-US')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): GeoFlagItem | undefined`}),` — Returns a full data object for a country: language, country code, standard, and flag icon name. If no code is specified, uses the constructor's code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): string | undefined`}),` — Returns only the icon name for a given country's flag.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): GeoFlagItem[]`}),` — Returns an array of flag data objects. If `,(0,c.jsx)(n.code,{children:`codes`}),` is not provided, returns all countries from the dictionary.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): GeoFlagNational[]`}),` — Similar to `,(0,c.jsx)(n.code,{children:`getList`}),`, but additionally contains country names in the country's own language.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-mutation`,children:`Data Mutation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Changes the country code for the current instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`displaying-a-flag-for-the-current-country`,children:`Displaying a Flag for the Current Country`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const flag = new GeoFlag()
const item = flag.get()

console.log(item?.icon)    // 'f-us'
console.log(item?.country) // 'United States'
`})}),`
`,(0,c.jsx)(n.h3,{id:`list-of-all-countries-with-flags`,children:`List of All Countries with Flags`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const flag = new GeoFlag('en-US')
const countries = flag.getList()

countries.forEach(item => {
  console.log(\`\${item.icon}: \${item.country}\`)
})
// 'f-fr: France', 'f-de: Germany', ...
`})}),`
`,(0,c.jsx)(n.h3,{id:`list-with-national-names`,children:`List with National Names`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Returns the country name in both your language and the country's own language
const national = new GeoFlag('en-US').getNational(['FR', 'JP', 'RU'])

national.forEach(item => {
  console.log(\`\${item.country} (\${item.nationalCountry})\`)
})
// France (France), Japan (日本), Russia (Россия)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};