import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function c(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Classes/Geo"}),`
`,n.jsx(e.h1,{id:"класс-geo",children:"Класс Geo"}),`
`,n.jsx(e.p,{children:"Статический класс для работы с географическими данными. Предоставляет методы для определения текущего местоположения, работы с кодами стран и языков, и управления часовыми поясами с автоматическим определением через браузер и кешированием в localStorage."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое определение местоположения"})," — определяет текущую страну и язык на основе данных браузера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка кодов стран и языков"})," — поддерживает формат ",n.jsx(e.code,{children:"язык-страна"})," (например, ",n.jsx(e.code,{children:"ru-RU"}),", ",n.jsx(e.code,{children:"en-US"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление часовыми поясами"})," — получение и установка часовых поясов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кеширование в localStorage"})," — сохраняет выбранное пользователем местоположение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка альтернативных кодов"})," — работает с различными вариантами кодов стран и языков"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Полная база данных стран"})," — доступ к полному списку стран с их данными"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкий парсинг кодов"})," — обрабатывает полные коды, коды стран или языков отдельно"]}),`
`]}),`
`,n.jsx(e.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Возвращает полную информацию о текущей стране."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — объект с полными географическими данными"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional'

const currentGeo = Geo.get()
console.log(currentGeo)
// {
//   country: 'RU',
//   language: 'ru',
//   standard: 'ru-RU',
//   firstDay: 'Mo',
//   countryAlternative: ['Россия', 'Russia'],
//   languageAlternative: ['русский', 'russian']
// }
`})}),`
`,n.jsx(e.h3,{id:"getcountry",children:n.jsx(e.code,{children:"getCountry"})}),`
`,n.jsx(e.p,{children:"Возвращает код текущей страны."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — ISO код страны (например, 'RU', 'US', 'GB')"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const country = Geo.getCountry()
console.log(country) // 'RU'
`})}),`
`,n.jsx(e.h3,{id:"getlanguage",children:n.jsx(e.code,{children:"getLanguage"})}),`
`,n.jsx(e.p,{children:"Возвращает код текущего языка."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — ISO код языка (например, 'ru', 'en', 'fr')"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const language = Geo.getLanguage()
console.log(language) // 'ru'
`})}),`
`,n.jsx(e.h3,{id:"getstandard",children:n.jsx(e.code,{children:"getStandard"})}),`
`,n.jsx(e.p,{children:"Возвращает полный формат согласно стандарту (язык-страна)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — стандартный формат локали"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const standard = Geo.getStandard()
console.log(standard) // 'ru-RU'
`})}),`
`,n.jsx(e.h3,{id:"getfirstday",children:n.jsx(e.code,{children:"getFirstDay"})}),`
`,n.jsx(e.p,{children:"Возвращает первый день недели для текущего местоположения."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — код первого дня ('Su' для воскресенья, 'Mo' для понедельника)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const firstDay = Geo.getFirstDay()
console.log(firstDay) // 'Mo' (Россия/Европа) или 'Su' (США)
`})}),`
`,n.jsx(e.h3,{id:"getlocation",children:n.jsx(e.code,{children:"getLocation"})}),`
`,n.jsx(e.p,{children:"Возвращает полный формат текущего местоположения."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — текущее местоположение в формате язык-страна"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const location = Geo.getLocation()
console.log(location) // 'ru-RU'
`})}),`
`,n.jsx(e.h3,{id:"getitem",children:n.jsx(e.code,{children:"getItem"})}),`
`,n.jsx(e.p,{children:"Возвращает обработанные данные с включённым текущим языком."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — географические данные с актуальным языком"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const item = Geo.getItem()
console.log(item)
// Включает все данные плюс актуальный язык из браузера/настроек
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Возвращает полный список доступных стран."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItem[]"})," — массив всех поддерживаемых стран"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const allCountries = Geo.getList()
console.log(allCountries.length) // 200+ стран
console.log(allCountries[0])
// { country: 'AD', language: 'ca', standard: 'ca-AD', firstDay: 'Mo', ... }
`})}),`
`,n.jsx(e.h2,{id:"методы-поиска-данных",children:"Методы поиска данных"}),`
`,n.jsx(e.h3,{id:"getbycode",children:n.jsx(e.code,{children:"getByCode"})}),`
`,n.jsx(e.p,{children:"Возвращает данные страны по её коду (полному, стране или языку)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны в различных форматах (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — географические данные для указанного кода"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Полный код
const dataFull = Geo.getByCode('ru-RU')
console.log(dataFull.country) // 'RU'

// Только код страны
const dataCountry = Geo.getByCode('GB')
console.log(dataCountry.language) // 'en'

// Только код языка
const dataLanguage = Geo.getByCode('fr')
console.log(dataLanguage.country) // 'FR'

// Запасной вариант при неверном коде
const dataDefault = Geo.getByCode('invalid')
console.log(dataDefault) // Первая страна из списка
`})}),`
`,n.jsx(e.h3,{id:"getbycodefull",children:n.jsx(e.code,{children:"getByCodeFull"})}),`
`,n.jsx(e.p,{children:"Возвращает данные страны по полному коду язык-страна."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — строка в формате язык-страна"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItem | undefined"})," — данные страны или undefined если не найдено"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const data = Geo.getByCodeFull('ru-RU')
if (data) {
  console.log(data.country) // 'RU'
  console.log(data.language) // 'ru'
}

// Также поддерживает обратный формат
const dataReverse = Geo.getByCodeFull('GB-en')
console.log(dataReverse?.country) // 'GB'
`})}),`
`,n.jsx(e.h3,{id:"getbycountry",children:n.jsx(e.code,{children:"getByCountry"})}),`
`,n.jsx(e.p,{children:"Возвращает данные страны по коду страны."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — ISO код страны"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItem | undefined"})," — данные страны или undefined если не найдено"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const data = Geo.getByCountry('DE')
if (data) {
  console.log(data.language) // 'de'
  console.log(data.standard) // 'de-DE'
}
`})}),`
`,n.jsx(e.h3,{id:"getbylanguage",children:n.jsx(e.code,{children:"getByLanguage"})}),`
`,n.jsx(e.p,{children:"Возвращает данные страны по коду языка."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — ISO код языка"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItem | undefined"})," — данные страны или undefined если не найдено"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const data = Geo.getByLanguage('es')
if (data) {
  console.log(data.country) // 'ES'
  console.log(data.standard) // 'es-ES'
}
`})}),`
`,n.jsx(e.h2,{id:"методы-конфигурации",children:"Методы конфигурации"}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Устанавливает новое местоположение и сохраняет его в localStorage."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код местоположения в различных форматах (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Geo"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установка полным кодом
Geo.set('fr-FR')

// Установка кодом страны
Geo.set('IT')

// Установка кодом языка
Geo.set('ja')

// Цепочка вызовов
Geo.set('de-DE').setTimezone(-60)
`})}),`
`,n.jsx(e.h3,{id:"settimezone",children:n.jsx(e.code,{children:"setTimezone"})}),`
`,n.jsx(e.p,{children:"Устанавливает смещение часового пояса."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"timezone: number"})," — смещение часового пояса в минутах"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Geo"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установка UTC+3 (московское время)
Geo.setTimezone(-180)

// Установка UTC-5 (нью-йоркское время)
Geo.setTimezone(300)

// Цепочка вызовов
Geo.setTimezone(-60).set('de-DE')
`})}),`
`,n.jsx(e.h2,{id:"утилитарные-методы",children:"Утилитарные методы"}),`
`,n.jsx(e.h3,{id:"tocountry",children:n.jsx(e.code,{children:"toCountry"})}),`
`,n.jsx(e.p,{children:"Преобразует код страны в формат верхнего регистра."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — код страны в любом регистре"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — код страны в верхнем регистре"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const country = Geo.toCountry('ru')
console.log(country) // 'RU'
`})}),`
`,n.jsx(e.h3,{id:"tolanguage",children:n.jsx(e.code,{children:"toLanguage"})}),`
`,n.jsx(e.p,{children:"Преобразует код языка в формат нижнего регистра."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — код языка в любом регистре"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — код языка в нижнем регистре"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const language = Geo.toLanguage('EN')
console.log(language) // 'en'
`})}),`
`,n.jsx(e.h3,{id:"tofull",children:n.jsx(e.code,{children:"toFull"})}),`
`,n.jsx(e.p,{children:"Преобразует базовый географический элемент в полный формат с дополнительными данными."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: GeoItem"})," — базовый географический элемент"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoItemFull"})," — расширенные географические данные"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const basicItem = { country: 'RU', language: 'ru', standard: 'ru-RU', firstDay: 'Mo' }
const fullItem = Geo.toFull(basicItem)
console.log(fullItem.countryAlternative) // ['Россия', 'Russia', ...]
`})}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"базовое-использование",children:"Базовое использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional'

// Получить информацию о текущем местоположении
console.log('Текущая страна:', Geo.getCountry())
console.log('Текущий язык:', Geo.getLanguage())
console.log('Полное местоположение:', Geo.getLocation())
console.log('Первый день недели:', Geo.getFirstDay())
`})}),`
`,n.jsx(e.h3,{id:"установка-пользовательского-местоположения",children:"Установка пользовательского местоположения"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установить местоположение на Германию
Geo.set('de-DE')

console.log('Новая страна:', Geo.getCountry()) // 'DE'
console.log('Новый язык:', Geo.getLanguage()) // 'de'
console.log('Первый день:', Geo.getFirstDay()) // 'Mo'
`})}),`
`,n.jsx(e.h3,{id:"работа-с-данными-стран",children:"Работа с данными стран"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Найти страну по разным кодам
const russiaByFull = Geo.getByCode('ru-RU')
const russiaByCountry = Geo.getByCode('RU')
const russiaByLanguage = Geo.getByCode('ru')

console.log('Все возвращают Россию:', russiaByFull.country) // 'RU'
`})}),`
`,n.jsx(e.h3,{id:"создание-селектора-стран",children:"Создание селектора стран"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получить все страны для выпадающего списка
const countries = Geo.getList()

const countryOptions = countries.map(country => ({
  value: country.standard,
  label: \`\${country.language}-\${country.country}\`,
  country: country.country,
  language: country.language
}))

console.log('Всего стран:', countryOptions.length)
`})})]})}function j(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{j as default};
