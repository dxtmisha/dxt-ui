import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Types/geoTypes"}),`
`,n.jsx(e.h1,{id:"географические-типы-geotypes",children:"Географические типы (geoTypes)"}),`
`,n.jsx(e.p,{children:"Набор специализированных TypeScript типов для работы с географическими данными, локализацией, форматированием дат и телефонными номерами. Обеспечивает типобезопасность при работе с международными стандартами и региональными настройками."}),`
`,n.jsx(e.h2,{id:"типы-форматирования-даты",children:"Типы форматирования даты"}),`
`,n.jsx(e.h3,{id:"geodate",children:n.jsx(e.code,{children:"GeoDate"})}),`
`,n.jsx(e.p,{children:"Объединенный тип для опций формата даты в географическом контексте."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second'

// Использование
function formatDate(date: Date, format: GeoDate): string {
  const intl = new Intl.DateTimeFormat('ru-RU', getDateFormatOptions(format))
  return intl.format(date)
}

const formats: GeoDate[] = [
  'full',        // Полная дата и время
  'datetime',    // Дата с временем
  'date',        // Только дата
  'year-month',  // Год и месяц
  'time',        // Только время
  'hour-minute'  // Часы и минуты
]
`})}),`
`,n.jsx(e.h3,{id:"geofirstday",children:n.jsx(e.code,{children:"GeoFirstDay"})}),`
`,n.jsx(e.p,{children:"Код первого дня недели (0=воскресенье, 1=понедельник, 6=суббота)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoFirstDay = 1 | 6 | 0

// Использование
function getWeekStart(locale: string): GeoFirstDay {
  // Россия, Европа - понедельник
  if (locale.startsWith('ru') || locale.startsWith('de')) return 1
  // США, Канада - воскресенье
  if (locale.startsWith('en-US') || locale.startsWith('en-CA')) return 0
  // Ближний Восток - суббота
  if (locale.startsWith('ar')) return 6
  return 1 // По умолчанию понедельник
}

const firstDay: GeoFirstDay = getWeekStart('ru-RU') // 1
`})}),`
`,n.jsx(e.h3,{id:"geohours",children:n.jsx(e.code,{children:"GeoHours"})}),`
`,n.jsx(e.p,{children:"Тип формата часов (12-часовой или 24-часовой)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoHours = '12' | '24'

// Использование
function formatTime(date: Date, hoursFormat: GeoHours): string {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: hoursFormat === '12'
  }
  return new Intl.DateTimeFormat('ru-RU', options).format(date)
}

const time12 = formatTime(new Date(), '12') // "2:30 PM"
const time24 = formatTime(new Date(), '24') // "14:30"
`})}),`
`,n.jsx(e.h3,{id:"geotimezonestyle",children:n.jsx(e.code,{children:"GeoTimeZoneStyle"})}),`
`,n.jsx(e.p,{children:"Опции стиля отображения часового пояса."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC'

// Использование
function formatTimeZone(date: Date, style: GeoTimeZoneStyle): string {
  switch (style) {
    case 'minute': return '+0300'
    case 'hour': return '+03'
    case 'ISO8601': return '+03:00'
    case 'RFC': return '+0300 (MSK)'
    default: return '+03:00'
  }
}
`})}),`
`,n.jsx(e.h2,{id:"интерфейсы-географических-данных",children:"Интерфейсы географических данных"}),`
`,n.jsx(e.h3,{id:"geoitem",children:n.jsx(e.code,{children:"GeoItem"})}),`
`,n.jsx(e.p,{children:"Интерфейс географического элемента для данных страны и языка."}),`
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

// Использование
const russiaItem: GeoItem = {
  country: 'RU',
  countryAlternative: ['RUS'],
  language: 'ru',
  languageAlternative: ['rus'],
  firstDay: '1',
  zone: 'Europe/Moscow',
  phoneCode: '+7',
  phoneWithin: '8',
  phoneMask: '+7 (###) ###-##-##',
  nameFormat: 'fl' // имя фамилия
}

const usaItem: GeoItem = {
  country: 'US',
  language: 'en',
  firstDay: '0',
  zone: 'America/New_York',
  phoneCode: '+1',
  phoneMask: '+1 (###) ###-####',
  nameFormat: 'fl'
}
`})}),`
`,n.jsx(e.h3,{id:"geoitemfull",children:n.jsx(e.code,{children:"GeoItemFull"})}),`
`,n.jsx(e.p,{children:"Расширенный географический элемент с обязательными полями."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  standard: string
  firstDay: string
}

// Использование
const fullGeoData: GeoItemFull = {
  country: 'RU',
  language: 'ru',
  standard: 'ru-RU',
  firstDay: '1', // обязательное поле
  zone: 'Europe/Moscow',
  phoneCode: '+7',
  phoneMask: '+7 (###) ###-##-##'
}

function processGeoData(data: GeoItemFull) {
  console.log(\`Locale: \${data.standard}\`)
  console.log(\`First day: \${data.firstDay}\`)
  console.log(\`Phone: \${data.phoneCode}\`)
}
`})}),`
`,n.jsx(e.h2,{id:"интерфейсы-флагов-стран",children:"Интерфейсы флагов стран"}),`
`,n.jsx(e.h3,{id:"geoflagitem",children:n.jsx(e.code,{children:"GeoFlagItem"})}),`
`,n.jsx(e.p,{children:"Элемент географического флага для отображения флага страны."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoFlagItem {
  language: string
  country: string
  standard: string
  icon?: string
  label: string
  value: string
}

// Использование
const countryFlags: GeoFlagItem[] = [
  {
    language: 'русский',
    country: 'Россия',
    standard: 'ru-RU',
    icon: '@flag-ru',
    label: 'Россия',
    value: 'RU'
  },
  {
    language: 'English',
    country: 'United States',
    standard: 'en-US',
    icon: '@flag-us',
    label: 'United States',
    value: 'US'
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
`,n.jsx(e.p,{children:"Расширенный элемент географического флага с информацией о национальном языке."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoFlagNational extends GeoFlagItem {
  description: string
  nationalLanguage: string
  nationalCountry: string
}

// Использование
const nationalFlags: GeoFlagNational[] = [
  {
    language: 'русский',
    country: 'Россия',
    standard: 'ru-RU',
    icon: '@flag-ru',
    label: 'Россия',
    value: 'RU',
    description: 'Российская Федерация',
    nationalLanguage: 'русский',
    nationalCountry: 'Россия'
  },
  {
    language: 'English',
    country: 'США',
    standard: 'en-US',
    icon: '@flag-us',
    label: 'США',
    value: 'US',
    description: 'United States of America',
    nationalLanguage: 'English',
    nationalCountry: 'United States'
  }
]
`})}),`
`,n.jsx(e.h2,{id:"интерфейсы-телефонных-номеров",children:"Интерфейсы телефонных номеров"}),`
`,n.jsx(e.h3,{id:"geophonevalue",children:n.jsx(e.code,{children:"GeoPhoneValue"})}),`
`,n.jsx(e.p,{children:"Значение телефонного номера с кодами и маской."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoPhoneValue {
  phone: number
  within: number
  mask: string[]
  value: string
}

// Использование
const russiaPhone: GeoPhoneValue = {
  phone: 7,     // международный код
  within: 8,    // код для внутренних звонков
  mask: ['+7 (###) ###-##-##', '8 (###) ###-##-##'],
  value: 'RU'
}

const usaPhone: GeoPhoneValue = {
  phone: 1,
  within: 1,
  mask: ['+1 (###) ###-####'],
  value: 'US'
}
`})}),`
`,n.jsx(e.h3,{id:"geophonemap",children:n.jsx(e.code,{children:"GeoPhoneMap"})}),`
`,n.jsx(e.p,{children:"Карта телефонных номеров с вложенными элементами."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoPhoneMap {
  items: GeoPhoneValue[]
  info: GeoPhoneValue | undefined
  value: string | undefined
  mask: string[]
  maskFull: string[]
  next: Record<string, GeoPhoneMap>
}

// Использование
const phoneMap: GeoPhoneMap = {
  items: [russiaPhone, usaPhone],
  info: russiaPhone,
  value: 'RU',
  mask: ['+7 (###) ###-##-##'],
  maskFull: ['+7 (###) ###-##-##', '8 (###) ###-##-##'],
  next: {
    '7': {
      items: [russiaPhone],
      info: russiaPhone,
      value: 'RU',
      mask: ['(###) ###-##-##'],
      maskFull: ['+7 (###) ###-##-##'],
      next: {}
    }
  }
}
`})}),`
`,n.jsx(e.h3,{id:"geophonemapinfo",children:n.jsx(e.code,{children:"GeoPhoneMapInfo"})}),`
`,n.jsx(e.p,{children:"Информация о карте телефонных номеров."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface GeoPhoneMapInfo {
  item?: GeoPhoneMap
  phone?: string
}

// Использование
function getPhoneInfo(phoneNumber: string): GeoPhoneMapInfo {
  const phoneCode = phoneNumber.substring(0, 1)

  if (phoneCode === '7') {
    return {
      item: phoneMap.next['7'],
      phone: '+7'
    }
  }

  return {}
}

const phoneInfo = getPhoneInfo('79991234567')
// { item: GeoPhoneMap, phone: '+7' }
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"система-локализации",children:"Система локализации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { GeoItemFull, GeoDate, GeoHours } from '@dxtmisha/functional'

class LocalizationSystem {
  constructor(private geoData: GeoItemFull) {}

  formatDate(date: Date, format: GeoDate): string {
    const locale = this.geoData.standard
    const options = this.getDateOptions(format)
    return new Intl.DateTimeFormat(locale, options).format(date)
  }

  formatTime(date: Date): string {
    const is24Hour = this.geoData.standard.startsWith('ru') ||
                     this.geoData.standard.startsWith('de')
    const hoursFormat: GeoHours = is24Hour ? '24' : '12'

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
`,n.jsx(e.h3,{id:"селектор-стран-с-флагами",children:"Селектор стран с флагами"}),`
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
`,n.jsx(e.h3,{id:"валидатор-телефонных-номеров",children:"Валидатор телефонных номеров"}),`
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
`,n.jsx(e.p,{children:"Эти географические типы обеспечивают полную типизацию для работы с международными стандартами, локализацией и региональными настройками в приложениях."})]})}function d(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{d as default};
