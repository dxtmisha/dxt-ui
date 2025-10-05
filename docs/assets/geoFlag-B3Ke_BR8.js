import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DB_maGql.js";import{M as t}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/functional/en/Classes/GeoFlag"}),`
`,n.jsx(e.h1,{id:"geoflag-class",children:"GeoFlag Class"}),`
`,n.jsx(e.p,{children:"A class for working with country flags, providing methods to retrieve information about flags, countries, and languages based on geographic codes. Integrates with the geolocation system and supports localized country and language names."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Complete flag database"})," — contains flags for all countries worldwide (200+ countries)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Localized names"})," — retrieves country and language names in the current language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"National names"})," — gets names in the country's own language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible lists"})," — creates flag lists based on specific criteria"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Geo integration"})," — uses the geographic system to retrieve data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Type safety"})," — full TypeScript support with typed interfaces"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon system"})," — provides icon names for flags"]}),`
`]}),`
`,n.jsx(e.h2,{id:"constants",children:"Constants"}),`
`,n.jsx(e.h3,{id:"geo_flag_icon_name",children:n.jsx(e.code,{children:"GEO_FLAG_ICON_NAME"})}),`
`,n.jsx(e.p,{children:"Base name for flag icons."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GEO_FLAG_ICON_NAME } from '@dxtmisha/functional'

console.log(GEO_FLAG_ICON_NAME) // '@flag'
`})}),`
`,n.jsx(e.h2,{id:"static-properties",children:"Static Properties"}),`
`,n.jsx(e.h3,{id:"flags",children:n.jsx(e.code,{children:"flags"})}),`
`,n.jsx(e.p,{children:"Static object containing country code to flag icon name mappings."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional'

console.log(GeoFlag.flags.RU) // '@flag-ru'
console.log(GeoFlag.flags.US) // '@flag-us'
console.log(GeoFlag.flags.DE) // '@flag-de'

// Get all available country codes
const countryCodes = Object.keys(GeoFlag.flags)
console.log(countryCodes.length) // 200+ countries
`})}),`
`,n.jsx(e.h2,{id:"constructor",children:"Constructor"}),`
`,n.jsx(e.h3,{id:"constructor-1",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Creates a GeoFlag instance with the specified locale code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — country and language code (defaults to Geo.getLocation())"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional'

// Create with current locale
const geoFlag = new GeoFlag()

// Create with specific locale
const ruFlag = new GeoFlag('ru-RU')
const usFlag = new GeoFlag('en-US')
const deFlag = new GeoFlag('de-DE')
`})}),`
`,n.jsx(e.h2,{id:"instance-methods",children:"Instance Methods"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Returns information about the country and its flag."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — country code (optional, defaults to instance code)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoFlagItem | undefined"})," — object with flag information or undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('en-US')

// Get information about Russia
const russiaInfo = geoFlag.get('RU')
console.log(russiaInfo)
// {
//   language: 'Russian',
//   country: 'Russia',
//   standard: 'ru-RU',
//   icon: '@flag-ru',
//   label: 'Russia',
//   value: 'RU'
// }

// Get information about Germany in English
const germanyInfo = geoFlag.get('DE')
console.log(germanyInfo)
// {
//   language: 'German',
//   country: 'Germany',
//   standard: 'de-DE',
//   icon: '@flag-de',
//   label: 'Germany',
//   value: 'DE'
// }

// Get information about current locale
const currentInfo = geoFlag.get()
console.log(currentInfo?.country) // Country name in current language
`})}),`
`,n.jsx(e.h3,{id:"getflag",children:n.jsx(e.code,{children:"getFlag"})}),`
`,n.jsx(e.p,{children:"Gets the flag icon reference."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — country code (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string | undefined"})," — flag icon name or undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag()

// Get Russia flag icon
const russiaFlag = geoFlag.getFlag('RU')
console.log(russiaFlag) // '@flag-ru'

// Get Germany flag icon
const germanyFlag = geoFlag.getFlag('DE')
console.log(germanyFlag) // '@flag-de'

// Get flag for non-existent country
const unknownFlag = geoFlag.getFlag('XX')
console.log(unknownFlag) // undefined
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Gets a list of countries by array of codes."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — array of country codes (optional, defaults to all countries)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoFlagItem[]"})," — array of objects with flag information"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('en-US')

// Get list of European countries
const europeanCountries = geoFlag.getList(['RU', 'DE', 'FR', 'IT', 'ES'])
console.log(europeanCountries)
// [
//   { language: 'Russian', country: 'Russia', icon: '@flag-ru', ... },
//   { language: 'German', country: 'Germany', icon: '@flag-de', ... },
//   { language: 'French', country: 'France', icon: '@flag-fr', ... },
//   ...
// ]

// Get all available countries
const allCountries = geoFlag.getList()
console.log(allCountries.length) // 200+ countries

// Get CIS countries
const cisCountries = geoFlag.getList(['RU', 'BY', 'KZ', 'UA', 'UZ', 'KG', 'TJ', 'AM', 'AZ', 'GE', 'MD'])
`})}),`
`,n.jsx(e.h3,{id:"getnational",children:n.jsx(e.code,{children:"getNational"})}),`
`,n.jsx(e.p,{children:"Gets a list of countries with names in their national languages."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — array of country codes (optional)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoFlagNational[]"})," — array of objects with national names"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('en-US')

// Get list with national names
const nationalNames = geoFlag.getNational(['RU', 'DE', 'FR', 'JP'])
console.log(nationalNames)
// [
//   {
//     language: 'Russian',           // in English (current language)
//     country: 'Russia',             // in English (current language)
//     standard: 'ru-RU',
//     icon: '@flag-ru',
//     nationalLanguage: 'русский',   // in Russian (national language)
//     nationalCountry: 'Россия',     // in Russian (national language)
//     description: 'Россия'          // national name
//   },
//   {
//     language: 'German',
//     country: 'Germany',
//     standard: 'de-DE',
//     icon: '@flag-de',
//     nationalLanguage: 'Deutsch',
//     nationalCountry: 'Deutschland',
//     description: 'Deutschland'
//   },
//   ...
// ]
`})}),`
`,n.jsx(e.h3,{id:"setcode",children:n.jsx(e.code,{children:"setCode"})}),`
`,n.jsx(e.p,{children:"Changes the instance locale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — new country and language code"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"this"})," — for method chaining"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('en-US')

// Get information in English
let info = geoFlag.get('RU')
console.log(info?.country) // 'Russia'

// Switch locale to Russian
geoFlag.setCode('ru-RU')

// Get same information in Russian
info = geoFlag.get('RU')
console.log(info?.country) // 'Россия'
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"country-selector-component",children:"Country Selector Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class CountrySelector {
  constructor(targetElement, options = {}) {
    this.geoFlag = new GeoFlag(options.locale || 'en-US')
    this.element = targetElement
    this.onSelect = options.onSelect || (() => {})
    this.render()
  }

  render() {
    const countries = this.geoFlag.getList()
    this.element.innerHTML = countries.map(country => \`
      <div data-code="\${country.value}">\${country.country}</div>
    \`).join('')

    this.element.addEventListener('click', (e) => {
      const code = e.target.dataset.code
      if (code) this.onSelect(this.geoFlag.get(code))
    })
  }
}

// Usage
new CountrySelector(document.getElementById('selector'), {
  locale: 'en-US',
  onSelect: (country) => console.log('Selected:', country.country)
})
`})}),`
`,n.jsx(e.h3,{id:"multilingual-information",children:"Multilingual Information"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const guide = {
  getCountryInfo(code) {
    const locales = ['en-US', 'ru-RU', 'de-DE']
    return locales.reduce((acc, locale) => {
      acc[locale] = new GeoFlag(locale).get(code)
      return acc
    }, {})
  }
}

// Usage
const info = guide.getCountryInfo('DE')
console.log(info['en-US'].country) // 'Germany'
console.log(info['ru-RU'].country) // 'Германия'
`})}),`
`,n.jsx(e.h3,{id:"country-statistics",children:"Country Statistics"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const stats = {
  getLanguageStats() {
    const countries = new GeoFlag().getList()
    const langStats = {}

    countries.forEach(country => {
      const lang = country.language
      langStats[lang] = (langStats[lang] || 0) + 1
    })

    return Object.entries(langStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
  }
}

console.log(stats.getLanguageStats()) // Top 10 languages
`})}),`
`,n.jsx(e.p,{children:"The GeoFlag class provides a powerful tool for working with flags and country information, supporting localization, type safety, and flexible capabilities for creating international applications."})]})}function u(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{u as default};
