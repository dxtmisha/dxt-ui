import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/GeoInstance - Geographic Data Instance`}),`
`,(0,c.jsx)(n.h1,{id:`geoinstance-class`,children:`GeoInstance Class`}),`
`,(0,c.jsxs)(n.p,{children:[`An instance-based class for managing geographical data. It handles language codes (ISO 639-1), country codes (ISO 3166-1 alpha-2), time zones, and localization. Unlike the static `,(0,c.jsx)(n.code,{children:`Geo`}),` class, `,(0,c.jsx)(n.code,{children:`GeoInstance`}),` allows creating independent objects with their own state, which is particularly useful for request isolation in SSR or multi-context environments.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Object-Oriented`}),` — allows creating multiple instances with different configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Auto-Detection`}),` — intelligently identifies the locale via storage or environment defaults during initialization.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Media Database Integration`}),` — provides access to a comprehensive database of countries and languages from the `,(0,c.jsx)(n.code,{children:`@dxtmisha/media`}),` library.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Time Management`}),` — instance-level setting and retrieval of time zone offsets.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(n.p,{children:`You can create a new instance of the class to manage a specific geographic context.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoInstance } from '@dxtmisha/functional-basic'

const geo = new GeoInstance()

// Get the current language code
console.log(geo.getLanguage()) // e.g., 'en'

// Set a new locale for this instance
geo.set('fr-FR')

// Get the formatted time zone
console.log(geo.getTimezoneFormat()) // e.g., '+00:00'
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): GeoItemFull`}),` — Returns the full data object for the current country and language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): GeoItemFull`}),` — Returns a copy of the current settings object, accounting for the dynamic language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCountry(): string`}),` — Returns the 2-letter code of the current country (uppercase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): string`}),` — Returns the 2-letter code of the current language (lowercase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStandard(): string`}),` — Returns the combined locale string based on current settings (e.g., `,(0,c.jsx)(n.code,{children:`'en-VN'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Returns the currently set raw locale string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Returns the code for the first day of the week (e.g., `,(0,c.jsx)(n.code,{children:`'Mo'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezone(): number`}),` — Returns the time zone offset in minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezoneFormat(): string`}),` — Returns the time zone offset in string format (e.g., `,(0,c.jsx)(n.code,{children:`'+03:00'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`selection`,children:`Selection`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoItem[]`}),` — Returns the full list of available countries and languages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(code: string): GeoItemFull`}),` — An alias for the `,(0,c.jsx)(n.code,{children:`getByCode`}),` method.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code?: string): GeoItemFull`}),` — Searches for data by code. `,(0,c.jsx)(n.strong,{children:`Priority: Language first`}),`, then Country. If `,(0,c.jsx)(n.code,{children:`en-VN`}),` is provided, it will return the record for English (`,(0,c.jsx)(n.code,{children:`en-US`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCodeFull(code: string): GeoItem | undefined`}),` — Searches for an exact match by full locale code (e.g., `,(0,c.jsx)(n.code,{children:`ru-RU`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCountry(country: string): GeoItem | undefined`}),` — Searches for data specifically by country code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByLanguage(language: string): GeoItem | undefined`}),` — Searches for data specifically by language code.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(code: string, save?: boolean): void`}),` — Sets the locale for the current instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTimezone(timezone: number): void`}),` — Sets a custom time zone offset in minutes.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toStandard(item: GeoItem): string`}),` — Generates a standard `,(0,c.jsx)(n.code,{children:`'language-country'`}),` string from a `,(0,c.jsx)(n.code,{children:`GeoItem`}),` object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`isolated-contexts`,children:`Isolated Contexts`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoInstance } from '@dxtmisha/functional-basic'

const geoEN = new GeoInstance()
geoEN.set('en-US')

const geoRU = new GeoInstance()
geoRU.set('ru-RU')

console.log(geoEN.getLanguage()) // 'en'
console.log(geoRU.getLanguage()) // 'ru'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};