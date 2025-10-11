import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/en/Types/geoTypes"}),`
`,n.jsx(e.h1,{id:"geographic-types-geotypes",children:"Geographic Types (geoTypes)"}),`
`,n.jsx(e.p,{children:"A set of specialized TypeScript types for working with geographic data, localization, date formatting, and phone numbers. Ensures type safety when working with international standards and regional settings."}),`
`,n.jsx(e.h2,{id:"date-formatting-types",children:"Date Formatting Types"}),`
`,n.jsx(e.h3,{id:"geodate",children:n.jsx(e.code,{children:"GeoDate"})}),`
`,n.jsx(e.p,{children:"Union type for date format options in geographic context."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second'

// Usage
function formatDate(date: Date, format: GeoDate): string {
  const intl = new Intl.DateTimeFormat('en-US', getDateFormatOptions(format))
  return intl.format(date)
}

const formats: GeoDate[] = [
  'full',        // Full date and time
  'datetime',    // Date with time
  'date',        // Date only
  'year-month',  // Year and month
  'time',        // Time only
  'hour-minute'  // Hours and minutes
]
`})}),`
`,n.jsx(e.h3,{id:"geofirstday",children:n.jsx(e.code,{children:"GeoFirstDay"})}),`
`,n.jsx(e.p,{children:"First day of week code (0=Sunday, 1=Monday, 6=Saturday)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoFirstDay = 1 | 6 | 0

// Usage
function getWeekStart(locale: string): GeoFirstDay {
  // Russia, Europe - Monday
  if (locale.startsWith('ru') || locale.startsWith('de')) return 1
  // USA, Canada - Sunday
  if (locale.startsWith('en-US') || locale.startsWith('en-CA')) return 0
  // Middle East - Saturday
  if (locale.startsWith('ar')) return 6
  return 1 // Default Monday
}

const firstDay: GeoFirstDay = getWeekStart('en-US') // 0
`})}),`
`,n.jsx(e.h3,{id:"geohours",children:n.jsx(e.code,{children:"GeoHours"})}),`
`,n.jsx(e.p,{children:"Hour format type (12-hour or 24-hour)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoHours = '12' | '24'

// Usage
function formatTime(date: Date, hoursFormat: GeoHours): string {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: hoursFormat === '12'
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

const time12 = formatTime(new Date(), '12') // "2:30 PM"
const time24 = formatTime(new Date(), '24') // "14:30"
`})}),`
`,n.jsx(e.h3,{id:"geotimezonestyle",children:n.jsx(e.code,{children:"GeoTimeZoneStyle"})}),`
`,n.jsx(e.p,{children:"Timezone display style options."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC'

// Usage
function formatTimeZone(date: Date, style: GeoTimeZoneStyle): string {
  switch (style) {
    case 'minute': return '-0500'
    case 'hour': return '-05'
    case 'ISO8601': return '-05:00'
    case 'RFC': return '-0500 (EST)'
    default: return '-05:00'
  }
}
`})}),`
`,n.jsx(e.h2,{id:"geographic-data-interfaces",children:"Geographic Data Interfaces"}),`
`,n.jsx(e.h3,{id:"geoitem",children:n.jsx(e.code,{children:"GeoItem"})}),`
`,n.jsx(e.p,{children:"Geographic item interface for country and language data."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoItem {
  country: string
  countryAlternative?: string[]
  language: string
  languageAlternative?: string[]
  firstDay?: string | null
  zone?: string | null
  phoneCode?: string
  phoneWithin?: string
  phoneMask?: string | string[]
  nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string
}

// Usage
const usaItem: GeoItem = {
  country: 'US',
  countryAlternative: ['USA'],
  language: 'en',
  languageAlternative: ['eng'],
  firstDay: '0',
  zone: 'America/New_York',
  phoneCode: '+1',
  phoneWithin: '1',
  phoneMask: '+1 (###) ###-####',
  nameFormat: 'fl' // first last
}

const germanyItem: GeoItem = {
  country: 'DE',
  language: 'de',
  firstDay: '1',
  zone: 'Europe/Berlin',
  phoneCode: '+49',
  phoneMask: '+49 ## ########',
  nameFormat: 'fl'
}
`})}),`
`,n.jsx(e.h3,{id:"geoitemfull",children:n.jsx(e.code,{children:"GeoItemFull"})}),`
`,n.jsx(e.p,{children:"Extended geographic item with required fields."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  standard: string
  firstDay: string
}

// Usage
const fullGeoData: GeoItemFull = {
  country: 'US',
  language: 'en',
  standard: 'en-US',
  firstDay: '0', // required field
  zone: 'America/New_York',
  phoneCode: '+1',
  phoneMask: '+1 (###) ###-####'
}

function processGeoData(data: GeoItemFull) {
  console.log(\`Locale: \${data.standard}\`)
  console.log(\`First day: \${data.firstDay}\`)
  console.log(\`Phone: \${data.phoneCode}\`)
}
`})}),`
`,n.jsx(e.h2,{id:"country-flag-interfaces",children:"Country Flag Interfaces"}),`
`,n.jsx(e.h3,{id:"geoflagitem",children:n.jsx(e.code,{children:"GeoFlagItem"})}),`
`,n.jsx(e.p,{children:"Geographic flag item for country flag display."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoFlagItem {
  language: string
  country: string
  standard: string
  icon?: string
  label: string
  value: string
}

// Usage
const countryFlags: GeoFlagItem[] = [
  {
    language: 'English',
    country: 'United States',
    standard: 'en-US',
    icon: '@flag-us',
    label: 'United States',
    value: 'US'
  },
  {
    language: 'русский',
    country: 'Russia',
    standard: 'ru-RU',
    icon: '@flag-ru',
    label: 'Russia',
    value: 'RU'
  }
]

function renderCountrySelect(flags: GeoFlagItem[]) {
  return flags.map(flag => ({
    label: flag.label,
    value: flag.value,
    icon: flag.icon
  }))
}
`})}),`
`,n.jsx(e.h3,{id:"geoflagnational",children:n.jsx(e.code,{children:"GeoFlagNational"})}),`
`,n.jsx(e.p,{children:"Extended geographic flag item with national language information."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoFlagNational extends GeoFlagItem {
  description: string
  nationalLanguage: string
  nationalCountry: string
}

// Usage
const nationalFlags: GeoFlagNational[] = [
  {
    language: 'English',
    country: 'United States',
    standard: 'en-US',
    icon: '@flag-us',
    label: 'United States',
    value: 'US',
    description: 'United States of America',
    nationalLanguage: 'English',
    nationalCountry: 'United States'
  },
  {
    language: 'русский',
    country: 'Russia',
    standard: 'ru-RU',
    icon: '@flag-ru',
    label: 'Russia',
    value: 'RU',
    description: 'Российская Федерация',
    nationalLanguage: 'русский',
    nationalCountry: 'Россия'
  }
]
`})}),`
`,n.jsx(e.h2,{id:"phone-number-interfaces",children:"Phone Number Interfaces"}),`
`,n.jsx(e.h3,{id:"geophonevalue",children:n.jsx(e.code,{children:"GeoPhoneValue"})}),`
`,n.jsx(e.p,{children:"Phone number value with codes and mask."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoPhoneValue {
  phone: number
  within: number
  mask: string[]
  value: string
}

// Usage
const usaPhone: GeoPhoneValue = {
  phone: 1,     // international code
  within: 1,    // domestic code
  mask: ['+1 (###) ###-####'],
  value: 'US'
}

const germanyPhone: GeoPhoneValue = {
  phone: 49,
  within: 0,
  mask: ['+49 ## ########', '0## ########'],
  value: 'DE'
}
`})}),`
`,n.jsx(e.h3,{id:"geophonemap",children:n.jsx(e.code,{children:"GeoPhoneMap"})}),`
`,n.jsx(e.p,{children:"Phone number map with nested items."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoPhoneMap {
  items: GeoPhoneValue[]
  info: GeoPhoneValue | undefined
  value: string | undefined
  mask: string[]
  maskFull: string[]
  next: Record<string, GeoPhoneMap>
}

// Usage
const phoneMap: GeoPhoneMap = {
  items: [usaPhone, germanyPhone],
  info: usaPhone,
  value: 'US',
  mask: ['+1 (###) ###-####'],
  maskFull: ['+1 (###) ###-####'],
  next: {
    '1': {
      items: [usaPhone],
      info: usaPhone,
      value: 'US',
      mask: ['(###) ###-####'],
      maskFull: ['+1 (###) ###-####'],
      next: {}
    }
  }
}
`})}),`
`,n.jsx(e.h3,{id:"geophonemapinfo",children:n.jsx(e.code,{children:"GeoPhoneMapInfo"})}),`
`,n.jsx(e.p,{children:"Phone number map information."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoPhoneMapInfo {
  item?: GeoPhoneMap
  phone?: string
}

// Usage
function getPhoneInfo(phoneNumber: string): GeoPhoneMapInfo {
  const phoneCode = phoneNumber.substring(0, 1)

  if (phoneCode === '1') {
    return {
      item: phoneMap.next['1'],
      phone: '+1'
    }
  }

  return {}
}

const phoneInfo = getPhoneInfo('15551234567')
// { item: GeoPhoneMap, phone: '+1' }
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"localization-system",children:"Localization System"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { GeoItemFull, GeoDate, GeoHours } from '@dxtmisha/functional'

class LocalizationSystem {
  constructor(private geoData: GeoItemFull) {}

  formatDate(date: Date, format: GeoDate): string {
    const locale = this.geoData.standard
    const options = this.getDateOptions(format)
    return new Intl.DateTimeFormat(locale, options).format(date)
  }

  formatTime(date: Date): string {
    const is12Hour = this.geoData.standard.startsWith('en-US') ||
                     this.geoData.standard.startsWith('en-CA')
    const hoursFormat: GeoHours = is12Hour ? '12' : '24'

    return new Intl.DateTimeFormat(this.geoData.standard, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: hoursFormat === '12'
    }).format(date)
  }

  getWeekStart(): number {
    return parseInt(this.geoData.firstDay)
  }
}
`})}),`
`,n.jsx(e.h3,{id:"country-selector-with-flags",children:"Country Selector with Flags"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { GeoFlagNational } from '@dxtmisha/functional'

interface CountrySelectProps {
  countries: GeoFlagNational[]
  selected?: string
  onSelect: (country: GeoFlagNational) => void
}

function CountrySelect({ countries, selected, onSelect }: CountrySelectProps) {
  return countries.map(country => ({
    id: country.value,
    label: country.country,
    description: country.description,
    nationalName: country.nationalCountry,
    icon: country.icon,
    selected: selected === country.value,
    onClick: () => onSelect(country)
  }))
}
`})}),`
`,n.jsx(e.h3,{id:"phone-number-validator",children:"Phone Number Validator"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { GeoPhoneValue, GeoPhoneMap } from '@dxtmisha/functional'

class PhoneValidator {
  constructor(private phoneMap: GeoPhoneMap) {}

  validate(phoneNumber: string): boolean {
    const cleanNumber = phoneNumber.replace(/\\D/g, '')

    for (const phoneData of this.phoneMap.items) {
      if (cleanNumber.startsWith(phoneData.phone.toString())) {
        return this.validateWithMask(cleanNumber, phoneData.mask)
      }
    }

    return false
  }

  private validateWithMask(number: string, masks: string[]): boolean {
    return masks.some(mask => {
      const expectedLength = mask.replace(/\\D/g, '').length
      return number.length === expectedLength
    })
  }

  format(phoneNumber: string): string {
    const cleanNumber = phoneNumber.replace(/\\D/g, '')
    const phoneData = this.findPhoneData(cleanNumber)

    if (phoneData && phoneData.mask.length > 0) {
      return this.applyMask(cleanNumber, phoneData.mask[0])
    }

    return phoneNumber
  }
}
`})}),`
`,n.jsx(e.p,{children:"These geographic types provide complete type safety for working with international standards, localization, and regional settings in applications."})]})}function u(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{u as default};
