import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Geo - Global Geographic Data`}),`
`,(0,c.jsx)(n.h1,{id:`geo-class`,children:`Geo Class`}),`
`,(0,c.jsx)(n.p,{children:`A static utility class for centralized management of the application's geographical data. It handles language codes (ISO 639-1), country codes (ISO 3166-1 alpha-2), time zones, and localization. The class automatically detects environment settings and ensures consistent usage across the entire system.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Auto-Detection`}),` — intelligently identifies the user's locale via `,(0,c.jsx)(n.code,{children:`navigator.language`}),` or HTML attributes if not explicitly defined.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persistence`}),` — utilizes `,(0,c.jsx)(n.code,{children:`DataStorage`}),` to save and restore user-selected language and country preferences.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Media Database Integration`}),` — provides access to a comprehensive database of countries and languages from the `,(0,c.jsx)(n.code,{children:`@dxtmisha/media`}),` library.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Time Management`}),` — centralized setting and retrieval of time zone offsets for correct date handling.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Access`}),` — all methods are static, eliminating the need for instantiation (`,(0,c.jsx)(n.code,{children:`new Geo()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(n.p,{children:`Since the class is static, its methods can be called directly.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Get the current language code
console.log(Geo.getLanguage()) // e.g., 'en'

// Set a new locale and save it
Geo.set('fr-FR', true)

// Get the formatted time zone
console.log(Geo.getTimezoneFormat()) // e.g., '+00:00'
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`general-information`,children:`General Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): GeoItemFull`}),` — Returns the full data object for the current country and language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCountry(): string`}),` — Returns the 2-letter code of the current country (uppercase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): string`}),` — Returns the 2-letter code of the current language (lowercase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStandard(): string`}),` — Returns the combined locale string (e.g., `,(0,c.jsx)(n.code,{children:`'en-US'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Returns the code for the first day of the week for the current locale (e.g., `,(0,c.jsx)(n.code,{children:`'Mo'`}),`, `,(0,c.jsx)(n.code,{children:`'Su'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Returns the currently set locale as a string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): GeoItemFull`}),` — Returns a copy of the current settings object, accounting for the language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezone(): number`}),` — Returns the time zone offset in minutes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezoneFormat(): string`}),` — Returns the time zone offset in string format (e.g., `,(0,c.jsx)(n.code,{children:`'+03:00'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lists-and-search`,children:`Lists and Search`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoItem[]`}),` — Returns the full list of available countries and languages from the media database.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code?: string): GeoItemFull`}),` — Searches for data by language or country code (with fallback support).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCodeFull(code: string): GeoItem | undefined`}),` — Searches for an exact match by full locale code (language-country).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCountry(country: string): GeoItem | undefined`}),` — Searches for data by country code or alternative name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByLanguage(language: string): GeoItem | undefined`}),` — Searches for data by language code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(code: string): GeoItemFull`}),` — An alias for the `,(0,c.jsx)(n.code,{children:`getByCode`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-manipulation-setters`,children:`Data Manipulation (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(code: string, save?: boolean): void`}),` — Globally sets the current locale. If `,(0,c.jsx)(n.code,{children:`save`}),` is `,(0,c.jsx)(n.code,{children:`true`}),`, saves the choice to `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTimezone(timezone: number): void`}),` — Sets a custom time zone offset in minutes.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`utilities`,children:`Utilities`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toStandard(item: GeoItem): string`}),` — A static method for generating a standard `,(0,c.jsx)(n.code,{children:`'language-country'`}),` string from a `,(0,c.jsx)(n.code,{children:`GeoItem`}),` object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`manual-locale-setup-on-app-launch`,children:`Manual Locale Setup on App Launch`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Assume we retrieved user settings from an API
const userLocale = 'ja-JP'

Geo.set(userLocale)
console.log(Geo.getCountry()) // 'JP'
`})}),`
`,(0,c.jsx)(n.h3,{id:`working-with-time-zones`,children:`Working with Time Zones`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Setting the offset for Tokyo (UTC+9)
Geo.setTimezone(-540) // offset in minutes (9 * 60)

console.log(Geo.getTimezoneFormat()) // '+09:00'
`})}),`
`,(0,c.jsx)(n.h3,{id:`retrieving-country-list-for-a-selector`,children:`Retrieving Country List for a Selector`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const countries = Geo.getList().map(item => ({
  value: item.country,
  label: \`\${item.language.toUpperCase()} - \${item.country}\`
}))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};