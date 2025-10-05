import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DB_maGql.js";import{M as t}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/functional/en/Classes/Geo"}),`
`,n.jsx(e.h1,{id:"geo-class",children:"Geo Class"}),`
`,n.jsx(e.p,{children:"Static class for working with geographic data. Provides methods for determining current location, working with country and language codes, and managing time zones with automatic browser-based detection and localStorage caching."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic location detection"})," — determines current country and language based on browser data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Country and language code handling"})," — supports ",n.jsx(e.code,{children:"language-country"})," format (e.g., ",n.jsx(e.code,{children:"ru-RU"}),", ",n.jsx(e.code,{children:"en-US"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Time zone management"})," — getting and setting time zones"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"localStorage caching"})," — saves user's selected location"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alternative code support"})," — works with various country and language code variants"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Complete country database"})," — access to full list of countries with their data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible code parsing"})," — handles full codes, country codes, or language codes separately"]}),`
`]}),`
`,n.jsx(e.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Returns complete information about the current country."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — full geographic data object"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional'

const currentGeo = Geo.get()
console.log(currentGeo)
// {
//   country: 'US',
//   language: 'en',
//   standard: 'en-US',
//   firstDay: 'Su',
//   countryAlternative: ['USA', 'United States'],
//   languageAlternative: ['eng', 'english']
// }
`})}),`
`,n.jsx(e.h3,{id:"getcountry",children:n.jsx(e.code,{children:"getCountry"})}),`
`,n.jsx(e.p,{children:"Returns current country code."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — ISO country code (e.g., 'US', 'GB', 'RU')"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const country = Geo.getCountry()
console.log(country) // 'US'
`})}),`
`,n.jsx(e.h3,{id:"getlanguage",children:n.jsx(e.code,{children:"getLanguage"})}),`
`,n.jsx(e.p,{children:"Returns current language code."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — ISO language code (e.g., 'en', 'ru', 'fr')"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const language = Geo.getLanguage()
console.log(language) // 'en'
`})}),`
`,n.jsx(e.h3,{id:"getstandard",children:n.jsx(e.code,{children:"getStandard"})}),`
`,n.jsx(e.p,{children:"Returns full format according to standard (language-country)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — standard locale format"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const standard = Geo.getStandard()
console.log(standard) // 'en-US'
`})}),`
`,n.jsx(e.h3,{id:"getfirstday",children:n.jsx(e.code,{children:"getFirstDay"})}),`
`,n.jsx(e.p,{children:"Returns first day of week for current location."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — first day code ('Su' for Sunday, 'Mo' for Monday)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const firstDay = Geo.getFirstDay()
console.log(firstDay) // 'Su' (US) or 'Mo' (Europe)
`})}),`
`,n.jsx(e.h3,{id:"getlocation",children:n.jsx(e.code,{children:"getLocation"})}),`
`,n.jsx(e.p,{children:"Returns full format of current location."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — current location in language-country format"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const location = Geo.getLocation()
console.log(location) // 'en-US'
`})}),`
`,n.jsx(e.h3,{id:"getitem",children:n.jsx(e.code,{children:"getItem"})}),`
`,n.jsx(e.p,{children:"Returns processed data with current language included."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — geographic data with actual language"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const item = Geo.getItem()
console.log(item)
// Includes all data plus actual language from browser/settings
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Returns complete list of available countries."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItem[]"})," — array of all supported countries"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const allCountries = Geo.getList()
console.log(allCountries.length) // 200+ countries
console.log(allCountries[0])
// { country: 'AD', language: 'ca', standard: 'ca-AD', firstDay: 'Mo', ... }
`})}),`
`,n.jsx(e.h2,{id:"data-search-methods",children:"Data Search Methods"}),`
`,n.jsx(e.h3,{id:"getbycode",children:n.jsx(e.code,{children:"getByCode"})}),`
`,n.jsx(e.p,{children:"Returns country data by its code (full, country, or language)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — country code in various formats (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — geographic data for specified code"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Full code
const dataFull = Geo.getByCode('en-US')
console.log(dataFull.country) // 'US'

// Country code only
const dataCountry = Geo.getByCode('GB')
console.log(dataCountry.language) // 'en'

// Language code only
const dataLanguage = Geo.getByCode('fr')
console.log(dataLanguage.country) // 'FR'

// Fallback to first country if invalid
const dataDefault = Geo.getByCode('invalid')
console.log(dataDefault) // First country from list
`})}),`
`,n.jsx(e.h3,{id:"getbycodefull",children:n.jsx(e.code,{children:"getByCodeFull"})}),`
`,n.jsx(e.p,{children:"Returns country data by full language-country code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — string in language-country format"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItem | undefined"})," — country data or undefined if not found"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const data = Geo.getByCodeFull('ru-RU')
if (data) {
  console.log(data.country) // 'RU'
  console.log(data.language) // 'ru'
}

// Also supports reverse format
const dataReverse = Geo.getByCodeFull('GB-en')
console.log(dataReverse?.country) // 'GB'
`})}),`
`,n.jsx(e.h3,{id:"getbycountry",children:n.jsx(e.code,{children:"getByCountry"})}),`
`,n.jsx(e.p,{children:"Returns country data by country code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — ISO country code"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItem | undefined"})," — country data or undefined if not found"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const data = Geo.getByCountry('DE')
if (data) {
  console.log(data.language) // 'de'
  console.log(data.standard) // 'de-DE'
}
`})}),`
`,n.jsx(e.h3,{id:"getbylanguage",children:n.jsx(e.code,{children:"getByLanguage"})}),`
`,n.jsx(e.p,{children:"Returns country data by language code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — ISO language code"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItem | undefined"})," — country data or undefined if not found"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const data = Geo.getByLanguage('es')
if (data) {
  console.log(data.country) // 'ES'
  console.log(data.standard) // 'es-ES'
}
`})}),`
`,n.jsx(e.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Sets new location and saves it to localStorage."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — location code in various formats (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Geo"})," — class reference for chaining"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Set by full code
Geo.set('fr-FR')

// Set by country code
Geo.set('IT')

// Set by language code
Geo.set('ja')

// Chaining
Geo.set('de-DE').setTimezone(-60)
`})}),`
`,n.jsx(e.h3,{id:"settimezone",children:n.jsx(e.code,{children:"setTimezone"})}),`
`,n.jsx(e.p,{children:"Sets time zone offset."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"timezone: number"})," — time zone offset in minutes"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Geo"})," — class reference for chaining"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Set UTC+3 (Moscow time)
Geo.setTimezone(-180)

// Set UTC-5 (New York time)
Geo.setTimezone(300)

// Chaining
Geo.setTimezone(-60).set('de-DE')
`})}),`
`,n.jsx(e.h2,{id:"utility-methods",children:"Utility Methods"}),`
`,n.jsx(e.h3,{id:"tocountry",children:n.jsx(e.code,{children:"toCountry"})}),`
`,n.jsx(e.p,{children:"Converts country code to uppercase format."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — country code in any case"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — uppercase country code"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const country = Geo.toCountry('us')
console.log(country) // 'US'
`})}),`
`,n.jsx(e.h3,{id:"tolanguage",children:n.jsx(e.code,{children:"toLanguage"})}),`
`,n.jsx(e.p,{children:"Converts language code to lowercase format."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — language code in any case"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — lowercase language code"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const language = Geo.toLanguage('EN')
console.log(language) // 'en'
`})}),`
`,n.jsx(e.h3,{id:"tofull",children:n.jsx(e.code,{children:"toFull"})}),`
`,n.jsx(e.p,{children:"Converts basic geo item to full format with additional data."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: GeoItem"})," — basic geographic item"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — extended geographic data"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const basicItem = { country: 'US', language: 'en', standard: 'en-US', firstDay: 'Su' }
const fullItem = Geo.toFull(basicItem)
console.log(fullItem.countryAlternative) // ['USA', 'United States', ...]
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional'

// Get current location info
console.log('Current country:', Geo.getCountry())
console.log('Current language:', Geo.getLanguage())
console.log('Full location:', Geo.getLocation())
console.log('First day of week:', Geo.getFirstDay())
`})}),`
`,n.jsx(e.h3,{id:"setting-custom-location",children:"Setting Custom Location"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Set location to Germany
Geo.set('de-DE')

console.log('New country:', Geo.getCountry()) // 'DE'
console.log('New language:', Geo.getLanguage()) // 'de'
console.log('First day:', Geo.getFirstDay()) // 'Mo'
`})}),`
`,n.jsx(e.h3,{id:"working-with-country-data",children:"Working with Country Data"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Find country by different codes
const russiaByFull = Geo.getByCode('ru-RU')
const russiaByCountry = Geo.getByCode('RU')
const russiaByLanguage = Geo.getByCode('ru')

console.log('All return Russia:', russiaByFull.country) // 'RU'
`})}),`
`,n.jsx(e.h3,{id:"building-country-selector",children:"Building Country Selector"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Get all countries for dropdown
const countries = Geo.getList()

const countryOptions = countries.map(country => ({
  value: country.standard,
  label: \`\${country.language}-\${country.country}\`,
  country: country.country,
  language: country.language
}))

console.log('Total countries:', countryOptions.length)
`})})]})}function u(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{u as default};
