import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Classes/GeoFlagRef - Reactive Country Flag Management"}),`
`,e.jsx(n.h1,{id:"geoflagref-class",children:"GeoFlagRef Class"}),`
`,e.jsx(n.p,{children:"A class for working with country flags in a reactive way. Ensures flag data stays synchronized with a reactive country code."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactivity"})," — automatic data updates when the country code changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Country Support"})," — retrieve information for multiple countries at once."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"National Names"})," — get country names in their native language."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Creates a new ",e.jsx(n.code,{children:"GeoFlagRef"})," instance for working with country flags. The class acts as a reactive wrapper around ",e.jsx(n.code,{children:"GeoFlag"})," and automatically updates data when the provided country code changes."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: RefOrNormal<string>"})," — the country code (e.g., ",e.jsx(n.code,{children:"'RU'"}),", ",e.jsx(n.code,{children:"'US'"}),"). Can be a regular string or a reactive ",e.jsx(n.code,{children:"ref"})," object. Defaults to the current location via ",e.jsx(n.code,{children:"Geo.getLocation()"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Initialization with a reactive code
const code = ref('US')
const geoFlag = new GeoFlagRef(code)

// 2. Using flag data
const flagIcon = geoFlag.getFlag() // ComputedRef with the icon for 'US'

// 3. Automatic update
code.value = 'FR' // flagIcon will update automatically
`})}),`
`,e.jsx(n.h2,{id:"state",children:"State"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCode(): Ref<string>"})," — Returns a reactive reference to the currently set country code."]}),`
`]}),`
`,e.jsx(n.h2,{id:"data-retrieval",children:"Data Retrieval"}),`
`,e.jsxs(n.p,{children:["All data retrieval methods return ",e.jsx(n.code,{children:"ComputedRef"}),", ensuring automatic synchronization with the current country code."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(code?: string): ComputedRef<GeoFlagItem | undefined>"})," — Returns comprehensive information about a country: name, icon, and other metadata. If ",e.jsx(n.code,{children:"code"})," is not provided, the current code from the state is used."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFlag(code?: string): ComputedRef<string | undefined>"})," — Returns the flag icon path or identifier for the specified country."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(codes?: string[]): ComputedRef<GeoFlagItem[]>"})," — Returns an array of flag data for a list of codes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>"})," — Returns a list of countries with names in their national languages."]}),`
`]}),`
`,e.jsx(n.h2,{id:"working-with-lists-getlist-vs-getnational",children:"Working with Lists: getList vs getNational"}),`
`,e.jsx(n.p,{children:"The class provides two methods for retrieving country lists, which differ in how the data is localized."}),`
`,e.jsxs(n.h3,{id:"getlist-local-list",children:[e.jsx(n.code,{children:"getList"})," (Local List)"]}),`
`,e.jsxs(n.p,{children:["Returns a list of countries where all names and labels are translated into the language of the ",e.jsxs(n.strong,{children:["current ",e.jsx(n.code,{children:"GeoFlagRef"})," instance"]}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"When to use:"})," when you need to display a list of countries in the UI in the user's language (e.g., in a country selector)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Result:"})," if ",e.jsx(n.code,{children:"GeoFlagRef"})," is set to English (",e.jsx(n.code,{children:"EN"}),'), you will get "Russia" for the code ',e.jsx(n.code,{children:"RU"}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"getnational-national-list",children:[e.jsx(n.code,{children:"getNational"})," (National List)"]}),`
`,e.jsxs(n.p,{children:["Returns a list where information about each country is presented in its ",e.jsx(n.strong,{children:"native (national) language"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"When to use:"})," when you need to show country names as they are called by the residents of those countries, or add a description in the native language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Result:"})," for the code ",e.jsx(n.code,{children:"US"}),', you will get "United States" (in English), and for ',e.jsx(n.code,{children:"VN"}),', you will get "Việt Nam" (in Vietnamese), regardless of the language set in ',e.jsx(n.code,{children:"GeoFlagRef"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"geoflagitem",children:"GeoFlagItem"}),`
`,e.jsx(n.p,{children:"An object containing basic information about a country and its flag."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"language: string"})," — Language name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"country: string"})," — Country name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"standard: string"})," — Standard locale code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icon?: string"})," — Flag icon identifier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label: string"})," — Display label (usually the country name)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Selection value (usually the country code)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"geoflagnational",children:"GeoFlagNational"}),`
`,e.jsxs(n.p,{children:["An extended object with national language information (inherits all fields from ",e.jsx(n.code,{children:"GeoFlagItem"}),")."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"description: string"})," — Description in the national language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nationalLanguage: string"})," — Language name in its native language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nationalCountry: string"})," — Country name in its native language."]}),`
`]})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
