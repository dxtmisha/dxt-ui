import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# Geo and Formatting`}),`
`,(0,c.jsx)(n.h1,{id:`geo-and-formatting`,children:`Geo and Formatting`}),`
`,(0,c.jsx)(n.p,{children:`Tools for managing localization (i18n), geographic data, and smart formatting. The system automatically detects user settings and ensures correct display of currencies, dates, and numbers according to government standards.`}),`
`,(0,c.jsx)(n.h2,{id:`localization-geo`,children:`Localization (Geo)`}),`
`,(0,c.jsx)(n.p,{children:`Manage global state for country, language, and timezone. Supports browser auto-detection and session persistence.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Global Settings
Geo.set('en-US', true)      // Set locale and persist in browser
Geo.setTimezone('-05:00')   // Override timezone offset
Geo.getCountry()            // 'US'

// Reference data
const list = Geo.getList()  // Full list of countries and languages
const current = Geo.getItem() // Current locale data object
const hasFR = Geo.hasCountry('FR') // Check if country is supported
`})}),`
`,(0,c.jsx)(n.h2,{id:`formatting-geointl`,children:`Formatting (GeoIntl)`}),`
`,(0,c.jsxs)(n.p,{children:[`A universal engine for data formatting built on native `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance()

// Numbers & Currencies
intl.currency(1000, 'USD')          // '$1,000.00'
intl.percent(0.15)                  // '15%'

// Dates & Time
intl.date(new Date(), 'full')       // Full long-form date
intl.relative(new Date() - 3600000) // '1 hour ago'
intl.relativeLimit(pastDate, 7)     // Relative (up to 7 days) or absolute date

// Utilities
intl.plural(5, 'apple|apples')      // Pluralization
intl.sizeFile(1024 * 1024)          // '1 MB'
intl.sort(['apple', 'Zebra', 'banana']) // Locale-aware smart sorting
intl.displayNames('DE', 'region')   // 'Germany' (localized)
`})}),`
`,(0,c.jsx)(n.h2,{id:`country-flags-geoflag`,children:`Country Flags (GeoFlag)`}),`
`,(0,c.jsx)(n.p,{children:`Retrieve flag icons and country names in native or system language.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const geoFlag = new GeoFlag('en-US')

// Specific country data
const ru = geoFlag.get('RU') // { icon: 'f-ru', country: 'Russia', area: '7', ... }

// List names in their native language
const native = geoFlag.getNational(['DE']) 
// [{ country: 'Germany', nationalCountry: 'Deutschland', ... }]
`})}),`
`,(0,c.jsx)(n.h2,{id:`phones-geophone`,children:`Phones (GeoPhone)`}),`
`,(0,c.jsx)(n.p,{children:`Auto-detect country by phone number and work with international masks.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

// Smart Detection
const { item, phone } = GeoPhone.getByPhone('14155552671') 
// item — country data (US), phone — cleaned number

// Formatting
GeoPhone.toMask(phone, item.mask) // '+1 (415) 555-2671'
GeoPhone.clear(' +1 (415) 555-2671 ') // '14155552671' (cleaning)
`})}),`
`,(0,c.jsx)(n.h2,{id:`lists-formatters`,children:`Lists (Formatters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Bulk transformation of object arrays. Automatically creates new properties with a `,(0,c.jsx)(n.code,{children:`Format`}),` suffix.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

const options = {
  price: { type: 'currency', options: 'USD' },
  birthday: { type: 'date' },
  'user.name': { type: 'name' }, // Combines firstName/lastName
  count: { type: 'plural', options: 'item|items' },
  status: { 
    transformation: (v) => v === 1 ? 'Ok' : 'Error' 
  }
}

// transformed — copy of data with priceFormat, birthdayFormat, etc.
const transformed = new Formatters(options, data).to()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};