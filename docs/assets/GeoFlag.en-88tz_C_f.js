import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/functional-basic/Classes/GeoFlag - Country Flags"}),`
`,n.jsx(e.h1,{id:"geoflag-class",children:"GeoFlag Class"}),`
`,n.jsxs(e.p,{children:["A class for working with country flags. Provides a convenient interface for retrieving flag icons, localized country and language names based on a country code or locale. It uses ",n.jsx(e.code,{children:"Geo"})," and ",n.jsx(e.code,{children:"GeoIntl"})," to resolve localized names."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flag Dictionary"})," — A built-in static ",n.jsx(e.code,{children:"flags"})," dictionary mapping ISO 3166-1 alpha-2 country codes to icon names."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Localized Names"})," — Returns country and language names according to the current UI locale."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"National Names"})," — A dedicated ",n.jsx(e.code,{children:"getNational"})," method returns country names in their own language."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible Filtering"})," — List methods support filtering by an array of codes."]}),`
`]}),`
`,n.jsx(e.h2,{id:"initialization",children:"Initialization"}),`
`,n.jsxs(e.p,{children:["Creates a new ",n.jsx(e.code,{children:"GeoFlag"})," instance with an optional country or locale code."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — Country or locale code (e.g., ",n.jsx(e.code,{children:"'US'"}),", ",n.jsx(e.code,{children:"'en-US'"}),"). Defaults to the current locale from ",n.jsx(e.code,{children:"Geo"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Create with the current locale
const flag = new GeoFlag()

// Create for a specific country
const usFlag = new GeoFlag('en-US')
`})}),`
`,n.jsx(e.h2,{id:"methods",children:"Methods"}),`
`,n.jsx(e.h3,{id:"data-retrieval",children:"Data Retrieval"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(code?: string): GeoFlagItem | undefined"})," — Returns a full data object for a country: language, country code, standard, and flag icon name. If no code is specified, uses the constructor's code."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFlag(code?: string): string | undefined"})," — Returns only the icon name for a given country's flag."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getList(codes?: string[]): GeoFlagItem[]"})," — Returns an array of flag data objects. If ",n.jsx(e.code,{children:"codes"})," is not provided, returns all countries from the dictionary."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getNational(codes?: string[]): GeoFlagNational[]"})," — Similar to ",n.jsx(e.code,{children:"getList"}),", but additionally contains country names in the country's own language."]}),`
`]}),`
`,n.jsx(e.h3,{id:"data-mutation",children:"Data Mutation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setCode(code: string): this"})," — Changes the country code for the current instance."]}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"displaying-a-flag-for-the-current-country",children:"Displaying a Flag for the Current Country"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const flag = new GeoFlag()
const item = flag.get()

console.log(item?.icon)    // 'f-us'
console.log(item?.country) // 'United States'
`})}),`
`,n.jsx(e.h3,{id:"list-of-all-countries-with-flags",children:"List of All Countries with Flags"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const flag = new GeoFlag('en-US')
const countries = flag.getList()

countries.forEach(item => {
  console.log(\`\${item.icon}: \${item.country}\`)
})
// 'f-fr: France', 'f-de: Germany', ...
`})}),`
`,n.jsx(e.h3,{id:"list-with-national-names",children:"List with National Names"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Returns the country name in both your language and the country's own language
const national = new GeoFlag('en-US').getNational(['FR', 'JP', 'RU'])

national.forEach(item => {
  console.log(\`\${item.country} (\${item.nationalCountry})\`)
})
// France (France), Japan (日本), Russia (Россия)
`})})]})}function g(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{g as default};
