import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-C8vOrmRQ.js";import{M as c}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Classes/GeoFlag"}),`
`,n.jsx(e.h1,{id:"класс-geoflag",children:"Класс GeoFlag"}),`
`,n.jsx(e.p,{children:"Класс для работы с флагами стран, предоставляющий методы для получения информации о флагах, странах и языках на основе географических кодов. Интегрируется с системой геолокации и поддерживает локализованные названия стран и языков."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Полная база флагов"})," — содержит флаги для всех стран мира (200+ стран)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Локализованные названия"})," — получение названий стран и языков на текущем языке"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Национальные названия"})," — получение названий на языке самой страны"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкие списки"})," — создание списков флагов по определённым критериям"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с Geo"})," — использует географическую систему для получения данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с типизированными интерфейсами"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Иконочная система"})," — предоставляет имена иконок для флагов"]}),`
`]}),`
`,n.jsx(e.h2,{id:"константы",children:"Константы"}),`
`,n.jsx(e.h3,{id:"geo_flag_icon_name",children:n.jsx(e.code,{children:"GEO_FLAG_ICON_NAME"})}),`
`,n.jsx(e.p,{children:"Базовое имя для иконок флагов."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GEO_FLAG_ICON_NAME } from '@dxtmisha/functional'

console.log(GEO_FLAG_ICON_NAME) // '@flag'
`})}),`
`,n.jsx(e.h2,{id:"статические-свойства",children:"Статические свойства"}),`
`,n.jsx(e.h3,{id:"flags",children:n.jsx(e.code,{children:"flags"})}),`
`,n.jsx(e.p,{children:"Статический объект, содержащий соответствие кодов стран именам иконок флагов."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional'

console.log(GeoFlag.flags.RU) // '@flag-ru'
console.log(GeoFlag.flags.US) // '@flag-us'
console.log(GeoFlag.flags.DE) // '@flag-de'

// Получение всех доступных кодов стран
const countryCodes = Object.keys(GeoFlag.flags)
console.log(countryCodes.length) // 200+ стран
`})}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт экземпляр GeoFlag с указанным кодом локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны и языка (по умолчанию из Geo.getLocation())"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional'

// Создание с текущей локалью
const geoFlag = new GeoFlag()

// Создание с определённой локалью
const ruFlag = new GeoFlag('ru-RU')
const usFlag = new GeoFlag('en-US')
const deFlag = new GeoFlag('de-DE')
`})}),`
`,n.jsx(e.h2,{id:"методы-экземпляра",children:"Методы экземпляра"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Возвращает информацию о стране и её флаге."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны (опционально, по умолчанию используется код экземпляра)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoFlagItem | undefined"})," — объект с информацией о флаге или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('ru-RU')

// Получение информации о России
const russiaInfo = geoFlag.get('RU')
console.log(russiaInfo)
// {
//   language: 'русский',
//   country: 'Россия',
//   standard: 'ru-RU',
//   icon: '@flag-ru',
//   label: 'Россия',
//   value: 'RU'
// }

// Получение информации о США на русском языке
const usaInfo = geoFlag.get('US')
console.log(usaInfo)
// {
//   language: 'английский',
//   country: 'Соединённые Штаты',
//   standard: 'en-US',
//   icon: '@flag-us',
//   label: 'Соединённые Штаты',
//   value: 'US'
// }

// Получение информации о текущей локали
const currentInfo = geoFlag.get()
console.log(currentInfo?.country) // Название страны на текущем языке
`})}),`
`,n.jsx(e.h3,{id:"getflag",children:n.jsx(e.code,{children:"getFlag"})}),`
`,n.jsx(e.p,{children:"Получение ссылки на иконку флага."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string | undefined"})," — имя иконки флага или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag()

// Получение иконки флага России
const russiaFlag = geoFlag.getFlag('RU')
console.log(russiaFlag) // '@flag-ru'

// Получение иконки флага Германии
const germanyFlag = geoFlag.getFlag('DE')
console.log(germanyFlag) // '@flag-de'

// Получение флага для несуществующей страны
const unknownFlag = geoFlag.getFlag('XX')
console.log(unknownFlag) // undefined
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Получение списка стран по массиву кодов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — массив кодов стран (опционально, по умолчанию все страны)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoFlagItem[]"})," — массив объектов с информацией о флагах"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('ru-RU')

// Получение списка европейских стран
const europeanCountries = geoFlag.getList(['RU', 'DE', 'FR', 'IT', 'ES'])
console.log(europeanCountries)
// [
//   { language: 'русский', country: 'Россия', icon: '@flag-ru', ... },
//   { language: 'немецкий', country: 'Германия', icon: '@flag-de', ... },
//   { language: 'французский', country: 'Франция', icon: '@flag-fr', ... },
//   ...
// ]

// Получение всех доступных стран
const allCountries = geoFlag.getList()
console.log(allCountries.length) // 200+ стран

// Получение стран СНГ
const cisCountries = geoFlag.getList(['RU', 'BY', 'KZ', 'UA', 'UZ', 'KG', 'TJ', 'AM', 'AZ', 'GE', 'MD'])
`})}),`
`,n.jsx(e.h3,{id:"getnational",children:n.jsx(e.code,{children:"getNational"})}),`
`,n.jsx(e.p,{children:"Получение списка стран с названиями на национальных языках."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — массив кодов стран (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoFlagNational[]"})," — массив объектов с национальными названиями"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('en-US')

// Получение списка с национальными названиями
const nationalNames = geoFlag.getNational(['RU', 'DE', 'FR', 'JP'])
console.log(nationalNames)
// [
//   {
//     language: 'Russian',           // на английском (текущий язык)
//     country: 'Russia',             // на английском (текущий язык)
//     standard: 'ru-RU',
//     icon: '@flag-ru',
//     nationalLanguage: 'русский',   // на русском (национальный язык)
//     nationalCountry: 'Россия',     // на русском (национальный язык)
//     description: 'Россия'          // национальное название
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
`,n.jsx(e.p,{children:"Изменение локали экземпляра."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — новый код страны и языка"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlag('en-US')

// Получение информации на английском
let info = geoFlag.get('RU')
console.log(info?.country) // 'Russia'

// Смена локали на русскую
geoFlag.setCode('ru-RU')

// Получение той же информации на русском
info = geoFlag.get('RU')
console.log(info?.country) // 'Россия'
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"компонент-выбора-страны",children:"Компонент выбора страны"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class CountrySelector {
  constructor(targetElement, options = {}) {
    this.geoFlag = new GeoFlag(options.locale || 'ru-RU')
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

// Использование
new CountrySelector(document.getElementById('selector'), {
  locale: 'ru-RU',
  onSelect: (country) => console.log('Выбрана:', country.country)
})
`})}),`
`,n.jsx(e.h3,{id:"многоязычная-информация",children:"Многоязычная информация"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const guide = {
  getCountryInfo(code) {
    const locales = ['ru-RU', 'en-US', 'de-DE']
    return locales.reduce((acc, locale) => {
      acc[locale] = new GeoFlag(locale).get(code)
      return acc
    }, {})
  }
}

// Использование
const info = guide.getCountryInfo('DE')
console.log(info['ru-RU'].country) // 'Германия'
console.log(info['en-US'].country) // 'Germany'
`})}),`
`,n.jsx(e.h3,{id:"статистика-по-странам",children:"Статистика по странам"}),`
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

console.log(stats.getLanguageStats()) // Топ-10 языков
`})}),`
`,n.jsx(e.p,{children:"Класс GeoFlag предоставляет мощный инструмент для работы с флагами и информацией о странах, поддерживая локализацию, типобезопасность и гибкие возможности для создания международных приложений."})]})}function h(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{h as default};
