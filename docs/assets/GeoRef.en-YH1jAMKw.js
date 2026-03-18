import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Classes/GeoRef - Reactive Geographic Manager"}),`
`,e.jsx(n.h1,{id:"georef-class",children:"GeoRef Class"}),`
`,e.jsx(n.p,{children:"A static reactive class for managing global geographic data. It provides centralized access to information such as the current country, language, standard locale, and the first day of the week, ensuring that any changes are reflected across the application."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Reactivity"})," — uses a shared reactive state for geographic data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Centralized Management"})," — single point of truth for country and language settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Access"})," — methods can be called directly on the class without instantiation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"global-usage",children:"Global Usage"}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"GeoRef"})," is a static class, its methods are called directly without creating an instance. It serves as a single access point for the application's geographic settings."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watch } from 'vue'

// 1. Getting a reactive value
const country = GeoRef.getCountry()
console.log('Current country:', country.value)

// 2. Tracking changes
watch(GeoRef.getLanguage(), (lang) => {
  console.log('Language changed to:', lang)
})

// 3. Global location change
GeoRef.set('en-US') 
// All calls to getCountry, getLanguage, etc., will update automatically
`})}),`
`,e.jsx(n.h2,{id:"state-and-data-retrieval",children:"State and Data Retrieval"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): Ref<GeoItemFull>"})," — returns a reactive object containing the full geographical information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCountry(): ComputedRef<string>"})," — current country code (e.g., ",e.jsx(n.code,{children:"'US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLanguage(): ComputedRef<string>"})," — current language code (e.g., ",e.jsx(n.code,{children:"'en'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStandard(): ComputedRef<string>"})," — full standard locale format (e.g., ",e.jsx(n.code,{children:"'en-US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDay(): ComputedRef<string>"})," — first day of the week (e.g., ",e.jsx(n.code,{children:"'monday'"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsxs(n.p,{children:["Changes the global geographic data based on the provided code. This action instantly updates all reactive dependencies of ",e.jsx(n.code,{children:"GeoRef"})," across the entire application."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: string"}),' — country code, full form language-country (e.g., "en-US"), or one of them.']}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"geoitemfull",children:"GeoItemFull"}),`
`,e.jsx(n.p,{children:"Object structure with full geographical information."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"country: string"})," — current country code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"language: string"})," — current language code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"standard: string"})," — standard locale code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"firstDay: string"})," — first day of the week."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"countryAlternative?: string[]"})," — list of alternative country codes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"languageAlternative?: string[]"})," — list of alternative language codes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"zone?: string | null"})," — current timezone."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phoneCode?: string"})," — phone country code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phoneMask?: string | string[]"})," — typical phone number mask."]}),`
`]})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{g as default};
