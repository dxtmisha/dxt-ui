import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/GeoFlagRef - Reactive Country Flag Management`}),`
`,(0,c.jsx)(n.h1,{id:`geoflagref-class`,children:`GeoFlagRef Class`}),`
`,(0,c.jsx)(n.p,{children:`A class for working with country flags in a reactive way. Ensures flag data stays synchronized with a reactive country code.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity`}),` — automatic data updates when the country code changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multiple Country Support`}),` — retrieve information for multiple countries at once.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`National Names`}),` — get country names in their native language.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` instance for working with country flags. The class acts as a reactive wrapper around `,(0,c.jsx)(n.code,{children:`GeoFlag`}),` and automatically updates data when the provided country code changes.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: RefOrNormal<string>`}),` — the country code (e.g., `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'US'`}),`). Can be a regular string or a reactive `,(0,c.jsx)(n.code,{children:`ref`}),` object. Defaults to the current location via `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Initialization with a reactive code
const code = ref('US')
const geoFlag = new GeoFlagRef(code)

// 2. Using flag data
const flagIcon = geoFlag.getFlag() // ComputedRef with the icon for 'US'

// 3. Automatic update
code.value = 'FR' // flagIcon will update automatically
`})}),`
`,(0,c.jsx)(n.h2,{id:`state`,children:`State`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): Ref<string>`}),` — Returns a reactive reference to the currently set country code.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsxs)(n.p,{children:[`All data retrieval methods return `,(0,c.jsx)(n.code,{children:`ComputedRef`}),`, ensuring automatic synchronization with the current country code.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): ComputedRef<GeoFlagItem | undefined>`}),` — Returns comprehensive information about a country: name, icon, and other metadata. If `,(0,c.jsx)(n.code,{children:`code`}),` is not provided, the current code from the state is used.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): ComputedRef<string | undefined>`}),` — Returns the flag icon path or identifier for the specified country.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): ComputedRef<GeoFlagItem[]>`}),` — Returns an array of flag data for a list of codes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>`}),` — Returns a list of countries with names in their national languages.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`working-with-lists-getlist-vs-getnational`,children:`Working with Lists: getList vs getNational`}),`
`,(0,c.jsx)(n.p,{children:`The class provides two methods for retrieving country lists, which differ in how the data is localized.`}),`
`,(0,c.jsxs)(n.h3,{id:`getlist-local-list`,children:[(0,c.jsx)(n.code,{children:`getList`}),` (Local List)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Returns a list of countries where all names and labels are translated into the language of the `,(0,c.jsxs)(n.strong,{children:[`current `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` instance`]}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`When to use:`}),` when you need to display a list of countries in the UI in the user's language (e.g., in a country selector).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Result:`}),` if `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` is set to English (`,(0,c.jsx)(n.code,{children:`EN`}),`), you will get "Russia" for the code `,(0,c.jsx)(n.code,{children:`RU`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`getnational-national-list`,children:[(0,c.jsx)(n.code,{children:`getNational`}),` (National List)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Returns a list where information about each country is presented in its `,(0,c.jsx)(n.strong,{children:`native (national) language`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`When to use:`}),` when you need to show country names as they are called by the residents of those countries, or add a description in the native language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Result:`}),` for the code `,(0,c.jsx)(n.code,{children:`US`}),`, you will get "United States" (in English), and for `,(0,c.jsx)(n.code,{children:`VN`}),`, you will get "Việt Nam" (in Vietnamese), regardless of the language set in `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`geoflagitem`,children:`GeoFlagItem`}),`
`,(0,c.jsx)(n.p,{children:`An object containing basic information about a country and its flag.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language: string`}),` — Language name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country: string`}),` — Country name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard: string`}),` — Standard locale code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icon?: string`}),` — Flag icon identifier.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label: string`}),` — Display label (usually the country name).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Selection value (usually the country code).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geoflagnational`,children:`GeoFlagNational`}),`
`,(0,c.jsxs)(n.p,{children:[`An extended object with national language information (inherits all fields from `,(0,c.jsx)(n.code,{children:`GeoFlagItem`}),`).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description: string`}),` — Description in the national language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalLanguage: string`}),` — Language name in its native language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalCountry: string`}),` — Country name in its native language.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};