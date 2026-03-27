import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/GeoFlag - Флаги Стран`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geoflag`,children:`Класс GeoFlag`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для работы с флагами стран. Предоставляет удобный интерфейс для получения иконок флагов, отображаемых имен стран и языков на основе кода страны или локали. Использует `,(0,c.jsx)(n.code,{children:`Geo`}),` и `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` для разрешения локализованных наименований.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Словарь флагов`}),` — встроенный статический словарь `,(0,c.jsx)(n.code,{children:`flags`}),`, связывающий коды стран (ISO 3166-1 alpha-2) с именами иконок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Локализованные имена`}),` — возвращает название страны и языка в соответствии с текущей локалью интерфейса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Национальные имена`}),` — отдельный метод `,(0,c.jsx)(n.code,{children:`getNational`}),` возвращает названия стран на их собственном языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкая фильтрация`}),` — методы списков поддерживают фильтрацию по массиву кодов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`GeoFlag`}),` с опциональным кодом страны или локали.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — код страны или локали (например, `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'ru-RU'`}),`). По умолчанию используется текущая локаль из `,(0,c.jsx)(n.code,{children:`Geo`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Создание с текущей локалью
const flag = new GeoFlag()

// Создание для конкретной страны
const ruFlag = new GeoFlag('ru-RU')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): GeoFlagItem | undefined`}),` — Возвращает полный объект данных о стране: языке, коде страны, стандарте, иконке флага. Если код не указан, используется код из конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): string | undefined`}),` — Возвращает только имя иконки флага для указанной страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): GeoFlagItem[]`}),` — Возвращает массив объектов с данными о флагах. Если `,(0,c.jsx)(n.code,{children:`codes`}),` не передан, возвращает все страны из словаря.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): GeoFlagNational[]`}),` — Аналог `,(0,c.jsx)(n.code,{children:`getList`}),`, но дополнительно содержит названия на национальном языке страны.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`изменение-данных`,children:`Изменение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Изменяет код страны для текущего экземпляра.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`отображение-флага-для-текущей-страны`,children:`Отображение флага для текущей страны`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const flag = new GeoFlag()
const item = flag.get()

console.log(item?.icon)    // 'f-ru'
console.log(item?.country) // 'Россия'
`})}),`
`,(0,c.jsx)(n.h3,{id:`список-всех-стран-с-флагами`,children:`Список всех стран с флагами`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const flag = new GeoFlag('ru-RU')
const countries = flag.getList()

countries.forEach(item => {
  console.log(\`\${item.icon}: \${item.country}\`)
})
// 'f-us: США', 'f-fr: Франция', ...
`})}),`
`,(0,c.jsx)(n.h3,{id:`список-с-национальными-наименованиями`,children:`Список с национальными наименованиями`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Вернет название страны как на вашем языке, так и на языке самой страны
const national = new GeoFlag('ru-RU').getNational(['US', 'FR', 'JP'])

national.forEach(item => {
  console.log(\`\${item.country} (\${item.nationalCountry})\`)
})
// США (United States), Франция (France), Япония (日本)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};