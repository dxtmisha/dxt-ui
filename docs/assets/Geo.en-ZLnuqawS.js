import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/Geo - Global Geographic Data"}),`
`,e.jsx(n.h1,{id:"geo-class",children:"Geo Class"}),`
`,e.jsx(n.p,{children:"A static utility class for centralized management of the application's geographical data. It handles language codes (ISO 639-1), country codes (ISO 3166-1 alpha-2), time zones, and localization. The class automatically detects environment settings and ensures consistent usage across the entire system."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-Detection"})," — intelligently identifies the user's locale via ",e.jsx(n.code,{children:"navigator.language"})," or HTML attributes if not explicitly defined."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistence"})," — utilizes ",e.jsx(n.code,{children:"DataStorage"})," to save and restore user-selected language and country preferences."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Media Database Integration"})," — provides access to a comprehensive database of countries and languages from the ",e.jsx(n.code,{children:"@dxtmisha/media"})," library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Time Management"})," — centralized setting and retrieval of time zone offsets for correct date handling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Access"})," — all methods are static, eliminating the need for instantiation (",e.jsx(n.code,{children:"new Geo()"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.p,{children:"Since the class is static, its methods can be called directly."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional-basic'

// Get the current language code
console.log(Geo.getLanguage()) // e.g., 'en'

// Set a new locale and save it
Geo.set('fr-FR', true)

// Get the formatted time zone
console.log(Geo.getTimezoneFormat()) // e.g., '+00:00'
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"general-information",children:"General Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): GeoItemFull"})," — Returns the full data object for the current country and language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCountry(): string"})," — Returns the 2-letter code of the current country (uppercase)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLanguage(): string"})," — Returns the 2-letter code of the current language (lowercase)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStandard(): string"})," — Returns the combined locale string (e.g., ",e.jsx(n.code,{children:"'en-US'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDay(): string"})," — Returns the code for the first day of the week for the current locale (e.g., ",e.jsx(n.code,{children:"'Mo'"}),", ",e.jsx(n.code,{children:"'Su'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocation(): string"})," — Returns the currently set locale as a string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): GeoItemFull"})," — Returns a copy of the current settings object, accounting for the language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimezone(): number"})," — Returns the time zone offset in minutes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimezoneFormat(): string"})," — Returns the time zone offset in string format (e.g., ",e.jsx(n.code,{children:"'+03:00'"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"lists-and-search",children:"Lists and Search"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): GeoItem[]"})," — Returns the full list of available countries and languages from the media database."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByCode(code?: string): GeoItemFull"})," — Searches for data by language or country code (with fallback support)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByCodeFull(code: string): GeoItem | undefined"})," — Searches for an exact match by full locale code (language-country)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByCountry(country: string): GeoItem | undefined"})," — Searches for data by country code or alternative name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByLanguage(language: string): GeoItem | undefined"})," — Searches for data by language code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"find(code: string): GeoItemFull"})," — An alias for the ",e.jsx(n.code,{children:"getByCode"})," method."]}),`
`]}),`
`,e.jsx(n.h3,{id:"data-manipulation-setters",children:"Data Manipulation (Setters)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(code: string, save?: boolean): void"})," — Globally sets the current locale. If ",e.jsx(n.code,{children:"save"})," is ",e.jsx(n.code,{children:"true"}),", saves the choice to ",e.jsx(n.code,{children:"localStorage"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setTimezone(timezone: number): void"})," — Sets a custom time zone offset in minutes."]}),`
`]}),`
`,e.jsx(n.h3,{id:"utilities",children:"Utilities"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toStandard(item: GeoItem): string"})," — A static method for generating a standard ",e.jsx(n.code,{children:"'language-country'"})," string from a ",e.jsx(n.code,{children:"GeoItem"})," object."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"manual-locale-setup-on-app-launch",children:"Manual Locale Setup on App Launch"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional-basic'

// Assume we retrieved user settings from an API
const userLocale = 'ja-JP'

Geo.set(userLocale)
console.log(Geo.getCountry()) // 'JP'
`})}),`
`,e.jsx(n.h3,{id:"working-with-time-zones",children:"Working with Time Zones"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Setting the offset for Tokyo (UTC+9)
Geo.setTimezone(-540) // offset in minutes (9 * 60)

console.log(Geo.getTimezoneFormat()) // '+09:00'
`})}),`
`,e.jsx(n.h3,{id:"retrieving-country-list-for-a-selector",children:"Retrieving Country List for a Selector"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"const countries = Geo.getList().map(item => ({\n  value: item.country,\n  label: `${item.language.toUpperCase()} - ${item.country}`\n}))\n"})})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{g as default};
