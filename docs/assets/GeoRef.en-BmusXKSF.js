import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Classes/GeoRef - Reactive Geographic Manager`}),`
`,(0,c.jsx)(n.h1,{id:`georef-class`,children:`GeoRef Class`}),`
`,(0,c.jsx)(n.p,{children:`A static reactive class for managing global geographic data. It provides centralized access to information such as the current country, language, standard locale, and the first day of the week, ensuring that any changes are reflected across the application.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Reactivity`}),` — uses a shared reactive state for geographic data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Management`}),` — single point of truth for country and language settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Access`}),` — methods can be called directly on the class without instantiation.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`global-usage`,children:`Global Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Since `,(0,c.jsx)(n.code,{children:`GeoRef`}),` is a static class, its methods are called directly without creating an instance. It serves as a single access point for the application's geographic settings.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GeoRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(n.h2,{id:`state-and-data-retrieval`,children:`State and Data Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): Ref<GeoItemFull>`}),` — returns a reactive object containing the full geographical information.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCountry(): ComputedRef<string>`}),` — current country code (e.g., `,(0,c.jsx)(n.code,{children:`'US'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): ComputedRef<string>`}),` — current language code (e.g., `,(0,c.jsx)(n.code,{children:`'en'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStandard(): ComputedRef<string>`}),` — full standard locale format (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): ComputedRef<string>`}),` — first day of the week (e.g., `,(0,c.jsx)(n.code,{children:`'monday'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`actions`,children:`Actions`}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Changes the global geographic data based on the provided code. This action instantly updates all reactive dependencies of `,(0,c.jsx)(n.code,{children:`GeoRef`}),` across the entire application.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — country code, full form language-country (e.g., "en-US"), or one of them.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`geoitemfull`,children:`GeoItemFull`}),`
`,(0,c.jsx)(n.p,{children:`Object structure with full geographical information.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country: string`}),` — current country code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language: string`}),` — current language code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard: string`}),` — standard locale code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstDay: string`}),` — first day of the week.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`countryAlternative?: string[]`}),` — list of alternative country codes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`languageAlternative?: string[]`}),` — list of alternative language codes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`zone?: string | null`}),` — current timezone.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phoneCode?: string`}),` — phone country code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phoneMask?: string | string[]`}),` — typical phone number mask.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};