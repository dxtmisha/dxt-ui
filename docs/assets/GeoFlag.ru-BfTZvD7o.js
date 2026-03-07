import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as l}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional-basic/Classes/GeoFlag - Флаги Стран"}),`
`,n.jsx(e.h1,{id:"класс-geoflag",children:"Класс GeoFlag"}),`
`,n.jsxs(e.p,{children:["Класс для работы с флагами стран. Предоставляет удобный интерфейс для получения иконок флагов, отображаемых имен стран и языков на основе кода страны или локали. Использует ",n.jsx(e.code,{children:"Geo"})," и ",n.jsx(e.code,{children:"GeoIntl"})," для разрешения локализованных наименований."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Словарь флагов"})," — встроенный статический словарь ",n.jsx(e.code,{children:"flags"}),", связывающий коды стран (ISO 3166-1 alpha-2) с именами иконок."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Локализованные имена"})," — возвращает название страны и языка в соответствии с текущей локалью интерфейса."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Национальные имена"})," — отдельный метод ",n.jsx(e.code,{children:"getNational"})," возвращает названия стран на их собственном языке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкая фильтрация"})," — методы списков поддерживают фильтрацию по массиву кодов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Создает новый экземпляр ",n.jsx(e.code,{children:"GeoFlag"})," с опциональным кодом страны или локали."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны или локали (например, ",n.jsx(e.code,{children:"'RU'"}),", ",n.jsx(e.code,{children:"'ru-RU'"}),"). По умолчанию используется текущая локаль из ",n.jsx(e.code,{children:"Geo"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Создание с текущей локалью
const flag = new GeoFlag()

// Создание для конкретной страны
const ruFlag = new GeoFlag('ru-RU')
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(code?: string): GeoFlagItem | undefined"})," — Возвращает полный объект данных о стране: языке, коде страны, стандарте, иконке флага. Если код не указан, используется код из конструктора."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFlag(code?: string): string | undefined"})," — Возвращает только имя иконки флага для указанной страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getList(codes?: string[]): GeoFlagItem[]"})," — Возвращает массив объектов с данными о флагах. Если ",n.jsx(e.code,{children:"codes"})," не передан, возвращает все страны из словаря."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getNational(codes?: string[]): GeoFlagNational[]"})," — Аналог ",n.jsx(e.code,{children:"getList"}),", но дополнительно содержит названия на национальном языке страны."]}),`
`]}),`
`,n.jsx(e.h3,{id:"изменение-данных",children:"Изменение данных"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setCode(code: string): this"})," — Изменяет код страны для текущего экземпляра."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"отображение-флага-для-текущей-страны",children:"Отображение флага для текущей страны"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const flag = new GeoFlag()
const item = flag.get()

console.log(item?.icon)    // 'f-ru'
console.log(item?.country) // 'Россия'
`})}),`
`,n.jsx(e.h3,{id:"список-всех-стран-с-флагами",children:"Список всех стран с флагами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const flag = new GeoFlag('ru-RU')
const countries = flag.getList()

countries.forEach(item => {
  console.log(\`\${item.icon}: \${item.country}\`)
})
// 'f-us: США', 'f-fr: Франция', ...
`})}),`
`,n.jsx(e.h3,{id:"список-с-национальными-наименованиями",children:"Список с национальными наименованиями"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Вернет название страны как на вашем языке, так и на языке самой страны
const national = new GeoFlag('ru-RU').getNational(['US', 'FR', 'JP'])

national.forEach(item => {
  console.log(\`\${item.country} (\${item.nationalCountry})\`)
})
// США (United States), Франция (France), Япония (日本)
`})})]})}function x(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
